import { ReactNode, useEffect, useState } from "react";
import BottomNavbar from "./bottomNavbar";
import Sidebar from "./sidebar";
import Header from "./header";
import styles from "./layout.module.scss";
type LayoutProps = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileTab, setIsMobileTab] = useState(false);
  const handleResize = () => {
    setIsMobileTab(window.innerWidth <= 450);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize());
    return window.removeEventListener("resize", handleResize());
  }, []);
  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col md:flex-row flex-1">
      {isMobileTab ? <BottomNavbar /> : <Sidebar />}
      <div className="flex bg-main flex-col flex-1">
        <Header />
        <div className={styles.bottomContainer}>
          <main className={styles.rightLayout}>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
