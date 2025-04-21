// components/ViewStore.tsx
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShopData } from './SharedType'
import UpdateStore from './UpdateStore'
import DeleteStore from './DeleteStore'
import { useStoreState } from './UpdateZustand'

interface ViewStoreProps {
  shopData: ShopData[]
  onEdit: (shop: ShopData) => void
  isEditing: string | null
  onDelete: (id: string) => void
}

const ViewStore: React.FC<ViewStoreProps> = ({
  shopData,
  onEdit,
  isEditing,
  onDelete,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const { isLoading } = useStoreState()
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

  return (
    <motion.div
      variants={itemVariants}
      className="mb-8 bg-gray-50 p-6 rounded-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Stores</h2>

      {shopData.length === 0 ? (
        <p className="text-gray-500 italic">
          No stores available. Add a new store or load sample data.
        </p>
      ) : (
        <div
          className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}
        >
          {shopData.map((shop) => (
            <motion.div
              key={shop.id}
              className="bg-white p-4 rounded-md shadow-md border border-gray-100"
              whileHover={{
                y: -5,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
              layout
            >
              {isEditing === shop.id ? (
                <UpdateStore
                  shop={shop}
                  onCancel={() => onEdit({ ...shop, id: '' })}
                  isLoading={isLoading}
                />
              ) : (
                <>
                  <h3 className="font-bold text-lg text-gray-800">
                    {shop.shopName}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{shop.address}</p>
                  {shop.description && (
                    <p className="text-gray-500 text-sm mt-2 italic">
                      {shop.description}
                    </p>
                  )}
                  <div className="flex justify-end space-x-2 mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
                      onClick={() => onEdit(shop)}
                    >
                      Edit
                    </motion.button>
                    <DeleteStore
                      shopId={shop.id}
                      onDelete={onDelete}
                      isLoading={isLoading}
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default ViewStore
