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
            "Y rellenamos esas duals que le faltan a tu mazo (No seas granuja, éstos no valen en el Yumbo).",
        icon: <LocalBarTwoTone />,
        image: pachaPoints,
        alt: "pachaPoints",
    },
];
const commanderParadise2PrizesIntro = "";
const commanderParadise2PreviousWinnersPhotos = [paradise1Champion];

export {
    commanderParadise2Prizes,
    commanderParadise2PrizesIntro,
    commanderParadise2PreviousWinnersPhotos,
};
