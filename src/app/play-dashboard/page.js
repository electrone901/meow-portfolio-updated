'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsHeartFill } from 'react-icons/bs'
import EarnPointsCard from '@/src/components/EarnPointsCard'

function PlayDashboard() {
  const router = useRouter()
  const points = '100'

  return (
    <div
      style={{
        backgroundImage: `url(${'background.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '104vh', // Set to full height of the viewport
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
            Dashboard Agent
          </p>

          {/* GRID*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* grid col 1 */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col items-center">
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
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer w-[220px] mx-auto rounded-xl overflow-hidden shadow-lg">
                <Image src="feedtrophy.svg" width={40} height={40} alt="pet" />
                <p className="font-semibold text-2xl text-black px-4 py-3">
                  Daily Points
                </p>
                <small>Coming soon</small>
              </div>

              <div
                className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer w-[220px] mx-auto rounded-xl overflow-hidden shadow-lg"
                onClick={() => router.push('/selectFood')}
              >
                <Image src="fish.svg" width={40} height={40} alt="pet" />
                <p className="font-semibold text-2xl text-black px-4 py-3">
                  Feed Cat
                </p>
              </div>

              <div className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer w-[220px] mx-auto rounded-xl overflow-hidden shadow-lg">
                <Image src="customize.svg" width={40} height={40} alt="pet" />
                <p className="font-semibold text-2xl text-black px-4 py-3">
                  Customize
                </p>
                <small>Coming soon</small>
              </div>

              <div className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer w-[220px] mx-auto rounded-xl overflow-hidden shadow-lg">
                <Image src="marketplace.svg" width={40} height={40} alt="pet" />
                <p className="font-semibold text-2xl text-black px-4 py-3">
                  Market Place
                </p>
                <small>Coming soon</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayDashboard
