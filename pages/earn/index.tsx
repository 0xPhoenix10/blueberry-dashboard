import { Tabs, Tab } from '@mui/material'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import Card from '../../components/UI/Card/Card'
import styles from './earn.module.scss'

const Earn: NextPage = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <div className="md:h-[90px] items-center md:px-16 sm:px-1 2sm:px0 sm:h-[150px] sm:block">
      <div className={styles.topContainer}>
        <div>
          <h4 className={styles.heading}>
            Farming - Utilize up to 3x leverage on LP strategiers to yield farm.
          </h4>
          <p className={styles.text}>
            Blueberry also offers features such as dual borrow which allows for
            strategies such as pseudo delta neutral farming within a single
            position.
          </p>
        </div>
        <div className={styles.rightContainer}>
          <h4 className={styles.title}>TVL</h4>
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
            <tr>
              <td className={styles.columnRoundLeft}>
                <div className={styles.tableCol}>
                  <Image src="/icons/pic.svg" width={40} height={40} />
                  <span style={{ paddingLeft: '0.6rem' }}>ICHI-USDC Vault</span>
                </div>
              </td>
              <td>$500 USD</td>
              <td>$250 USD</td>
              <td className={styles.columnRoundRight}>$250 USD</td>
            </tr>
            <tr className={` ${styles.bottom}`}>
              <td colSpan={4}>
                <div className={styles.rowBottom}>
                  <span>Strategy Health: 50%</span>
                  <div className={styles.innerContainer}>
                    <div className={styles.container}></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.tableCol}>
                  <Image src="/icons/pic1.svg" width={40} height={40} />
                  <span style={{ paddingLeft: '0.6rem' }}>oneICHI</span>
                </div>
              </td>
              <td>$500 USD</td>
              <td>$250 USD</td>
              <td>$250 USD</td>
            </tr>
            <tr>
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

      <div className="mt-6">
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
            <tr>
              <td className={styles.columnRoundLeft}>
                <div className={styles.tableCol}>
                  <Image src="/icons/pic.svg" width={40} height={40} />
                  <span style={{ paddingLeft: '0.6rem' }}>ICHI-USDC Vault</span>
                </div>
              </td>
              <td>$500 USD</td>
              <td>$250 USD</td>
              <td className={styles.columnRoundRight}>$250 USD</td>
              <td>
                {' '}
                <Button type="button" className="green-table-btn">
                  Farm
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Earn