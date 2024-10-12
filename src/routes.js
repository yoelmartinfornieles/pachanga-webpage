/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import FortOutlinedIcon from "@mui/icons-material/FortOutlined";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const routes = [
    {
        name: "pachanga tournament",
        icon: <Icon>dashboard</Icon>,
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
            {
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
                collapse: [
                    {
                        name: "dibujante nocturno",
                        description: "See all sections",
                        dropdown: true,
                    },
                    {
                        name: "charro",
                        description: "See all input areas",
                        dropdown: true,
                    },
                    {
                        name: "joshua cairos",
                        description: "See all examples",
                        dropdown: true,
                    },
                ],
            },
            {
                name: "stream",
                collapse: [
                    {
                        name: "iván ojeda - Modern State Of Mind",
                        description:
                            "All about overview, quick start, license and contents",
                        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
                    },
                ],
            },
            {
                name: "tiendas colaboradoras",
                collapse: [
                    {
                        name: "",
                        description:
                            "All about overview, quick start, license and contents",
                        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
                    },
                ],
            },
            {
                name: "alojamiento y logistica",
                collapse: [
                    {
                        name: "",
                        description:
                            "All about overview, quick start, license and contents",
                        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
                    },
                ],
            },
        ],
    },
    {
        name: "commander paradise by pachanga",
        icon: <FortOutlinedIcon />,
        columns: 1,
        rowsPerColumn: 2,
        collapse: [
            {
                name: "main event",
                collapse: [
                    {},
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
                collapse: [],
            },
            {
                name: "stream",
                collapse: [
                    {
                        name: "iván ojeda - Modern State Of Mind",
                        description:
                            "All about overview, quick start, license and contents",
                        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
                    },
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
