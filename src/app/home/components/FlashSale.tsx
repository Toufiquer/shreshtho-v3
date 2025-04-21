/*
|-----------------------------------------
| setting up FlashSale for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Types
interface Product {
  id: number
  name: string
  price: number
  imageUrl: string
  discount?: number
  tags?: string[]
}

interface SliderImage {
  id: number
  url: string
}

interface FlashSaleProps {
  endDate: Date
  products: Product[]
  sliderImages: SliderImage[]
  title?: string
}

// Utility function for countdown
const calculateTimeLeft = (endDate: Date) => {
  const difference = +endDate - +new Date()
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

const FlashSale: React.FC<FlashSaleProps> = ({
  endDate,
  products,
  sliderImages,
  title = 'FLASH SALE',
}) => {
  // State for countdown
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate))

  // State for slider
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // Countdown effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(endDate))
    }, 1000)

    return () => clearTimeout(timer)
  })

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [sliderImages.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Banner Section */}
      <motion.div
        className="flex flex-col md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Banner with Timer */}
        <motion.div
          className="relative w-full md:w-1/3 bg-red-600 text-white flex flex-col justify-center items-center py-8 md:py-16"
          variants={itemVariants}
        >
          <div className="relative w-full h-96 md:h-full">
            <Image
              src={sliderImages[currentSlideIndex].url}
              alt="Flash Sale Promotion"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-red-600 opacity-50" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                variants={fadeInVariants}
              >
                {title}
              </motion.h2>

              <motion.div
                className="bg-white text-black p-4 rounded-lg w-full max-w-xs"
                variants={fadeInVariants}
              >
                <p className="text-red-600 text-xs mb-2">
                  For limited time in Flash Sale
                </p>

                <div className="flex justify-between">
                  <div className="text-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border-2 border-red-500">
                      <span className="text-xl font-bold">{timeLeft.days}</span>
                    </div>
                    <p className="text-xs mt-1">DAYS</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border-2 border-blue-500">
                      <span className="text-xl font-bold">
                        {timeLeft.hours}
                      </span>
                    </div>
                    <p className="text-xs mt-1">HRS</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border-2 border-blue-500">
                      <span className="text-xl font-bold">
                        {timeLeft.minutes}
                      </span>
                    </div>
                    <p className="text-xs mt-1">MIN</p>
                  </div>

                  <div className="text-center">
                    <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center border-2 border-black">
                      <span className="text-xl font-bold">
                        {timeLeft.seconds}
                      </span>
                    </div>
                    <p className="text-xs mt-1">SEC</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Products Grid */}
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-0 border-l border-gray-200">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="border-r border-b border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300 relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Link href={`/product/${product.id}`}>
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-40 mb-4">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>

                    {product.tags && product.tags.length > 0 && (
                      <div className="absolute top-2 right-2">
                        {product.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="bg-orange-500 text-white text-xs px-2 py-1 mb-1 rounded"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}

                    <h3 className="text-sm mb-2 text-center line-clamp-2">
                      {product.name}
                    </h3>

                    <p className="text-red-600 font-bold">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default FlashSale
