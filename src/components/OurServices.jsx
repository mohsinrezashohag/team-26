const getData = async () => {
  const res = await fetch('http://localhost:9000/services')
  if (!res?.ok) {
    throw error('brands not loaded')
  }
  return res.json()
}
const OurServices = async () => {
  const services = await getData()
  console.log(services)
  return (
    <div className='our-services pb-28'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='flex flex-col items-center justify-center py-14 '>
          <h1 className='text-4xl font-bold'>Our Services</h1>
          <div className='flex gap-x-2 mt-2'>
            <div className='border-b-2 border-primary w-[20px]'></div>
            <div className='border-b-2 border-primary w-[50px]'></div>
          </div>
        </div>

        <div className='grid grid-col-1 md:grid-cols-3 gap-4 p-3'>
          {services?.map((item, index) => {
            return (
              <div
                key={index}
                className='h-300px p-10 rounded-md bg-white shadow-inner'
              >
                <i className={`${item?.icon} text-5xl text-primary`}></i>
                <h1 className='text-2xl font-semibold capitalize py-2'>
                  {item?.name}
                </h1>
                <h6 className='text-1xl text-gray-500 capitalize font-semibold'>
                  {item?.subheading}
                </h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default OurServices
