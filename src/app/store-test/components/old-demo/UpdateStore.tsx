// components/UpdateStore.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useUpdateDataMutation } from './UpdateZustand'
import { NewShop, ShopData } from './SharedType'

interface UpdateStoreProps {
  shop: ShopData
  onCancel: () => void
  isLoading: boolean
}

const UpdateStore: React.FC<UpdateStoreProps> = ({
  shop,
  onCancel,
  isLoading,
}) => {
  const [
    updateItem,
    { error, isError, isLoading: isLoadingUpdateData, isSuccess },
  ] = useUpdateDataMutation()
  const [editValues, setEditValues] = useState<NewShop>({
    shopName: shop.shopName,
    address: shop.address,
    description: shop.description || '',
    fullName: shop.fullName,
    email: shop.email,
    password: shop.password,
  })

  // Update local state when shop prop changes
  useEffect(() => {
    setEditValues({
      shopName: shop.shopName,
      address: shop.address,
      description: shop.description || '',
      fullName: shop.fullName,
      email: shop.email,
      password: shop.password,
    })
  }, [shop])

  // Handle input change when editing
  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setEditValues((prev) => ({ ...prev, [name]: value }))
  }

  // Save edited shop
  const handleSaveEdit = () => {
    updateItem(shop.id, editValues)
    onCancel()
  }

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Store Name
        </label>
        <input
          type="text"
          name="shopName"
          value={editValues.shopName}
          onChange={handleEditChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={editValues.address}
          onChange={handleEditChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={editValues.description}
          onChange={handleEditChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={2}
        />
      </div>
      <div className="flex justify-end space-x-2 mt-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 cursor-pointer"
          onClick={onCancel}
        >
          Cancel
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 cursor-pointer"
          onClick={handleSaveEdit}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center">
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
              Saving...
            </span>
          ) : (
            'Save'
          )}
        </motion.button>
      </div>
    </div>
  )
}

export default UpdateStore
