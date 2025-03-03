import { Outlet } from "react-router"

const RootLayout = () => {
  return (
    <>
     <div> Navbar </div>
     <Outlet />
    <div> Footer </div>
    </>
  )
}

export default RootLayout
