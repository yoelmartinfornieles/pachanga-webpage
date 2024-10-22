// images
import {
    pachangaIV,
    paradise2ndRound,
    pachangaIVGeneralTicket,
    pachangaIVVIPticket,
    paradise2ndRoundGeneralTicket,
    pachangaIVTrophy,
    pachangaIVArcanisCollab,
    pachangaIVPlaymat,
    pachangaIVMaterial,
} from "./images";
import kepaRefereePhoto from "../assets/images/bruce-mars.jpg";
import { pachangaIVFoundations } from "./foundations";
import {
    EmojiEventsTwoTone,
    ConfirmationNumberOutlined,
    LocalBarTwoTone,
} from "@mui/icons-material";

const events = [
    {
        name: "Pachanga Tournament IV",
        description:
            "El Pachanga vuelve más grande y mejor que nunca. ¿Te lo vas a perder?",
        image: pachangaIV,
        fontFamily: "'Permanent Marker'",
        date: new Date("2025-10-03"),
        tweet: "Pachanga Tournament IV cada día está más cerca. ¿Te lo vas a perder? Compra ya tu entrada en www.pachangatournament.com #pachangaTournamentIV, @pachangaTorneo",
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
                    "Entrada VIP para el Main Event. Da derecho al uso de las instalaciones y viene con un paquete de regalitos exclusivo.",
                image: pachangaIVVIPticket,
                price: "102",
                stripeLink: "https://buy.stripe.com/test_fZe3eX2WlbXy6887st",
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
            {
                image: kepaRefereePhoto,
                name: "Benito",
                position: { color: "warning", label: "L1 Judge" },
                description:
                    "Le gustan los chuletunes más que a un tonto un pirulí.",
            },
            {
                image: kepaRefereePhoto,
                name: "Antonio",
                position: { color: "info", label: "L2 Judge" },
                description:
                    "Le gustan los chuletunes más que a un tonto un pirulí.",
            },
            {
                image: kepaRefereePhoto,
                name: "Jesús",
                position: { color: "success", label: "L3 Judge" },
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
                name: "1 entrada para el Arcanis 2026 con alojamiento",
                description:
                    "Ventilado el Pachanga, siguiente reto. Vive el sueño, juega Magic, descubre Iberia.",
                icon: <ConfirmationNumberOutlined />,
                image: pachangaIVArcanisCollab,
                alt: "Entrada para el Arcanis 2026",
            },
            {
                name: "Material de Ultimate Guard y crédito de CardMarket a cholón",
                description:
                    "Elige a tu ilustrador favorito para que te haga un tapete digno de enmarcar, llévate un arkhive 400, deckboxes, fundas, playmats, pídete unas cartitas fullart foil...",
                icon: "public",
                image: pachangaIVMaterial,
                alt: "Material de UG",
            },
            {
                name: "1000+ pachaPoints en juego",
                description:
                    "Te los puedes gastar en invitar a cócteles a tus groupies, en cartas o en invitar a cenar a Josín. Hay quien se los gasta en Lorcana, no te cuento más.",
                icon: <LocalBarTwoTone />,
                image: pachangaIVPlaymat,
                alt: "pachaPoints",
            },
        ],
    },

    {
        name: "Commander Paradise: 2nd Round",
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
