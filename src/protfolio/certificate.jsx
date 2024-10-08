

export const Certificate = (props) => {
    return (
        <section className="px-3 py-3 ">            
            <div className="h-[220px] w-[180px] border border-white rounded flex flex-col mx-[15px] ">
                <img className="h-[120px] w-[180px] border rounded border-transparent object-cover" src={props.img} alt={props.name} title={props.name}/>
                <p className="h-[20px] text-lg font-semibold font-serif my-[5px] mx-1 ">{props.name} </p><br />
                <a href={props.link} target="_blank" className="h-[38px] w-[54px] border border-white px-3 py-1 rounded bg-[#ffffff31] text-lg hover:underline mx-[30px] "><button className="hover:underline hover:text-red-700">See</button></a>
            </div>
        </section>
    )
}