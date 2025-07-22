"use client"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <div className="navbar py-7 flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold md:bg-transparent text-white">Saleh Attamimi </h1>
            </div>
            <ul className={`${active ? "top-0 opacity-100" : "-top-10 opacity-0"} menu flex items-center gap-6 sm:gap-10 md:static fixed left-1/2 bg-red-900/80 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl -translate-x-1/2 md:-translate-x-0 md:opacity-100 md:bg-transparent transition-all md:transition-none z-50 `}>
                <li><a href="#home" className="text-base sm:text-lg font-medium hover:transition-all  hover:rounded-2xl hover:text-red-600">Home</a></li>
                <li><a href="#skills" className="text-base sm:text-lg font-medium hover:transition-all  hover:rounded-2xl hover:text-red-600">Skills</a></li>
                <li><a href="#timeline" className="text-base sm:text-lg font-medium hover:transition-all  hover:rounded-2xl hover:text-red-600">Timeline</a></li>
                <li><a href="#project" className="text-base sm:text-lg font-medium hover:transition-all  hover:rounded-2xl hover:text-red-600">Project</a></li>
                <li><a href="#contact" className="text-base sm:text-lg font-medium hover:transition-all  hover:rounded-2xl hover:text-red-600">Contact</a></li>
            </ul>
        </div>
    )
}

export default Navbar