'use client'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useRouter, useSearchParams } from 'next/navigation'
import { get } from 'http'

function FundraiserDetails() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const id = searchParams.get('id')

  const selectedFundraiser = {
    image: 'catDet.jpg',
    category: 'category',
    imageType: 'imageType',
    title: 'Expensive Medical Treatment, help.',
    organizer: '0xFF96A324757l0F6DaE2382C2dAD52d6E196a8d14',
    url:
      'https://www.thehappycatsite.com/wp-content/uploads/2020/05/yellow-tabby-HC-long.jpg',
    targetAmmount: '500',
    totalDonations: '400',
    description:
      'On top of the daily heartache of the rescue cats themselves, the vets bill is spiraling and becoming an enormous worry for Sue. And that is the one thing we can try and help her with. We need to keep those doors open, for the sake of the cats that really need her help and their chance. We know things are not easy at the moment so we dont have any expectations on anybody, we can only hope that those who can throw a pound or two in our begging bucket- do. Every single pound REALLY does count, because every pound you give is one less to find. Thank you',
  }

  const donators = [
    { id: 1, name: 'Alice zhang', amount: '$50', category: 'Recent Donation' },
    { id: 2, name: 'Bob Smith', amount: '$75', category: 'Top Donation' },
    { id: 3, name: 'Charlie Deel', amount: '$30', category: 'Recent Donation' },
  ]

  const handleDonate = () => {}

  const handlePlay = () => {
    router.push(`/cat-selection`)
  }

  const getDonationProgress = (targetAmmount, currentDonations) => {
    return (currentDonations / targetAmmount) * 100
  }

  const donationStatus =
    getDonationProgress(
      selectedFundraiser.targetAmmount,
      selectedFundraiser.totalDonations,
    ) + '%'

  return (
    <div className="min-h-screen pb-4">
      <div className="container mx-auto p-4">
        {selectedFundraiser ? (
          <div className="space-y-8  ">
            <h1 className="text-xl font-semibold md:text-3xl">
              {selectedFundraiser.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-2 space-y-4">
                <img
                  src="/catDet.jpg"
                  alt={selectedFundraiser.image}
                  className="w-full h-auto rounded-lg shadow-lg"
                />

                <div className="flex items-center space-x-4">
                  <img
                    src="/profile-icon.png"
                    alt="Organizer"
                    className="w-16 h-16 rounded-full"
                  />
                  <p>
                    <strong>{`${selectedFundraiser.organizer.substring(
                      32,
                    )}...`}</strong>
                    is organizing this fundraiser.
                  </p>
                </div>
                <hr className="border-gray-300 " />
                <p className="">{selectedFundraiser.description} </p>
                <div className="flex space-x-2">
                  <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm sm:text-base">
                    Category: Pets
                  </span>

                  <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm sm:text-base">
                    Created at : Dec 01 2024
                  </span>

                  <span className="bg-gray-200 text-black px-3 py-1 rounded-full text-sm sm:text-base">
                    Fundraiser id: 1
                  </span>
                </div>
                <hr className="border-gray-300" />
                <h2 className="text-xl font-semibold md:text-2xl">Updates</h2>
                <p className="">No updates yet...</p>
              </div>

              <div className="col-span-1 ">
                <div className="bg-white p-4 md:px-8  shadow-lg rounded-lg">
                  <div className=" text-gray-600 text-xl font-semibold">
                    $
                    {selectedFundraiser.totalDonations === '0'
                      ? '0.00'
                      : selectedFundraiser.totalDonations}
                    <span className="text-gray-600 pl-2">
                      raised of $ {selectedFundraiser.targetAmmount}
                    </span>
                  </div>
                  <div className="my-2">
                    <div className="relative pt-1">
                      <div className="flex justify-between text-xs pt-6 text-gray-600">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-yellow-400"
                            style={{
                              width: donationStatus,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">30.3K donations</p>
                  <div className="mt-6 mb-2">
                    <button
                      className="w-full bg-gradient-to-r from-yellow-300 to-orange-400 text-black py-2 md:py-3 rounded-lg shadow-md"
                      onClick={handleDonate}
                    >
                      Donate Now
                    </button>
                    <button
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 text-black py-2 md:py-3 mt-3 rounded-lg shadow-md"
                      onClick={handlePlay}
                    >
                      Play Now
                    </button>
                  </div>

                  {donators.map((donator) => (
                    <div
                      key={donator.id}
                      className="flex items-center space-x-4 p-4  rounded-lg shadow-sm"
                    >
                      <FaUserCircle className="text-gray-600 text-3xl" />
                      <div className="flex-1">
                        <p className="text-black font-semibold">
                          {donator.name}
                        </p>
                        <p className="text-gray-700">{donator.amount}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          donator.category === 'Top Donation'
                            ? 'bg-yellow-300 text-yellow-800'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {donator.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => router.push('/')}
          >
            Refresh
          </button>
        )}
      </div>
    </div>
  )
}

export default FundraiserDetails
