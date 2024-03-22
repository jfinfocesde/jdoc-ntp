interface subItemsInfoType {
    href: string,
    label: string,
    date: string,
}

interface itemsInfoType {
    href: string,
    label: string,
    date: string,
    submenu: subItemsInfoType[]
}

export const modedev = false

export const infoCourse = {
    title: "Nuevas Tecnologías de programación",
    description: "Este curso te guiará a través de los fundamentos del lenguaje de programación Python, la biblioteca Pandas, el sistema de control de versiones Git y la plataforma de alojamiento de código GitHub. Estas herramientas te permitirán trabajar de forma eficiente en proyectos de análisis de datos, ya sea solo o en equipo.",
    image: "https://img-c.udemycdn.com/course/480x270/3034886_356a_5.jpg"
}

export const itemsInfo: itemsInfoType[] = [
    {
        href: "/course",
        label: "Introducción",
        date: '2024-2-15',
        submenu: []
    },
    {
        href: "/course/contents/semana1",
        label: "Semana 1",
        date: '2024-2-15',
        submenu: [
            {
                href: "/course/contents/semana1",
                label: "Pacto pedagógico",
                date: '2024-2-15',
            },
            {
                href: "/course/activities/actividad1",
                label: "Actividad 1",
                date: '2024-2-22',
            },           
        ]
    },
    {
        href: "",
        label: "Semana 2",
        date: '2024-2-22',
        submenu: [
            {
                href: "/course/contents/semana2",
                label: "Contenido",
                date: '2024-2-22',
            },
            {
                href: "/course/activities/actividad2",
                label: "Actividad 2",
                date: '2024-2-22',
            },
        ]
    },
    {
        href: "",
        label: "Semana 3",
        date: '2024-2-29',
        submenu: [
            {
                href: "/course/contents/semana3",
                label: "Contenido",
                date: '2024-2-29',
            },
            {
                href: "/course/activities/actividad3",
                label: "Actividad 3",
                date: '2024-2-29',
            },
        ]
    },
    {
        href: "",
        label: "Semana 4",
        date: '2024-3-8',
        submenu: [
            {
                href: "/course/contents/semana4",
                label: "Contenido",
                date: '2024-3-8',
            },
            {
                href: "/course/activities/actividad4",
                label: "Actividad 4",
                date: '2024-3-8',
            },
        ]
    },    
    {
        href: "",
        label: "Semana 5",
        date: '2024-3-15',
        submenu: [
            {
                href: "/course/contents/semana5",
                label: "Contenido",
                date: '2024-3-15',
            },
            {
                href: "/course/activities/actividad5",
                label: "Actividad 5",
                date: '2024-3-15',
            },
        ]
    },    
    {
        href: "",
        label: "Semana 6",
        date: '2024-3-22',
        submenu: [
            {
                href: "/course/contents/semana6",
                label: "Contenido",
                date: '2024-3-22',
            },
            // {
            //     href: "/course/activities/actividad5",
            //     label: "Actividad 5",
            //     date: '2024-3-15',
            // },
        ]
    },    
]
