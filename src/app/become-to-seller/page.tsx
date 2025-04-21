/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SignUpForm from './components/SignUpForm'

const SignUpSeller: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 py-8">
      <motion.div
        className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="p-6">
          <motion.h1
            variants={itemVariants}
            className="text-2xl font-bold text-red-600 mb-6"
          >
            REGISTER YOUR SHOP
          </motion.h1>

          <SignUpForm />

          <motion.div variants={itemVariants} className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Log In
              </Link>
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6">
            <Link
              href="/"
              className="flex items-center text-red-600 hover:text-red-800"
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
        </div>
      </motion.div>
    </div>
  )
}

export default SignUpSeller
