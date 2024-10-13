// Material Kit 2 React components
import MKTypography from "components/MKTypography";

import events from "../../../../events";
import { carouselImage4, carouselImage5 } from "assets/images";

const [firstEvent, secondEvent] = events;

const commonStyles = {
    textShadow: "2px 2px 4px black",
    textAlign: "center",
    maxWidth: "90%",
    width: "100%",
    textJustify: "inter-word",
};

const typographyStyles = {
    ...commonStyles,
    mb: 1,
    fontSize: {
        xs: "3rem",
        sm: "4rem",
        md: "5rem",
    },
};

const subtitleStyles = {
    ...commonStyles,
    fontSize: {
        xs: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
    },
};

const createEventTitle = (event, fontFamily) => (
    <>
        <MKTypography
            variant="h1"
            sx={{ ...typographyStyles, fontFamily }}
            color="white"
        >
            {event.name}
        </MKTypography>
        <MKTypography
            variant="h6"
            sx={{ ...subtitleStyles, fontFamily }}
            color="white"
        >
            {event.date.toLocaleDateString()}
        </MKTypography>
    </>
);

const carouselItems = [
    {
        image: firstEvent.image,
        title: createEventTitle(firstEvent, firstEvent.fontFamily),
        description: firstEvent.description,
    },
    {
        image: "https://pachangatournament.com/images/2024/gallery-7.jpg",
        title: (
            <MKTypography variant="h1" sx={typographyStyles} color="white">
                Competición y Diversión
            </MKTypography>
        ),
        description:
            "Disfruta de intensas partidas y conoce a otros apasionados del juego. ¡Demuestra tus habilidades y estrategias!",
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5d/a9/0d/lopesan-costa-meloneras.jpg?w=1100&h=-1&s=1",
        title: (
            <MKTypography variant="h1" sx={typographyStyles} color="white">
                Alójate como dios
            </MKTypography>
        ),
        description:
            "Enchúfate cócteles hasta reventar disfrutando de un clima espectacular. Gafas de sol 24/7.",
    },
    {
        image: secondEvent.image,
        title: createEventTitle(secondEvent, secondEvent.fontFamily),
        description: secondEvent.description,
    },
    {
        image: carouselImage4,
        title: (
            <MKTypography variant="h1" sx={typographyStyles} color="white">
                Manquea con estilo
            </MKTypography>
        ),
        description:
            "Las derrotas nunca supieron mejor. Si palmas descuida, disfrutarás tanto como si ganaras. ¡No te preocupes por perder, solo por disfrutar!",
    },
    {
        image: carouselImage5,
        title: (
            <MKTypography variant="h1" sx={typographyStyles} color="white">
                Disfruta del Gathering
            </MKTypography>
        ),
        description:
            "Porque tenemos claro que no todo es competir. Relájate con nuestro coctelero o juégate unas partiditas nocturnas con los demás participantes, y al día siguiente vacila de tu victoria o descarga tu venganza en la piscina.",
    },
];

const bannerData = { carouselItems };

export default bannerData;
