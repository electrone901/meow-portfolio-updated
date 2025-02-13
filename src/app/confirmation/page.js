'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsHeartFill } from 'react-icons/bs'
import EarnPointsCard from '@/src/components/EarnPointsCard'

function Confirmation() {
  const router = useRouter()
  const points = '100'

  return (
    <div
      className="bg-cover bg-repeat-y h-screen"
      style={{
        backgroundImage: `url(${'background.jpg'})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // height: 'auto', // Set to full height of the viewport
      }}
    >
      <p className="text-right mr-4 mt-10 sm:mr-20 md:mr-40 lg:mr-40">
        Current Points: {points}
      </p>
      <div className="flex items-center justify-center">
        <div className="w-[90%] sm-w[70%] mt-10 px-4 ">
          <p
            className="font-semibold text-3xl text-black
          pt-8 pb-10 text-center"
          >
            Congratulations your profile has been created.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* grid col 1 */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col items-center  ">
              <p className="font-semibold text-xl sm:text-2xl text-black text-center mb-4">
                MOMOTO.
              </p>
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/cat 001.png"
                  width={1900}
                  height={1900}
                  alt="pet image"
                  className="object-cover w-[60%] sm:w-[50%] md:w-[40%] lg:w-[60%]"
                />
              </div>
              <div className="relative z-1 flex items-center ">
                <BsHeartFill color="red" fontSize={25} className="ml-1" />
                <BsHeartFill color="gray" fontSize={25} className="ml-1" />
                <BsHeartFill color="gray" fontSize={25} className="ml-1" />
                <BsHeartFill color="gray" fontSize={25} className="ml-1" />
                <BsHeartFill color="gray" fontSize={25} className="ml-1" />
              </div>
            </div>

            {/* grid col 2 */}
            <div className="bg-white border-8 border-[#FED595] rounded-md col-span-1 sm:col-span-2 lg:col-span-3">
              {/* header */}
              <div className="flex items-center justify-center bg-[#F5F1F1] mb-4">
                <p className="font-semibold text-2xl text-black px-2 py-6">
                  Earn Daily Points
                </p>
              </div>

              {/* one col */}
              <EarnPointsCard
                iconSource="calendar.svg"
                name="Daily log text"
                description="+ 1 point"
              />
              <EarnPointsCard
                iconSource="quiz.svg"
                name="Daily quiz"
                description="+ 5 points"
              />
              <EarnPointsCard
                iconSource="feedcat.svg"
                name="Feed cat"
                description="+ 10 points"
              />

              {/* Footer */}
              <div className="flex items-center justify-center bg-[#F5F1F1] mb-0">
                <p className="text-sm md:text-xl text-black px-2 py-4">
                  Use your points to personalize your experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center my-10 sm:my-10 md:my-16">
        <button
          className={`bg-gray-400 text-white border-2 border-white hover:bg-gray-700 px-4 py-2
        rounded-lg transition duration-300 ease-in-out w-[180px] sm:w-[220px] md:w-[230px]`}
          onClick={() => router.push('/play-dashboard')}
        >
          Play
        </button>
      </div>
    </div>
  )
}

export default Confirmation
