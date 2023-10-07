import Image from 'next/image'
import sdlc from '../public/sdlc.webp'
const OurWorkProcess = () => {
  return (
    <div className='our-work-process py-24 '>
      <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row  items-center pt-10'>
        <div className='md:w-1/2 flex justify-end'>
          <Image src={sdlc} alt='image' className='w-full' />
        </div>

        <div className='  md:w-1/2'>
          <h1 className='text-4xl py-2 text-primary font-semibold'>
            Work Process
          </h1>
          <p className='py-3'>
            We manage your projects using tried-and-true agile techniques that
            are created to bring all stakeholders, including non-technical ones,
            into alignment. Our approach enhances teamwork and enables quicker
            turn-arounds to accomplish even the most challenging objectives.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurWorkProcess
