// components/DeleteStore.tsx
'use client'
import { motion } from 'framer-motion'

interface DeleteStoreProps {
  shopId: string
  onDelete: (id: string) => void
  isLoading: boolean
}

const DeleteStore: React.FC<DeleteStoreProps> = ({
  shopId,
  onDelete,
  isLoading,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm cursor-pointer"
      onClick={() => onDelete(shopId)}
      disabled={isLoading}
    >
      Delete
    </motion.button>
  )
}

export default DeleteStore
