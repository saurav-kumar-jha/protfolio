import { BsGithub, BsThreads } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { RiTwitterXFill } from "react-icons/ri"

export const SocialMedia = () => {
    return (
        <div className="h-[40px] w-[80%] my-[20px] mx-auto flex justify-between items-center gap-[10px] text-2xl ">
            <a href="https://www.instagram.com/sksaurav.1/profilecard/?igsh=MTdqZHZyZzBwanRhYg==" target="_blank"><FaInstagram className="insta" /></a>
            <a href="https://x.com/Sauravkumar_dev?t=0l5lc0sg8vtLQF9C8Bm0nA&s=09" target="_blank"><RiTwitterXFill className="x" /></a>
            <a href="https://www.threads.net/@sksaurav.1" target="_blank"><BsThreads className="thread" /></a>
            <a href="https://github.com/saurav-kumar-jha" target="_blank"><BsGithub className="git" /></a>
            <a href="" target="_blank"><FaLinkedin className="link" /></a>
        </div>
    )
}