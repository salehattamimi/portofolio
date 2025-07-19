import Image from "next/image"
import "remixicon/fonts/remixicon.css"
const HeroImage = "/assets/saleh.jpeg"
const PortoPdf = "/Saleh Abdullah Attamimi S.Kom.pdf"
// const HeroImage = '/assets/hero-img.webp'

const Hero = () => {
    return (
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1 ">
            <div className="animate__animated animate__fadeInUp">
                <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
                    <img src={HeroImage} alt="Hero Image" className="w-10 rounded-md" />
                    <q>🧠The best developers aren’t those who know everything, but those who never stop exploring
                    </q>
                </div>
                <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Saleh Attamimi</h1>
                <p className="text-base/loose mb-6 opacity-50">    I'm a Fullstack Developer with 6+ years of experience and over 15 completed web projects under my belt.
                    I specialize in Laravel and modern frontend stacks, and I’m passionate about building clean, scalable, and user-focused applications.
                    I'm always learning and exploring new technologies to keep improving my craft.


                </p>
                <div className="flex items-center sm:gap-4 gap-2">
                    <a href={PortoPdf} target="_blank" download className="bg-red-900 p-4 rounded-2xl hover:bg-red-600">Download CV <i className="ri-download-line ri-lg"></i></a>
                    <a href="#project" className="bg-blue-900 p-4 rounded-2xl hover:bg-blue-800">Lihat Proyek<i className="ri-arrow-down-line ri-lg"></i></a>
                </div>
            </div>
            {/* <div className="bg-gradient-to-b from-purple-500 to-blue-600 p-4 rounded-bl-[60px]"> */}
            <img src={HeroImage} alt="Hero Image" className="w-[450px] h-[500px] rounded-2xl md:ml-auto animate__animated animate__fadeInUp animate__delay-1s" />
            {/* </div> */}

        </div>
    )
}

export default Hero