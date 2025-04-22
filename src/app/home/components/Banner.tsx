import Image from 'next/image'

/*
|-----------------------------------------
| setting up BannerImage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/
const BannerImage = () => {
  return (
    <main className="w-full h-[220px] relative">
      <Image
        src="https://i.ibb.co.com/pFynYCm/Ffi7s-Foer-Io-TGA2b-Uap5-HRZAtfth-EZw-LDgy-DXh-OG.png"
        alt="Person with shopping bag"
        fill={true}
        className="object-cover absolute"
      />
    </main>
  )
}
export default BannerImage
