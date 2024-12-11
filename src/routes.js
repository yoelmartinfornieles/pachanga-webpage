import Icon from "@mui/material/Icon";
import FortOutlinedIcon from "@mui/icons-material/FortOutlined";
import PachangaMainEvent from "layouts/pages/pachangaIV/mainEvent";
import Commander2MainEvent from "layouts/pages/commanderParadise2/mainEvent";
import Stream from "layouts/pages/pachangaIV/stream";
import Guests from "layouts/pages/pachangaIV/guests";

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
                        component: <PachangaMainEvent />,
                    },
                    {
                        name: "el hotel",
                        route: "/pachangaIV/main-event#hotel",
                        component: <PachangaMainEvent />,
                    },
                    {
                        name: "bases",
                        route: "/pachangaIV/main-event#foundations",
                        component: <PachangaMainEvent />,
                    },
                    {
                        name: "premios",
                        route: "/pachangaIV/main-event#prizes",
                        component: <PachangaMainEvent />,
                    },
                ],
            },
            {
                name: "stream",
                collapse: [
                    {
                        name: "Streaming",
                        route: "/pachangaIV/stream",
                        component: <Stream />,
                    },
                    {
                        name: "Iván Ojeda",
                        route: "/pachangaIV/stream#ivanojeda",
                        component: <Stream />,
                    },
                    {
                        name: "Carlos Oliveros",
                        route: "/pachangaIV/stream#carlosoliveros",
                        component: <Stream />,
                    },
                    {
                        name: "Grabaciones",
                        route: "/pachangaIV/stream#recordings",
                        component: <Stream />,
                    },
                ],
            },
            {
                name: "Invitados",
                collapse: [
                    {
                        name: "invitados",
                        route: "/pachangaIV/guests",
                        component: <Guests />,
                    },
                    {
                        name: "josu solano",
                        route: "/pachangaIV/guests#josusolano",
                        component: <Guests />,
                    },
                    {
                        name: "fran garces",
                        route: "/pachangaIV/guests#frangarces",
                        component: <Guests />,
                    },
                    {
                        name: "joshua cairos",
                        route: "/pachangaIV/guests#joshuacairos",
                        component: <Guests />,
                    },
                    {
                        name: "edgar sánchez hidalgo",
                        route: "/pachangaIV/guests#edgarsanchez",
                        component: <Guests />,
                    },
                    {
                        name: "martin de diego",
                        route: "/pachangaIV/guests#martindediego",
                        component: <Guests />,
                    },
                    {
                        name: "javier charro",
                        route: "/pachangaIV/guests#javiercharro",
                        component: <Guests />,
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
                        component: <Commander2MainEvent />,
                    },
                    {
                        name: "el hotel",
                        route: "/commanderParadise2ndRound/main-event#hotel",
                        component: <Commander2MainEvent />,
                    },
                    {
                        name: "bases",
                        route: "/commanderParadise2ndRound/main-event#foundations",
                        component: <Commander2MainEvent />,
                    },
                    {
                        name: "premios",
                        route: "/commanderParadise2ndRound/main-event#prizes",
                        component: <Commander2MainEvent />,
                    },
                ],
            },
            {
                name: "Invitados",
                collapse: [
                    {
                        name: "invitados",
                        route: "/commanderParadise2ndRound/guests",
                        component: <Guests />,
                    },
                    {
                        name: "fran garces",
                        route: "/commanderParadise2ndRound/guests#frangarces",
                        component: <Guests />,
                    },
                    {
                        name: "joshua cairos",
                        route: "/commanderParadise2ndRound/guests#joshuacairos",
                        component: <Guests />,
                    },
                    {
                        name: "martin de diego",
                        route: "/commanderParadise2ndRound/guests#martindediego",
                        component: <Guests />,
                    },
                ],
            },
        ],
    },
];

export default routes;
