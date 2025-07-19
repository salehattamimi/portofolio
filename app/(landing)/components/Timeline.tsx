// components/EducationTimeline.tsx
"use client";

const education = [
    {
        year: "2008 - 2011",
        title: "Junior High School Graduation",
        school: "SMP N 1 Surabaya.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        year: "2011 - 2014",
        title: "High School Graduation",
        school: "Al-Hikmah Senior High School Surabaya.",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
        year: "2014 - 2018",
        title: "BachelorBachelor of Information Technology",
        school: "Surabaya University.",
        desc: "Earned a Bachelor's degree in Information Technology with a focus on software development, data structures, and system design. Participated in various tech projects and student research, while also gaining hands-on experience through internships and collaborative assignments.",
    },
];

const experience = [
    {
        year: "May 2021 - 2024",
        title: "Full Stack Developer",
        school: "Pemerintah Kota Surabaya (Contract)",
        desc: "Working on public-sector digital solutions, primarily focused on developing and maintaining government web applications using Laravel for backend and frontend. Collaborating with internal stakeholders to improve system efficiency and user experience.",
    },
    {
        year: "Dec 2019 - Present",
        title: "Website Developer",
        school: "CV Teknologi Indonesia Maju (Full-time)",
        desc: "Responsible for building and maintaining client websites with a strong focus on responsive design, performance optimization, and SEO best practices. Frequently involved in end-to-end project development from concept to deployment.",
    },
    {
        year: "May 2019 - 2023",
        title: "Head Programmer",
        school: "Kodig.id (Full-time)",
        desc: "Leading the development team and overseeing multiple web application projects. Tasked with code reviews, technical planning, and architecture decisions to ensure scalability and maintainability across products.",
    },
    {
        year: "Aug 2018 - Aug 2021",
        title: "Website Developer",
        school: "PT Tata Cipta Teknologi Indonesia (Freelance)",
        desc: "Worked on a wide range of freelance website projects, collaborating with clients to deliver custom-built digital solutions tailored to business needs. Focused on frontend development and CMS integration.",
    },
    {
        year: "Oct 2018 - Dec 2018",
        title: "Full Stack Developer",
        school: "PT Tara Cipta Teknologi Indonesia (Freelance)",
        desc: "Short-term freelance project involving full stack development of a web-based application. Responsible for backend logic, database structuring, and frontend implementation.",
    },
];

export default function Timeline() {
    return (
        <div className="mt-32 py-10 flex md:flex-row flex-col justify-between md:justify-between bg-zinc-800 px-20 rounded-2xl" data-aos="fade-up" data-aos-duration="1000" id="timeline">
            <section className="relative border-l border-gray-700 pl-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <i className="ri-graduation-cap-line text-red-600"></i>
                    Educational Qualification
                </h2>

                {education.map((item, idx) => (
                    <div key={idx} className="relative mb-12">
                        {/* Timeline dot */}
                        <div className="absolute left-[-10px] top-1 w-4 h-4 rounded-full bg-gray-800 border-4 border-gray-400 z-10" />

                        {/* Content */}
                        <div className="ml-6">
                            <span className="text-sm bg-gray-800 text-gray-200 px-3 py-1 rounded-full inline-block mb-2">
                                {item.year}
                            </span>
                            <h3 className="text-red-600 font-semibold">{item.title}</h3>
                            <p className="text-white font-medium">{item.school}</p>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="relative border-l border-gray-700 pl-6">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <i className="ri-briefcase-line text-red-600"></i>
                    Working Experience
                </h2>

                {experience.map((item, idx) => (
                    <div key={idx} className="relative mb-12">
                        {/* Timeline dot */}
                        <div className="absolute left-[-10px] top-1 w-4 h-4 rounded-full bg-gray-800 border-4 border-gray-400 z-10" />

                        {/* Content */}
                        <div className="ml-6">
                            <span className="text-sm bg-gray-800 text-gray-200 px-3 py-1 rounded-full inline-block mb-2">
                                {item.year}
                            </span>
                            <h3 className="text-red-600 font-semibold">{item.title}</h3>
                            <p className="text-white font-medium">{item.school}</p>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
