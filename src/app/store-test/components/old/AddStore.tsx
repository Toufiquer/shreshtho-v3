// components/AddStore.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useCreateDataMutation } from './UpdateZustand'
import { NewShop } from './SharedType'

interface AddStoreProps {
  isLoading: boolean
}

const AddStore: React.FC<AddStoreProps> = ({ isLoading }) => {
  const [addData] = useCreateDataMutation()
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [newShop, setNewShop] = useState<NewShop>({
    shopName: '',
    address: '',
    description: '',
    fullName: '',
    email: '',
    password: '',
  })

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  // Handle input change for new shop
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setNewShop((prev) => ({ ...prev, [name]: value }))
  }

  // Add new shop
  const handleAddShop = () => {
    if (!newShop.shopName || !newShop.address) return

    const newShopWithId = {
      ...newShop,
      id: Date.now().toString(),
      fullName: newShop.fullName || `Owner of ${newShop.shopName}`,
      email:
        newShop.email ||
        `contact@${newShop.shopName.toLowerCase().replace(/\s+/g, '')}.com`,
      password: newShop.password || 'default123',
      description: newShop.description || '',
    }

    addData(newShopWithId)
    console.log('newShopWithId : ', newShopWithId)
    setNewShop({
      shopName: '',
      address: '',
      description: '',
      fullName: '',
      email: '',
      password: '',
    })
  }

  return (
    <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Add New Store
      </h2>
      <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Store Name
          </label>
          <input
            type="text"
            name="shopName"
            placeholder="Enter store name"
            value={newShop.shopName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter store address"
            value={newShop.address}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className={isMobile ? '' : 'col-span-2'}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description (Optional)
          </label>
          <textarea
            name="description"
            placeholder="Enter store description"
            value={newShop.description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={2}
          />
        </div>
        <div className={isMobile ? '' : 'col-span-2'}>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            onClick={handleAddShop}
            disabled={isLoading || !newShop.shopName || !newShop.address}
          >
            {isLoading ? (
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
            ) : null}
            Add Store
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default AddStore
