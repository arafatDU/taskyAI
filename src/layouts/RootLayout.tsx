import { Outlet } from "react-router"
import Header from "../components/Header"
import Footer from "@/components/Footer"

const RootLayout = () => {
  return (
    <>
     <div className="relative isolate min-h-[100vh] flex flex-col overflow-hidden">
        <Header />

        <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
          <Outlet />
        </main>

        <Footer />

        {/* Background shapes */}
        <div className="bg-primary/20 absolute top-20 left-0 w-80
        h-10 rotate-45 origin-top-left blur-3xl"></div>
        <div className="bg-primary/20 absolute top-20 left-0 w-80
        h-10 rotate-45 origin-top-right blur-3xl"></div>
     </div>
    </>
  )
}

export default RootLayout
