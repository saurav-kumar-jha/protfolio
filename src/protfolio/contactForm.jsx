import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Mycontext } from "./context"
import { toast, ToastContainer } from "react-toastify"

const API = "http://localhost:4321/api/user"

export const ContactForm = () => {

    const Contextvalue = useContext(Mycontext)
    const [formInput, setformInput] = useState({ name: "", email: "", message: "", mob: "" })
    const [error, seterror] = useState(true)
    const [res, setres] = useState()
    const [color, setcolor] = useState('black')

    const handleFormInput = (e) => {
        const { name, value } = e.target
        setformInput((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleFormsubmit = async (event) => {
        event.preventDefault()

        try {
            const res = await axios.post(API, formInput)
            setres(res.data)
            seterror(false)
            toast.success("Form submitted successfully..")
        } catch (error) {
            seterror(error.message)
            toast.error("Messge send failed..")
        }

        setformInput({ name: "", email: "", message: "" })
    }


    useEffect(() => {

        if (Contextvalue == 'night') {
            setcolor('white')
        } else {
            setcolor('black')
        }
    }, [])


    const Css = `border rounded p-2 gap-2 my-[5px] flex flex-col  border-transparent`
    return (
        <>
            <section className="h-[100%] w-fit border border-transparent ">
                <div className="h-[80%] w-[100%] mx-auto px-3 py-2 border border-transparent ">
                    <h1 className="ml-[10px] text-[22px] font-bold">Connect to us</h1>
                    <h1 className="ml-[13px] mt-[-5px] font-medium ">You can reach any time at <span><a href="mailto:skjsaurav1@gmail.com" className="text-blue-900 hover:underline hover:text-blue-800">skjsaurav1@gmail.com</a></span></h1>
                    <form onSubmit={handleFormsubmit}>
                        <div className={Css}>
                            <label htmlFor="name">Name:</label>
                            <input className={`h-auto text-[{Contextvalue==black?white:black}] overflow-y-scroll overflow-x-hidden border-transparent rounded px-[12px] hover:border-black border outline-none bg-[#ffffff1c]  py-[5px] `} type="text" id="name" name="name" value={formInput.name} onChange={handleFormInput} required />
                        </div>
                        <div className={Css}>
                            <label htmlFor="email">Email:</label>
                            <input className={`h-auto text-[{Contextvalue==black?white:black}] overflow-y-scroll overflow-x-hidden border-transparent rounded px-[12px] hover:border-black border outline-none bg-[#ffffff1c]  py-[5px] `} type="email" id="email" name="email" value={formInput.email} onChange={handleFormInput} required />
                        </div>
                        <div className={Css} >
                            <label htmlFor="mob">Mobile no:</label>
                            <div className="flex h-auto text-[{Contextvalue==black?white:black}] overflow-y-scroll overflow-x-hidden border-transparent rounded px-[12px] hover:border-black border outline-none bg-[#ffffff1c]  ">
                                <p className="py-[5px] " >+91</p>
                                <input className={`h-auto overflow-y-scroll overflow-x-hidden border-transparent  num px-[12px] border outline-none bg-transparent py-[5px] w-full `} type="mob" id="mob" name="mob" value={formInput.mob} onChange={handleFormInput} required />
                            </div>
                        </div>
                        <div className={Css}>
                            <label htmlFor="message">Message:</label>
                            <input className={`h-auto text-[{Contextvalue==black?white:black}] overflow-y-scroll overflow-x-hidden border-transparent rounded px-[12px] hover:border-black border outline-none bg-[#ffffff1c]  py-[5px] `} type="text" name="message" id="message" value={formInput.message} onChange={handleFormInput} required />
                        </div>
                        <button type="submit" className="h-auto w-[60%] bg-[#38539e] border-transparent hover:border-black px-3 py-2 border rounded cursor-pointer font-semibold text-[13px] ">SUBMIT</button>
                    </form>
                </div>
            </section>

        </>
    )
}