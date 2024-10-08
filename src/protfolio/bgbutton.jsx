import { BiAdjust } from "react-icons/bi"

export const Bgbutton = (props)=>{
    return (
        <>
          <div className={`h-[10vh]  w-screen right-2 flex justify-end items-center bg-transparent`} >
                <button onClick={props.handlebg} className={`mr-[25px] h-[50px] w-[50px] flex justify-center bg-transparent items-center rounded-full hover:scale-110 text-2xl`} >{<BiAdjust />} </button>
          </div>
        </>
    )
}