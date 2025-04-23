/*
|-----------------------------------------
| setting up OutletComponentsIndex for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

import { ScrollArea } from '@/components/ui/scroll-area'
import BlogsComponents from '@/app/dashboard/outlet-components/BlogsComponents'
import CategoryComponents from '@/app/dashboard/outlet-components/CategoryComponents'
import FilesComponents from '@/app/dashboard/outlet-components/FilesComponents'
import MarketingComponents from '@/app/dashboard/outlet-components/MarketingComponents'
import OrdersComponents from '@/app/dashboard/outlet-components/OrdersComponents'
import PickupPointsComponents from '@/app/dashboard/outlet-components/PickupPointsComponents'
import ProductsComponents from '@/app/dashboard/outlet-components/ProductsComponents'
import ShopsComponents from '@/app/dashboard/outlet-components/ShopsComponents'
import SupportsComponents from '@/app/dashboard/outlet-components/SupportsComponents'
import UsersComponents from '@/app/dashboard/outlet-components/UsersComponents'

import {
  allBackupStoreData,
  allStoreData,
} from '@/app/dashboard/site-nav/sidebar-data'
import { useDashboardStore } from '@/app/dashboard/zustand-store/useDashboardStore'
import BackupBlogs from '../backup/BackupBlogs'
import BackupCategory from '../backup/BackupCategory'
import BackupFiles from '../backup/BackupFiles'
import BackupMarketing from '../backup/BackupMarketing'
import BackupOrders from '../backup/BackupOrders'
import BackupPickupPoints from '../backup/BackupPickupPoints'
import BackupProducts from '../backup/BackupProducts'
import BackupShops from '../backup/BackupShops'
import BackupSupport from '../backup/BackupSupport'
import BackupUsers from '../backup/BackupUsers'

const OutletComponentsIndex = () => {
  const { outlet } = useDashboardStore()
  return (
    <main className="w-full min-h-screen flex items-center justify-center text-4xl flex-col gap-2">
      <ScrollArea className="w-full h-screen">
        {outlet === allStoreData.name_1 && <BlogsComponents />}
        {outlet === allStoreData.name_2 && <CategoryComponents />}
        {outlet === allStoreData.name_3 && <FilesComponents />}
        {outlet === allStoreData.name_4 && <MarketingComponents />}
        {outlet === allStoreData.name_5 && <OrdersComponents />}
        {outlet === allStoreData.name_6 && <PickupPointsComponents />}
        {outlet === allStoreData.name_7 && <ProductsComponents />}
        {outlet === allStoreData.name_8 && <ShopsComponents />}
        {outlet === allStoreData.name_9 && <SupportsComponents />}
        {outlet === allStoreData.name_10 && <UsersComponents />}
        {outlet === allBackupStoreData[1].outlet_name_1 && <BackupBlogs />}
        {outlet === allBackupStoreData[2].outlet_name_2 && <BackupCategory />}
        {outlet === allBackupStoreData[3].outlet_name_3 && <BackupFiles />}
        {outlet === allBackupStoreData[4].outlet_name_4 && <BackupMarketing />}
        {outlet === allBackupStoreData[5].outlet_name_5 && <BackupOrders />}
        {outlet === allBackupStoreData[6].outlet_name_6 && (
          <BackupPickupPoints />
        )}
        {outlet === allBackupStoreData[7].outlet_name_7 && <BackupProducts />}
        {outlet === allBackupStoreData[8].outlet_name_8 && <BackupShops />}
        {outlet === allBackupStoreData[9].outlet_name_9 && <BackupSupport />}
        {outlet === allBackupStoreData[10].outlet_name_10 && <BackupUsers />}
      </ScrollArea>
    </main>
  )
}
export default OutletComponentsIndex
