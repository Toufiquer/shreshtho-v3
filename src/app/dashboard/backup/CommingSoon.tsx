'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// TypeScript interface for component props
interface ComingSoonPageProps {
  title?: string
  description?: string
  logoUrl?: string
  launchDate?: string
  socialLinks?: {
    platform: string
    url: string
    icon: string
  }[]
  className?: string // Added for additional styling flexibility
}

// Mock function to handle subscription
const handleSubscriptionSubmit = async (
  email: string
): Promise<{ success: boolean; message: string }> => {
  // In a real implementation, this would call your API
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email && email.includes('@')) {
        resolve({ success: true, message: 'Subscription successful!' })
      } else {
        resolve({
          success: false,
          message: 'Please enter a valid email address.',
        })
      }
    }, 1000)
  })
}

export default function ComingSoonPage({
  title = 'Something Awesome is Brewing',
  description = 'Our revolutionary new platform is launching soon. Get ready!',
  logoUrl = '/logo/logo.jpg',
  launchDate = '2025-12-31T00:00:00Z',
  socialLinks = [
    { platform: 'Twitter', url: '#', icon: 'twitter' },
    { platform: 'LinkedIn', url: '#', icon: 'linkedin' },
    { platform: 'Instagram', url: '#', icon: 'instagram' },
  ],
  className = '',
}: ComingSoonPageProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{
    success?: boolean
    message?: string
  } | null>(null)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate countdown timer
  useEffect(() => {
    const target = new Date(launchDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [launchDate])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await handleSubscriptionSubmit(email)
      setSubmitResult(result)
      if (result.success) {
        setEmail('')
      }
    } catch (error) {
      console.log('error : ', error)
      setSubmitResult({
        success: false,
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
        duration: 0.5,
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

  // Icon components for social links
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'twitter':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        )
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        )
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className={`w-full h-full overflow-hidden text-sm ${className}`}>
      <motion.div
        className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white px-4 py-8 overflow-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-6 w-full items-center justify-center flex"
          >
            <div className="relative w-[400px] h-[100px] border">
              <Image
                className="object-fit"
                src={logoUrl}
                fill
                sizes="(max-width: 900px) 100vw"
                alt="Stock Price Image"
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-center mb-4"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-center text-blue-100 mb-10 max-w-2xl"
          >
            {description}
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full max-w-lg"
          >
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold">
                {timeLeft.days}
              </span>
              <span className="text-sm text-blue-200">Days</span>
            </div>
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold">
                {timeLeft.hours}
              </span>
              <span className="text-sm text-blue-200">Hours</span>
            </div>
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold">
                {timeLeft.minutes}
              </span>
              <span className="text-sm text-blue-200">Minutes</span>
            </div>
            <div className="bg-blue-800 bg-opacity-50 backdrop-blur rounded-lg p-4 flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold">
                {timeLeft.seconds}
              </span>
              <span className="text-sm text-blue-200">Seconds</span>
            </div>
          </motion.div>

          {/* Subscription Form */}
          <motion.div variants={itemVariants} className="w-full max-w-md mb-12">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-grow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 backdrop-blur border border-blue-400 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  disabled={isSubmitting}
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg font-medium transition-colors duration-200 disabled:bg-blue-700 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Notify Me'
                )}
              </motion.button>
            </form>

            {/* Form result message */}
            {submitResult && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 text-sm ${submitResult.success ? 'text-green-300' : 'text-red-300'}`}
              >
                {submitResult.message}
              </motion.div>
            )}
          </motion.div>

          {/* What to Expect Section */}
          <motion.div
            variants={itemVariants}
            className="mb-12 text-center max-w-2xl"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              What to Expect
            </h2>
            <ul className="text-blue-100">
              <li className="mb-2">
                ✨ Intuitive user interface with smart features
              </li>
              <li className="mb-2">
                🚀 Lightning-fast performance optimized for all devices
              </li>
              <li className="mb-2">
                🔒 Enterprise-grade security and reliability
              </li>
              <li className="mb-2">
                🌐 Seamless integration with your favorite tools
              </li>
            </ul>
          </motion.div>

          {/* Social Media Links */}
          <motion.div variants={itemVariants} className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-800 bg-opacity-30 hover:bg-opacity-50 p-3 rounded-full transition-all duration-200"
              >
                {getIcon(link.icon)}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Animated background gradient - now relative to this container */}
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-gradient-to-br from-blue-900 to-indigo-900"
          animate={{
            background: [
              'linear-gradient(to bottom right, #1e3a8a, #312e81)',
              'linear-gradient(to bottom right, #312e81, #1e3a8a)',
              'linear-gradient(to bottom right, #1e3a8a, #312e81)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.div>
    </div>
  )
}
