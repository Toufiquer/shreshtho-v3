import { create } from 'zustand'

type Store = {
  outlet: string
  setOutlet: (payload: string) => void
}

export const useDashboardStore = create<Store>()((set) => ({
  outlet: '',
  setOutlet: (payload: string) => set((state) => ({ outlet: payload })),
}))
