import React from 'react'
import { Button } from "@mui/material";
import { useWeb3Context } from '../../../context/'
import NButton from "../Button/Button";
import Style from "./web3button.module.scss"
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { Balance } from '@mui/icons-material';

interface ConnectProps {
  connect: (() => Promise<void>) | null,
  title: string,
}
const ConnectButton = ({ connect, title }: ConnectProps) => {
  return connect ? (
    <Button
      onClick={connect}
      className={`${Style.container} ${Style.button}`}
    >
      {title}
    </Button>
  ) : (
    <button>Loading...</button>
  )
}

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null,
  address: string | undefined,
  balance: number,
}

const DisconnectButton = ({ disconnect, address, balance }: DisconnectProps) => {

  const addr = address == undefined ? "" : address.substring(0, 4) + "..." + address.substring(address.length - 4)
  return disconnect ? (
    <NButton
      type="button"
      className="bg-white-01"
      // onClick={disconnect}
    >
      <span className={`mr-3`}>{`${balance.toFixed(4)} ETH`}</span>{' '}
      <span>{addr}</span>
    </NButton>
  ) : (
    <button>Loading...</button>
  )
}

export function Web3Button() {
  const { web3Provider, connect, disconnect, address, balance } = useWeb3Context()

  return address ? (
    <DisconnectButton disconnect={disconnect} address={address} balance={balance}/>
  ) : (
    <ConnectButton connect={connect} title={"Connect Wallet"}/>
  )
}
