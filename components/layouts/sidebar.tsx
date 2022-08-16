import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Sidebar = () => {
  const router = useRouter()
  const menuItems = [
    {
      href: '/',
      title: 'Overview',
    },
    {
      href: '/earn',
      title: 'Earn',
    },
    {
      href: '/lend',
      title: 'Lend',
    },
  ]
  
  return (
    <aside className='w-full md:w-60 sticky top-0 max-h-screen bg-[#2e2e2e]'>
      <div className='flex items-center justify-center h-[90px]'>
        <Link href={"/"}>
          <a><Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /></a>
        </Link>
      </div> 
      <nav>
        <ul>
          {menuItems.map(({ href, title }) => (
            <li className='m-2' key={title}>
              <Link href={href}>
                <a
                  className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                    router.asPath === href && 'bg-fuchsia-600 text-white'
                  }`}
                >
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='md:flex justify-center sm:hidden 2sm:hidden'>
        <button className='absolute bottom-4 p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer'>Link to everything</button>
      </div>
    </aside>
  );
};

export default Sidebar;