import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <div className='hidden md:block  bg-primary text-white py-2 '>
      <div className='max-w-[1440px] flex justify-between mx-auto'>
        <div className='flex items-center gap-x-4'>
          <h1>
            <i className='fa-solid fa-phone-volume'></i> 01629365037
          </h1>
          <h1>|</h1>
          <h1 className='lowercase'>
            <i className='fa-solid fa-envelope lowercase me-2'></i>
            rezaexpertteam@gmail.com
          </h1>
        </div>

        <div className='flex items-center gap-x-4'>
          <h1>
            <i className='fa-solid fa-clock me-3'></i>Office Hours: 10:00 AM –
            7:00 PM
          </h1>
          <h1>|</h1>
          <div className='flex gap-x-4'>
            <Link href='facebook.com'>
              <i className='fa-brands fa-facebook'></i>
            </Link>
            <Link href='facebook.com'>
              <i className='fa-brands fa-twitter'></i>
            </Link>
            <Link href='facebook.com'>
              <i className='fa-brands fa-linkedin'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
