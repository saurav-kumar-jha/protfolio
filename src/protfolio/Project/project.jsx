import { Section } from "./projectSection"
import { Setproject } from "./setproject"


export const Project = () => {
  return (
    <>
      <section className="h-[100%] w-[100%] py-[15px] px-[12px] ">
        <h1 className="text-[25px] font-[700] ">My projects</h1>
        <Setproject/>
      </section>
    </>
  )
}