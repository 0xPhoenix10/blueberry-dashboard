import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PieChart } from 'react-minimal-pie-chart'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { providers } from 'ethers'
import Head from 'next/head'
import { useCallback, useEffect, useReducer } from 'react'
import WalletLink from 'walletlink'
import Web3Modal from 'web3modal'
import { ellipseAddress, getChainData } from '../shared/lib/utilities'

const Home: NextPage = () => {
  return (
    <div className="md:px-16 sm:px-1 2sm:px0">
      <div
        className={
          styles['start-farming-widget'] +
          ' my-8 rounded-lg px-8 1sm:block py-5'
        }
      >
        <div className="flex items-center">
          <Image
            src="/icons/farming-home.svg"
            alt="farming image"
            width={130}
            height={80}
          />
          <p className={styles.text}>
            Some statement about farming and making money and whatever else we
            want to say here...
          </p>
        </div>

        <button className="green-btn h-10 mx-10 font-semibold rounded-md text-white">
          Start Farming
        </button>
      </div>
      <div className="md:flex gap-8 flex-row my-8 sm:block 2sm:block">
        <div className="net-pay-box basis-1/2 px-6 py-8 ">
          <span className=" small-label">Net Worth</span>
          <h3>$981,312.51 USD</h3>
        </div>
        <div className=" net-pay-box basis-1/2 px-6 pl-8 py-8 ">
          <span className="small-label">Net APY%</span>
          <h3>$250,312.51 USD</h3>
        </div>
      </div>
      <div className="md:flex flex-row px-6 py-8 rounded-lg my-8 sm:block 2sm:block">
        <div className="basis-1/2">
          <h5 className={styles.rowTitle}>Position Value Breakdown</h5>
          <div className={styles.lendingRow}>
            <span className={styles.lendingRowTitle}>Lending Deposits</span>
            <span className={styles.lendingRowTitle}>$5,000.00 USD</span>
          </div>
          <div className={styles.lendingRow}>
            <span className={styles.lendingRowTitle}>Farming Positions</span>
            <span className={styles.lendingRowTitle}>$5,000.00 USD</span>
          </div>
        </div>
        <div className={`basis-1/2 flex ${styles.circleContaiiner}`}>
          <div>
            <h5 className={styles.rowTitle}>Account Health</h5>
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill"></div>
                </div>
                <div className="mask half">
                  <div className="fill"></div>
                </div>
                <div className="inside-circle">
                  {' '}
                  <Image
                    src="/icons/heart.svg"
                    alt="farming image"
                    width={300}
                    height={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <h5 className={styles.percentage}>75%</h5>
        </div>
      </div>
    </div>
  )
}

export default Home
