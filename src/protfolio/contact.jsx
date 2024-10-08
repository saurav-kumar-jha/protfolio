import { HiMiniChatBubbleLeftRight } from "react-icons/hi2"
import { SocialMedia } from "./socialmedia"
import { IoLocation } from "react-icons/io5"
import { MdPermPhoneMsg } from "react-icons/md"

export const Contact = ()=>{
    return (
        <main className="h-[478px] w-[100%] bg-[#39363d11] flex">
            <section className="h-full w-[43%] bg-[#52389E] py-[15px] pl-[20px] md:block hidden ">
                <h1 className="text-[22px] font-[600] my-[5px]">Get in Touch</h1>
                <p className="text-base font-serif font-[400] my-[8px] ">We'love to hear from you. Our friendly team is away here to chat!</p>
                <div className="h-[90px] w-[99%] px-[20px] py-3 my-2 flex flex-col  ">
                    <h1 className="flex items-center gap-1 font-bold "><HiMiniChatBubbleLeftRight /> Chat to us</h1>
                    <p className="mx-5">Our friendly team is here to help.</p>
                    <a href="mailto:skjsaurav1@gmail.com" className="mx-5 mt-[7px] hover:underline hover:text-[#b40000a8] " target="_blank" ><span className="font-bold" >skjsaurav1@gmail.com</span></a>
                </div>
                <div className="h-[90px] w-[100%] px-[20px] py-3 my-3 flex flex-col gap-2">
                    <h1 className="flex items-center gap-1 font-bold "><IoLocation /> Address</h1>
                    <p className="mx-5">Don't come to say hello at Home.</p>
                    <p className="mx-5 my-[-10px] font-semibold mt-[5px] ">Mithapur,Patna,Bihar <span className="font-bold">800001</span> </p>
                </div>
                <div className="h-[90px]  w-[100%] px-[20px] py-3  my-2 " >
                    <h1 className="flex items-center gap-1 font-bold "><MdPermPhoneMsg /> Phone</h1>
                    <p className="mx-5">Mon-Sat from 7pm to 12pm. Sun from 10am to 10pm</p>
                    <a href="tel:+919934787172" className="mx-5 font-bold">Click to call us.</a>
                </div>
                <div className="h-[auto] w-[90%] ">
                    <SocialMedia/>
                </div>
            </section>
            <section>
                <h1>This is input section.</h1>
            </section>
        </main>
    )
}