'use client';
import { useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Skills from './Skills'
import Timeline from './Timeline'
import Project from './Project'
import Footer from './Footer'
import "aos/dist/aos.css";
import AOS from "aos";

const LandingPageComponent = () => {
    useEffect(() => {
        AOS.init({ once: true });
    });
    return (
        <div className="container mx-auto px-4">
            <Navbar />
            <Hero />
            <Skills />
            <Timeline />
            <Project />
            <Footer />

        </div>
    )
}

export default LandingPageComponent