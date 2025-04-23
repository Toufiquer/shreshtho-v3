/*
|-----------------------------------------
| setting up SiteNavLayoutResizable for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

'use client'

import Outlet from './outlet'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'
import SiteNav from './site-nav/site-nav'
import { useState } from 'react'

const SiteNavLayoutResizable = () => {
  const [isOpen, setIsOpen] = useState(true)
  const onLayout = (sizes: number[]) => {
    if (sizes[0] <= 6) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }
  return (
    <main className="bg-slate-900 text-white">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[92vh]"
        onLayout={onLayout}
      >
        <ResizablePanel defaultSize={16}>
          <SiteNav isOpen={isOpen} />
        </ResizablePanel>
        <ResizableHandle
          // withHandle
          className="border-1 border-l border-slate-700"
        />
        <ResizablePanel>
          <Outlet title="Global Template" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
export default SiteNavLayoutResizable
