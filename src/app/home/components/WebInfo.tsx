'use client'
import React, { useState, useEffect } from 'react'
import ContainerBox from '@/components/common/ContainerBox'

const WebInfo: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  console.log('currentImageIndex', currentImageIndex)
  const sliderInterval = 1000 // 1 seconds
  const imageUrls = [
    { id: 1, url: '/slider/1.webp' },
    { id: 2, url: '/slider/2.webp' },
    { id: 3, url: '/slider/3.webp' },
  ]
  useEffect(() => {
    if (imageUrls.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
      )
    }, sliderInterval)

    return () => clearInterval(interval)
  }, [imageUrls.length, sliderInterval])

  const infoItems = [
    {
      label: 'Terms & conditions',
      href: '/terms',
    },
    {
      label: 'return policy',
      href: '/return-policy',
    },
    {
      label: 'Support Policy',
      href: '/support',
    },
    {
      label: 'privacy policy',
      href: '/privacy',
    },
  ]

  return (
    <div className="w-full bg-slate-50">
      <ContainerBox>
        <div className="w-full relative grid grid-coss-1 md:grid-cols-4 gap-4 p-4">
          {infoItems.map((item, idx) => {
            return (
              <div
                key={item.label + idx}
                className="w-full min-h-20 border-1 border-slate-400 rounded flex items-center justify-center flex-col p-6 hover:bg-slate-200 hover:cursor-pointer duration-200"
              >
                <div className="border-1 flex items-center justify-center border-slate-500 rounded w-[50px] h-[50px]">
                  <p className="text-xs">icon</p>
                </div>
                <div className="text-slate-600 pt-2">{item.label}</div>
              </div>
            )
          })}
        </div>
      </ContainerBox>
    </div>
  )
}

export default WebInfo
