// images
import {
    pachangaIV,
    paradise2ndRound,
    pachangaIVGeneralTicket,
    pachangaIVVIPticket,
    paradise2ndRoundGeneralTicket,
} from "./images";
import kepaRefereePhoto from "../assets/images/bruce-mars.jpg";
import { pachangaIVFoundations } from "./foundations";
const events = [
    {
        name: "Pachanga Tournament IV",
        description:
            "El pachanga vuelve más grande y mejor que nunca. ¿Te lo vas a perder?",
        image: pachangaIV,
        fontFamily: "'Permanent Marker'",
        date: new Date("2025-10-03"),
        tweet: "Pachanga Tournament IV cada da está más cerca. ¿Te lo vas a perder? Compra ya tu entrada en www.pachangatournament.com #pachangaTournamentIV, @pachangaTorneo",
        foundations: pachangaIVFoundations,
        tickets: [
            {
                name: "Entrada General",
                description:
                    "Entrada General para el Main Event. Da derecho al uso de las instalaciones.",
                image: pachangaIVGeneralTicket,
                price: "67",
                stripeLink: "https://buy.stripe.com/test_fZe3eX2WlbXy6887st",
            },
            {
                name: "Entrada VIP",
                description:
                    "Entrada VIP para el Main Event. Da derecho al uso de las instalaciones y viene con un paquete de regalitos y viene con un paquete de regalitos y viene con un paquete de regalitos y viene con un paquete de regalitos y viene con un paquete de regalitos y viene con un paquete de regalitos y viene con un paquete de regalitos.",
                image: pachangaIVVIPticket,
                price: "102",
                stripeLink: "https://buy.stripe.com/test_fZe3eX2WlbXy6887st",
            },
        ],
        refereeTeam: [
            {
                image: kepaRefereePhoto,
                name: "Kepa",
                position: { color: "info", label: "Head Judge" },
                description:
                    "Le gustan los chuletunes mas que a un tonto un pirulí.",
            },
            {
                image: kepaRefereePhoto,
                name: "Kepa",
                position: { color: "info", label: "Head Judge" },
                description:
                    "Le gustan los chuletunes mas que a un tonto un pirulí.",
            },
            {
                image: kepaRefereePhoto,
                name: "Kepa",
                position: { color: "info", label: "Head Judge" },
                description:
                    "Le gustan los chuletunes mas que a un tonto un pirulí.",
            },
            {
                image: kepaRefereePhoto,
                name: "Kepa",
                position: { color: "info", label: "Head Judge" },
                description:
                    "Le gustan los chuletunes mas que a un tonto un pirulí.",
            },
        ],
        prizes: [
            {
                name: "Trofeo PachangaIV Modern Champion",
                description:
                    "Este trofeo quedaría increíble en tu aparador, ¿no crees?",
                icon: "public",
            },
            {
                name: "Trofeo PachangaIV Modern Champion",
                description:
                    "Este trofeo quedaría increíble en tu aparador, ¿no crees?",
                icon: "public",
            },
            {
                name: "Trofeo PachangaIV Modern Champion",
                description:
                    "Este trofeo quedaría increíble en tu aparador, ¿no crees?",
                icon: "public",
            },
            {
                name: "Trofeo PachangaIV Modern Champion",
                description:
                    "Este trofeo quedaría increíble en tu aparador, ¿no crees?",
                icon: "public",
            },
        ],
    },

    {
        name: "Commander Paradise by Pachanga: 2nd Round",
        description:
            "Repetimos. El verdadero espíritu EDH vuelve a la isla. ¡No te pierdas la oportunidad de jugar con los mejores!",
        image: paradise2ndRound,
        fontFamily: "'Cinzel'",
        date: new Date("2025-02-21"),
        tweet: "Comandante, el Commander Paradise by Pachanga - 2nd Round está al caer. Agarra tus 100, corre a pachangatournament.com a por tu entrada y prepara los tambores de guerra #commanderParadise2ndRound @pachangaTorneo",
        foundations: null,
        tickets: [
            {
                name: "Entrada General",
                description:
                    "Entrada General para el Main Event. Da derecho al uso de las instalaciones.",
                image: paradise2ndRoundGeneralTicket,
                price: "67",
                stripeLink: "https://buy.stripe.com/test_fZe3eX2WlbXy6887st",
            },
        ],
    },
    {
        name: "Pachanga Tournament V",
        description: null,
        image: null,
        fontFamily: null,
        date: null,
        tweet: null,
        foundations: null,
        tickets: [],
    },
];

export default events;
