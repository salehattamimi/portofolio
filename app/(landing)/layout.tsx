'use client'
import { Poppins } from 'next/font/google';
import './frontendglobal.css'; // ⬅️ CSS khusus tampilan depan
import { useEffect } from 'react';

const poppins = Poppins({
    weight: ['500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function LandingLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        document.body.classList.add('scroll-smooth');
        return () => {
            document.body.classList.remove('scroll-smooth');
        };
    }, []);
    return (
        <div className={`bg-zinc-900 text-white min-h-screen ${poppins.className}`}>
            <main>{children}</main>
        </div>
    );
}
