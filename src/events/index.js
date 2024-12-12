// images
import {
    pachangaIV,
    paradise2ndRound,
    pachangaIVGeneralTicket,
    paradise2ndRoundGeneralTicket,
    pachangaIVTrophy,
    paradise1Trophy,
    //pachangaIVArcanisCollab,
    pachaPoints,
    pachangaV,
    //pachangaIVMaterial,
    pachangaIVPosterA,
    pachangaIVPosterB,
    pachangaIIIModernChampion,
    pachangaIIIPioneerChampion,
    pachangaIIISealedChampion,
    pachangaIIModernChampion,
    pachangaIIPioneerChampion,
    pachangaIISealedChampion,
    pachangaIModernChampion,
    pachangaIPioneerChampion,
    pachangaISealedChampion,
    paradise1Champion,
    commanderParadise2Poster,
} from "./images";
import kepaRefereePhoto from "../assets/images/bruce-mars.jpg";
import {
    pachangaIVFoundations,
    commanderParadise2Foundations,
} from "./foundations";
import { pachangaIVInfo, commanderParadise2Info } from "./tournament";
import { pachangaIVHotel, commanderParadise2Hotel } from "./hotel";
import {
    EmojiEventsTwoTone,
    ConfirmationNumberOutlined,
    LocalBarTwoTone,
} from "@mui/icons-material";
import { pachangaGreyLogo, commanderWhiteLogo } from "../assets/images/logos";

const events = [
    {
        name: "Pachanga Tournament IV",
        logo: pachangaGreyLogo,
        description:
            "El Pachanga vuelve más grande y mejor que nunca. ¿Te lo vas a perder?",
        hotel: pachangaIVHotel,
        image: pachangaIV,
        fontFamily: "'Permanent Marker'",
        date: new Date("2025-10-03"),
        tweet: "Pachanga Tournament IV cada día está más cerca. ¿Te lo vas a perder? Compra ya tu entrada en www.pachangatournament.com #pachangaTournamentIV, @pachangaTorneo",
        info: pachangaIVInfo,
        posters: [pachangaIVPosterA, pachangaIVPosterB],
        foundations: pachangaIVFoundations,
        tickets: [
            {
                name: "Entrada General",
                description:
                    "Entrada General para el Main Event y los torneos de viernes y domingo. Da derecho al uso de las instalaciones.",
                image: pachangaIVGeneralTicket,
                price: "80",
                stripeLink: "https://buy.stripe.com/6oE6pLfbZa5ecqAcMM",
            },
        ],
        refereeTeam: [
            {
                image: kepaRefereePhoto,
                name: "Kepa",
                position: { color: "error", label: "Head Judge" },
                description:
                    "Le gustan los chuletunes más que a un tonto un pirulí.",
            },
        ],
        prizes: [
            {
                name: "Trofeo Pachanga IV Modern Champion",
                description:
                    "¿Este trofeo quedaría increíble en tu aparador, no crees? Pena que sólo se lo lleve el primero.",
                icon: <EmojiEventsTwoTone />,
                image: pachangaIVTrophy,
                alt: "Trofeo Pachanga IV Modern Champion",
            },
            {
                name: "1 entrada para el Pachanga V",
                description:
                    "Ventilado el Pachanga, siguiente reto. Vive el sueño, juega Magic, descubre Iberia. Y después, repite.",
                icon: <ConfirmationNumberOutlined />,
                image: pachangaV,
                alt: "Entrada para el Pachanga V",
            },
            /*             {
                name: "Material de Ultimate Guard y crédito de CardMarket a cholón",
                description:
                    "Elige a tu ilustrador favorito para que te haga un tapete digno de enmarcar, llévate un arkhive 400, deckboxes, fundas, playmats, pídete unas cartitas fullart foil...",
                icon: "public",
                image: pachangaIVMaterial,
                alt: "Material de UG",
            }, */
            {
                name: "5999+ pachaPoints en juego",
                description:
                    "Te los puedes gastar en invitar a cócteles a tus groupies, en cartas o en llevar a cenar a Josín. Hay quien se los gasta en Lorcana, no te cuento más.",
                icon: <LocalBarTwoTone />,
                image: pachaPoints,
                alt: "pachaPoints",
            },
        ],
        previousWinnersPhotos: [
            pachangaIIIModernChampion,
            pachangaIIIPioneerChampion,
            pachangaIIISealedChampion,
            pachangaIIModernChampion,
            pachangaIIPioneerChampion,
            pachangaIISealedChampion,
            pachangaIModernChampion,
            pachangaIPioneerChampion,
            pachangaISealedChampion,
        ],
        colors: {
            warning: "pachangaWarning",
            success: "pachangaSuccess",
            info: "pachangaInfo",
        },
    },
    {
        name: "Commander Paradise: 2nd Round",
        logo: commanderWhiteLogo,
        description:
            "Repetimos. El verdadero espíritu EDH vuelve a la isla. ¡No te pierdas la oportunidad de jugar con los mejores!",
        image: paradise2ndRound,
        hotel: commanderParadise2Hotel,
        fontFamily: "'Cinzel'",
        date: new Date("2025-05-23"),
        info: commanderParadise2Info,
        posters: [commanderParadise2Poster],
        tweet: "Comandante, el Commander Paradise by Pachanga - 2nd Round está al caer. Agarra tus 100, corre a pachangatournament.com a por tu entrada y prepara los tambores de guerra #commanderParadise2ndRound @pachangaTorneo",
        foundations: commanderParadise2Foundations,
        tickets: [
            {
                name: "Entrada General",
                description:
                    "Entrada General para el Main Event. Da derecho al uso de las instalaciones.",
                image: paradise2ndRoundGeneralTicket,
                price: "50",
                stripeLink: "https://buy.stripe.com/3cs7tP3th7X6gGQ8wx",
            },
        ],
        prizes: [
            {
                name: "Trofeo Commnader Paradise 2nd Round Champion",
                description:
                    "Sólo los Comandantes más dominantes pueden poseer este trofeo ¿Conseguirás la gloria?",
                icon: <EmojiEventsTwoTone />,
                image: paradise1Trophy,
                alt: "Trofeo Commnader Paradise 2nd Round Champion",
            },
            {
                name: "1499+ pachaPoints en juego",
                description:
                    "Y rellenamos esas duals que le faltan a tu mazo (No seas granuja, éstos no valen en el Yumbo).",
                icon: <LocalBarTwoTone />,
                image: pachaPoints,
                alt: "pachaPoints",
            },
        ],
        previousWinnersPhotos: [paradise1Champion],
        colors: {
            warning: "paradiseWarning",
            success: "paradiseSuccess",
            info: "paradiseInfo",
        },
    },
    /*  {
        name: "Pachanga Tournament V",        
        logo: pachangaWhiteLogo,
        description: null,
        hotel: null,
        image: null,
        fontFamily: null,
        date: null,
        tweet: null,
        info: null,
        posters: [],
        foundations: null,
        tickets: [
            {
                name: null,
                description: null,
                image: null,
                price: null,
                stripeLink: null,
            },
        ],
        refereeTeam: [],
        prizes: [
            {
                name: null,
                description: null,
                icon: <EmojiEventsTwoTone />,
                image: null,
                alt: null,
            },
        ],        previousWinnerPhotos: [

        ],        colors: {
            warning: "pachangaWarning",
            success: "pachangaSuccess",
            error: "pachangaError",
        },
    }, */
];

export default events;
