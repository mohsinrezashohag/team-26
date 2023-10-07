'use client'
import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className='flex flex-col md:flex-row gap-x-3 justify-between mt-8'>
        <input
          className='bg-softGray p-4 rounded-md w-1/2 focus:border-primary focus:ring-primary'
          placeholder='Name'
          {...register('name', { required: true })}
        />

        <input
          className='bg-softGray p-4 rounded-md w-1/2 focus:border-primary focus:ring-primary'
          placeholder='Email'
          {...register('email', { required: true })}
        />
      </div>
      <div className='flex flex-col md:flex-row gap-x-3 justify-between mt-8'>
        <input
          className='bg-softGray p-4 rounded-md w-1/2 focus:border-primary focus:ring-primary'
          placeholder='Subject'
          {...register('subject', { required: true })}
        />

        <input
          className='bg-softGray p-4 rounded-md w-1/2 focus:border-primary focus:ring-primary'
          placeholder='Phone'
          {...register('phone', { required: true })}
        />
      </div>

      <textarea
        className='bg-softGray px-4 py-3 rounded-md me-5 w-full focus:border-primary focus:ring-primary mt-8'
        placeholder='Message'
        rows={6} // You can adjust this number to control the initial visible lines
        {...register('message', { required: true })}
      />

      {errors.exampleRequired && <span>This field is required</span>}

      <button
        className='bg-primary text-white px-2 py-2 rounded-md block left-0 w-[180px] mt-10'
        type='submit'
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
