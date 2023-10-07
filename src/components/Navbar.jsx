'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import logo from '../public/logo.png'

const links = [
  {
    id: 1,
    title: 'home',
    link: '/',
  },
  {
    id: 2,
    title: 'services',
    link: '/services',
  },
  {
    id: 3,
    title: 'projects',
    link: '/projects',
  },
  {
    id: 4,
    title: 'contact',
    link: '/contact',
  },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  const router = useRouter()

  return (
    <>
      <header className=' py-6   sticky top-0  z-50 bg-white '>
        <div className='container mx-auto px-4  flex justify-between'>
          <div className='logo'>
            <Link href='/'>
              <Image src={logo} height={60}></Image>
            </Link>
          </div>
          <nav
            className={
              open
                ? 'absolute flex md:hidden  flex-col  top-[90px] bg-primary  w-[100%] text-left  z-50 right-0 rounded-md text-white  '
                : 'hidden md:flex items-center gap-x-3'
            }
            onClick={() => setOpen(false)}
          >
            {links.map((link, index) => (
              <Link
                onClick={() => setActiveLink(link.link)}
                className={`${open && 'py-6 ps-4'} ${
                  activeLink === link.link ? `border-b-4 border-primary` : ''
                } mx-6`}
                key={index}
                href={link.link}
              >
                {link.title}
              </Link>
            ))}

            <button
              className={`${
                open ? 'bg-gray-400 mb-6 ms-6' : 'bg-primary '
              } text-white px-2 py-2 rounded-md  block left-0 w-[180px]`}
            >
              Send a message
            </button>
          </nav>
          <button className='block md:hidden' onClick={() => setOpen(!open)}>
            {open ? (
              <i className='fa-solid fa-xmark text-2xl'></i>
            ) : (
              <i className='fa-solid fa-bars text-2xl'></i>
            )}
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
