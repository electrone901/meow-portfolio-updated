'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BiSolidRightArrow } from 'react-icons/bi'

function CatSelection() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState(Number(-1))
  const user = {}

  const data = [
    { front: '/cat 001.png', back: '/1.png' },
    { front: '/cat 002.png', back: '/2.png' },
    { front: '/cat 003.png', back: '/3.png' },
  ]

  const setImage = async () => {
    router.push('/cat-name')
  }

  return (
    <div className="min-h-screen bg-blue-300 text-white pb-20">
      <div className="flex items-center justify-center gap-4  mt-20 px-4 sm:p x-6 md:px-12 lg:px-48 py-10">
        <BiSolidRightArrow />
        <BiSolidRightArrow />
        <p className="font-semibold text-lg sm:text-xl md:text-2xl ">
          Step 1: Pick your CAT
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 flex-wrap px-4 sm:px-6 md:px-12 ">
        {data.map((item, index) => (
          <div
            key={index}
            className={`relative cursor-pointer transition-transform transform ${
              selectedImage === index ? 'border-4 border-blue-500 rounded' : ''
            } `}
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative">
              <Image
                src={item.front}
                width={900}
                height={900}
                alt="pet"
                className={`object-cover rounded-md border-8 border-white  ${
                  selectedImage === index
                    ? 'w-[250px] sm:w-[280px] md:w-[320px] h-[350px] sm:h-[380px] md:h-[420px]'
                    : 'w-[230px] sm:w-[260px] md:w-[300px] h-[330px] sm:h-[360px] md:h-[400px]'
                } transform duration-300 ease-in-out`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-16 ">
        <button
          className={`bg-gray-400 text-white border-2 border-white hover:bg-gray-700 px-4 py-2
        rounded-lg transition duration-300 ease-in-out w-[140px] sm:w-[160px] md:w-[180px] ${
          selectedImage === -1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
          onClick={setImage}
          disabled={selectedImage === -1}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default CatSelection
