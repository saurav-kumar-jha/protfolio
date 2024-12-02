import { BiAlignJustify } from "react-icons/bi"
import { FaElementor } from "react-icons/fa"
import { FcBusinessContact } from "react-icons/fc"
import { GoProjectRoadmap } from "react-icons/go"
import { IoIosContact, IoMdHome } from "react-icons/io"
import { PiCertificateBold } from "react-icons/pi"
import { SiHyperskill } from "react-icons/si"
import { NavLink } from 'react-router-dom'

export const Nav = (props) => {
    return (
        <>
            <nav ref={props.refe} className={`md:h-[480px] md:w-[20%] md:min-w-28 border h-[30px] w-[33px] flex justify-center items-center rounded border-transparent md:px-2 md:py-4 md:mx-3 md:mr-3 backdrop-blur-sm bg-[#00000018] `}>
                <div className="block md:hidden">
                    <BiAlignJustify />
                </div>
                <ul className="md:block hidden w-[90%] ">
                    <li>
                        <NavLink to='/' className="cursor-pointer my-[20px] h-[50px] text-5xl hover:scale-110 flex items-center justify-center text-center rounded  "> <FcBusinessContact /></NavLink></li>
                    <li>
                        <NavLink to="/" className="text-lg hover:text-[#6991db] hover:bg-zinc-600 cursor-pointer my-[20px] h-9 flex items-center justify-center text-center w-[100%] rounded font-semibold "><IoMdHome /> HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skill" className="text-lg hover:text-[#6991db] hover:bg-zinc-600 cursor-pointer my-[20px] h-9 flex items-center justify-center text-center w-[100%] rounded font-semibold "><SiHyperskill /> SKILLS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="text-lg hover:text-[#6991db] hover:bg-zinc-600 cursor-pointer my-[20px] h-9 flex items-center justify-center text-center w-[100%] rounded font-semibold "><FaElementor /> ABOUT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" className="text-lg hover:text-[#6991db] hover:bg-zinc-600 cursor-pointer my-[20px] h-9 flex items-center justify-center text-center w-[100%] rounded font-semibold "><FaElementor /> PROJECT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="text-lg hover:text-[#6991db] hover:bg-zinc-600 cursor-pointer my-[20px] h-9 flex items-center justify-center text-center w-[100%] rounded font-semibold "><GoProjectRoadmap /> CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to="/certificate" className="text-lg hover:text-[#6991db] hover:bg-zinc-600 cursor-pointer my-[20px] h-9 flex items-center justify-center text-center w-[100%] rounded font-semibold "><PiCertificateBold /> Certificate</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}