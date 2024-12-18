import Icon from "@mui/material/Icon";
import FortOutlinedIcon from "@mui/icons-material/FortOutlined";
import PachangaMainEvent from "layouts/pages/pachangaIV/mainEvent";
import PachangaStream from "layouts/pages/pachangaIV/stream";
import PachangaGuests from "layouts/pages/pachangaIV/guests";
/* import Commander2MainEvent from "layouts/pages/commanderParadise2/mainEvent";
import Commander2Guests from "layouts/pages/commanderParadise2/guests"; */
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
                        component: <PachangaStream />,
                    },
                    {
                        name: "Iván Ojeda",
                        route: "/pachangaIV/stream#ivanojeda",
                        component: <PachangaStream />,
                    },
                    {
                        name: "Carlos Oliveros",
                        route: "/pachangaIV/stream#carlosoliveros",
                        component: <PachangaStream />,
                    },
                    {
                        name: "Grabaciones",
                        route: "/pachangaIV/stream#recordings",
                        component: <PachangaStream />,
                    },
                ],
            },
            {
                name: "Invitados",
                collapse: [
                    {
                        name: "invitados",
                        route: "/pachangaIV/guests",
                        component: <PachangaGuests />,
                    },
                    {
                        name: "josu solano",
                        route: "/pachangaIV/guests#josusolano",
                        component: <PachangaGuests />,
                    },
                    {
                        name: "fran garces",
                        route: "/pachangaIV/guests#frangarces",
                        component: <PachangaGuests />,
                    },
                    {
                        name: "joshua cairos",
                        route: "/pachangaIV/guests#joshuacairos",
                        component: <PachangaGuests />,
                    },
                    {
                        name: "edgar sánchez hidalgo",
                        route: "/pachangaIV/guests#edgarsanchez",
                        component: <PachangaGuests />,
                    },
                    {
                        name: "martin de diego",
                        route: "/pachangaIV/guests#martindediego",
                        component: <PachangaGuests />,
                    },
                    {
                        name: "javier charro",
                        route: "/pachangaIV/guests#javiercharro",
                        component: <PachangaGuests />,
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
                        component: <UnderConstruction />,
                    },
                    {
                        name: "el hotel",
                        route: "/commanderParadise2ndRound/main-event#hotel",
                        component: <UnderConstruction />,
                    },
                    {
                        name: "bases",
                        route: "/commanderParadise2ndRound/main-event#foundations",
                        component: <UnderConstruction />,
                    },
                    {
                        name: "premios",
                        route: "/commanderParadise2ndRound/main-event#prizes",
                        component: <UnderConstruction />,
                    },
                ],
            },
            /*             {
                name: "Invitados",
                collapse: [
                    {
                        name: "invitados",
                        route: "/commanderParadise2ndRound/guests",
                        component: <UnderConstruction />,
                    },
                    {
                        name: "fran garces",
                        route: "/commanderParadise2ndRound/guests#frangarces",
                        component: <UnderConstruction />,
                    },
                    {
                        name: "javier charro",
                        route: "/commanderParadise2ndRound/guests#javiercharro",
                        component: <UnderConstruction />,
                    },
                ],
            }, */
        ],
    },
];

export default routes;
