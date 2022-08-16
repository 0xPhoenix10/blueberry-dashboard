import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PieChart } from "react-minimal-pie-chart";

const Home: NextPage = () => {
  return (
    <div className="md:px-16 sm:px-1 2sm:px0">
      <div
        className={
          styles["start-farming-widget"] + " my-8 rounded-lg 1sm:block py-8"
        }
      >
        <Image
          src="/icons/farming-home.svg"
          alt="farming image"
          width={300}
          height={100}
        />
        <p>
          Some statement about farming and making money and whatever else we
          want to say here...
        </p>
        <button className=" bg-[#001223] h-10 px-6 font-semibold rounded-md text-white">
          Start Farming
        </button>
      </div>
      <div className="md:flex gap-4 flex-row my-8 sm:block 2sm:block">
        <div className="net-pay-box basis-1/2 px-6 py-8 ">
          <span className=" small-label">Net Worth</span>
          <h3 className="">$981,312.51</h3>
        </div>
        <div className=" net-pay-box basis-1/2 px-6 py-8 ">
          <span className="small-label">Net APY%</span>
          <h3>$981,312.51</h3>
        </div>
      </div>
      <div className="md:flex flex-row px-16 py-8 rounded-lg my-8 sm:block 2sm:block">
        <div className="basis-1/2">
          <h1>Position Value Breakdown</h1>
          <h1>Lending Deposits $125.23</h1>
          <h1>Farming Positions $5123.12</h1>
        </div>
        <div className="basis-1/2 flex justify-center">
          <div className="w-[200px]">
            <PieChart
              data={[
                { title: "One", value: 10, color: "#E38627" },
                { title: "Two", value: 15, color: "#C13C37" },
                { title: "Three", value: 20, color: "#6A2135" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
