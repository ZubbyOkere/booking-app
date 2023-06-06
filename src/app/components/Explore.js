// import Image from 'next/image'

const Explore = ({ img, location, distance }) => {
  return (
    <div className='flex items-center  m-2  mt-5 space-x-4  cursor-pointer  hover:bg-gray-100 hover:scale-105  transition transform duration-200 ease-out'>
      <div className='relative h-16 w-16 rounded-full'>
        <img src={img} layout='fill' />
      </div>
      <div>
        <p className='text-gray-500'>{location}</p>
        <p>{distance}</p>
      </div>
    </div>
  )
}

export default Explore
