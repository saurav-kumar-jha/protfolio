import { Certificate } from "./certificate"


export const Addcertificate = () => {
    return (
        <>
            <h1 className={` font-semibold text-3xl my-1  p-[5px]`}>Certificate</h1>
            <main className="flex gap-[15px] flex-wrap ">
                <Certificate name="Network" img="src/assets/certificate.webp" link="src/assets/11614- Saurav Kumar Jha-CompTIA A+ N+ Certificate.pdf" />
                <Certificate name="HTML"  img="src/assets/certificate.webp" link="src/assets/SAURAV-KUMAR-JHA-Participant-Certificate (1) (1).pdf" />
                <Certificate name="CSS"  img="src/assets/certificate.webp" link="src/assets/SAURAV-KUMAR-JHA-Participant-Certificate (2).pdf" />
                <Certificate name="Python" img="src/assets/certificate.webp" link="src/assets/11614- Saurav Kumar Jha-Python Certificate.pdf" />
            </main>
        </>
    )
}