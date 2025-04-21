'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

interface SlideImage {
  id: number
  url: string
}

interface SliderComponentsProps {
  images: SlideImage[]
  autoplaySpeed?: number
  heading?: string
  subheading?: string
}

const SliderComponents: React.FC<SliderComponentsProps> = ({
  images,
  autoplaySpeed = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  // Setup autoplay
  useEffect(() => {
    if (!isHovering) {
      timerRef.current = setInterval(goToNext, autoplaySpeed)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isHovering, autoplaySpeed, images.length])

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = setInterval(goToNext, autoplaySpeed)
    }
  }

  return (
    <motion.div
      className="relative w-full h-auto max-h-[420px] overflow-hidden bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ aspectRatio: '16/9' }}
    >
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          className="flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-400 tracking-widest">
            {heading}
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500 md:ml-4">
            {subheading}
          </h2> */}
        </motion.div>
      </div>

      {/* Images Slider */}
      <div
        className="h-full w-full relative"
        style={{ height: '100%', maxHeight: '420px' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative h-full w-full">
              <Image
                src={images[currentIndex].url}
                alt={`Slide ${currentIndex + 1}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 30%', // Focus more on the upper portion where people might be
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Demo content text */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 text-right z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          DEMO CONTENT FOR
        </p>
        <p className="text-orange-500 text-sm sm:text-base md:text-xl font-semibold">
          ACTIVE ECOMMERCE CMS
        </p>
      </motion.div>

      {/* Dots indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-20">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default SliderComponents
