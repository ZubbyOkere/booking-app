import Image from 'next/image'

const SecondBanner = () => {
  return (
    <div className='max-w-7xl mx-auto  mt-14 '>
      <h1 className='mb-8 text-center font-semibold text-4xl'>
        Studio Apartment
      </h1>
      <div className='flex  justify-center items-center space-x-5'>
        <div className='content'>
          <Image
            src='/banner3.png'
            width={500}
            height={500}
            className=' hover:scale-105 transition duration-300'
          />
        </div>
        <div className='content'>
          <Image
            src='/banner2.png.jpg'
            width={500}
            height={500}
            className=' hover:scale-105 transition duration-300'
          />
        </div>
      </div>
    </div>
  )
}

export default SecondBanner
