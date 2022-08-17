import { StayPrimaryLandscapeSharp } from '@mui/icons-material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../UI/Button/Button'
import Dropdown from '../UI/Dropdown/Dropdown'
import Text from '../UI/Text/Text'
import styles from './header.module.scss'
import WalletPage from './wallet'

const Header = () => {
  const [title, setTitle] = useState('Overview')
  const [isEarn, setIsEarn] = useState(false)
  const [isWallet, setWalletToggle] = useState(false)
  const [isOverview, setIsOverview] = useState(false)
  const router = useRouter()
  const pathName = router.pathname
  useEffect(() => {
    switch (pathName) {
      case '/earn':
        setTitle('Earn')
        setIsEarn(true)
        setIsOverview(false)
        break
      default:
        setTitle('Overview')
        setIsEarn(false)
        setIsOverview(true)
        break
    }
  }, [pathName])

  const handleConnectClick = () => {
    setWalletToggle(true)
  }

  return (
    <header className="md:h-[90px] md:flex items-center md:px-16 sm:px-1 2sm:px0 sm:h-[150px] sm:block">
      <Text>
        {' '}
        <h3>{title}</h3>
      </Text>

      <WalletPage handleConnectClick={isWallet}></WalletPage>

      <div className="flex my-grid items-center">
        {isOverview && (
          <Text className="mr-4">
            {' '}
            <h4>LTV $000,000.00</h4>
          </Text>
        )}
        <Image
          src="/icons/notification.svg"
          alt="Blueberry Web"
          width={40}
          height={40}
        />

        <Dropdown></Dropdown>
        {isOverview && (
          <Button type="button" className="bg-white-01">
            <span className={`mr-3`}>100.54 ETH</span>{' '}
            <span> 0x575...A57D</span>
          </Button>
        )}
        {isEarn && (
          <Button
            type="button"
            onClick={() => {
              handleConnectClick()
            }}
            className={styles.connect}
          >
            Connect
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
