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

const Page = () => {
  const imagesUrls = [
    { id: 1, url: '/slider/1.webp' },
    { id: 2, url: '/slider/2.webp' },
    { id: 3, url: '/slider/3.webp' },
  ]
  const products = [
    {
      id: 1,
      name: 'Neutrogena Rapid Wrinkle Repair Moisturizer',
      price: 1250.0,
      imageUrl: '/slider/1.webp',
      tags: ['ALPHA ARBUTIN', 'RADIANCE BOOSTER', 'PROTECTION'],
    },
    {
      id: 2,
      name: 'Vitamin C Face Serum',
      price: 1499.0,
      imageUrl: '/slider/2.webp',
      tags: ['VITAMIN BOOSTER', 'ANTI-AGING', 'GLOW SKIN'],
    },
    {
      id: 3,
      name: 'Wireless Gaming Speakers',
      price: 550.0,
      imageUrl: '/slider/3.webp',
    },
    {
      id: 4,
      name: 'Over-Ear Headphones',
      price: 800.0,
      imageUrl: '/slider/4.webp',
    },
    {
      id: 5,
      name: "Men's Outdoor Jacket",
      price: 3790.0,
      imageUrl: '/slider/5.webp',
    },
    {
      id: 6,
      name: 'Hyaluronic Acid Serum',
      price: 1050.0,
      imageUrl: '/slider/6.webp',
    },
    {
      id: 7,
      name: 'Smart Watch Series 5',
      price: 5222.0,
      imageUrl: '/slider/7.webp',
    },
    {
      id: 8,
      name: 'USB-C Charging Cable',
      price: 350.0,
      imageUrl: '/slider/8.webp',
    },
    {
      id: 9,
      name: 'Traditional Saree',
      price: 3000.0,
      imageUrl: '/slider/9.webp',
    },
    {
      id: 10,
      name: "Men's Traditional Kurta",
      price: 7790.0,
      imageUrl: '/slider/10.webp',
    },
  ]
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
        <SliderComponents images={imagesUrls} />
        <FlashSale
          endDate={endDate}
          products={products}
          sliderImages={imagesUrls}
        />
      </ContainerBox>
    </div>
  )
}
export default Page
