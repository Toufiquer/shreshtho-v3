'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Define types for our seller data
interface Seller {
  id: number
  name: string
  logo: string
  reviews: number
  verified: boolean
  slug: string
}

// Props interface for our component
interface TopSellersProps {
  title?: string
  viewAllUrl?: string
  initialSellers?: Seller[]
}

const TopSellers = ({
  title = 'Top Sellers',
  viewAllUrl = '/sellers',
  initialSellers = [],
}: TopSellersProps) => {
  const [sellers, setSellers] = useState<Seller[]>(initialSellers)
  const [isLoading, setIsLoading] = useState(initialSellers.length === 0)

  useEffect(() => {
    // If no initial sellers provided, fetch them
    if (initialSellers.length === 0) {
      // Simulate API fetch with mock data
      const fetchSellers = async () => {
        // Mock data based on the image
        const mockSellers: Seller[] = [
          {
            id: 1,
            name: 'Dakpakhi',
            logo: '/images/sellers/dakpakhi.png',
            reviews: 0,
            verified: true,
            slug: 'dakpakhi',
          },
          {
            id: 2,
            name: 'Bismillah Shop',
            logo: '/images/sellers/bismillah.png',
            reviews: 0,
            verified: true,
            slug: 'bismillah-shop',
          },
          {
            id: 3,
            name: 'Beauty & Cosmetics shop',
            logo: '/images/sellers/beauty.png',
            reviews: 0,
            verified: true,
            slug: 'beauty-cosmetics',
          },
          {
            id: 4,
            name: 'DressUp',
            logo: '/images/sellers/dressup.png',
            reviews: 0,
            verified: true,
            slug: 'dressup',
          },
          {
            id: 5,
            name: 'Evona Mart',
            logo: '/images/sellers/evona.png',
            reviews: 0,
            verified: true,
            slug: 'evona-mart',
          },
        ]

        // Simulating network delay
        setTimeout(() => {
          setSellers(mockSellers)
          setIsLoading(false)
        }, 500)
      }

      fetchSellers()
    }
  }, [initialSellers])

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Render stars based on rating
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-gray-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    return stars
  }

  return (
    <div className="w-full px-4 py-8 bg-white">
      <div className="container mx-auto">
        {/* Header section with title and view all link */}
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-2xl font-bold text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={viewAllUrl}
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              View All Sellers
            </Link>
          </motion.div>
        </div>

        {/* Sellers grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 h-64 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sellers.map((seller) => (
              <motion.div
                key={seller.id}
                className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center"
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  transition: { duration: 0.2 },
                }}
              >
                {/* Logo and verification badge */}
                <div className="relative mb-4 mt-2">
                  <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 relative">
                    <Image
                      src={seller.logo}
                      alt={seller.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {seller.verified && (
                    <div className="absolute top-0 right-0 bg-blue-500 rounded-full p-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Seller name */}
                <h3 className="text-lg font-medium text-gray-800 mb-2 text-center">
                  {seller.name}
                </h3>

                {/* Ratings */}
                <div className="flex items-center mb-3">
                  {renderStars()}
                  <span className="text-sm text-gray-500 ml-1">
                    ({seller.reviews} reviews)
                  </span>
                </div>

                {/* Visit store button */}
                <Link
                  href={`/sellers/${seller.slug}`}
                  className="w-full mt-auto"
                >
                  <motion.div
                    className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-medium group"
                    whileHover={{
                      backgroundColor: '#f3f4f6',
                      color: '#1f2937',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>VISIT STORE</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default TopSellers
