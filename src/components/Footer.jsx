import Image from 'next/image'
import logo from '../public/white-logo.png'
import Link from 'next/link'

const Footer = () => {
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

  const Solutions = [
    {
      id: 1,
      title: 'Services',
      link: '/servicess',
    },
    {
      id: 2,
      title: 'Team Extension',
      link: '/team-extention',
    },
    {
      id: 3,
      title: 'Our Apps',
      link: '/apps',
    },
    {
      id: 4,
      title: ' Product Design',
      link: '/product-design',
    },
  ]

  return (
    <div className='bg-primary text-white pt-28 '>
      <div className='max-w-[1440px]  mx-auto flex flex-col md:flex-row justify-evenly md:justify-between items-start gap-x-6 ms-10 md:ms-auto '>
        <div className='w-full md:w-1/4'>
          <Image className='mb-4 ms-[-20px]' src={logo} alt='logo'></Image>

          <p>
            We all know how hard it can be to make a solution to manage a
            business successfully. We partner with technology businesses
            globally helping them to build successful engineering teams and
            create innovative software products.
          </p>

          <div className='mt-10 mb-4'>
            <div className='flex gap-x-8'>
              <i class='fa-brands fa-facebook text-2xl '></i>
              <i class='fa-brands fa-twitter text-2xl'></i>
              <i class='fa-brands fa-linkedin text-2xl '></i>
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-2xl font-semibold py-6'>Company</h1>
          <div className='flex flex-col gap-y-4 '>
            {links.map((link, index) => (
              <Link
                //   onClick={() => setActiveLink(link.link)}
                className='class-font-semibold'
                key={index}
                href={link.link}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h1 className='text-2xl font-semibold py-6'>Solutions</h1>
          <div className='flex flex-col gap-y-4 '>
            {Solutions.map((link, index) => (
              <Link
                //   onClick={() => setActiveLink(link.link)}
                className='class-font-semibold'
                key={index}
                href={link.link}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h1 className='text-2xl font-semibold py-6'>Contact Information</h1>
          <div className='flex flex-col gap-y-4 '>
            <div className='flex gap-x-4 items-center'>
              <i class='fa-solid fa-location-dot'></i>
              <p>19 Kallyanpur main road, Kallyanpur Dhaka</p>
            </div>
            <div className='flex gap-x-4 items-center'>
              <i class='fa-solid fa-envelope'></i>
              <p>hello@trillionbits.com</p>
            </div>
            <div className='flex gap-x-4 items-center'>
              <i class='fa-solid fa-phone-volume'></i>{' '}
              <p>Bangladesh : +8801313958844 USA : +13233218914</p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <hr className='text-softGray my-3' />
        <p className='font-semibold uppercase py-3'>
          © Copyright 2023, team 26. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
