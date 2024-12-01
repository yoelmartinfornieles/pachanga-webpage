import Icon from "@mui/material/Icon";
import FortOutlinedIcon from "@mui/icons-material/FortOutlined";
import PachangaMainEvent from "layouts/pages/pachangaIV/mainEvent";
import Stream from "layouts/pages/pachangaIV/stream";

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
                        name: "bases",
                        route: "/pachangaIV/main-event#foundations",
                        component: <PachangaMainEvent />,
                    },
                    /*                  {
                        name: "equipo de arbitros",
                        route: "/pachangaIV/main-event#referee-team",
                        component: <PachangaMainEvent />,
                    }, */
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
                        name: "Iván Ojeda - Modern State Of Mind",
                        route: "/pachangaIV/stream",
                        component: <Stream />,
                    },
                    {
                        name: "Carlos Oliveros",
                        route: "/pachangaIV/stream",
                        component: <Stream />,
                    },
                ],
            },
            {
                name: "ilustradores",
                collapse: [
                    {
                        name: "dibujante nocturno",
                        route: "/ilustradores/dibujante-nocturno",
                        component: null,
                    },
                    {
                        name: "charro",
                        route: "/ilustradores/charro",
                        component: null,
                    },
                    {
                        name: "joshua cairos",
                        route: "/ilustradores/joshua-cairos",
                        component: null,
                    },
                    {
                        name: "edgar sánchez hidalgo",
                        route: "/ilustradores/edgar-sanchez-hidalgo",
                        component: null,
                    },
                    {
                        name: "josu solano",
                        route: "/ilustradores/josu-solano",
                        component: null,
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
            {
                name: "alojamiento y logistica",
                collapse: [
                    {
                        name: "hotel 1",
                        href: "https://example.com/hotel1",
                        component: null,
                    },
                ],
            }, */
        ],
    },
    {
        name: "commander paradise by pachanga: 2nd round",
        icon: <FortOutlinedIcon />,
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
            /* {
                name: "main event",
                collapse: [
                    {
                        name: "bases",
                        route: "/pages/landing-pages/contact-us",
                        component: <ContactUs />,
                    },
                    {
                        name: "premios",
                        route: "/pages/landing-pages/author",
                        component: <Author />,
                    },
                    {
                        name: "equipo de arbitros",
                        route: "/pages/landing-pages/author",
                        component: <Author />,
                    },
                ],
            },
            {
                name: "paralelos",
                collapse: [
                    {
                        name: "organizador",
                        route: "/pages/authentication/sign-in",
                        component: <SignIn />,
                    },
                ],
            },
            {
                name: "ilustradores",
                collapse: [], // Ensure this is an array
            },
            {
                name: "tiendas colaboradoras",
                collapse: [], // Ensure this is an array
            },
            {
                name: "alojamiento y logistica",
                collapse: [], // Ensure this is an array
            }, */
        ],
    },
];

export default routes;
