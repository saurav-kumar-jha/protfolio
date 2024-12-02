import { createContext, useRef, useState } from "react"
import { Nav } from "./nav"
import { Leftsection } from "./leftsection"
import { Outlet, useLocation } from "react-router"
import { Bgbutton } from "./bgbutton"
import { Home } from "./home"
import { Mycontext } from "./context"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


export const Trail = () => {
    const [bg, setbg] = useState('day')
    const [Class, setclass] = useState('night')
    const [bgclass, setbgclass] = useState()
    const handlebg = () => {
        setbg(bg == 'day' ? 'night' : 'day')
        setclass(bg)
        setbgclass(bg)
    }
    const location = useLocation()
    const GsapRef = useRef()
    const navRef = useRef()
    const mainRef = useRef()


    useGSAP(()=>{
        gsap.from(GsapRef.current,{
            duration:2,
            opacity:0,
            x:-20
        })
    })
    useGSAP(()=>{
        gsap.from(navRef.current,{
            duration:2,
            opacity:0,
            x:20
        })
    })
    useGSAP(()=>{
        gsap.from(mainRef.current,{
            scale:0,
            opacity:0,
            duration:2

        })
    })



    return (
        <>
            <Mycontext.Provider value={bg}>
                <main className={`h-[100vh] w-[100%] ${Class} {bg=='night':backdrop-blur-sm } `}>
                    <Bgbutton handlebg={handlebg} />
                    <section className="h-[90vh] w-[100%] flex items-center">
                        <div className="flex h-[90%] w-[100%]  gap-[30px] justify-center">
                            <Leftsection refe={GsapRef} />
                            <main ref={mainRef} className="h-[480px] w-[60%] border border-transparent rounded backdrop-blur-sm bg-[#0000003f] overflow-y-auto shadow-custom ">
                                {
                                    location.pathname === "/" ? (
                                        <Home />
                                    ) : (
                                        <Outlet />
                                    )
                                }
                            </main>
                            <Nav refe={navRef} width='20%' />
                        </div>
                    </section>
                    <ToastContainer />
                </main>
            </Mycontext.Provider>
        </>
    )
}