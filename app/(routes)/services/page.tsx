import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Algunos <span className="font-bold text-secondary"> datos.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Historia del conflicto armado en Colombia: El conflicto armado en Colombia comenzó en la década de 1960 con la formación de grupos guerrilleros como las FARC (Fuerzas Armadas Revolucionarias de Colombia) y el ELN (Ejército de Liberación Nacional). Este conflicto se caracterizó por enfrentamientos entre el gobierno, paramilitares y guerrilleros, resultando en cientos de miles de muertos y desplazados..</p>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;