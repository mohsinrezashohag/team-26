import Image from 'next/image'
import whyImg from '../public/whychoseus.webp'
import webGif from '../public/travigo.png'

const WhyChoseUs = () => {
  return (
    <div className='mt-32 p-5'>
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center pt-10'>
        <div className='  md:w-1/2'>
          <h1 className='text-1xl py-2 text-primary font-semibold'>
            Why choose us
          </h1>
          <p className='py-3'>
            Team 26 by <span className='text-primary'>Mohsin Reza Shohag</span>.
            Since then, our team has expanded to include experienced Project
            Manager, Senior Developers, and Business Analyst experts. Unlike
            many of our competitors, however, we offer such a broad range of
            services that we typically become a true technology partner with
            clients.
          </p>
          <div>
            <div className='flex gap-x-3 items-center'>
              <i class='fa-solid fa-square-check text-primary'></i>
              <p className='text-gray-500 font-semibold'>
                Experts around the world
              </p>
            </div>
            <div className='flex gap-x-3 items-center'>
              <i class='fa-solid fa-square-check text-primary'></i>
              <p className='text-gray-500 font-semibold'>
                Best Practice for industry
              </p>
            </div>

            <div></div>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <Image src={whyImg} alt='image' className='w-[550px]' />
        </div>
      </div>

      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center py-20 '>
        <div className='flex justify-evenly w-full md:w-1/2'>
          <Image
            src={webGif}
            alt='web-gif'
            className='w-[400px] rounded-md h-[600px]'
          ></Image>
        </div>

        <div className='  md:w-1/2 mt-10'>
          <h1 className='text-1xl py-2 text-primary font-semibold'>
            We Create Quality product
          </h1>
          <p className='py-3'>
            Team 26 by <span className='text-primary'>Mohsin Reza Shohag</span>.
            Since then, our team has expanded to include experienced Project
            Manager, Senior Developers, and Business Analyst experts. Unlike
            many of our competitors, however, we offer such a broad range of
            services that we typically become a true technology partner with
            clients.
          </p>
          <div>
            <div className='flex gap-x-3 items-center'>
              <i class='fa-solid fa-square-check text-primary'></i>
              <p className='text-gray-500 font-semibold'>
                Experts around the world
              </p>
            </div>
            <div className='flex gap-x-3 items-center'>
              <i class='fa-solid fa-square-check text-primary'></i>
              <p className='text-gray-500 font-semibold'>
                Best Practice for industry
              </p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChoseUs
