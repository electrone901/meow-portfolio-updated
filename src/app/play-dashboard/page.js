'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import EarnPointsCard from '@/src/components/EarnPointsCard'
import CatProfile from '@/src/components/CatProfile'

function PlayDashboard() {
  const [hovered, setHovered] = useState(false)
  const router = useRouter()
  const points = '100'

  return (
    <div
      style={{
        backgroundImage: `url(${'background.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '104vh',
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
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <CatProfile />
            </div>

            {/* grid col 2 */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              <div
                className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer w-[220px] mx-auto rounded-xl overflow-hidden shadow-lg"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Image src="feedtrophy.svg" width={40} height={40} alt="pet" />
                <p className="font-semibold text-2xl text-black px-4 py-3">
                  Daily Points
                </p>
                <small>Coming soon</small>
                {hovered && (
                  <div className="absolute top-500 left-500  bg-white rounded-sm">
                    <EarnPointsCard
                      iconSource="calendar.svg"
                      name="Daily log text"
                      description="+ 1 point"
                    />
                    <EarnPointsCard
                      iconSource="calendar.svg"
                      name="Daily log text"
                      description="+ 1 point"
                    />
                  </div>
                )}
              </div>

              <div
                className="flex flex-col items-center justify-center bg-[#F5F1F1] cursor-pointer w-[220px] mx-auto rounded-xl overflow-hidden shadow-lg"
                onClick={() => router.push('/feed-cat')}
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
