import {
    BookText,
    CodeSquare,
    HomeIcon,
    UserRound,
    Linkedin,
    Twitter,
    Rss,
    Twitch,
    Youtube,
    Github, Instagram,
    Crop,
    Pencil,
    Computer,
    Book,
    Rocket,
    Speech
} from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/s.92.08/",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/sergio-ayala-50b7b0114/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/SergioAyalaHernandez",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Antecedentes del Conflicto",
        subtitle: "Historia",
        description: "Explora los orígenes del conflicto armado en Colombia, incluyendo los principales actores involucrados y las causas subyacentes que llevaron a décadas de violencia.",
        date: "1960-Actual",
    },
    {
        id: 2,
        title: "Inicio de las Negociaciones",
        subtitle: "Proceso de Paz",
        description: "Descubre cómo el gobierno de Juan Manuel Santos y las FARC iniciaron las negociaciones de paz en La Habana, Cuba, marcando un hito en la historia reciente de Colombia.",
        date: "Sept 2012",
    },
    {
        id: 3,
        title: "Firma del Acuerdo de Paz",
        subtitle: "Acuerdo Histórico",
        description: "Conoce los detalles del acuerdo de paz firmado entre el gobierno colombiano y las FARC, que buscaba poner fin a más de 50 años de conflicto armado.",
        date: "Aug 2016",
    },
    {
        id: 4,
        title: "Convocatoria del Plebiscito",
        subtitle: "Consulta Popular",
        description: "El plebiscito fue convocado para que los colombianos votaran a favor o en contra del acuerdo de paz, permitiendo a la ciudadanía tener voz en este importante proceso.",
        date: "Oct 2, 2016",
    },
    {
        id: 5,
        title: "Resultados del Plebiscito",
        subtitle: "Decisión Ciudadana",
        description: "El resultado del plebiscito mostró una división en la opinión pública, con un estrecho margen de victoria del 'No' que sorprendió a muchos observadores.",
        date: "Oct 2, 2016",
    },
    {
        id: 6,
        title: "Reacciones Nacionales",
        subtitle: "Opinión Pública",
        description: "Analiza las diversas reacciones que surgieron tras los resultados del plebiscito, desde la sorpresa y la decepción hasta el apoyo y la crítica.",
        date: "Oct 2016",
    },
    {
        id: 7,
        title: "Impacto Internacional",
        subtitle: "Perspectiva Global",
        description: "Examina cómo la comunidad internacional reaccionó ante los resultados del plebiscito y el impacto que tuvo en la percepción global del proceso de paz en Colombia.",
        date: "Oct 2016",
    },
    {
        id: 8,
        title: "Renegociación del Acuerdo",
        subtitle: "Ajustes al Acuerdo",
        description: "Descubre cómo el gobierno y las FARC renegociaron el acuerdo de paz tras el plebiscito, incorporando cambios para abordar las preocupaciones de los opositores.",
        date: "Nov 2016",
    },
    {
        id: 9,
        title: "Ratificación del Nuevo Acuerdo",
        subtitle: "Aprobación Legislativa",
        description: "El nuevo acuerdo de paz fue finalmente ratificado por el Congreso de Colombia, evitando un nuevo plebiscito y permitiendo la implementación de las medidas acordadas.",
        date: "Nov 24, 2016",
    },
    {
        id: 10,
        title: "Implementación del Acuerdo",
        subtitle: "Camino a la Paz",
        description: "Explora los desafíos y avances en la implementación del acuerdo de paz, incluyendo la reintegración de excombatientes y las medidas de justicia transicional.",
        date: "2017-Actual",
    }

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 52,
        text: "Años de conflicto armado",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 37,
        text: "Porcentaje de participación en el plebiscito",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 50.2,
        text: "Porcentaje de votos por el 'No'",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 49.8,
        text: "Porcentaje de votos por el 'Sí'",
        lineRight: false,
        lineRightMobile: false,
    }

];

export const serviceData = [
    {
        icon: <Book />,
        title: "Antecedentes del Conflicto",
        description: "Exploración de los orígenes y evolución del conflicto armado en Colombia.",
    },
    {
        icon: <Speech />,
        title: "Negociaciones de Paz",
        description: "Detalles sobre las conversaciones entre el gobierno y las FARC para alcanzar un acuerdo.",
    },
    {
        icon: <Pencil />,
        title: "Acuerdo de Paz",
        description: "Información sobre el contenido y los puntos clave del acuerdo de paz firmado en 2016.",
    },
    {
        icon: <Crop />,
        title: "Plebiscito de 2016",
        description: "Análisis del plebiscito realizado para aprobar o rechazar el acuerdo de paz.",
    },
    {
        icon: <Book />,
        title: "Resultados del Plebiscito",
        description: "Resultados y análisis del voto popular que mostró una división en la opinión pública.",
    },
    {
        icon: <Speech />,
        title: "Reacciones y Consecuencias",
        description: "Reacciones nacionales e internacionales tras los resultados del plebiscito.",
    },
    {
        icon: <Pencil />,
        title: "Renegociación del Acuerdo",
        description: "Descripción del proceso de renegociación del acuerdo de paz después del plebiscito.",
    },
    {
        icon: <Book />,
        title: "Ratificación del Acuerdo",
        description: "Información sobre cómo el Congreso ratificó el nuevo acuerdo de paz.",
    },
    {
        icon: <Computer />,
        title: "Implementación del Acuerdo",
        description: "Detalles sobre los desafíos y avances en la implementación del acuerdo de paz.",
    },
    {
        icon: <Rocket />,
        title: "Estado Actual",
        description: "Estado actual del proceso de paz y su impacto en la sociedad colombiana.",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Sergio Ayala",
        description:
            "Desarrollador de software. ¡Altamente Eficiente!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Luis Serna",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Daniel Capera",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Henry Castro",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Yan Carlos Cortes",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    }
];