import axios from "axios"
import { useEffect, useState } from "react"
import { FiDelete } from "react-icons/fi"
import { toast } from "react-toastify"

const API = "http://localhost:4321/api/user"

export const GetData = () => {

    const [data, setdata] = useState()
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const res = await axios.get(API)
                setdata(res.data)
                setloading(false)
            }catch(error){
                seterror(error.message)
            }
        }
        fetchdata()
    }, [])

    const handledelete = async (id)=>{
        try{
            await axios.delete(`http://localhost:4321/api/${id} `)
            setdata((prevData)=> prevData.filter((index)=> index.id !== id))
            toast.success(`Deleted successfully id ${id}`)
        } catch (error) {
            seterror("Failed to delete user: " + error.message);
            toast.error("Delete failed..")
        }
    }

    if(loading){
        return <div>Loading....</div>
    }

    if(error){
        return <div>Error: {error} </div>
    }
    return (
        <>
            <ul>
                {
                    data.map((index)=>(
                        <li key={index.id} className="h-[auto] w-auto border rounded my-3 py-3 px-[10px] ">
                            <h2>Username:{index.name} </h2>
                            <h2 className="text-blue-800">Email: {index.email}</h2>
                            <h2 className="text-[#00ff9d] ">Msg: {index.message} </h2>
                            <h2 className="text-red-900">Id: {index.id} </h2>
                            <button onClick={()=>handledelete(index.id)} className="h-[auto] w-[auto] px-[5px] py-[5px] border rounded-full bg-[red] flex justify-center items-center border-transparent hover:border-red-900 " ><FiDelete/> </button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}