// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import { pachangaGreyLogo } from "assets/images/logos";

const date = new Date().getFullYear();

export default {
    brand: {
        name: "Pachanga Tournament",
        image: pachangaGreyLogo,
        route: "/",
    },
    socials: [
        {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/p/Pachanga-Tournament-100083619990138/",
        },
        {
            icon: <TwitterIcon />,
            link: "https://twitter.com/pachangaTorneo",
        },
        {
            icon: <InstagramIcon />,
            link: "https://www.instagram.com/pachangatournament/",
        },
    ],
    menus: [
        {
            name: "company",
            items: [
                {
                    name: "about us",
                    href: "https://www.pachangatournament.com/about-us",
                },
            ],
        },
        {
            name: "help & support",
            items: [
                {
                    name: "contact us",
                    href: "https://www.pachangatournament.com/contact-us",
                },
                {
                    name: "sponsorships",
                    href: "https://www.pachangatournament.com/sponsorships",
                },
            ],
        },
        {
            name: "legal",
            items: [
                {
                    name: "terms & conditions",
                    href: "https://www.pachangatournament.com/terms",
                },
                {
                    name: "privacy policy",
                    href: "https://www.pachangatournament.com/privacy",
                },
                {
                    name: "licenses (EULA)",
                    href: "https://www.pachangatournament.com/licenses",
                },
            ],
        },
    ],
    copyright: (
        <MKTypography variant="button" fontWeight="regular">
            All rights reserved. Copyright &copy; {date} by{" "}
            <MKTypography
                component="a"
                href="https://www.pachangatournament.com"
                target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"
            >
                Yoel Martin & Pachanga Tournament
            </MKTypography>
            .
        </MKTypography>
    ),
};
