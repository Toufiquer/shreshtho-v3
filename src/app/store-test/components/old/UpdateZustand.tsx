// zustands/features/shops/useShops.ts
import { create } from 'zustand'
import { ShopData } from './SharedType'

export type ShopsData = ShopData

// Initial sample data
export const initialData: ShopsData[] = [
  {
    id: '1',
    shopName: 'Corner Cafe',
    address: '123 Main St, Anytown, USA',
    fullName: 'John Doe',
    email: 'john@cornercafe.com',
    password: 'password123',
  },
  {
    id: '2',
    shopName: 'Bakery Delight',
    address: '456 Oak Ave, Somewhere, USA',
    fullName: 'Jane Smith',
    email: 'jane@bakerydelight.com',
    password: 'password456',
  },
  {
    id: '3',
    shopName: 'Book Nook',
    address: '789 Elm St, Nowhere, USA',
    fullName: 'Sam Johnson',
    email: 'sam@booknook.com',
    password: 'password789',
  },
]

// Define the store state type
interface ShopsStore {
  data: ShopsData[]
  isLoading: boolean
  isEditing: string | null
  setData: (data: ShopsData[]) => void
  addData: (item: ShopsData) => void
  updateData: (id: string, data: Partial<ShopsData>) => void
  deleteData: (id: string) => void
  setIsLoading: (status: boolean) => void
  setIsEditing: (id: string | null) => void
}

// Create the store
export const useShopsStore = create<ShopsStore>((set) => ({
  data: [],
  isLoading: false,
  isEditing: null,

  setData: (data) => set({ data }),

  addData: (item) =>
    set((state) => ({
      data: [...state.data, item],
    })),

  updateData: (id, newData) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, ...newData } : item
      ),
    })),

  deleteData: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),

  setIsLoading: (status) => set({ isLoading: status }),

  setIsEditing: (id) => set({ isEditing: id }),
}))

// Hooks for components to use
export const useGetDataQuery = () => {
  const data = useShopsStore((state) => state.data)
  const setData = useShopsStore((state) => state.setData)
  return { data, setData, isLoading: false, isError: false, error: '' }
}

export const useCreateDataMutation = () => {
  const addData = useShopsStore((state) => state.addData)
  const setIsLoading = useShopsStore((state) => state.setIsLoading)

  const addWithLoading = (data: ShopsData) => {
    setIsLoading(true)
    setTimeout(() => {
      addData(data)
      setIsLoading(false)
    }, 500)
  }

  return [addWithLoading]
}

export const useUpdateDataMutation = () => {
  const updateData = useShopsStore((state) => state.updateData)
  const setIsLoading = useShopsStore((state) => state.setIsLoading)
  const setIsEditing = useShopsStore((state) => state.setIsEditing)

  const updateWithLoading = (id: string, data: Partial<ShopsData>) => {
    setIsLoading(true)
    setTimeout(() => {
      updateData(id, data)
      setIsEditing(null)
      setIsLoading(false)
    }, 500)
  }

  return [updateWithLoading]
}

export const useDeleteDataMutation = () => {
  const deleteData = useShopsStore((state) => state.deleteData)
  const setIsLoading = useShopsStore((state) => state.setIsLoading)

  const deleteWithLoading = (id: string) => {
    setIsLoading(true)
    setTimeout(() => {
      deleteData(id)
      setIsLoading(false)
    }, 500)
  }

  return [deleteWithLoading]
}

export const useStoreState = () => {
  const isLoading = useShopsStore((state) => state.isLoading)
  const isEditing = useShopsStore((state) => state.isEditing)
  const setIsEditing = useShopsStore((state) => state.setIsEditing)

  return { isLoading, isEditing, setIsEditing }
}
