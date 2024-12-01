import { useContext, useEffect, useState } from "react"
import { Mycontext } from "../context"
import "/src/App.css"

export const Section = (props)=>{
    
    return(
        <div className={`md:flex overflow-x-hidden border-2 rounded border-black py-[10px] px-2 my-[15px] max-h-[250px] h-auto w-auto bg-[#0000001a]  `} id="border-shadow" >
            <section className="h-auto w-[48%] px-[12px] py-[10px] mx-auto ">
                <img className="object-contain h-[90%] w-[90%] scale-110 " src={props.img} alt={props.name} title={props.name} />
            </section>
            <section className="h-auto w-[48%] px-[12px] py-[10px] mx-auto ">
                <h1 className="font-semibold md:text-3xl text-[19px] my-[5px] " >{props.name} </h1>
                <p className="text-[15px] my-[8px] md:block hidden " >{props.para}</p>
                <button className="h-[auto] w-[98px] px-[12px] py-[2px] my-[8px] bg-[#116781] border-2 border-transparent rounded-full hover:border-[#00000071] font-semibold text-[19px]" >Visit</button>
            </section>
        </div>
    )
}