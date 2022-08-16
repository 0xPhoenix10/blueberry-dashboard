

const Header = () => {
  
  return (
    <header className='bg-purple-200  md:h-[90px] md:flex justify-end items-center font-semibold uppercase sm:h-[150px] sm:block'>
      <button className='m-2 p-2 rounded border-2 border-indigo-600'>system LTV</button>
      <button className='m-2 p-2 rounded border-2 border-indigo-600'>notification</button>
      <button className='m-2 p-2 rounded border-2 border-indigo-600'>chain selector</button>
      <button className='m-2 p-2 rounded border-2 border-indigo-600'>connect wallet</button>
    </header>
  );
};

export default Header;