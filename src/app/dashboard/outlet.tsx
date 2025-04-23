/*
|-----------------------------------------
| setting up Outlet for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/

const Outlet = ({ title }: { title?: string }) => {
  let renderUI = (
    <main className="w-full min-h-screen flex items-center justify-center text-4xl ">
      {title ? title : 'Outlet'}
    </main>
  )
  return renderUI
}
export default Outlet
