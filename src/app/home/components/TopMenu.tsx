import Link from 'next/link'

/*
|-----------------------------------------
| setting up TopMenu for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/
const TopMenu = () => {
  const urls = [
    { id: 1, name: 'Become a Seller !', url: '/become-to-seller' },
    { id: 2, name: 'Login to Seller', url: '/login-to-seller' },
  ]
  return (
    <main className="w-full flex items-center justify-end py-2 text-sm text-slate-400 gap-4 border-b">
      {urls.map((u) => (
        <div key={u.id} className="flex items-center justify-end">
          <Link
            href={u.url}
            className="relative text-slate-400 hover:text-slate-700 transition-colors duration-200 "
          >
            {u.name}
          </Link>
          {u.id !== urls.length && (
            <div className="w-[1px] h-[12px] bg-slate-800 ml-4" />
          )}
        </div>
      ))}
    </main>
  )
}
export default TopMenu
