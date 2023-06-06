const Search = () => {
  return (
    <div>
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ stays for 5 number of guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in somewhere
          </h1>
          <div className='hidden lg:block mb-5 space-x-3 text-gray-800 whitespace-nowrap  flex items-center justify-between'>
            <p className='button'>Cancelation Flexibility</p>
            <p className='button'>Type of place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More Filters</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Search
