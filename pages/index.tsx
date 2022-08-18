import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { PieChart } from 'react-minimal-pie-chart'
import Card from '../components/UI/Card/Card'
import Button from '../components/UI/Button/Button'
import Text from '../components/UI/Text/Text'
import Graph from '../components/UI/Graph/Graph'
import { Grid } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Card className="">
      <div
        className={
          styles['start-farming-widget'] +
          ' my-8 rounded-lg md-px-8 1sm:block py-5'
        }
      >
        <div className={`${styles.topContainer}`}>
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
        <Button type="button" className="green-btn">
          Start Farming
        </Button>
      </div>
      <div className="md:flex gap-8 flex-row my-8 sm:block 2sm:block">
        <div className="net-pay-box basis-1/2 px-6 py-8 ">
          <span className=" small-label">Net Worth</span>
          <Text>
            {' '}
            <h2>$981,312.51 USD</h2>
          </Text>
        </div>
        <div className=" net-pay-box basis-1/2 px-6 pl-8 py-8 ">
          <span className="small-label">Net APY%</span>
          <Text>
            {' '}
            <h2>$250,312.51 USD</h2>
          </Text>
        </div>
      </div>
      <div className="md:flex gap-8 flex-row rounded-lg my-8 sm:block 2sm:block">
        <div className="basis-1/2 px-6 py-8 ">
          <Text>
            <h6 className="text-muted">Position Value Breakdown</h6>
          </Text>
          <div className={styles.lendingRow}>
            <Text className="py-8">
              {' '}
              <h3 className={styles.heading}>Lending Deposits</h3>{' '}
            </Text>
            <Text className="py-8">
              {' '}
              <h3 className={styles.heading}>$5,000.00 USD</h3>{' '}
            </Text>
          </div>
          <div className={styles.lendingRow}>
            <Text>
              {' '}
              <h3 className={styles.heading}>Farming Positions</h3>
            </Text>
            <Text>
              {' '}
              <h3 className={styles.heading}>$5,000.00 USD</h3>{' '}
            </Text>
          </div>
        </div>

        {/* account health graph */}
        <div className={`px-6 py-8`}>
          <Graph type="pie" label="Account Health" value="75"></Graph>
        </div>
      </div>
    </Card>
  )
}

export default Home
