
import { HiDocumentText } from "react-icons/hi2"
import { SocialMedia } from "./socialmedia"

export const Leftsection = (props) => {
    return (
        <>
            <main className="h-[480px] w-[15%] border rounded border-transparent mx-[10px] glassmor">
                <div className="h-[114px] w-[110px] border border-[#44444400] mx-auto mt-[-20px] rounded object-cover ">
                    <img src="../profileimg.webp" alt="" className="rounded h-[114px] w-[110px] " />
                </div>
                <h1 className={`h-8 text-[20px] font-medium text-center`} >SAURAV KUMAR JHA</h1>
                <div className="h-[200px] w-[80%] m-auto my-[10px]  "></div>
                <div className="h-[40px] w-[80%] mx-auto my-[10px]  ">
                    <a href="./assets/RESUME SKJ.docs" download="resume.pdf" ><button className="h-[44px] w-[80%] px-[6px] py-1 border rounded-[20px] bg-blue-600 border-transparent font-semibold text-xl hover:underline hover:scale-105 flex items-center justify-center" ><HiDocumentText/> Resume</button></a>
                </div>
                <SocialMedia/>
            </main>
        </>
    )
}