// images
import {
    pachangaIV,
    paradise2ndRound,
    pachangaIVPosterA,
    pachangaIVPosterB,
    commanderParadise2Poster,
} from "./images";
import {
    pachangaIVFoundations,
    commanderParadise2Foundations,
} from "./foundations";
import { pachangaIVInfo, commanderParadise2Info } from "./tournament";
import { pachangaIVGuests, commanderParadise2Guests } from "./guests";
import {
    pachangaIVPrizes,
    pachangaIVPrizesIntro,
    pachangaIvPreviousWinnersPhotos,
    commanderParadise2Prizes,
    commanderParadise2PrizesIntro,
    commanderParadise2PreviousWinnersPhotos,
} from "./prizes";
import { pachangaIVTickets, commanderParadise2Tickets } from "./tickets";
import { vistaflorMaspalomas } from "./hotel";
import {
    pachangaIVFontFamily,
    pachangaIVColors,
    commanderParadise2FontFamily,
    commanderParadise2Colors,
} from "./theme";
import { pachangaGreyLogo, commanderWhiteLogo } from "../assets/images/logos";

const events = [
    {
        name: "Pachanga Tournament IV",
        logo: pachangaGreyLogo,
        description:
            "El Pachanga vuelve más grande y mejor que nunca. ¿Te lo vas a perder?",
        hotel: vistaflorMaspalomas,
        image: pachangaIV,
        fontFamily: pachangaIVFontFamily,
        date: new Date("2025-10-03"),
        tweet: "Pachanga Tournament IV cada día está más cerca. ¿Te lo vas a perder? Compra ya tu entrada en www.pachangatournament.com #pachangaTournamentIV, @pachangaTorneo",
        info: pachangaIVInfo,
        posters: [pachangaIVPosterA, pachangaIVPosterB],
        foundations: pachangaIVFoundations,
        tickets: pachangaIVTickets,
        prizes: pachangaIVPrizes,
        prizesIntro: pachangaIVPrizesIntro,
        previousWinnersPhotos: pachangaIvPreviousWinnersPhotos,
        colors: pachangaIVColors,
        guests: pachangaIVGuests,
    },
    {
        name: "Commander Paradise: 2nd Round",
        logo: commanderWhiteLogo,
        description:
            "Repetimos. El verdadero espíritu EDH vuelve a la isla. ¡No te pierdas la oportunidad de jugar con los mejores!",
        image: paradise2ndRound,
        hotel: vistaflorMaspalomas,
        fontFamily: commanderParadise2FontFamily,
        date: new Date("2025-05-23"),
        info: commanderParadise2Info,
        posters: [commanderParadise2Poster],
        tweet: "Comandante, el Commander Paradise by Pachanga - 2nd Round está al caer. Agarra tus 100, corre a pachangatournament.com a por tu entrada y prepara los tambores de guerra #commanderParadise2ndRound @pachangaTorneo",
        foundations: commanderParadise2Foundations,
        tickets: commanderParadise2Tickets,
        prizes: commanderParadise2Prizes,
        prizesIntro: commanderParadise2PrizesIntro,
        previousWinnersPhotos: commanderParadise2PreviousWinnersPhotos,
        colors: commanderParadise2Colors,
        guests: commanderParadise2Guests,
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
        tickets: null,
        refereeTeam: [],
        prizes: null,
        prizesIntro: null,
        previousWinnerPhotos: null,        
        colors: {
            warning: "pachangaWarning",
            success: "pachangaSuccess",
            error: "pachangaError",
        },
        guests: null
    }, */
];

export default events;
