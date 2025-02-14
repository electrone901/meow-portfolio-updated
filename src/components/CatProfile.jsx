import React from 'react'
import Image from 'next/image'
import { BsHeartFill } from 'react-icons/bs'

function CatProfile() {
  return (
    <div className="flex flex-col items-center">
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
  )
}

export default CatProfile
