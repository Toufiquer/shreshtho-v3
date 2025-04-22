'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ShopProducts: React.FC = () => {
  const title = 'Featured Products'
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideshowImages = [
    { id: 1, url: '/slider/1.webp' },
    { id: 2, url: '/slider/2.webp' },
    { id: 3, url: '/slider/3.webp' },
  ]
  interface Product {
    id: number
    name: string
    price: number
    imageUrl: string
    tags?: string[]
    discount?: string
    slug?: string
    category: string
    salePrice: number
    originalPrice: number
  }
  const products: Product[] = [
    {
      id: 1,
      slug: '1',
      discount: '20',
      salePrice: 400,
      originalPrice: 500,
      category: 'Skincare',
      name: 'Neutrogena Rapid Wrinkle Repair Moisturizer',
      price: 1250.0,
      imageUrl: '/slider/1.webp',
      tags: ['ALPHA ARBUTIN', 'RADIANCE BOOSTER', 'PROTECTION'],
    },
    {
      id: 2,
      slug: '2',
      discount: '20',
      salePrice: 400,
      originalPrice: 500,
      category: 'Skincare',
      name: 'Vitamin C Face Serum',
      price: 1499.0,
      imageUrl: '/slider/1.webp',
      tags: ['VITAMIN BOOSTER', 'ANTI-AGING', 'GLOW SKIN'],
    },
    {
      id: 3,
      slug: '3',
      discount: '20',
      salePrice: 400,
      originalPrice: 500,
      category: 'Skincare',
      name: 'Wireless Gaming Speakers',
      price: 550.0,
      imageUrl: '/slider/1.webp',
    },
    {
      id: 4,
      slug: '4',
      discount: '20',
      salePrice: 400,
      originalPrice: 500,
      category: 'Skincare',
      name: 'Over-Ear Headphones',
      price: 800.0,
      imageUrl: '/slider/1.webp',
    },
    {
      id: 5,
      slug: '5',
      discount: '20',
      salePrice: 400,
      originalPrice: 500,
      category: 'Skincare',
      name: "Men's Outdoor Jacket",
      price: 3790.0,
      imageUrl: '/slider/1.webp',
    },
    {
      id: 6,
      slug: '6',
      discount: '20',
      salePrice: 400,
      originalPrice: 500,
      category: 'Skincare',
      name: 'Hyaluronic Acid Serum',
      price: 1050.0,
      imageUrl: '/slider/1.webp',
    },
  ]
  // Auto rotate slideshow images
  useEffect(() => {
    if (slideshowImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slideshowImages.length])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Format price with Indian Rupee symbol (₹)
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {title && (
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
      <div className="grid grid-cols-1 gap-8">
        {/* Feature slideshow */}
        {slideshowImages.length > 0 && (
          <motion.div
            className="relative aspect-square rounded-lg overflow-hidden col-span-1 lg:col-span-1 row-span-1 max-h-[500px] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            {slideshowImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image.url}
                  alt={`Slideshow image ${image.id}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </motion.div>
        )}

        {/* Products grid */}
        <motion.div
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={`/product/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.discount && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{product.discount}%
                    </div>
                  )}
                  <motion.div
                    className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </motion.div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm text-gray-500 mb-1">
                    {product.category}
                  </h3>
                  <h2 className="font-medium text-gray-900 mb-2 line-clamp-2 h-12">
                    {product.name}
                  </h2>
                  <div className="flex items-center">
                    {product.salePrice ? (
                      <>
                        <span className="font-bold text-gray-900">
                          {formatPrice(product.salePrice)}
                        </span>
                        <span className="ml-2 text-gray-500 line-through text-sm">
                          {formatPrice(product.originalPrice)}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-gray-900">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
              <motion.button
                className="w-full py-3 bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ backgroundColor: '#1a202c' }}
                whileTap={{ scale: 0.98 }}
              >
                Add to cart
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ShopProducts
