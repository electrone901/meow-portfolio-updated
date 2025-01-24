import React from 'react'
import { useRouter } from 'next/navigation'

const CatCard = ({
  id,
  image,
  title,
  author,
  progress,
  raisedAmount,
  catDetails,
}) => {
  const router = useRouter()
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      onClick={() => catDetails(id)}
    >
      <img src={image} alt="Card Image" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-extrabold text-gray-800 mb-3 tracking-wide my-0">
          {title}
        </h2>
        <p className="text-gray-500 my-0 mb-4">by {author}</p>
        <div className="relative mb-4">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className={`h-full rounded-full ${getProgressColor(progress)}`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="font-bold text-sm text-gray-800">
          ${raisedAmount} Raised
        </p>
      </div>
    </div>
  )
}

// Function to get progress bar color based on percentage
const getProgressColor = (progress) => {
  if (progress <= 40) return 'bg-red-500'
  if (progress <= 70) return 'bg-yellow-500'
  return 'bg-green-500'
}

export default CatCard
