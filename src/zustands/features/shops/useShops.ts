// "@/zustand/features/shops/useShops.ts"
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const ShopsDataDefault = {
  id: '',
  fullName: '',
  email: '',
  password: '',
  shopName: '',
  address: '',
  description: '',
}

export interface ShopsData {
  id: string
  fullName: string
  email: string
  password: string
  shopName: string
  address: string
  description: string
}

export const initialData: ShopsData[] = Array.from(
  { length: 10 },
  (_, index) => {
    const shopNumber = index + 1
    return {
      id: String(shopNumber), // Or use a more robust ID generation if needed, like UUID
      fullName: `Shop Owner ${shopNumber}`,
      email: `shop${shopNumber}@example.com`,
      password: `password${shopNumber}`, // In real apps, never store plain passwords!
      shopName: `Shop ${shopNumber}`,
      address: `Address ${shopNumber}`,
      description: `Description ${shopNumber}`,
    }
  }
)
type StoreState = {
  data: ShopsData[] // Use ShopsData interface for data array
  query: {
    getData: {
      data: ShopsData[] // Use ShopsData interface here as well
      setData: (newData: ShopsData[]) => void
      addData: (item: ShopsData) => void // Use ShopsData interface
      updateItem: (id: string, updatedItem: Partial<ShopsData>) => void // Use Partial<ShopsData> for updates
      deleteItem: (id: string) => void
      bulkDeleteItems: (ids: string[]) => void
      bulkUpdateItems: (payload: {
        ids: string[]
        data: Partial<ShopsData>
      }) => void // Use Partial<ShopsData> for bulk updates
      getDataById: (id: string) => ShopsData | undefined // Use ShopsData interface
    }
  }
}

type StoreActions = {} // No actions needed separately now

export const useShopQueryStore = create<StoreState & StoreActions>()(
  persist(
    (set, get) => ({
      data: [], // Initial data state (can be hydrated from persisted state)
      query: {
        getData: {
          data: [],
          setData: (newData: ShopsData[]) => {
            set({ data: newData })
            set((state) => ({
              query: {
                ...state.query,
                getData: { ...state.query.getData, data: newData },
              },
            }))
          },
          addData: (item: ShopsData) => {
            const currentData = get().data
            const newData = [...currentData, item]
            console.log('new Data : ', newData)
            set({ data: newData })
            set((state) => ({
              query: {
                ...state.query,
                getData: { ...state.query.getData, data: newData },
              },
            }))
          },
          updateItem: (id: string, updatedItem: Partial<ShopsData>) => {
            const currentData = get().data
            const updatedData = currentData.map((item) =>
              item.id === id ? { ...item, ...updatedItem } : item
            ) as ShopsData[] // Type assertion needed as map might lose type info
            set({ data: updatedData })
            set((state) => ({
              query: {
                ...state.query,
                getData: { ...state.query.getData, data: updatedData },
              },
            }))
          },
          deleteItem: (id: string) => {
            const currentData = get().data
            const newData = currentData.filter((item) => item.id !== id)
            set({ data: newData })
            set((state) => ({
              query: {
                ...state.query,
                getData: { ...state.query.getData, data: newData },
              },
            }))
          },
          bulkDeleteItems: (ids: string[]) => {
            const currentData = get().data
            const newData = currentData.filter((item) => !ids.includes(item.id))
            set({ data: newData })
            set((state) => ({
              query: {
                ...state.query,
                getData: { ...state.query.getData, data: newData },
              },
            }))
          },
          bulkUpdateItems: (payload: {
            ids: string[]
            data: Partial<ShopsData>
          }) => {
            const currentData = get().data
            const updatedData = currentData.map((item) =>
              payload.ids.includes(item.id)
                ? { ...item, ...payload.data }
                : item
            ) as ShopsData[] // Type assertion needed here as well
            set({ data: updatedData })
            set((state) => ({
              query: {
                ...state.query,
                getData: { ...state.query.getData, data: updatedData },
              },
            }))
          },
          getDataById: (id: string) => {
            const currentData = get().data
            return currentData.find((item) => item.id === id)
          },
        },
      },
      mutation: {
        // You can keep mutation if you want to group these actions logically
        createData: {}, // Mutations are now just actions in getData
        updateData: {},
        deleteData: {},
        bulkDeleteData: {},
        bulkUpdateData: {},
      },
    }),
    {
      name: 'shopsQuerydata', // unique name for localStorage key
      partialize: (state) => ({
        data: state.data,
      }),
    }
  )
)

// Custom hooks to access query and mutation states and actions
export const useGetDataQuery = () => {
  const getDataState = useShopQueryStore((state) => state.query.getData)
  return {
    data: getDataState.data,
    setData: getDataState.setData,
    addData: getDataState.addData,
    updateItem: getDataState.updateItem,
    deleteItem: getDataState.deleteItem,
    bulkDeleteItems: getDataState.bulkDeleteItems,
    bulkUpdateItems: getDataState.bulkUpdateItems,
    getDataById: getDataState.getDataById,
  }
}

export const useCreateDataMutation = (): [(item: ShopsData) => void, {}] => {
  const addData = useShopQueryStore((state) => state.query.getData.addData)
  return [addData, {}] // Return empty object for mutation state as it's not tracked
}

export const useUpdateDataMutation = (): [
  updateItem: (id: string, updatedItem: Partial<ShopsData>) => void,
  {},
] => {
  const updateItem = useShopQueryStore(
    (state) => state.query.getData.updateItem
  )
  return [updateItem, {}] // Return empty object for mutation state
}

export const useDeleteDataMutation = (): [
  deleteItem: (id: string) => void,
  {},
] => {
  const deleteItem = useShopQueryStore(
    (state) => state.query.getData.deleteItem
  )
  return [deleteItem, {}] // Return empty object for mutation state
}

export const useBulkDeleteDataMutation = (): [
  bulkDeleteItems: (ids: string[]) => void,
  {},
] => {
  const bulkDeleteItems = useShopQueryStore(
    (state) => state.query.getData.bulkDeleteItems
  )
  return [bulkDeleteItems, {}] // Return empty object for mutation state
}

export const useBulkUpdateDataMutation = (): [
  bulkUpdateItems: (payload: {
    ids: string[]
    data: Partial<ShopsData>
  }) => void,
  {},
] => {
  const bulkUpdateItems = useShopQueryStore(
    (state) => state.query.getData.bulkUpdateItems
  )
  return [bulkUpdateItems, {}] // Return empty object for mutation state
}

export const useGetDataByIdQuery = (): {
  getDataById: (id: string) => ShopsData | undefined
} => {
  const getDataById = useShopQueryStore(
    (state) => state.query.getData.getDataById
  )
  return { getDataById }
}
