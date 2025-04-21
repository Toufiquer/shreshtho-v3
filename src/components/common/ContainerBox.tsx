/*
|-----------------------------------------
| setting up ContainerBox for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: shreshtho-v3, April, 2025
|-----------------------------------------
*/
const ContainerBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="container mx-auto max-w-7xl">{children}</div>
        </div>
    )
}
export default ContainerBox
