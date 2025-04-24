/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

'use client'

import SiteNavLayoutResizable from './site-nav-layout-resizable'
import TopBar from './TopBar'

const Page = () => {
  return (
    <main>
      <TopBar />
      <SiteNavLayoutResizable />
    </main>
  )
}
export default Page
