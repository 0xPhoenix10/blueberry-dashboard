import React, { useState, useEffect } from "react";
import styles from "./TableGrid.module.scss";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

import { getLendingPoolList } from "../../../contracts/helper";

const TableGrid = () => {
  const theme = useTheme();
  const [list, setLendingPoolList] = useState([]);

  useEffect(() => {
    getLendingPoolList().then((res) => {
      console.log("pool list? ", res);
      setLendingPoolList(res);
    });
  }, []);

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th>Pool</th>
            <th>APY % (Weekly Earnings)</th>
            <th>Your Position</th>
          </tr>
        </thead>
        <tbody
          className={`${styles.tbody} ${theme.palette.mode === "light"
              ? "bg-black/[0.1]"
              : "bg-white/[0.05]"
            }`}
        >
          <tr
            className={`border-b-[1px] ${theme.palette.mode === "light"
                ? "border-black/[0.2]"
                : "border-white/[0.1]"
              }`}
          >
            <td className={styles.columnRoundLeft}>
              <div className={styles.tableCol}>
                <Image
                  src="/icons/pic.svg"
                  width={40}
                  height={40}
                  alt="image"
                />
                <span
                  style={{ paddingLeft: "0.7rem" }}
                  className={styles.tdSpan}
                >
                  USDC
                </span>
              </div>
            </td>
            <td>
              {" "}
              <span className={styles.tdSubtitle}>
                Strategy Net APY %<br />
                (Weekly Earnings)
              </span>
              <span className={styles.coltd}> 12% ($576)</span>
            </td>
            <td className={styles.tdSubtitle}>
              <p>
                {list.amount} {list.symbol}
              </p>
              <p className={styles.smallPositionText}>
                ${Number(list.amount * list.rate * list.utokenPrice).toFixed(2)} USD
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableGrid;
