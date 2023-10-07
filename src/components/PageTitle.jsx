const PageTitle = ({ title, page }) => {
  return (
    <div
      className='flex flex-col justify-center items-center  h-60 w-full bg-cover bg-center '
      style={{ backgroundImage: 'url("images/title-bg.jpg")' }}
    >
      <h1 className='text-5xl mb-3 text-white font-bold'>{title}</h1>

      <div className='text-white'>
        <p>
          <i class='fa-solid fa-house'></i> Home / {title}
        </p>
      </div>
    </div>
  )
}

export default PageTitle
