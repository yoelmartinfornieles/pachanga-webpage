import React, { lazy, Suspense } from "react";
import { Grid, Box, CircularProgress } from "@mui/material";
import { Helmet } from "react-helmet";
import { useHashScroll, findEventByName } from "shared";
import { Section, StyledCard } from "components";
import { aboutUsBanner } from "../../assets/images";
import {
    yoelProfilePhoto,
    riquelmeProfilePhoto,
    josinProfilePhoto,
} from "../../assets/images";

const Header = lazy(() => import("sections/Header"));
const Statement = lazy(() => import("sections/Statement"));
const TeamMembers = lazy(() => import("sections/TeamMembers"));

const teamBody = `En 2023, un comando compuesto por tres de los mejores hombres del panorama magiquero nacional fue reunido para una misión: llevar la diversión y el gathering a un nivel nunca antes visto. 
No tardaron en fugarse de la realidad y ponerse manos a la obra.
Hoy, buscados todavía por hacienda, sobreviven como Pachangueros de fortuna.
Si tiene usted ganas de echarse unas partiditas, y si los encuentra, quizá pueda convencerlos para jugar. O al menos, invitarlos a una cerveza.

Primero, tenemos a Riquelme, el alma del equipo. Su familia siempre está ahí para echar un cable, ya sea haciendo de anfitriones o montando inverosímiles estructuras de grabación. 
Son como los Avengers, pero con más sentido común y menos trajes ajustados. 
Luego está Josín, el cerebro logístico. Su familia también se une a la causa, ayudando a mantener el barco a flote, o llevando a la peña al aeropuerto, porque, ¿por qué no? Son como Uber, pero con más amor y menos tarifas.

Y por supuesto, un servidor, el tipo que se queda hasta las mil programando, mientras mi mujer y mi hijo me tienen una paciencia infinita. 
Ellos saben que cuando no estoy luchando contra bugs, estoy luchando por el título en el Pachanga. Y sí, a veces me confunden con un superhéroe, pero solo porque llevo la misma camiseta tres días seguidos.

Así que, si alguna vez necesitas un equipo que combine la estrategia de Magic con la logística de una operación militar y el humor de un cómic, no busques más. 
El Equipo Pachanga está aquí para salvar el día, o para hacer un sándwich de atún. ¡Que Richard Garfield nos acompañe! Y si no, al menos que nos dé un autógrafo.`;

const members = [
    {
        id: "riquelme",
        name: "Juan Luis Riquelme López - Mr. Pachanga",
        work: "Presidente",
        image: riquelmeProfilePhoto,
        description: `Riquelme es el alma, el pulmón y el corazón del Pachanga. Sí, lo sé, suena como si fuera un órgano donante, pero qué le vamos a hacer. 
        Hace ya un montón que me topé con él en un GP de... bueno, de alguna ciudad que ni el GPS recuerda, y me soltó su sueño: montar un torneo de Magic The Gathering 
        en su isla, Gran Canaria, donde la competición y el disfrute se dieran la mano como si fueran mejores amigos en una comedia romántica. 
        Y mirad, el tío ya va por la cuarta edición. 
        Ulamog sabe que no ha sido fácil, pero edición tras edición, ha ido subiendo de nivel como si fuera un personaje de videojuego, aumentando el número de participantes. 
        Eso sí, lo de jugar a Magic lo lleva regulinchi, pero al menos no se ha convertido en un Tibalt de pacotilla. Ha ido puliendo sus habilidades con sus siempre fieles Eldrazis. 
        Generoso, trabajador y, sobre todo, buena persona, Riquelme es el que hace que el Pachanga sea lo que es. ¡Larga vida a Riquelme! Y que nunca le falte el maná ni el sentido del humor.`,

        links: [
            {
                platform: "X",
                url: "https://x.com/ElChicoGengar?t=FIpA747jkdS20m_9Un_eBQ&s=09",
            },
            {
                platform: "Facebook",
                url: "https://www.facebook.com/share/15U3vCfaMS/",
            },
            {
                platform: "Instagram",
                url: "https://www.instagram.com/el_chico_gengar/profilecard/?igsh=MWFhYm5rOGVtaHdybQ==",
            },
        ],
    },
    {
        id: "josin",
        name: "Josín Pérez López - El Rey de los Kavus",
        work: "Chief Operation Manager",
        image: josinProfilePhoto,
        description: `Cuando no sepas dónde ir, busca a Josín. Cuando no sepas qué hacer, busca a Josín. Cuando en tu corazón solo
        encuentres oscuridad, busca a Josín. Josín es tu guía, Josín es el camino. 
        Sí, suena como una canción infantil con un toque de gurú espiritual, pero así es Josín. Si te lo ganas un poquito, tienes un amigo para toda la vida. 
        El tío es un trozo de pan, y divertido como pocos. Te acompañará al fin del mundo y más allá, como un sidekick de película de acción.
        Además, en el Pachanga se ocupa de gran parte de la logística y las cuentas, porque alguien tiene que asegurarse de que el presupuesto no se vaya a la mierda. 
        Para agosto se empieza a relajar, pero el resto del año su cabeza echa humo intentando negociar como si fuera un broker de Wall Street.
        Eso sí, este tampoco es muy ducho con las cartitas, no me gana una partida ni aunque le dé ventaja. Menos mal que en el Artrabian se llevó un alegrón,
        porque en el Pachanga se tuvo que meter a trabajar de lo mal que se le daba el torneo. 
        Antes de que se me olvide: fué el inspector principal del 'Incidente Culito Blanco', y sus pesquisas no tardaron en dar su fruto. Menudo sabueso.
        Incansable coleccionista de Kavus (se rumorea que posee ya el 80% de las existencias), otro buen tío con un corazón de oro. Josín, se te quiere. Y no te preocupes, 
        siempre habrá un lugar para ti en el equipo, aunque sea como el coleccionista oficial de cartas raras.`,

        links: [
            {
                platform: "X",
                url: "https://x.com/Kavuslord?t=NUTumVK65MAWboAbazoZ1A&s=08",
            },
            {
                platform: "Instagram",
                url: "https://www.instagram.com/kavuslord?igsh=ZnhuNTJlazd4cXg=",
            },
        ],
    },
    {
        id: "yoelmartin",
        name: "Yoel Martin - El Developer",
        work: "Web Developer",
        image: yoelProfilePhoto,
        description: `Y un servidor, el tipo que te ha soltado toda la chapa, el mago de los textos inacabables, los chistes malos y los colores estridentes.
        C'est moi. 
        Ingeniero renegado, viví como camarero simpaticote hasta que volví a las Magic. Y vendí el bar para comprar barajas de Modern. Así, como lo oyes. 
        Desprovisto de mi sustento, tuve que reaprender a programar para ganarme la vida, y aquí me tenéis, haciendo webs cachimolonas mientras trabajo
        para una gran pequeña compañía que la va a petar (seguro) pronto. Porque, ¿quién necesita estabilidad financiera cuando puedes tener cartas brillantes, verdad?
        Eso sí, soy el único que sabe jugar bien. Como todo el mundo sabe, los jugadores de Burn somos unas máquinas. Mi mejor resultado ha sido quedarme a las puertas
        del top en el Arcanis de este año, pero preparaos, porque voy con todo a por el Pachanga IV, y ya nada me podrá detener, el recinto vibra con la emoción
        de verme jugar a las dos, a las dos... 
        ¡Sí, a las dos de la tarde, cuando todos están en modo siesta! Así que agarraos, porque esto va a ser más épico que un crossover de My Little Pony y Bratz.`,

        links: [
            {
                platform: "X",
                url: "https://x.com/fan_cassidy",
            },
            {
                platform: "Linkedin",
                url: "https://es.linkedin.com/in/yoel-martin",
            },
        ],
    },
];

function AboutUs() {
    useHashScroll();

    const event = findEventByName("Pachanga Tournament IV");
    if (!event) return null;

    const loadingSpinner = (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <CircularProgress />
        </Box>
    );

    return (
        <>
            <Helmet>
                <title>Sobre Nosotros - Pachanga Tournament</title>
                <meta
                    name="description"
                    content="Conoce al equipo detrás del Pachanga Tournament, un evento de Magic: The Gathering en las Islas Canarias."
                />
                <meta
                    name="keywords"
                    content="Magic, Pachanga, Equipo, Torneo, Canarias"
                />
            </Helmet>
            <Suspense fallback={loadingSpinner}>
                <Header title={`Sobre Nosotros`} image={aboutUsBanner} />
            </Suspense>
            <Grid
                container
                justifyContent="center"
                mx="auto"
                position="relative"
            ></Grid>
            <StyledCard>
                <Section id="main" />
                <Section id="team">
                    <Suspense fallback={loadingSpinner}>
                        <Statement title="El Equipo" body={teamBody} />
                    </Suspense>
                </Section>
                <Section
                    id="teammembers"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Suspense fallback={loadingSpinner}>
                        <TeamMembers members={members} />
                    </Suspense>
                </Section>
            </StyledCard>
        </>
    );
}

export default AboutUs;
