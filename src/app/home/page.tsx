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

const Page = () => {
  return (
    <div className="flex flex-col w-full">
      <ContainerBox>
        <TopMenu />
        <TopLogoSearchLogReg />
      </ContainerBox>
      <MainMenu />
    </div>
  )
}
export default Page
