/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, ReactNode } from 'react'
import { UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

import { WalletContext } from './context';

import {
  NETWORK_CONNECTIONS,
  SUPPORTED_CHAINS,
  NETWORK_NAMES,
  ChainId
} from '../../constant'
import { useActiveWeb3React, useEthers } from '../../hooks'

// connectors
const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAINS
})

const walletConnectConnector = () => {
  return new WalletConnectConnector({
    rpc: { [ChainId.Mainnet]: NETWORK_CONNECTIONS[ChainId.Mainnet] },
    supportedChainIds: [ChainId.Mainnet],
    qrcode: true
  })
}

interface Props {
  children: ReactNode
}

export function WalletProvider({ children }: Props): React.ReactElement {

  const {
    activate,
    active,
    chainId,
    deactivate,
    library,
    connector,
    error
  } = useEthers()

  const [unsupportedChain, setUnsupportedChain] = useState(false)
  const [completedInitialLoad, setCompletedInitialLoad] = useState(false)

  const networkName = (chainId && NETWORK_NAMES[chainId]) ?
    NETWORK_NAMES[chainId] : 'unsupported'

  const activeConnector = (() => {
    if (connector instanceof WalletConnectConnector) return 'WALLETCONNECT'
    if (library?.connection?.url === 'metamask') return 'METAMASK'
    if (library?.connection?.url === 'trustwallet') return 'TRUSTWALLET'
    return ''
  })()

  // initial load
  useEffect(() => {
    // load wc if an instance is stored
    const storedWalletConnect = localStorage.getItem('walletconnect')
    if (storedWalletConnect) {
      // determine which chain to initialize with
      const connectToChainId = JSON.parse(storedWalletConnect).chainId

      if (
        (connectToChainId !== ChainId.Mainnet && connectToChainId !== ChainId.Goerli)
      ) {
        // if terms not agreed or chain not supported, do not connect wallet
        return setCompletedInitialLoad(true)
      }

      const wc = walletConnectConnector()
      activate(wc, undefined, true).catch(() => setCompletedInitialLoad(true))
    } else {
      // else attempt to activate metamask
      injected.isAuthorized().then((isAuthorized: boolean) => {
        isAuthorized ?
          activate(injected, undefined, true).catch(() => setCompletedInitialLoad(true)) :
          setCompletedInitialLoad(true)
      })
    }
  }, [])

  // initial connection success,
  // wait for confirmation of active status
  useEffect(() => {
    if (!completedInitialLoad && active) setCompletedInitialLoad(true)
    if (!active && completedInitialLoad) handleDefaultConnect()
  }, [completedInitialLoad, active])

  // watch for unsupported chain connection
  useEffect(() => {
    // workaround - web3-react & walletconnect chain switching
    // wc can only be configured with one chain upon initialization
    // if on an unsupported chain we need to replace the connector
    // with a fresh instance configured with the new chainId
    if (
      !unsupportedChain &&
      error instanceof UnsupportedChainIdError &&
      connector instanceof WalletConnectConnector
    ) {
      (
        async () => {
          const chain = await connector.getChainId()
          if (chain === ChainId.Mainnet || chain === ChainId.Goerli) {
            handleWalletConnect()
          } else {
            handleDisconnect()
            setUnsupportedChain(true)
          }
        }
      )()

      return
    }

    // set unsupported flag
    if (
      !unsupportedChain &&
      error instanceof UnsupportedChainIdError
    ) {
      console.error('chain not supported, please reconnect')
      setUnsupportedChain(true)
    }
    // reset unsupported flag
    if (
      unsupportedChain &&
      (chainId && connector?.supportedChainIds?.includes(chainId)) &&
      (connector instanceof InjectedConnector || connector instanceof WalletConnectConnector)
    ) {
      setUnsupportedChain(false)
    }
  }, [error, chainId, unsupportedChain, connector])

  // load default connector
  function handleDefaultConnect() {
    setUnsupportedChain(false)
    // activate(defaultConnector)
  }

  // load MM connector
  // if not installed open tab for MM download
  function handleMetaMaskConnect(web3Wallet = 'metamask') {
    setUnsupportedChain(false)
    // check if installed
    const hasInstalledMetaMask = (() => {
      const { web3, ethereum } = (window as any)
      if (!ethereum && !web3) return false
      return ethereum?.isMetaMask || web3?.currentProvider?.isMetaMask
    })()
    // no web3 or metamask => open tab for download
    if (!hasInstalledMetaMask) {
      if (web3Wallet === 'metamask')
        return window.open('https://metamask.io/download.html')
    }
    // activate injected MM
    activate(injected)
  }

  // load WC connector
  function handleWalletConnect() {
    setUnsupportedChain(false)

    if (
      connector instanceof WalletConnectConnector &&
      connector.walletConnectProvider?.connector.uri
    ) {
      connector.walletConnectProvider = undefined
    }

    // activate wc connection
    const wc = walletConnectConnector()
    activate(wc, undefined, true).then(async () => {
      const walletAddress = await wc.getAccount();
      console.log(walletAddress);
    }).catch(error => {
      console.log(error);
    })
  }

  // disconnect connector
  // cleanup wc if necessary
  function handleDisconnect() {
    if (connector instanceof WalletConnectConnector) {
      (connector as any).close()
    }
    localStorage.removeItem('walletconnect')
    deactivate()
  }

  const wallet = {
    networkName,
    activeConnector,
    unsupportedChain,
    handleMetaMaskConnect,
    handleWalletConnect,
    handleDisconnect
  }

  // eslint-disable-next-line react/no-children-prop
  return <WalletContext.Provider value={wallet} children={children} />
}
