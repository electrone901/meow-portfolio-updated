'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsHeartFill } from 'react-icons/bs'
import CatProfile from '@/src/components/CatProfile'

function FeedCat() {
  const [selected, setSelected] = useState(-1)
  const [selectedFood, setSelectedFood] = useState('')
  const router = useRouter()

  const foodItems = [
    { name: 'Fish', image: '/image 1.png' },
    { name: 'Grapes', image: '/image 2.png' },
    { name: 'Fried Rice', image: '/image 3.png' },
    { name: 'Coconut', image: '/image 4.png' },
    { name: 'Watermelon', image: '/image 5.png' },
    { name: 'Water', image: '/image 6.png' },
  ]

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
        <div className="w-[90%] sm:w-[80%] md:w-[70%]">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl text-black px-2 py-24 text-center">
            Let's find out what your pet is in the mood to eat today
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* ROW 1 */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 min-h-[300px] relative">
              {selected !== -1 && (
                <div className="absolute top-[40px] right-0 bg-white text-black p-3 rounded-lg z-10 text-sm">
                  <span> I love {selectedFood} </span>
                  <div className="relative z-1 flex items-center">
                    <p>~Meow~</p>
                    <BsHeartFill color="red" fontSize={15} className="ml-1" />
                    <BsHeartFill color="red" fontSize={15} className="ml-1" />
                  </div>
                </div>
              )}
              <CatProfile />
            </div>

            {/* ROW 2 */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <div className="bg-[#FFECCE] border-8 border-white rounded-md">
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="flex items-center justify-around mb-4 flex-wrap">
                    {foodItems.slice(0, 3).map((food, index) => (
                      <Image
                        key={index}
                        src={food.image}
                        width={1900}
                        height={1900}
                        alt="pet"
                        className={`object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] p-2 cursor-pointer ${
                          selected === index &&
                          'border-4 border-dotted border-black p-4 rounded-lg'
                        }`}
                        onClick={() => {
                          setSelected(index)
                          setSelectedFood(food.name)
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-around mt-4 flex-wrap">
                    {foodItems.slice(3).map((food, index) => (
                      <Image
                        key={index + 3}
                        src={food.image}
                        width={1900}
                        height={1900}
                        alt="pet"
                        className={`object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] p-2 cursor-pointer ${
                          selected === index + 3 &&
                          'border-4 border-dotted border-black p-4 rounded-lg'
                        }`}
                        onClick={() => {
                          setSelected(index + 3)
                          setSelectedFood(food.name)
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
