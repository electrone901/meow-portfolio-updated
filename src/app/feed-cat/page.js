'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsHeartFill } from 'react-icons/bs'
import CatProfile from '@/src/components/CatProfile'

function FeedCat() {
  const [selected, setSelected] = useState(Number(-1))
  const [selectedFood, setSelectedFood] = useState('')
  const router = useRouter()
  return (
    <div
      style={{
        backgroundImage: `url(${'background.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '104vh',
      }}
    >
      <div className="flex items-center justify-center">
        <div className="w-[90%] sm:w-[80%] md:w-[70%] mt-4 sm:mt-4 md:mt-40">
          <div className="mb-2">
            {selected == -1 && (
              <p className="font-bold text-xl sm:text-2xl md:text-3xl text-black px-2 py-2 text-center">
                Let's find out what your pet is in the mood to eat today
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              {selected !== -1 && (
                <div className="relative inline-block bg-white text-black p-4 rounded-lg items-center justify-center">
                  <span> I love </span>
                  <div className="relative z-1 flex items-center ">
                    <p>{selectedFood} ~Meow~</p>
                    <BsHeartFill color="red" fontSize={25} className="ml-1" />
                    <BsHeartFill color="red" fontSize={25} className="ml-1" />
                  </div>
                  <div className="absolute h-8 w-8 bg-white transform rotate-45 -mb-8 left-1/2 -translate-x-2 after:block after:w-8 after:h-8 after:bg-white after:absolute after:transform after:rotate-225 after:-mb-8 after:left-1/2 after:-translate-x-2"></div>
                </div>
              )}
              <CatProfile />
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <div className="bg-[#FFECCE] border-8 border-white rounded-md">
                <div className="flex flex-col items-center justify-center pt-8">
                  <div className="flex items-center justify-around mb-4 flex-wrap">
                    {['Coconut', 'Watermelon', 'Fish'].map((food, index) => (
                      <Image
                        key={index}
                        src={`/image ${index + 1}.png`}
                        width={1900}
                        height={1900}
                        alt="pet"
                        className={`object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] p-2 cursor-pointer ${
                          selected === index + 1 &&
                          'border-4 border-dotted border-black p-4 rounded-lg'
                        }`}
                        onClick={() => {
                          setSelected(index + 1)
                          setSelectedFood(food)
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-around mt-4 flex-wrap">
                    {['Grapes', 'Fried Rice', 'Water'].map((food, index) => (
                      <Image
                        key={food} // Use a unique key like food name instead of index
                        src={`/image ${index + 4}.png`} // Correct the index for the images
                        width={1900}
                        height={1900}
                        alt="pet"
                        className={`object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] p-2 cursor-pointer ${
                          selected === index + 4 &&
                          'border-4 border-dotted border-black p-4 rounded-lg'
                        }`}
                        onClick={() => {
                          setSelected(index + 4)
                          setSelectedFood(food)
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-8">
                <button
                  className={`bg-[#02B53C] text-white border-4 border-white px-8 py-4 rounded-xl transition duration-300 ease-in-out text-3xl w-full sm:w-[250px] ${
                    selected == -1
                      ? 'cursor-not-allowed opacity-50'
                      : 'hover:bg-[#72d35a]'
                  }`}
                  onClick={() => router.push('/foodPayment')}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCat
