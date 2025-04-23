/*
|-----------------------------------------
| setting up sidebar-data for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Url } from 'url'
import { ReactNode } from 'react'

import { iconBiPieChartAlt, iconDatabase } from './side-nav-react-icons'

export type LINKTYPE = {
  name: string
  link: Url | string
  badge?: string
  id?: string | number
  icon?: ReactNode | string
  outletName?: string
}

export type SIDEBARTYPE = {
  name: string
  icon?: ReactNode | null
  content: Array<LINKTYPE>
  isDropdown?: boolean
  isActive?: boolean
  link?: Url | string
  outletName?: string
}
export type AllStoreType = {
  name_1: string
  name_2: string
  name_3: string
  name_4: string
  name_5: string
  name_6: string
  name_7: string
  name_8: string
  name_9: string
  name_10: string
}
export type AllBackupStoreType = {
  1: { outlet_name_1: string; name_1: string }
  2: { outlet_name_2: string; name_2: string }
  3: { outlet_name_3: string; name_3: string }
  4: { outlet_name_4: string; name_4: string }
  5: { outlet_name_5: string; name_5: string }
  6: { outlet_name_6: string; name_6: string }
  7: { outlet_name_7: string; name_7: string }
  8: { outlet_name_8: string; name_8: string }
  9: { outlet_name_9: string; name_9: string }
  10: { outlet_name_10: string; name_10: string }
}
export const allBackupStoreData: AllBackupStoreType = {
  1: { outlet_name_1: 'BackupBlogs', name_1: 'Blogs' },
  2: { outlet_name_2: 'BackupCategory', name_2: 'Category' },
  3: { outlet_name_3: 'BackupFiles', name_3: 'Files' },
  4: { outlet_name_4: 'BackupMarketing', name_4: 'Marketing' },
  5: { outlet_name_5: 'BackupOrders', name_5: 'Orders' },
  6: { outlet_name_6: 'BackupPickupPoints', name_6: 'Pickup Points' },
  7: { outlet_name_7: 'BackupProducts', name_7: 'Products' },
  8: { outlet_name_8: 'BackupShops', name_8: 'Shops' },
  9: { outlet_name_9: 'BackupSupport', name_9: 'Support' },
  10: { outlet_name_10: 'BackupUsers', name_10: 'Users' },
}
export const allStoreData: AllStoreType = {
  name_1: 'Blogs',
  name_2: 'Category',
  name_3: 'Files',
  name_4: 'Marketing',
  name_5: 'Orders',
  name_6: 'Pickup Points',
  name_7: 'Products',
  name_8: 'Shops',
  name_9: 'Support',
  name_10: 'Users',
}

export const sidebarDataBackup: SIDEBARTYPE = {
  name: 'Backup',
  icon: iconBiPieChartAlt,
  content: [
    {
      id: 1,
      icon: iconDatabase,
      name: allBackupStoreData[1].name_1,
      outletName: allBackupStoreData[1].outlet_name_1,
      link: '#',
    },
    {
      id: 2,
      icon: iconDatabase,
      name: allBackupStoreData[2].name_2,
      outletName: allBackupStoreData[2].outlet_name_2,
      link: '#',
    },
    {
      id: 3,
      icon: iconDatabase,
      name: allBackupStoreData[3].name_3,
      outletName: allBackupStoreData[3].outlet_name_3,
      link: '#',
    },
    {
      id: 4,
      icon: iconDatabase,
      name: allBackupStoreData[4].name_4,
      outletName: allBackupStoreData[4].outlet_name_4,
      link: '#',
    },
    {
      id: 5,
      icon: iconDatabase,
      name: allBackupStoreData[5].name_5,
      outletName: allBackupStoreData[5].outlet_name_5,
      link: '#',
    },
    {
      id: 6,
      icon: iconDatabase,
      name: allBackupStoreData[6].name_6,
      outletName: allBackupStoreData[6].outlet_name_6,
      link: '#',
    },
    {
      id: 7,
      icon: iconDatabase,
      name: allBackupStoreData[7].name_7,
      outletName: allBackupStoreData[7].outlet_name_7,
      link: '#',
    },
    {
      id: 8,
      icon: iconDatabase,
      name: allBackupStoreData[8].name_8,
      outletName: allBackupStoreData[8].outlet_name_8,
      link: '#',
    },
    {
      id: 9,
      icon: iconDatabase,
      name: allBackupStoreData[9].name_9,
      outletName: allBackupStoreData[9].outlet_name_9,
      link: '#',
    },
    {
      id: 10,
      icon: iconDatabase,
      name: allBackupStoreData[10].name_10,
      outletName: allBackupStoreData[10].outlet_name_10,
      link: '#',
    },
    { id: 11, icon: iconDatabase, name: 'All Export', link: '#' },
    { id: 12, icon: iconDatabase, name: 'All Import', link: '#' },
  ],
}
export const sidebarDataBlogs: SIDEBARTYPE = {
  name: allStoreData.name_1,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataCategory: SIDEBARTYPE = {
  name: allStoreData.name_2,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataFiles: SIDEBARTYPE = {
  name: allStoreData.name_3,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataMarketing: SIDEBARTYPE = {
  name: allStoreData.name_4,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataOrders: SIDEBARTYPE = {
  name: allStoreData.name_5,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataPickupPoints: SIDEBARTYPE = {
  name: allStoreData.name_6,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataProducts: SIDEBARTYPE = {
  name: allStoreData.name_7,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataShops: SIDEBARTYPE = {
  name: allStoreData.name_8,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataSupport: SIDEBARTYPE = {
  name: allStoreData.name_9,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
export const sidebarDataUsers: SIDEBARTYPE = {
  name: allStoreData.name_10,
  icon: iconDatabase,
  link: '#',
  isDropdown: false,
  content: [],
}
