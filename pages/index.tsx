import type { NextPage } from 'next'
import { useState } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { PieChart } from 'react-minimal-pie-chart'

const Home: NextPage = () => {
  return (
    <div className='md:px-16 sm:px-1 2sm:px0'>
      <div className="flex justify-center my-8">
        <h1 className="px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg">Start Farming</h1>
      </div>
      <div className="md:flex flex-row my-8 sm:block 2sm:block">
        <div className="basis-1/2 text-center px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg">
          <h1 className=''>Net Worth</h1>
          <h1 className=''>$981,312.51</h1>
        </div>
        <div className="basis-1/2 text-center px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg">
          <h1>Net APY%</h1>
          <h1>$981,312.51</h1>
        </div>
      </div>
      <div className="md:flex flex-row px-16 py-8 border-2 bg-[#7e7e7e] rounded-lg my-8 sm:block 2sm:block">
        <div className="basis-1/2">
          <h1>Position Value Breakdown</h1>
          <h1>Lending Deposits $125.23</h1>
          <h1>Farming Positions $5123.12</h1>
        </div>
        <div className="basis-1/2 flex justify-center">
          <div className='w-[200px]'>
            <PieChart
              data={[
                { title: 'One', value: 10, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
