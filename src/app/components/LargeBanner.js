// import Image from 'next/image'

const LargeBanner = ({ img, title, description, buttonText }) => {
  return (
    <section className='mt-28 relative py-16 cursor-pointer max-w-7xl mx-auto flex justify-center'>
      <div className='min-w-[300px] h-96 relative'>
        <img
          src={img}
          width={800}
          height={200}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
        <div className='absolute top-20  left-12'>
          <h1 className='text-4xl mb-3 w-64'>{title}</h1>
          <p>{description}</p>
          <button className='text-sm text-white  bg-gray-900 py-2 px-5 rounded-xl  mt-2'>
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}

export default LargeBanner
