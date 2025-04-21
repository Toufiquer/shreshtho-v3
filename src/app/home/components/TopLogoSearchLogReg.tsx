'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Heart, Bell, User } from 'lucide-react'

const TopLogoSearchLogReg: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const logoSrc = '/logo/logo.jpg'
  const logoAlt = 'SHRESHTHO'
  // Check if window is defined (client-side)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.header
      className="w-full bg-white py-3 px-4 md:px-8 shadow-sm"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <Link href="/">
            <div className="h-8 w-32 relative cursor-pointer">
              <Image
                src={logoSrc}
                alt={logoAlt}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          variants={itemVariants}
          className="hidden md:flex flex-grow mx-4 lg:mx-8 max-w-2xl relative"
        >
          <input
            type="text"
            placeholder="I am shopping for..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2"
            aria-label="Search"
          >
            <Search className="text-gray-400 w-5 h-5" />
          </button>
        </motion.div>

        {/* Icons and Login/Register */}
        <motion.div
          variants={itemVariants}
          className="flex items-center space-x-2 md:space-x-5"
        >
          {isMobile && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-500"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-500"
            aria-label="Favorites"
          >
            <Heart className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-gray-500"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </motion.button>

          <motion.div variants={itemVariants} className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-gray-500"
              aria-label="User account"
            >
              <User className="w-5 h-5" />
            </motion.button>

            <div className="hidden md:block text-sm">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Login
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <Link
                href="/registration"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Registration
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default TopLogoSearchLogReg
