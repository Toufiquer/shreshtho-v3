/*
|-----------------------------------------
| setting up LogInForm for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
export const ShopsDataDefault = {
  email: '',
  password: '',
}
export interface ShopsData {
  email: string
  password: string
}
interface FormData extends ShopsData {
  confirmPassword: string
}

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Handle form submission logic here
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const buttonVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Personal Info
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">
              Valid email is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Password"
              {...register('password', {
                required: true,
                minLength: 6,
              })}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showPassword ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                )}
              </svg>
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500 text-xs mt-1">
              Password must be at least 6 characters
            </span>
          )}
          {!errors.password && (
            <span className="text-gray-400 text-xs mt-1">
              Password must contain at least 6 digits
            </span>
          )}
        </div>
      </motion.div>

      <motion.button
        variants={buttonVariants}
        initial="idle"
        whileHover="hover"
        type="submit"
        className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Login
      </motion.button>
    </form>
  )
}
export default LogInForm
