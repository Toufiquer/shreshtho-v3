// pages/StoreManagementPage.tsx
'use client'
import { motion } from 'framer-motion'
import { ShopData } from './SharedType'
import ViewStore from './ViewStore'
import AddStore from './AddStore'
import {
  initialData,
  useDeleteDataMutation,
  useGetDataQuery,
  useShopsStore,
  useStoreState,
} from './UpdateZustand'

const StoreManagementPage: React.FC = () => {
  // Get zustand store hooks
  const { data: shopData, setData } = useGetDataQuery()
  const [deleteItem] = useDeleteDataMutation()
  const { isLoading, isEditing, setIsEditing } = useStoreState()

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  }

  // Set initial data
  const handleSetData = () => {
    // Adding descriptions to the initial data
    const enhancedData = initialData.map((shop, index) => {
      const descriptions = [
        'A cozy place for coffee lovers',
        'Fresh bread and pastries daily',
        'Wide selection of books for all ages',
        'Handcrafted pottery and ceramics',
        'Organic produce and local goods',
        'Latest fashion trends and accessories',
        'Tech gadgets and accessories',
        'Home decor and furniture',
        'Sports equipment and apparel',
        'Art supplies and framing services',
      ]

      return {
        ...shop,
        // Add a description based on the index
        description: descriptions[index % descriptions.length],
      }
    })

    useShopsStore.getState().setIsLoading(true)
    setTimeout(() => {
      setData(enhancedData)
      useShopsStore.getState().setIsLoading(false)
    }, 800) // Simulate loading
  }

  // Handle edit shop
  const handleEditShop = (shop: ShopData) => {
    setIsEditing(shop.id || null)
  }

  return (
    <motion.div
      className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={itemVariants}
        className="flex justify-between items-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800">Store Management</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
          onClick={handleSetData}
          disabled={isLoading}
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
          Load Sample Data
        </motion.button>
      </motion.div>

      {/* Store List Section */}
      <ViewStore
        shopData={shopData}
        onEdit={handleEditShop}
        isEditing={isEditing}
        onDelete={deleteItem}
        isLoading={isLoading}
      />

      {/* Add New Store Section */}
      <AddStore isLoading={isLoading} />
    </motion.div>
  )
}

export default StoreManagementPage
