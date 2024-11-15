import { createContext, useState } from "react"
import { BiAdjust } from "react-icons/bi"
import { Nav } from "./nav"
import { About } from "./about"
import { Leftsection } from "./leftsection"
import { Outlet, useLocation } from "react-router"
import { Bgbutton } from "./bgbutton"
import { Home } from "./home"
import { Mycontext } from "./context"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


export const Trail = () => {
    const [bg, setbg] = useState('night')
    const [Class, setclass] = useState()
    const [bgclass, setbgclass] = useState()
    const handlebg = () => {
        setbg(bg != 'day' ? 'day' : 'night')
        setclass(bg)
        setbgclass(bg)
    }
    const location = useLocation()
    return (
        <>
            <Mycontext.Provider value={bg}>
                <main className={`h-[100vh] w-[100%] ${Class}`}>
                    <Bgbutton handlebg={handlebg} />
                    <section className="h-[90vh] w-[100%] flex items-center">
                        <div className="flex h-[90%] w-[100%]  gap-[30px] justify-center">
                            <Leftsection />
                            <main className="h-[480px] w-[60%] border border-transparent rounded  blurd overflow-y-auto  ">
                                {
                                    location.pathname === "/" ? (
                                        <Home />
                                    ) : (
                                        <Outlet />
                                    )
                                }

                            </main>
                            <Nav width='20%' />
                        </div>
                    </section>
                    <ToastContainer />
                </main>
            </Mycontext.Provider>
        </>
    )
}