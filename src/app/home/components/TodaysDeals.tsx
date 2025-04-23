'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface DealImage {
  id: number
  url: string
}

interface TodaysDealsProps {
  images?: DealImage[]
  title?: string
  subtitle?: string
  slideDuration?: number
}

const TodaysDeals: React.FC<TodaysDealsProps> = ({
  images = [
    { id: 1, url: '/public/slider/1.webp' },
    { id: 2, url: '/public/slider/2.webp' },
    { id: 3, url: '/public/slider/3.webp' },
  ],
  title = 'Todays Deal',
  subtitle = 'Available for limited time in Active eCommerce CMS',
  slideDuration = 5000,
}) => {
  const [, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, slideDuration)

    return () => clearInterval(interval)
  }, [images.length, slideDuration])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <motion.div
      className="w-full relative overflow-hidden bg-yellow-400"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {/* Banner Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-8 md:py-12">
        {/* Left Side with Text */}
        <motion.div
          className="z-10 text-center md:text-left mb-6 md:mb-0"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
            variants={fadeInUp}
          >
            Specially Made For YOU
          </motion.h2>

          <motion.div
            className="inline-block bg-white rounded-md px-8 py-3 md:py-4 mb-4"
            variants={fadeInUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-yellow-500">
              {title}
            </h3>
          </motion.div>

          <motion.p
            className="text-white text-lg md:text-xl"
            variants={fadeInUp}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TodaysDeals
