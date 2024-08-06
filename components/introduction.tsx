import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Esto es lo que, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes informarte',
                                1000,
                                'puedes participar',
                                1000,
                                'puedes votar',
                                1000,
                                'puedes decidir',
                                1000,
                                'puedes opinar',
                                1000,
                                'puedes analizar',
                                1000,
                                'puedes reflexionar',
                                1000,
                                'puedes debatir',
                                1000,
                                'puedes aprender',
                                1000,
                                'puedes contribuir',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Con la presentación queremos Proveer una comprensión completa del plebiscito en Colombia, cubriendo su contexto histórico, desarrollo, resultados, reacciones y lecciones aprendidas..
                    </p>
                    <iframe width="280" height="170" src="https://www.youtube.com/embed/iW0xz7nYSc0?si=gaSf3kRCFcYF187i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    

                    <div className="flex items-center p-20 justify-center gap-3 md:justify-start md:gap-10">
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;