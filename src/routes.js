import Icon from "@mui/material/Icon";
import FortOutlinedIcon from "@mui/icons-material/FortOutlined";
import {
    PachangaIVMainEventPage,
    PachangaIVHotelInfoPage,
    PachangaIVGuestsPage,
    PachangaIVStreamPage,
    CommanderParadise2MainEventPage,
    CommanderParadise2HotelInfoPage,
    CommanderParadise2GuestsPage,
} from "layouts/pages";
import UnderConstruction from "pages/UnderConstruction";

const routes = [
    {
        name: "pachanga tournament IV",
        icon: <Icon>dashboard</Icon>,
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
            {
                name: "main event",
                collapse: [
                    {
                        name: "el torneo",
                        route: "/pachangaIV/main-event",
                        component: <PachangaIVMainEventPage />,
                    },
                    {
                        name: "bases",
                        route: "/pachangaIV/main-event#foundations",
                        component: <PachangaIVMainEventPage />,
                    },
                    {
                        name: "premios",
                        route: "/pachangaIV/main-event#prizes",
                        component: <PachangaIVMainEventPage />,
                    },
                ],
            },
            {
                name: "hotel",
                collapse: [
                    {
                        name: "el hotel",
                        route: "/pachangaIV/hotel",
                        component: <PachangaIVHotelInfoPage />,
                    },
                ],
            },
            {
                name: "stream",
                collapse: [
                    {
                        name: "Streaming",
                        route: "/pachangaIV/stream",
                        component: <PachangaIVStreamPage />,
                    },
                    {
                        name: "Iván Ojeda",
                        route: "/pachangaIV/stream#ivanojeda",
                        component: <PachangaIVStreamPage />,
                    },
                    {
                        name: "Carlos Oliveros",
                        route: "/pachangaIV/stream#carlosoliveros",
                        component: <PachangaIVStreamPage />,
                    },
                    {
                        name: "Grabaciones",
                        route: "/pachangaIV/stream#recordings",
                        component: <PachangaIVStreamPage />,
                    },
                ],
            },
            {
                name: "Invitados",
                collapse: [
                    {
                        name: "invitados",
                        route: "/pachangaIV/guests",
                        component: <PachangaIVGuestsPage />,
                    },
                    {
                        name: "josu solano",
                        route: "/pachangaIV/guests#josusolano",
                        component: <PachangaIVGuestsPage />,
                    },
                    {
                        name: "fran garces",
                        route: "/pachangaIV/guests#frangarces",
                        component: <PachangaIVGuestsPage />,
                    },
                    {
                        name: "joshua cairos",
                        route: "/pachangaIV/guests#joshuacairos",
                        component: <PachangaIVGuestsPage />,
                    },
                    {
                        name: "edgar sánchez hidalgo",
                        route: "/pachangaIV/guests#edgarsanchez",
                        component: <PachangaIVGuestsPage />,
                    },
                    {
                        name: "martin de diego",
                        route: "/pachangaIV/guests#martindediego",
                        component: <PachangaIVGuestsPage />,
                    },
                    {
                        name: "javier charro",
                        route: "/pachangaIV/guests#javiercharro",
                        component: <PachangaIVGuestsPage />,
                    },
                ],
            },

            /*             {
                name: "tiendas colaboradoras",
                collapse: [
                    {
                        name: "tienda 1",
                        href: "https://example.com/tienda1",
                        component: null,
                    },
                ],
            },
         */
        ],
    },
    {
        name: "commander paradise by pachanga: 2nd round",
        icon: <FortOutlinedIcon />,
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
            {
                name: "main event",
                collapse: [
                    {
                        name: "el torneo",
                        route: "/commanderParadise2ndRound/main-event",
                        component: <CommanderParadise2MainEventPage />,
                    },
                    {
                        name: "bases",
                        route: "/commanderParadise2ndRound/main-event#foundations",
                        component: <CommanderParadise2MainEventPage />,
                    },
                    {
                        name: "premios",
                        route: "/commanderParadise2ndRound/main-event#prizes",
                        component: <CommanderParadise2MainEventPage />,
                    },
                ],
            },
            {
                name: "hotel",
                collapse: [
                    {
                        name: "el hotel",
                        route: "/commanderParadise2ndRound/hotel",
                        component: <CommanderParadise2HotelInfoPage />,
                    },
                ],
            },
            {
                name: "Invitados",
                collapse: [
                    {
                        name: "invitados",
                        route: "/commanderParadise2ndRound/guests",
                        component: <CommanderParadise2GuestsPage />,
                    },
                    {
                        name: "fran garces",
                        route: "/commanderParadise2ndRound/guests#frangarces",
                        component: <CommanderParadise2GuestsPage />,
                    },
                    {
                        name: "javier charro",
                        route: "/commanderParadise2ndRound/guests#javiercharro",
                        component: <CommanderParadise2GuestsPage />,
                    },
                ],
            },
        ],
    },
];

export default routes;
