import { Tabs, Tab } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import Card from '../../components/UI/Card/Card'
import styles from './earn.module.scss'
import Popup from '../../components/UI/Popup/popup'
import NewPosition from './newPosition/newPosition'
import PositionDetails from './positionDetails/positionDetails'
import YourPosition from './yourPosition/yourPosition'
import ClosePosition from './closePosition/closePosition'
import CustomButton from '../../components/UI/customButton/customButton'
import StrategiesTable from '../../interfaces/strategiesTable'

const strategiesTable = [
  {
    name: 'ICHI-USDC Vault',
    tvl: '$500 USD',
    Stablecoin: '$250 USD',
    Token: '$250 USD',
  },
  {
    name: 'ICHI-USDC Vault',
    tvl: '$500 USD',
    Stablecoin: '$250 USD',
    Token: '$250 USD',
  },
  {
    name: 'ICHI-USDC Vault',
    tvl: '$500 USD',
    Stablecoin: '$250 USD',
    Token: '$250 USD',
  },
  {
    name: 'ICHI-USDC Vault',
    tvl: '$500 USD',
    Stablecoin: '$250 USD',
    Token: '$250 USD',
  },
] as StrategiesTable[]

const Earn: NextPage = () => {
  const [value, setValue] = useState(0)
  const [NewOpen, setNewPosition] = useState(false)
  const [SuccessOpen, setSuccesPosition] = useState(false)
  const [YourPosOpen, setYourPosition] = useState(false)
  const [ClosePos, setClosePosition] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const newPositionOpenHandler = (title: string) => {
    console.log(title)
    switch (title) {
      case 'new-position':
        setNewPosition(true)
        break
      case 'success-position':
        setSuccesPosition(true)
        break
      case 'your-position':
        setYourPosition(true)
        break
      case 'close-position':
        setClosePosition(true)
        break

      default:
        break
    }
  }
  const handleSuccessPosition = (value: string) => {
    closeNewPosition()
    newPositionOpenHandler(value)
  }
  const closeNewPosition = () => {
    setNewPosition(false)
  }

  const handleClosepositionPopup = (value: string) => {
    setYourPosition(false)
    newPositionOpenHandler(value)
  }
  return (
    <div className="md:h-[90px] items-center  mt-3 md:px-16 sm:px-1 2sm:px0 sm:h-[150px] sm:block">
      <div className={styles.topContainer}>
        <div>
          <h4 className={styles.heading}>
            Vaults - Up to 3x leverage on LP strategies while maintaining your
            preferred token as collateral.
          </h4>
          <p className={styles.text}>
            We allow capital efficient leverage for token holders with flexible
            collateral, so you can earn boosted yield on your holdings and
            support your token's price with deeper liquidity
          </p>
        </div>
        <div className={styles.rightContainer}>
          <h4 className={styles.title}>Vaults TVL</h4>
          <h4 className={styles.title}>$100,000,000.00</h4>
        </div>
      </div>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab
          label={
            <span style={{ color: value === 0 ? '#19857b' : 'white' }}>
              Active Positions
            </span>
          }
        />
        <Tab
          label={
            <span style={{ color: value === 1 ? '#19857b' : 'white' }}>
              Liquidated Positions
            </span>
          }
        />
      </Tabs>
      <div className={styles.divider}></div>
      {value == 0 && (
        <table className={styles.table}>
          <thead className={styles.header}>
            <tr>
              <td className={styles.tHeading}>Current Strategy</td>
              <td className={styles.tHeading}>Total Position</td>
              <td className={styles.tHeading}>Debt Value</td>
              <td className={styles.tHeading}>Equity Value</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr
              className="cursor-pointer"
              onClick={() => newPositionOpenHandler('your-position')}
            >
              <td className={styles.columnRoundLeft}>
                <div className={styles.tableCol}>
                  <Image
                    src="/icons/pic.svg"
                    width={40}
                    height={40}
                    alt="image"
                  />
                  <span style={{ paddingLeft: '0.7rem' }}>ICHI-USDC Vault</span>
                </div>
              </td>
              <td>$500 USD</td>
              <td>$250 USD</td>
              <td className={styles.columnRoundRight}>$250 USD</td>
            </tr>
            <tr
              className={` ${styles.bottom} cursor-pointer`}
              onClick={() => newPositionOpenHandler('your-position')}
            >
              <td colSpan={4}>
                <div className={styles.rowBottom}>
                  <span>Strategy Health: 50%</span>
                  <div className={styles.innerContainer}>
                    <div className={styles.container}></div>
                  </div>
                </div>
              </td>
            </tr>

            <tr
              className="cursor-pointer"
              onClick={() => newPositionOpenHandler('your-position')}
            >
              <td>
                <div className={styles.tableCol}>
                  <Image
                    src="/icons/pic1.svg"
                    width={40}
                    height={40}
                    alt="icon"
                  />
                  <span style={{ paddingLeft: '0.7rem' }}>oneICHI</span>
                </div>
              </td>
              <td>$500 USD</td>
              <td>$250 USD</td>
              <td>$250 USD</td>
            </tr>
            <tr
              className="cursor-pointer"
              onClick={() => newPositionOpenHandler('your-position')}
            >
              <td
                colSpan={4}
                className={`${styles.columnRoundBottomRight} ${styles.columnRoundBottomLeft}`}
              >
                <div className={styles.rowBottom}>
                  <span>Strategy Health: 75%</span>
                  <div className={styles.innerContainer}>
                    <div className={styles.bottomContainer}></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {value == 1 && <div></div>}

      <div className="mt-10">
        <table className={styles.table_bottom}>
          <thead className={styles.header}>
            <tr>
              <td className={styles.tHeading}>Strategies</td>
              <td className={styles.tHeading}>TVL</td>
              <td className={styles.tHeading}>
                Stablecoin Collateral Yield (@1x, at max lev)
              </td>
              <td className={styles.tHeading}>
                Token Collateral Yield (at max lev)
              </td>
              <td className={styles.tHeading}></td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {strategiesTable.map((row) => {
              return (
                <tr>
                  <td className={styles.columnRoundLeft}>
                    <div className={styles.tableCol}>
                      <Image
                        src="/icons/pic.svg"
                        width={40}
                        height={40}
                        alt="image"
                      />
                      <span style={{ paddingLeft: '0.7rem' }}>{row.name}</span>
                    </div>
                  </td>
                  <td>{row.tvl}</td>
                  <td>{row.Stablecoin}</td>
                  <td className={styles.columnRoundRight}>{row.Token}</td>
                  <td>
                    <CustomButton
                      title="New Position"
                      handleButtonClick={() =>
                        newPositionOpenHandler('new-position')
                      }
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <Popup
        // onClick={(e) => newPositionOpenHandler('success-position')}
        isOpen={NewOpen}
        handleClose={closeNewPosition}
        title={'New Position'}
      >
        <NewPosition handleButtonClick={handleSuccessPosition} />
      </Popup>
      <Popup
        isOpen={SuccessOpen}
        title={'Success!'}
        handleClose={() => {
          setSuccesPosition(false)
        }}
      >
        <PositionDetails />
      </Popup>
      <Popup
        isOpen={YourPosOpen}
        title={'Your Position'}
        handleClose={() => {
          setYourPosition(false)
        }}
      >
        <YourPosition handleClosepositionPopup={handleClosepositionPopup} />
      </Popup>
      <Popup
        isOpen={ClosePos}
        title={'Close Position'}
        handleClose={() => {
          setClosePosition(false)
        }}
      >
        <ClosePosition
          handleClose={() => {
            setClosePosition(false)
          }}
        />
      </Popup>
    </div>
  )
}

export default Earn
