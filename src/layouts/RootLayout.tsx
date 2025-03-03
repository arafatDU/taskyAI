import { Outlet } from "react-router"
import Header from "../components/Header"

const RootLayout = () => {
  return (
    <>
     <div>
        <Header />
     </div>
     <Outlet />
    <div> Footer </div>
    </>
  )
}

export default RootLayout
