import styles from "../../styles/header.module.scss";
import Image from "next/image";
const Header = () => {
  return (
    <header className="md:h-[90px] md:flex items-center md:px-16 sm:px-1 2sm:px0 sm:h-[150px] sm:block">
      <h3>Overview</h3>
      <div className="flex items-center">
        <h5 className={`mr-4 ${styles.title}`}>LTV $000,000.00</h5>
        <Image
          src="/icons/notification.svg"
          alt="Blueberry Web"
          width={40}
          height={40}
        />
        <button className={`m-2 p-2 px-5 ${styles.button}`}>
          <Image
            src="/icons/eth.svg"
            alt="Blueberry Web"
            width={20}
            height={20}
          />
          <span className="px-3">Ethereum</span>
          <Image
            src="/icons/arrowDown.svg"
            alt="Blueberry Web"
            width={15}
            height={15}
          />
        </button>
        <button className={`m-2 p-2 px-5 ${styles.button}`}>
          <span className={`mr-3`}>100.54 ETH</span> <span> 0x575...A57D</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
