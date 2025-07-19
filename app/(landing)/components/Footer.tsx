import React from "react";
import {
    Instagram,
    Github,
    Phone,
    Linkedin,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-300 py-10 mt-20" id="contact">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
                <p className="mb-6 text-sm text-zinc-400">Feel free to reach out on any of these platforms</p>
                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href="https://linkedin.com/in/salehattamimi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:text-red-600 group transition"
                    >
                        <Linkedin size={24} />
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">Linkedin</span>
                    </a>
                    <a
                        href="https://instagram.com/salehattamimi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:text-red-600 group transition"
                    >
                        <Instagram size={24} />
                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">Instagram</span>
                    </a>
                    <a
                        href="https://wa.me/+6287853433170"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:text-red-600 group transition"
                    >
                        <Phone size={24} />

                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">Whatsapp</span>
                    </a>
                    <a
                        href="https://github.com/salehattamimi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative hover:text-red-600 group transition"
                    >
                        <Github size={24} />

                        <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">Github</span>
                    </a>
                </div>
                <p className="text-xs text-zinc-500">© 2025 Saleh Attamimi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
