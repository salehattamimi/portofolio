import { StaticImageData } from "next/image";
import Image from "next/image";
import ImageNextjs from "../../../public/assets/tools/reactjs.png";
import ImageTailwind from "../../../public/assets/tools/tailwind.png";
import ImageJs from "../../../public/assets/tools/js.png";
import ImageGit from "../../../public/assets/tools/github.png";
import ImageReactJs from "../../../public/assets/tools/reactjs.png";
import ImageNodejs from "../../../public/assets/tools/nodejs.png";
import ImagePhp from "../../../public/assets/tools/php.png";
import ImageLaravel from "../../../public/assets/tools/laravel.png";
import ImagePostgreSql from "../../../public/assets/tools/postgresql.png";
import ImageMySql from "../../../public/assets/tools/mysql.png";



type Skill = {
    name: string;
    rate: number;
    tools: StaticImageData;
}
const skills: Skill[] = [
    { tools: ImageGit, name: "GIT", rate: 98 },
    // { name: "Nginx", rate: 95 },
    { tools: ImageTailwind, name: "Tailwind Css", rate: 95 },
    { tools: ImagePhp, name: "PHP", rate: 98 },
    { tools: ImageLaravel, name: "Laravel", rate: 98 },
    { tools: ImageJs, name: "Javascript", rate: 95 },
    { tools: ImageReactJs, name: "React Js", rate: 85 },
    { tools: ImageNextjs, name: "Next Js", rate: 90 },
    { tools: ImageNodejs, name: "Node Js", rate: 80 },
    { tools: ImagePostgreSql, name: "Postgresql", rate: 98 },
    { tools: ImageMySql, name: "Mysql", rate: 98 },
]

export default function Skills() {
    return (
        <div className="py-10 mt-52 bg-zinc-800 px-20 rounded-2xl" data-aos="fade-up" data-aos-duration="1000" id="skills">
            <h1 className="text-5xl pb-10 font-semibold">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, idx) => (
                    <div key={idx}>
                        <div className="flex items-center py-4 gap-3">
                            <Image src={skill.tools} alt={skill.name} width={24} height={24} />
                            <div className="text-white text-sm mb-1">
                                {skill.name} -{" "}
                                <span className="text-green-400 font-medium">({skill.rate}%)</span>
                            </div>
                        </div>
                        <div className="w-full bg-zinc-700 rounded-full h-3">
                            <div
                                className="bg-red-600 h-3 rounded-full transition-all duration-500"
                                style={{ width: `${skill.rate}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
