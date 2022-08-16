
const Header = () => {
  
  return (
    <header className='md:h-[90px] md:flex items-center md:px-16 sm:px-1 2sm:px0 sm:h-[150px] sm:block'>

       <h3>Overview</h3>
       <div className="flex items-center">
        <h4 >LTV $000,000.00</h4>
        <button className='m-2 p-2 rounded border-2 border-indigo-600'>notification</button>
        <button className='m-2 p-2 rounded border-2 border-indigo-600'>chain selector</button>
        <button className='m-2 p-2 rounded border-2 border-indigo-600'>connect wallet</button>
       </div>

    </header>
  );
};

export default Header;