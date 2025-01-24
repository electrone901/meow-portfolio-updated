'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const backgroundImageStyle = {
    backgroundImage: 'url("cat-heart.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  }

  const router = useRouter()
  return (
    <div className="px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-16">
        <div className="pl-0 sm:pl-8">
          <div className="pt-12 sm:pt-24  text-[#C3994A] font-jetbrains-mono text-3xl font-extrabold leading-normal sm:text-3xl md:text-4xl">
            <p className="">Turning every cat's</p>
            <p>frown into a happy</p>
            <p>purr</p>
          </div>
          {/* Buttons  */}
          <button
            className="bg-[#C3994A] text-white border-4 border-[#F5C364] hover:bg-[#F5C364] rounded-lg w-full sm:w-[307px] mt-10 sm:mt-20  font-jetbrains-mono text-xl font-extrabold leading-normal p-4"
            onClick={() => router.push('/statusCat')}
          >
            Upload Your Cat Story
          </button>

          <p className="text-gray-500 font-jetbrains-mono text-xs font-normal leading-normal mt-1">
            Share cat stories to raise essential funds
          </p>
          <button
            className="bg-[#C3994A] text-white border-4 border-[#F5C364] hover:bg-[#F5C364]  rounded-lg w-full sm:w-[307px]  mt-10 sm:mt-20  font-jetbrains-mono text-xl font-extrabold leading-normal p-4"
            onClick={() => router.push('/fundraisers')}
          >
            Find Your Cat Pal
          </button>
          <p className="text-gray-500 font-jetbrains-mono text-xs font-normal leading-normal mt-1">
            Play games, help cats with donations
          </p>
        </div>
        <div className="mt-12 sm:mt-96 md:mt-96">
          <Image
            src="/cat-heart.png"
            width={1900}
            height={1900}
            alt="pet"
            className={`object-cover rounded-md w-full h-auto max-w-full`}
          />
        </div>
      </div>
    </div>
  )
}
