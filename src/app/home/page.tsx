/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/

import ContainerBox from '@/components/common/ContainerBox'
import TopMenu from './components/TopMenu'
import TopLogoSearchLogReg from './components/TopLogoSearchLogReg'
import MainMenu from '@/components/common/MainMenu'
import SliderComponents from './components/SliderComponents'
import FlashSale from './components/FlashSale'
import TodaysDeals from './components/TodaysDeals'
import BannerImage from './components/Banner'
import ShopProducts from './components/ShopsProducts'
import TopSellers from './components/TopSellers'
import WebInfo from './components/WebInfo'
import Footer from './components/Footer'

const Page = () => {
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 8)
  return (
    <div className="flex flex-col w-full">
      <ContainerBox>
        <TopMenu />
        <TopLogoSearchLogReg />
      </ContainerBox>
      <MainMenu />
      <ContainerBox>
        <SliderComponents />
        <FlashSale />
        <TodaysDeals />
        <div className="w-full h-[220px]">
          <BannerImage />
        </div>
        <ShopProducts />
        <TopSellers />
      </ContainerBox>
      <WebInfo />
      <Footer />
    </div>
  )
}
export default Page
