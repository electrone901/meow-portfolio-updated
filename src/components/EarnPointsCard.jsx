import React from 'react'
import Image from 'next/image'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md'

function EarnPointsCard({ iconSource, name, description }) {
  return (
    <div className="flex items-center justify-center bg-[#F5F1F1] mb-4 flex-wrap ">
      <div className="w-auto py-6 flex justify-center sm:justify-start sm:w-[20px] md:w-[60px] lg:w-[80px]">
        <Image
          src={iconSource}
          width={40}
          height={40}
          alt="calendar icon"
          className="w-full h-auto"
        />
      </div>

      <div className="w-[30%] px-1 py-3 sm:w-[40%] md:px-4  md:w-[40%] lg:w-[40%] ">
        <p className="font-semibold text-xs  md:text-xl lg:text-2xl text-black">
          {name}
        </p>
      </div>

      <div className="w-[20%] sm:w-[30%] md:w-[20%] lg:w-[20%] py-3 text-left">
        <p className=" text-sm sm:text-xl md:text-xl">{description}</p>
      </div>

      <div className="w-auto py-6 flex justify-center sm:w-[30px] md:w-[40px] lg:w-[40px]">
        <MdKeyboardDoubleArrowRight className="w-full h-auto" />
      </div>
    </div>
  )
}

export default EarnPointsCard
