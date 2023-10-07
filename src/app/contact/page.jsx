import ContactForm from '@/components/ContactForm'
import PageTitle from '@/components/PageTitle'

const page = () => {
  return (
    <>
      <PageTitle title='Contact Us'></PageTitle>

      <div className='max-w-[1440px] mx-auto  flex flex-col md:flex-row justify-evenly py-20'>
        <div className='w-3/4'>
          <h1 className='uppercase font-bold text-2xl text-blue-800'>
            Contact us
          </h1>
          <h1 className='font-bold text-3xl py-4'>
            You can connect with us when <br /> need help!
          </h1>

          <div className='flex gap-x-3 mt-6'>
            <div className='flex justify-center items-center px-10 bg-softBlue  p-5  rounded-md text-primary'>
              <i className='text-2xl fa-solid fa-map-location'></i>
            </div>

            <div>
              <h1 className='text-2xl capitalize font-semibold'>
                Office Location
              </h1>
              <p>
                Bangladesh: 3/12, Humayun road,
                <br />
                Mohammadpur, Dhaka
              </p>
            </div>
          </div>

          <div className='flex gap-x-3 mt-6'>
            <div className='flex justify-center items-center px-10 bg-softBlue  p-5  rounded-md text-primary'>
              <i className='text-2xl  fa-solid fa-phone-volume'></i>{' '}
            </div>

            <div>
              <h1 className='text-2xl capitalize font-semibold'>Phone</h1>
              <p>
                Bangladesh: +8801313958844
                <br />
                USA : +13233218914
              </p>
            </div>
          </div>

          <div className='flex gap-x-3 mt-6'>
            <div className='flex justify-center items-center px-10 bg-softBlue  p-5  rounded-md text-primary'>
              <i className='text-2xl fa-solid fa-envelope'></i>
            </div>

            <div>
              <h1 className='text-2xl capitalize font-semibold'>Email</h1>
              <p>
                hello@trillionbits.com
                <br />
                info@trillionbits.com
              </p>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  )
}

export default page
