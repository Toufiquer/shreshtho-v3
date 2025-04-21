/*
|-----------------------------------------
| setting up MainMenu for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import ContainerBox from './ContainerBox'

// Type definitions
interface MenuItem {
  name: string
  href: string
}

interface CartInfo {
  total: string
  itemCount: number
}

interface MainMenuProps {
  cartInfo?: CartInfo
}

const MainMenu: React.FC<MainMenuProps> = ({
  cartInfo = { total: '$0.00', itemCount: 0 },
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Menu items
  const menuItems: MenuItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Flash Sale', href: '/flash-sale' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'All Brands', href: '/brands' },
    { name: 'All categories', href: '/categories' },
  ]

  // Check if device is mobile on mount and when window is resized
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener('resize', checkIfMobile)

    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Animation variants for menu items
  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  // Animation variants for the cart
  const cartVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  // Animation variants for category dropdown
  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-red-600 text-white"
    >
      <ContainerBox>
        <div>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
              {/* Categories dropdown */}
              <motion.div
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
                className="hidden md:flex items-center"
              >
                <div className="relative">
                  <button className="flex items-center space-x-1 font-bold">
                    <span>Categories</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="ml-2 text-sm text-gray-200">(See All)</span>
                </div>
              </motion.div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-700 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex space-x-8">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      custom={index}
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link href={item.href}>
                        <motion.span
                          className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {item.name}
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Shopping cart */}
              <motion.div
                variants={cartVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center"
              >
                <motion.div
                  className="flex items-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ShoppingCart size={20} className="text-white" />
                  <div className="ml-2">
                    <span className="font-bold">{cartInfo.total}</span>
                    <span className="ml-1 text-sm">
                      ({cartInfo.itemCount} Items)
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobile && (
            <motion.div
              className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isOpen ? 'auto' : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-red-700">
                {menuItems.map((item, index) => (
                  <Link href={item.href} key={item.name}>
                    <motion.span
                      className="text-white block px-3 py-2 rounded-md text-base font-medium"
                      whileHover={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      custom={index}
                      variants={menuVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </ContainerBox>
    </motion.nav>
  )
}

export default MainMenu
