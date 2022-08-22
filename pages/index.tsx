import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Card from "../components/UI/Card/Card";
import Text from "../components/UI/Text/Text";
import Graph from "../components/UI/Graph/Graph";
import CustomButton from "../components/UI/customButton/customButton";

const Home: NextPage = () => {
  return (
    <Card className={styles.mainContainer}>
      <div
        className={
          styles["start-farming-widget"] +
          " my-8 rounded-lg px-8 1sm:block py-5"
        }
      >
        <div className={`${styles.topContainer} `}>
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
        <CustomButton title={"Start Farming"} handleButtonClick={() => {}} />
      </div>
      <div className="md:flex gap-8 flex-row my-8 sm:block 2sm:block">
        <div className="net-pay-box basis-1/2 px-6 py-8 ">
          <span className=" small-label">Net Worth</span>
          <Text>
            {" "}
            <h3>$500,000.00 USD</h3>
          </Text>
        </div>
        <div className=" net-pay-box basis-1/2 px-6 pl-8 py-8 ">
          <span className="small-label">Net APY%</span>
          <Text>
            {" "}
            <h3>Net APY %</h3>
          </Text>
        </div>
        <div className=" net-pay-box basis-1/2 px-6 pl-8 py-8 ">
          <span className="small-label">Projected Weekly Earnings</span>
          <Text>
            {" "}
            <h3>$5,000.00 USD</h3>
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
              {" "}
              <span className={styles.heading1}>Lending Deposits</span>{" "}
            </Text>
            <Text className="py-8">
              {" "}
              <span className={styles.heading1}>$5,000.00 USD</span>{" "}
            </Text>
          </div>
          <div className={styles.lendingRow}>
            <Text>
              {" "}
              <span className={styles.heading1}>Farming Positions</span>
            </Text>
            <Text>
              {" "}
              <span className={styles.heading1}>$5,000.00 USD</span>{" "}
            </Text>
          </div>
          <div className={styles.lendingRow}>
            <Text className="py-8">
              <span className={`${styles.heading1} text-rose-500`}>
                Debt Value
              </span>
            </Text>
            <Text className="py-8">
              <span className={`${styles.heading1} text-rose-500`}>
                $5,000.00 USD
              </span>{" "}
            </Text>
          </div>
        </div>

        {/* account health graph */}
        <div className={`basis-1/2 px-6 py-8`}>
          <Text>
            <h6 className="text-muted">Position Value Breakdown</h6>
          </Text>
          <div className={styles.lendingRow}>
            <div className={styles.rightRow}>
              <Image src="/icons/pic.svg" width={35} height={35} alt="image" />
              <div className={styles.container}>
                <span className={styles.title}>ICHI-USDC Vault</span>
                <span className={styles.subTitle}>$2,500</span>
              </div>
            </div>
            <div className={`py-8 ${styles.pMainContainer}`}>
              <div className={styles.positionContainer}>
                <div className={styles.pInnercontainer}></div>
              </div>
              <span className={styles.percentage}>50%</span>
            </div>
          </div>
          <div className={styles.lendingRow}>
            <div className={styles.rightRow}>
              <Image src="/icons/pic.svg" width={35} height={35} alt="image" />
              <div className={styles.container}>
                <span className={styles.title}>ICHI-USDC Vault</span>
                <span className={styles.subTitle}>$2,500</span>
              </div>
            </div>
            <div className={`py-8 ${styles.pMainContainer}`}>
              <div className={styles.positionContainer}>
                <div className={styles.pInnercontainer1}></div>
              </div>
              <span className={styles.percentage}>75%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Home;
