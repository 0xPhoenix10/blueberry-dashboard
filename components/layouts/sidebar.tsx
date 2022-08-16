import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Sidebar = () => {
  const router = useRouter()
  const menuItems = [
    {
      href: '/',
      title: 'Overview',
      icon: '/icons/overview.svg',
    },
    {
      href: '/earn',
      title: 'Earn',
      icon: '/icons/earn.svg',
    },
    {
      href: '/lend',
      title: 'Lend',
      icon: '/icons/lend.svg',
    },
  ]

  return (
    <aside className=" sticky top-0 max-h-screen bg-[#001223]">
      <div className="flex items-center justify-center h-[90px]">
        <Link href={'/'}>
          <a>
            <Image
              src="/icons/home.svg"
              alt="Blueberry Web"
              width={40}
              height={40}
            />
          </a>
        </Link>
      </div>
      <nav>
        <ul>
          {menuItems.map(({ href, title, icon }) => (
            <li className="m-2" key={title}>
              <Link href={href}>
                <a
                  className={`flex p-2  justify-center rounded cursor-pointer ${
                    router.asPath === href && 'text-white'
                  }`}
                >
                  <Image src={icon} alt={title} width={40} height={40} />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="side-bottom px-1">
        <h5 className="py-2 flex place-content-center	w-full	text-xs	 ">
          Join Us
        </h5>
        <div>
          <Image
            src="/icons/twitter.svg"
            alt="farming image"
            width={20}
            height={18}
          />
        </div>
        <div>
          <Image
            src="/icons/discord.svg"
            alt="farming image"
            width={20}
            height={18}
          />
        </div>
        <div>
          <Image
            src="/icons/git.svg"
            alt="farming image"
            width={20}
            height={18}
          />
        </div>
        <div>
          <Image
            src="/icons/m_icon.svg"
            alt="farming image"
            width={20}
            height={18}
          />
        </div>
      </div>
      {/* <div className='md:flex justify-center sm:hidden 2sm:hidden'>
        <button className='absolute bottom-4 p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer'>Link to everything</button>
      </div> */}
    </aside>
  )
}

export default Sidebar
