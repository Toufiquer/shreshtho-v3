// types/store.ts
export interface ShopData {
  id: string
  shopName: string
  address: string
  description?: string
  fullName: string
  email: string
  password: string
}

export interface NewShop {
  shopName: string
  address: string
  description?: string
  fullName: string
  email: string
  password: string
}
