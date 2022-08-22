import { StayPrimaryLandscapeSharp } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWidth } from "../../hooks/useWidth";
import Button from "../UI/Button/Button";
import CustomButton from "../UI/customButton/customButton";
import Dropdown from "../UI/Dropdown/Dropdown";
import Text from "../UI/Text/Text";
import styles from "./header.module.scss";
import WalletPage from "./wallet";

const Header = () => {
  const [title, setTitle] = useState("Overview");
  const [isEarn, setIsEarn] = useState(false);
  const [isWallet, setWalletToggle] = useState(false);
  const [isOverview, setIsOverview] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathName = router.pathname;
  const width = useWidth();
  useEffect(() => {
    switch (pathName) {
      case "/earn":
        setTitle("Earn");
        setIsEarn(true);
        setIsOverview(false);
        break;

      case "/lend":
        setTitle("Lend");
        setIsEarn(false);
        setIsOverview(false);
        break;
      default:
        setTitle("Overview");
        setIsEarn(false);
        setIsOverview(true);
        break;
    }
  }, [pathName]);

  const handleConnectClick = () => {
    setWalletToggle((prev)=>!prev);
  };

  return (
    <>
      {width >768 && (
        <header className="md:h-[90px] md:flex items-center md:px-16 sm:px-1 2sm:px0 sm:h-[150px] sm:block">
          <Text>
            {" "}
            <h3>{title}</h3>
          </Text>

          <div className="flex my-grid items-center">
            {isOverview && (
              <Text className="mr-4">
                {" "}
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
                <span className={`mr-3`}>100.54 ETH</span>{" "}
                <span> 0x575...A57D</span>
              </Button>
            )}
            {isEarn && (
              <CustomButton
                title="Connect Wallet"
                handleButtonClick={handleConnectClick}
              />
            )}
          </div>
        </header>
      )}
      {width <=768 && (
        <>
          <div
            className={`flex items-center justify-between pl-2 pr-4 ${styles.mobileNavbar} h-20`}
          >
            <Image
              src="/icons/home.svg"
              alt="Blueberry Web"
              width={40}
              height={40}
            />
            {!open ? (
              <Image
                src="/icons/menu_icon.png"
                alt="Blueberry Web"
                width={30}
                onClick={() => setOpen(true)}
                height={30}
              />
            ) : (
              <Image
                src="/icons/close_icon.png"
                width={30}
                onClick={() => setOpen(false)}
                height={30}
              />
            )}
          </div>
          <div
            className={`absolute top-20 left-0 h-screen w-screen  transform ${
              styles.mobileNavbarBg
            } ${
              open ? "-translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
          >
            <div className="flex flex-col ml-4">
              <Text>
                {" "}
                <h3>{title}</h3>
              </Text>
              <Image
                src="/icons/notification.svg"
                alt="Blueberry Web"
                width={40}
                height={40}
              />

              <Dropdown></Dropdown>
              {isOverview && (
                <Button type="button" className="bg-white-01">
                  <span className={`mr-3`}>100.54 ETH</span>{" "}
                  <span> 0x575...A57D</span>
                </Button>
              )}
              {isEarn && (
                <CustomButton
                  title="Connect Wallet"
                  handleButtonClick={handleConnectClick}
                />
              )}
            </div>
          </div>
        </>
      )}
      {isWallet && <WalletPage isOpen={isWallet} handleCloseWallet={handleConnectClick} />}
    </>
  );
};

export default Header;
