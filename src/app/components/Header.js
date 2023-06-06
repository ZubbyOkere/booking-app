'use client'
import Image from 'next/image'

import { FaAirbnb, FaUsers } from 'react-icons/fa'
import {
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineUserAdd,
} from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'

import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useState } from 'react'

import { DateRangePicker } from 'react-date-range'
import { addDays } from 'date-fns'
import Link from 'next/link'

const Header = () => {
  const [search, setSearch] = useState('')
  const [guestNo, setGuestNo] = useState(1)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  const resetInput = () => {
    setSearch('')
  }
  return (
    <header className='flex items-center justify-between  h-20 top-0 sticky z-50 shadow-md p-5 md:px-10 relative'>
      {/* left */}
      <Link href={'/'}>
        <div className='grid grid-cols-3 text-red-700 font-bold cursor-pointer'>
          <FaAirbnb size={30} />
          <h1>AirBnb</h1>
        </div>
      </Link>
      {/* middle */}
      <div className=' md:border-2 flex rounded-2xl md:shadow-lg'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          placeholder='search for a place'
          className='h-8  outline-none pl-5 bg-transparent text-sm text-gray-400'
        />
        <AiOutlineSearch
          size={30}
          className='h-8  bg-red-400 text-white rounded-full p-2 cursor-pointer  hidden md:block'
        />
      </div>

      {/* right */}
      <div className='flex items-center space-x-4 text-gray-500'>
        <p className='hidden md:block cursor-pointer'>Become a host</p>
        <BsGlobe size={25} className='cursor-pointer' />
        <div className='flex cursor-pointer  space-x-2 p-2 rounded-full border-2'>
          <AiOutlineMenu size={25} />
          <AiOutlineUserAdd size={25} />
        </div>
      </div>
      {search && (
        <div className='absolute top-16 left-8 sm:flex sm:flex-col'>
          <DateRangePicker
            onChange={(item) => setDate([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={date}
            direction='horizontal'
          />
          <div className='flex items-center'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <FaUsers />
            <input
              value={guestNo}
              onChange={(e) => setGuestNo(e.target.value)}
              type='number'
              min={1}
              className='w-12 pl-2 text-lg  outline-none text-red-600'
            />
          </div>
          <div className='flex '>
            <button className='flex-grow text-gray-500' onClick={resetInput}>
              Cancel
            </button>
            <button className='flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
