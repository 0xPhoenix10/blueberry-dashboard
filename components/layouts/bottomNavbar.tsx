import { BottomNavigation, Paper, BottomNavigationAction } from "@mui/material";
import { useRouter } from "next/router";
import Style from "./bottomNavbar.module.scss";
import Image from "next/image";
const menuItems = [
  {
    href: "/",
    title: "Overview",
    icon: "/icons/overview.svg",
  },
  {
    href: "/earn",
    title: "Earn",
    icon: "/icons/earn.svg",
  },
  {
    href: "/lend",
    title: "Lend",
    icon: "/icons/lend.svg",
  },
];

const BottomNavbar = ({}) => {
  const router = useRouter();
  const handleNavigation = (href) => {
    router.push(href);
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      className={`${Style.mainContainer}`}
    >
      <BottomNavigation showLabels className={`${Style.bottomContainer}`}>
        {menuItems.map((item) => {
          return (
            <BottomNavigationAction
              key={Math.random()}
              onClick={() => handleNavigation(item.href)}
              className={`${Style.navItem}`}
              icon={
                <Image src={item.icon} width={30} height={30} />
              }
              label={item.title}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};
export default BottomNavbar;
