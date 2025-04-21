/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

import NewDemoPage from './components/new-demo/NewDemoPage'
import ViewData from './components/new-demo/ViewData'
// import StoreManagementPage from './components/old-demo/StoreManagementPage'

const Page = () => {
  return (
    <main>
      {/* <StoreManagementPage /> */}
      <NewDemoPage />
    </main>
  )
}
export default Page
