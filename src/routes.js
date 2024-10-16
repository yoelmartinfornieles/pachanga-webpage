import Icon from "@mui/material/Icon";
import FortOutlinedIcon from "@mui/icons-material/FortOutlined";
import PachangaMainEvent from "layouts/pages/pachangaIV/mainEvent";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

const createCollapseItem = (
    name,
    route,
    component,
    description,
    dropdown,
    href
) => ({
    name,
    route,
    component,
    description,
    dropdown,
    href,
});

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
                    createCollapseItem(
                        "bases",
                        "/pachangaIV/main-event#foundations",
                        <PachangaMainEvent />
                    ),
                    createCollapseItem(
                        "premios",
                        "/pachangaIV/main-event#prizes",
                        <PachangaMainEvent />
                    ),
                    createCollapseItem(
                        "equipo de arbitros",
                        "/pachangaIV/main-event#referee-team",
                        <PachangaMainEvent />
                    ),
                ],
            },
            {
                name: "paralelos",
                collapse: [
                    createCollapseItem(
                        "organizador",
                        "/pages/authentication/sign-in",
                        <SignIn />
                    ),
                ],
            },
            {
                name: "ilustradores",
                collapse: [
                    createCollapseItem(
                        "dibujante nocturno",
                        null,
                        null,
                        "See all sections",
                        true
                    ),
                    createCollapseItem(
                        "charro",
                        null,
                        null,
                        "See all input areas",
                        true
                    ),
                    createCollapseItem(
                        "joshua cairos",
                        null,
                        null,
                        "See all examples",
                        true
                    ),
                ],
            },
            {
                name: "stream",
                collapse: [
                    createCollapseItem(
                        "iván ojeda - Modern State Of Mind",
                        null,
                        null,
                        "All about overview, quick start, license and contents",
                        false,
                        "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/"
                    ),
                ],
            },
            {
                name: "tiendas colaboradoras",
                collapse: [
                    createCollapseItem(
                        "",
                        null,
                        null,
                        "All about overview, quick start, license and contents",
                        false,
                        "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/"
                    ),
                ],
            },
            {
                name: "alojamiento y logistica",
                collapse: [
                    createCollapseItem(
                        "",
                        null,
                        null,
                        "All about overview, quick start, license and contents",
                        false,
                        "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/"
                    ),
                ],
            },
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
                    createCollapseItem(
                        "bases",
                        "/pages/landing-pages/contact-us",
                        <ContactUs />
                    ),
                    createCollapseItem(
                        "premios",
                        "/pages/landing-pages/author",
                        <Author />
                    ),
                    createCollapseItem(
                        "equipo de arbitros",
                        "/pages/landing-pages/author",
                        <Author />
                    ),
                ],
            },
            {
                name: "paralelos",
                collapse: [
                    createCollapseItem(
                        "organizador",
                        "/pages/authentication/sign-in",
                        <SignIn />
                    ),
                ],
            },
            {
                name: "ilustradores",
                collapse: [],
            },
            {
                name: "stream",
                collapse: [
                    createCollapseItem(
                        "iván ojeda - Modern State Of Mind",
                        null,
                        null,
                        "All about overview, quick start, license and contents",
                        false,
                        "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/"
                    ),
                ],
            },
            {
                name: "tiendas colaboradoras",
                collapse: [],
            },
            {
                name: "alojamiento y logistica",
                collapse: [],
            },
        ],
    },
];

export default routes;
