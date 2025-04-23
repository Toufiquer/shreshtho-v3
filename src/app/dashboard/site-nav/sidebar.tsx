/*
|-----------------------------------------
| setting up sidebar for the app
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import SidebarAccordion from './sidebar-accordion'
import {
  sidebarDataBlogs,
  sidebarDataCategory,
  sidebarDataBackup,
  sidebarDataFiles,
  sidebarDataMarketing,
  sidebarDataOrders,
  sidebarDataPickupPoints,
  sidebarDataProducts,
  sidebarDataShops,
  sidebarDataSupport,
  sidebarDataUsers,
} from './sidebar-data'

import { CgArrowLongLeft, CgArrowLongRight } from 'react-icons/cg'
import SidebarHoverItem from './sidebar-hover-item'
import { ScrollArea } from '@/components/ui/scroll-area'

const Sidebar = ({
  toggle,
  handleToggle,
  toggleButton = false,
}: {
  toggleButton?: boolean
  toggle: boolean
  handleToggle: () => void
}) => {
  return (
    <div className="h-screen relative">
      <div className="relative text-slate-600">
        <ScrollArea className="h-[calc(100vh_-_122px)]">
          {toggle ? (
            <div className="ml-3">
              <h2 className="mb-2 mt-4 pl-4 text-[.8rem]">Dashboard</h2>
              <div className="my-4 flex w-full justify-center border-t" />
              <SidebarAccordion data={sidebarDataBlogs} />
              <SidebarAccordion data={sidebarDataCategory} />
              <SidebarAccordion data={sidebarDataFiles} />
              <SidebarAccordion data={sidebarDataMarketing} />
              <SidebarAccordion data={sidebarDataOrders} />
              <SidebarAccordion data={sidebarDataPickupPoints} />
              <SidebarAccordion data={sidebarDataProducts} />
              <SidebarAccordion data={sidebarDataShops} />
              <SidebarAccordion data={sidebarDataSupport} />
              <SidebarAccordion data={sidebarDataUsers} />
              <div className="my-4 flex w-full justify-center border-t" />
              <SidebarAccordion data={sidebarDataBackup} className="pt-4" />
            </div>
          ) : (
            <div className="flex flex-col p-2">
              <h2 className="mb-2 mt-4 pl-4 text-[.6rem]">Dashboard</h2>
              <div className="my-4 flex w-full justify-center border-t" />
              <SidebarAccordion data={sidebarDataBlogs} />
              <SidebarAccordion data={sidebarDataCategory} />
              <SidebarAccordion data={sidebarDataFiles} />
              <SidebarAccordion data={sidebarDataMarketing} />
              <SidebarAccordion data={sidebarDataOrders} />
              <SidebarAccordion data={sidebarDataPickupPoints} />
              <SidebarAccordion data={sidebarDataProducts} />
              <SidebarAccordion data={sidebarDataShops} />
              <SidebarAccordion data={sidebarDataSupport} />
              <SidebarAccordion data={sidebarDataUsers} />
              <div className="h-4" />
              <div className="my-4 flex w-full justify-center border-t" />
              <SidebarHoverItem data={sidebarDataBackup} />
              <div className="h-16" />
            </div>
          )}
        </ScrollArea>

        {!toggleButton && (
          <>
            {toggle ? (
              <div
                onClick={handleToggle}
                className="bottom-[-60px] left-0 block w-[253px] md:absolute"
              >
                <h3 className="flex w-full cursor-pointer items-center justify-start gap-4 border-t border-slate-200 bg-slate-50 py-4 text-[.8rem]">
                  <span className="ml-4">
                    <CgArrowLongLeft />
                  </span>
                  Collapsed View
                </h3>
              </div>
            ) : (
              <div
                onClick={handleToggle}
                className="bottom-[-60px] left-0 block w-[63px] md:absolute"
              >
                <h3 className="flex w-full cursor-pointer items-center justify-center border-t border-slate-200 bg-slate-50 pb-[17px] pt-[18px]">
                  <span className="">
                    <CgArrowLongRight />
                  </span>
                </h3>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
export default Sidebar
