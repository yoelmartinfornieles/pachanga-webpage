import {
    EmojiEventsTwoTone,
    ConfirmationNumberOutlined,
    LocalBarTwoTone,
} from "@mui/icons-material";
import {
    pachangaIVTrophy,
    pachaPoints,
    pachangaV,
    pachangaIIIModernChampion,
    pachangaIIIPioneerChampion,
    pachangaIIISealedChampion,
    pachangaIIModernChampion,
    pachangaIIPioneerChampion,
    pachangaIISealedChampion,
    pachangaIModernChampion,
    pachangaIPioneerChampion,
    pachangaISealedChampion,
} from "../images";

const pachangaIVPrizes = [
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
];

const pachangaIvPreviousWinnersPhotos = [
    pachangaIIIModernChampion,
    pachangaIIIPioneerChampion,
    pachangaIIISealedChampion,
    pachangaIIModernChampion,
    pachangaIIPioneerChampion,
    pachangaIISealedChampion,
    pachangaIModernChampion,
    pachangaIPioneerChampion,
    pachangaISealedChampion,
];

const pachangaIVPrizesCatchPhrase = `¡Hey, tú! Sí, tú. ¡Deja de procrastinar y
        conviértete en el campeón del Pachanga Tournament IV! O al menos
        intenta no dar mucha pena en el intento.
        ¡Vamos, que no es tan difícil!`;
const pachangaIVPrizesDescription = `No es fácil ser el mejor, ¿verdad? Especialmente en el Pachanga, donde las distracciones y el entretenimiento son más tentadores que un durum mixto a las 3 a.m. ¿Serás tú el valiente que se mantenga firme y se alce con la victoria en esta edición? O, ya sabes, ¿simplemente te rendirás y te irás a ver Netflix?`;

export {
    pachangaIVPrizes,
    pachangaIvPreviousWinnersPhotos,
    pachangaIVPrizesCatchPhrase,
    pachangaIVPrizesDescription,
};
