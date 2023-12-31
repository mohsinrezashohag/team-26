async function getData() {
  const res = await fetch(`https://team-26.onrender.com/brandList`)
  if (!res?.ok) {
    throw error('brands not loaded')
  }
  return res.json()
}

const Brands = async () => {
  const brands = await getData()
  return (
    <section className='py-32 '>
      <div className='container mx-auto px-4 text-center'>
        <h3 className='mb-16 text-2xl font-heading'>
          Trusted by brands all over the world
        </h3>
        <div className='flex flex-wrap -mx-2'>
          {brands?.map((item, index) => {
            return (
              <div
                key={index}
                className='mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2'
              >
                <a href='#'>
                  <img className='mx-auto h-8' src={item?.image} alt='image' />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Brands
