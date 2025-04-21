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
export interface ShopsStore {
  data: ShopsData[]
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  isEditing: string | null
  deleteData: (id: string) => void
  addData: (item: ShopsData) => void
  setData: (data: ShopsData[]) => void
  setIsLoading: (status: boolean) => void
  setIsEditing: (id: string | null) => void
  updateData: (id: string, data: Partial<ShopsData>) => void
}
export type QueryData = {
  data: ShopData[]
  setData: (data: ShopsData[]) => void
  isLoading: boolean
  error: string | null
  isError: boolean
  isSuccess: boolean
}
export type MutationDataStatus = {
  isLoading: boolean
  error: string | null
  isError: boolean
  isSuccess: boolean
  isEditing: string | null
  setIsEditing: (id: string | null) => void
}
export type MutationUpdateData = [
  (id: string, data: Partial<ShopsData>) => void,
  {
    isLoading: boolean
    error: string | null
    isError: boolean
    isSuccess: boolean
  },
]
export type MutationDeleteData = [
  (id: string) => void,
  {
    isLoading: boolean
    error: string | null
    isError: boolean
    isSuccess: boolean
  },
]
export type MutationCreateData = [
  (data: ShopsData) => void,
  {
    isLoading: boolean
    error: string | null
    isError: boolean
    isSuccess: boolean
  },
]
// Create the store
export const useShopsStore = create<ShopsStore>((set) => ({
  data: [],
  error: '',
  isEditing: null,
  isError: false,
  isSuccess: false,
  isLoading: false,

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
export const useGetDataQuery = (): QueryData => {
  const data = useShopsStore((state) => state.data)
  const setData = useShopsStore((state) => state.setData)
  const isLoading = useShopsStore((state) => state.isLoading)
  const isError = useShopsStore((state) => state.isError)
  const isSuccess = useShopsStore((state) => state.isSuccess)
  const error = useShopsStore((state) => state.error)
  return { data, setData, isLoading, error, isError, isSuccess }
}

export const useCreateDataMutation = (): MutationCreateData => {
  const addData = useShopsStore((state) => state.addData)
  const setIsLoading = useShopsStore((state) => state.setIsLoading)
  const isLoading = useShopsStore((state) => state.isLoading)
  const isError = useShopsStore((state) => state.isError)
  const isSuccess = useShopsStore((state) => state.isSuccess)
  const error = useShopsStore((state) => state.error)
  const addWithLoading = (data: ShopsData) => {
    setIsLoading(true)
    setTimeout(() => {
      addData(data)
      setIsLoading(false)
    }, 500)
  }

  return [addWithLoading, { isLoading, error, isError, isSuccess }]
}

export const useUpdateDataMutation = (): MutationUpdateData => {
  const updateData = useShopsStore((state) => state.updateData)
  const setIsLoading = useShopsStore((state) => state.setIsLoading)
  const setIsEditing = useShopsStore((state) => state.setIsEditing)
  const isLoading = useShopsStore((state) => state.isLoading)
  const isError = useShopsStore((state) => state.isError)
  const isSuccess = useShopsStore((state) => state.isSuccess)
  const error = useShopsStore((state) => state.error)
  const updateWithLoading = (id: string, data: Partial<ShopsData>) => {
    setIsLoading(true)
    setTimeout(() => {
      updateData(id, data)
      setIsEditing(null)
      setIsLoading(false)
    }, 500)
  }

  return [updateWithLoading, { isLoading, error, isError, isSuccess }]
}

export const useDeleteDataMutation = (): MutationDeleteData => {
  const deleteData = useShopsStore((state) => state.deleteData)
  const setIsLoading = useShopsStore((state) => state.setIsLoading)
  const isLoading = useShopsStore((state) => state.isLoading)
  const isError = useShopsStore((state) => state.isError)
  const isSuccess = useShopsStore((state) => state.isSuccess)
  const error = useShopsStore((state) => state.error)
  const deleteWithLoading = (id: string) => {
    setIsLoading(true)
    setTimeout(() => {
      deleteData(id)
      setIsLoading(false)
    }, 500)
  }

  return [deleteWithLoading, { isLoading, error, isError, isSuccess }]
}

export const useStoreState = (): MutationDataStatus => {
  const isLoading = useShopsStore((state) => state.isLoading)
  const isError = useShopsStore((state) => state.isError)
  const isSuccess = useShopsStore((state) => state.isSuccess)
  const error = useShopsStore((state) => state.error)
  const setIsEditing = useShopsStore((state) => state.setIsEditing)
  const isEditing = useShopsStore((state) => state.isEditing)
  return { isLoading, error, isError, isSuccess, isEditing, setIsEditing }
}
