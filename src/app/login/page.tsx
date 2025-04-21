/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { RiGoogleLine } from 'react-icons/ri'
import { PiFacebookLogoThin } from 'react-icons/pi'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, password, rememberMe })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.03,
      backgroundColor: '#c62a00',
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600">WELCOME BACK !</h1>
          <p className="text-gray-600 mt-2">Login to your account.</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <motion.div variants={itemVariants} className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-2 font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="johndoe@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 mb-2 font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <motion.button
                type="button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember Me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-gray-500 hover:text-red-600 transition duration-200"
            >
              Forgot password?
            </Link>
          </motion.div>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md font-medium transition-colors duration-200"
          >
            Login
          </motion.button>
        </form>

        <motion.div variants={itemVariants} className="mt-6 text-center">
          <p className="text-gray-500">Or Login With</p>
          <div className="flex justify-center space-x-4 mt-4">
            {[
              {
                name: 'Facebook',
                color: 'bg-blue-600',
                icon: <PiFacebookLogoThin className="w-[80%] h-[80%]" />,
              },
              {
                name: 'Google',
                color: 'bg-red-500',
                icon: <RiGoogleLine className="w-[80%] h-[80%]" />,
              },
              //   {
              //     name: 'Twitter',
              //     color: 'bg-blue-400',
              //     icon: (
              //       <svg
              //         fill="currentColor"
              //         viewBox="0 0 24 24"
              //         className="h-5 w-5"
              //       >
              //         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.028 10.028 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.665 2.473c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.826 4.963 4.963 0 01-2.212.085 4.93 4.93 0 004.604 3.417 9.873 9.873 0 01-6.102 2.105c-.398 0-.79-.023-1.175-.068a13.956 13.956 0 007.55 2.212c9.056 0 14.01-7.502 14.01-14.008 0-.213-.005-.425-.014-.636a9.936 9.936 0 002.46-2.549z" />
              //       </svg>
              //     ),
              //   },
              //   {
              //     name: 'Apple',
              //     color: 'bg-black',
              //     icon: (
              //       <svg
              //         fill="currentColor"
              //         viewBox="0 0 24 24"
              //         className="h-5 w-5"
              //       >
              //         <path d="M14.94 5.19A4.38 4.38 0 0016 2a4.44 4.44 0 00-3 1.52 4.17 4.17 0 00-1 3.09 3.69 3.69 0 002.94-1.42zm2.52 7.44a4.51 4.51 0 012.16-3.81 4.66 4.66 0 00-3.66-2c-1.56-.16-3 .91-3.84.91-.83 0-2.12-.89-3.49-.86a4.92 4.92 0 00-4.12 2.53c-1.78 3.08-.46 7.64 1.25 10.14.84 1.21 1.84 2.57 3.14 2.52 1.25-.05 1.74-.81 3.25-.81s1.95.81 3.28.78c1.35-.05 2.22-1.23 3-2.45a10.04 10.04 0 001.35-2.77 4.39 4.39 0 01-2.66-4.04z" />
              //       </svg>
              //     ),
              //   },
            ].map((social, index) => (
              <motion.button
                key={social.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${social.color} text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md`}
                aria-label={`Login with ${social.name}`}
              >
                {social.icon}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link
              href="/registration"
              className="text-red-600 font-medium hover:underline"
            >
              Register Now
            </Link>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-red-600 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Previous Page
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoginPage
