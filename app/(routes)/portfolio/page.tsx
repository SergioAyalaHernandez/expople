import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import WordSearch from "@/components/wordSearch";



const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <CircleImage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Sopa de <span className="font-bold text-secondary">letras</span></h1>
                <WordSearch />
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;