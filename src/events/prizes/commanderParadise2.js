import { EmojiEventsTwoTone, LocalBarTwoTone } from "@mui/icons-material";
import { paradise1Trophy, pachaPoints, paradise1Champion } from "../images";

const commanderParadise2Prizes = [
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
            "Para que rellenes esas duals que le faltan a tu mazo (No seas granuja, éstos no valen en el Yumbo).",
        icon: <LocalBarTwoTone />,
        image: pachaPoints,
        alt: "pachaPoints",
    },
];
const commanderParadise2PrizesDescription =
    "¿Quién dijo que ser el número uno era pan comido? Ay amigo, el Commander Paradise a algunos les puede parecer más duro que Chuck Norris masticando alfileres. ¿Tendrás lo que hay que tener para llevarte el trofeo a casa, o te vas a quedar en el banquillo viendo series hasta que se te acaben las palomitas? ¡Tú decides, campeón!";
const commanderParadise2PrizesCatchPhrase =
    "¡Oye, figura! Sí, tú, el que parece que está calculando el maná como si fuera física cuántica. ¡Dale caña y lánzate a por la gloria de tu madrer en el Commander Paradise! O al menos intenta no quedar como un goblin despistado. ¡Venga, que no es para tanto, mi niño!";
const commanderParadise2PreviousWinnersPhotos = [paradise1Champion];

export {
    commanderParadise2Prizes,
    commanderParadise2PrizesDescription,
    commanderParadise2PreviousWinnersPhotos,
    commanderParadise2PrizesCatchPhrase,
};
