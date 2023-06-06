import Image from 'next/image'

const Banner = () => {
  return (
    <div className='relative h-[300px] w-full mb-7'>
      <Image src='/banner.png' width={500} height={500} className='w-full' />
      <div className='absolute top-1/2 w-full text-center'>
        <h1 className='text-sm sm:text-lg'>Not sure where to go? Perfect</h1>
        <button className='bg-white px-10 shadow-md py-3  text-purple-500 rounded-full my-3  hover:shadow-2xl active:scale-90 transition duration-150'>
          I am flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
