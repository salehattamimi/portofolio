
import Image, { StaticImageData } from "next/image";
import Erusun from "../../../public//assets/proyek/erusun.png";
import Sibengki from "../../../public/assets/proyek/sibengki.png";
import SilatPesut from "../../../public/assets/proyek/silatpesut.png";
import Simpeg from "../../../public/assets/proyek/simpeg.png";
import Hyarta from "../../../public/assets/proyek/hyarta.png";
import Jatimberdasi from "../../../public/assets/proyek/jatimberdasi.png";

type Project = {
    id: number,
    gambar: StaticImageData,
    desk: string,
    nama: string,
    tools: string[],
    dad: string;
}
export const listProyek: Project[] = [{
    id: 1,
    gambar: Erusun,
    nama: "Erusun",
    desk: "e-Rusun is a digital platform designed to streamline the management and administration of public housing (rusun) through a transparent, efficient, and integrated system. It serves both residents and administrators, improving service delivery and data accessibility.",
    tools: ["Laravel 8", "Javascript", "JWT", "PostgreSql", "Nginx"],
    dad: "200",
},
{
    id: 2,
    gambar: Sibengki,
    nama: "Sibengki",
    desk: "SIBENGKI stands for “Bengkel Usaha Kita”, which translates to `Our Workshop Business`. It is a web-based application designed to support the training and operational management of automotive workshops. The platform focuses on enhancing the skills and performance of workshop employees through structured digital modules.",
    tools: ["Laravel 10", "Javascript", "PostgreSql", "Ajax", "Nginx"],
    dad: "300",
},
{
    id: 3,
    gambar: SilatPesut,
    nama: "Silat Pesut",
    desk: "Silat Pesut is Integrated Monitoring Platform for Local Government a web-based e-controlling system developed by the Penajam Paser Utara government to monitor and report government programs in real time. It helps streamline reporting, improve transparency, and support data-driven decision-making across departments for .",
    tools: ["Laravel 10", "Bootstrap", "Javascript", "Leaflet", "Nginx", "PostgreSql"],
    dad: "400",
},
{
    id: 4,
    gambar: Simpeg,
    nama: "Employee Information System",
    desk: "SIMPEG (simpeg.madiunkota.go.id) is an integrated HR information system for the Madiun City Government. It manages civil servant data, including employee records, promotions, positions, and performance evaluations — all in one digital platform to improve accuracy and efficiency.",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
},
{
    id: 5,
    gambar: Hyarta,
    nama: "Hyarta Ecovillage",
    desk: "Hyarta Ecovillage is a premium residential and commercial development located near Adisucipto Airport, Yogyakarta, promoted under hyarta.com. It offers eco-friendly townhouses and shop-houses (ruko), blending modern architecture with Javanese cultural elements and abundant green space",
    tools: ["Laravel 8", "Javascript", "Bootsrap", "PostgreSql", "Nginx"],
    dad: "600",
},
{
    id: 6,
    gambar: Jatimberdasi,
    nama: "Provincial Innovation Competition",
    desk: "Jatim Berdasi is a digital platform developed by East Java’s Regional Research & Innovation Agency (BRIDA) to manage and evaluate regional innovations efficiently. It replaces manual processes with a structured, transparent system for submitting, verifying, and scoring innovation proposals—primarily for the annual Inotek Awards. The system has significantly enhanced the province’s innovation index by ensuring real-time tracking, standardized evaluation across 20 criteria, and streamlined administration.",
    tools: ["Laravel 8", "Javascript", "JWT", "PostgreSql", "Nginx"],
    dad: "700",
},
];

const Project = () => {
    return (
        <div className='project mt-32 py-10' id="project">
            <h1 className='text-center text-4xl font-bold mb-2' data-aos="fade-up" data-aos-duration="2000" >My Project</h1>
            <p className='text-base/loose text-center opacity-50' data-aos="fade-up" data-aos-duration="2000" >My Last Project </p>

            <div className='project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
                {listProyek.map(project => (
                    <div
                        key={project.id}
                        className="p-4 bg-zinc-800 rounded-md flex flex-col justify-between min-h-[480px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad}
                    >
                        <div>
                            <Image
                                loading="lazy"
                                src={project.gambar}
                                alt={project.nama}
                                className="w-full h-auto mb-4 rounded-md"
                            />

                            <h1 className="text-2xl text-red-600 font-bold mb-2">{project.nama}</h1>
                            <p className="text-base/loose mb-4">{project.desk}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, index) => (
                                    <p
                                        className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                                        key={index}
                                    >
                                        {tool}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Tombol tetap di bawah */}
                        <div className="mt-6 text-center">
                            <a
                                href="#"
                                className="bg-red-600 p-3 rounded-lg block border border-zinc-800 hover:bg-red-700"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Project