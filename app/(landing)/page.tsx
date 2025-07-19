import { Metadata } from "next";
import 'animate.css';
import LandingPageComponent from "./components/LandingPage";

export const metadata: Metadata = {
    title: "Saleh Attamimi. S.Kom",
    description: "Portofolio Saleh",
};

export default function LandingPage() {
    return (
        <LandingPageComponent />
    )
}