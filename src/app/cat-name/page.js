'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BiSolidRightArrow } from 'react-icons/bi'

function CatName() {
  const router = useRouter()
  const [name, selectName] = useState('')
  const user = {}
  const data = { front: '/cat 001.png' }
  const setImage = () => {
    console.log('clci')
  }

  return (
    <div className="min-h-screen bg-blue-300 text-white pb-20">
      <div className="flex items-center justify-center gap-4  mt-20 px-4 sm:p x-6 md:px-12 lg:px-48 py-10">
        <BiSolidRightArrow />
        <BiSolidRightArrow />
        <p className="font-semibold text-lg sm:text-xl md:text-2xl ">
          Step 2: Name your CAT
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap px-4 sm:px-6 md:px-12 ">
        <div className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="Name..."
            className="text-black p-2  w-[230px] sm:w-[250px] md:w-[300px]   mt-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-blue-500 transition-all duration-300 ease-in-out "
            onChange={(e) => selectName(e.target.value)}
          />
          <Image
            src={data.front}
            width={900}
            height={900}
            alt="pet"
            className={`object-cover rounded-md border-8 border-white  w-[230px] sm:w-[260px] md:w-[300px] h-[330px] sm:h-[360px] md:h-[400px] transform duration-300 ease-in-out`}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 sm:mt-6 md:mt-16">
        <button
          className={`bg-gray-400 text-white border-2 border-white hover:bg-gray-700 px-4 py-2
        rounded-lg transition duration-300 ease-in-out w-[140px] sm:w-[180px] md:w-[190px] ${
          name === '' ? 'opacity-50 cursor-not-allowed' : ''
        }`}
          onClick={setImage}
          disabled={name === ''}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default CatName
