


export const Addskill = () => {
    return (
        <>
        <section className="px-3 py-3 " >
            <h1 className={` font-semibold text-3xl my-1 mx-[8px] p-[5px]`} >Skills</h1>
            <section className="h-[120px] w-[90%] border rounded-md border-transparent  my-2 flex flex-wrap items-center mx-[35px] ">
                <Skill img="java.jfif" name="JAVA" />
                <Skill img="js.png" name="JAVASCRIPT" />
                <Skill img="html.webp" name="HTML" />
                <Skill img="css.webp" name="CSS" />
                <Skill img="Tailwind_CSS_Logo.webp" name="TAILWIND CSS" />
                <Skill img="Node.js_logo.webp" name="NODE JS" />
                <Skill img="React-icon.webp" name="REACT JS" />
                <Skill img="expressjs.webp" name="EXPRESS JS" />
                <Skill img="Figma-logo.webp" name="FIGMA" />
                <Skill img="MySQL.webp" name="MYSQL" />
                <Skill img="Spring_Boot.webp" name="SPRING-BOOT" />
            </section ></section>
        </>
    )
}

export const Skill = (props)=>{
    return (
        <>       
            <img className="rounded-md cursor-pointer mx-2 my-1.5 h-[110px] w-[110px] object-contain border shadowcss " title={props.name} src={props.img} alt="" />
        </>
    )
}