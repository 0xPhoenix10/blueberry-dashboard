
import Image from "next/image";
import Button from "../UI/Button/Button";
import Dropdown from "../UI/Dropdown/Dropdown";
import Text from "../UI/Text/Text";
const Header = () => {
  return (
    <header className="md:h-[90px] md:flex items-center md:px-16 sm:px-1 2sm:px0 sm:h-[150px] sm:block">
      <Text> <h3>Overview</h3></Text>
     
      <div className="flex my-grid items-center">
        <Text className="mr-4"> <h4>LTV $000,000.00</h4></Text>
        <Image
          src="/icons/notification.svg"
          alt="Blueberry Web"
          width={40}
          height={40}
        />

        <Dropdown></Dropdown>

        <Button type="button" className='bg-white-01'>
          <span className={`mr-3`}>100.54 ETH</span> <span> 0x575...A57D</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
