'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import CatCard from '@/src/components/CatCard'
import { FaSearch, FaTimes } from 'react-icons/fa'

function Fundraisers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('newest')

  const [cards, setCard] = useState([
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1572590285030-0ae6a4715671?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Oliver is looking for a home',
      author: 'Author Name 1',
      progress: 24,
      raisedAmount: 5000,
      date: new Date('2024-01-15'), // Example date
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Help Peaches',
      author: 'Author Name 2',
      progress: 70,
      raisedAmount: 7500,
      date: new Date('2024-02-01'), // Example date
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1561948955-570b270e7c36?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card Title 3',
      author: 'Author Name 3',
      progress: 30,
      raisedAmount: 3000,
      date: new Date('2023-12-01'), // Example date
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1585373683920-671438c82bfa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Card Title 4',
      author: 'Author Name 4',
      progress: 90,
      raisedAmount: 9000,
      date: new Date('2024-03-01'), // Example date
    },
  ])
  const router = useRouter()

  const catDetails = (id) => {
    router.push(`/fundraiser-details/?id=${id}`)
  }

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  const sortedCards = [...filteredCards].sort((a, b) => {
    switch (filter) {
      case 'closeToGoal':
        return b.progress - a.progress //sort by progress
      case 'newest':
        return b.date - a.date //sort by newest first
      case 'oldest':
        return a.date - b.date //sort by oldest first
      case 'highestRaised':
        return b.raisedAmount - a.raisedAmount //sort by highest raised amout
      case 'lowestRaised':
        return a.raisedAmount - b.raisedAmount // sort by lowest amount
      default:
        return 0
    }
  })
  return (
    <div className="min-h-screen p-6">
      <div className="text-center mb-6 ">
        <h1 className="text-lg md:text-3xl font-bold ">
          Search fundraiser on Meow
        </h1>
        <p className="text-sm md:text-gray-500 ">
          Find fundraiser by tiitle, keyword, or author's name.
        </p>
      </div>

      <div className="flex justify-center mb-8 ">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Seach..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-2 px-4 pl-10 pr-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />

          <div className="absolute inset-y-0  left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400 text-sm md:text-base " />
          </div>

          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <FaTimes className="text-gray-400 text-sm md:text-base " />
            </button>
          )}
        </div>
      </div>

      <div className="container mx-auto px-0 md:px-6">
        <div className="flex justify-center flex-wrap space-x-2 mb-8 sm:mb-0 ">
          {[
            'newest',
            'oldest',
            'highestRaised',
            'lowestRaised',
            'closeToGoal',
          ].map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`
              py-0 my-2 mx-4 px-2 md:py-1 md:px-4 rounded-xl shadow-sm focus:outline-none ${
                filter === option
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {/* " $1"inserts a space before each uppercase letter. */}
              {option.charAt(0).toUpperCase() +
                option.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {sortedCards.map((card) => (
            <CatCard
              key={card.id}
              id={card.id}
              image={card.image}
              title={card.title}
              author={card.author}
              progress={card.progress}
              raisedAmount={card.raisedAmount}
              catDetails={catDetails}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Fundraisers
