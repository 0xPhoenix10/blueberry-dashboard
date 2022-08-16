import { ReactNode } from "react";
import Sidebar from './sidebar'
import Header from './header'

type LayoutProps = {
  children: NonNullable<ReactNode>;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  
  return (
    <div className='min-h-screen bg-[#1E1E1E] flex flex-col md:flex-row flex-1'>
      <Sidebar />
      <div className='flex bg-main flex-col flex-1'>
        <Header />
        <main className=''>{children}</main>
      </div>
    </div>
  );
};

export default Layout;