/*
|-----------------------------------------
| setting up Outlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

import { useDashboardStore } from './zustand-store/useDashboardStore'
import OutletComponentsIndex from './outlet-components/OutletComponentsIndex'

const Outlet = ({ title }: { title?: string }) => {
  const { outlet } = useDashboardStore()
  let renderUI = (
    <main className="w-full min-h-screen flex items-center justify-center text-4xl flex-col gap-2">
      {title ? title : 'Loading'}
    </main>
  )
  if (outlet !== '') {
    renderUI = <OutletComponentsIndex />
  }
  return renderUI
}
export default Outlet
