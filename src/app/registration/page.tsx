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
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { RiGoogleLine } from 'react-icons/ri'
import { PiFacebookLogoThin } from 'react-icons/pi'

const RegisterPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

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
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  const buttonVariants = {
    hover: {
      scale: 1.03,
      backgroundColor: '#d63600',
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
    },
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-8">
      <motion.div
        className="w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl font-bold text-red-600 mb-6 text-center"
          variants={itemVariants}
        >
          CREATE AN ACCOUNT
        </motion.h1>

        <motion.form
          className="bg-white p-6 rounded-md shadow-md"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <label
              className="block text-gray-800 font-medium mb-2"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </motion.div>

          <motion.div className="mb-4" variants={itemVariants}>
            <label
              className="block text-gray-800 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </motion.div>

          <motion.div className="mb-4" variants={itemVariants}>
            <label
              className="block text-gray-800 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                minLength={6}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Password must contain at least 6 digits
            </p>
          </motion.div>

          <motion.div className="mb-6" variants={itemVariants}>
            <label
              className="block text-gray-800 font-medium mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            className="mb-6 flex items-center"
            variants={itemVariants}
          >
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              required
            />
            <label
              className="ml-2 block text-sm text-gray-800"
              htmlFor="agreeToTerms"
            >
              By signing up you agree to our{' '}
              <Link href="/terms" className="text-red-600 hover:underline">
                terms and conditions
              </Link>
            </label>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-medium"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Create Account
          </motion.button>

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
                  key={social.name + index}
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
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-red-600 font-medium hover:underline"
              >
                login
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
        </motion.form>
      </motion.div>
    </div>
  )
}

export default RegisterPage
