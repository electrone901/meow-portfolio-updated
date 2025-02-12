'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import { HiArrowCircleRight } from 'react-icons/hi'

import { HiArrowDownCircle } from 'react-icons/hi2'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { BsHeartFill } from 'react-icons/bs'

function Confirmation() {
  const router = useRouter()
  const [selected, setSelected] = useState(Number(-1))
  const [selectedFood, setSelectedFood] = useState('')
  const [showDailyLogin, setShowDailyLogin] = useState(false)
  const [showDailyQuiz, setShowDailyQuiz] = useState(false)
  const points = '100'

  return (
    <div>
      <p className="text-right mr-40 mt-10 ">Current Points: {points}</p>
      <div className="flex items-center justify-center">
        <div className="w-full sm-w[70%] mt-10 px-4">
          <p
            className="font-semibold text-3xl text-black
          pt-8 pb-10 text-center"
          >
            Congratulations your profile has been created.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                  className="object-cover w-[80%] sm:w-[70%] md:w-[60%] lg:w-[80%] h-auto"
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

            <div className="bg-white border-8 border-[#FED595] rounded-md col-span-1 sm:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-center bg-[#F5F1F1] mb-4">
                <p className="font-semibold text-2xl text-black px-2 py-6   ">
                  Earn Daily Points
                </p>
              </div>

              <div className="flex items-center justify-center bg-[#F5F1F1] mb-4">
                <div className="w-auto py-6">
                  <Image
                    src="calendar.svg"
                    width={40}
                    height={40}
                    alt="calendar icon"
                  />
                </div>

                <div className="w-[30%]">
                  <p className="font-semibold text-2xl text-black px-4 py-3">
                    Daily log text
                  </p>
                </div>

                <div className="w-[20%]">
                  <p>+ 1 point</p>
                </div>

                <div className="w-auto text-4xl">
                  <MdKeyboardDoubleArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
