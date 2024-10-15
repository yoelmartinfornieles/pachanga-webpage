// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CenteredFooter({ links, socials, light }) {
    const year = new Date().getFullYear();

    const renderLinks = links.map((link) => (
        <MKTypography
            key={link.name}
            component={Link}
            href={link.href}
            variant="body2"
            color={light ? "white" : "secondary"}
            fontWeight="regular"
        >
            {link.name}
        </MKTypography>
    ));

    const renderSocials = socials.map((social) => (
        <MKTypography
            key={social.link}
            component={Link}
            href={social.link}
            variant="body2"
            color={light ? "white" : "secondary"}
            fontWeight="regular"
        >
            {social.icon}
        </MKTypography>
    ));

    return (
        <MKBox component="footer" py={6}>
            <Grid container justifyContent="center">
                <Grid item xs={10} lg={8}>
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        spacing={{ xs: 2, lg: 3, xl: 6 }}
                        mb={3}
                    >
                        {renderLinks}
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Stack
                        display="flex"
                        direction="row"
                        justifyContent="center"
                        spacing={3}
                        mt={1}
                        mb={3}
                    >
                        {renderSocials}
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
                    <MKTypography
                        variant="body2"
                        color={light ? "white" : "secondary"}
                    >
                        Copyright &copy; {year} by{" "}
                        <MKTypography
                            component={Link}
                            href="https://pachangatournament.com"
                            target="_blank"
                            rel="noreferrer"
                            variant="body2"
                            color={light ? "white" : "secondary"}
                        >
                            Pachanga Tournament & Yoel Martin
                        </MKTypography>
                        .
                    </MKTypography>
                </Grid>
            </Grid>
        </MKBox>
    );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
    company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    links: [
        {
            href: "https://www.pachangatournament.com/about-us",
            name: "About Us",
        },
        {
            href: "mailto:pachangaTournament@gmail.com",
            name: "Contact Us",
        },
        {
            href: "https://www.pachangatournament.com/sponsors",
            name: "Sponsors",
        },
        {
            href: "/data-protection-policy",
            name: "Data protection policy",
        },
    ],
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
    light: false,
};

CenteredFooter.propTypes = {
    company: PropTypes.objectOf(PropTypes.string),
    links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
    light: PropTypes.bool,
};

export default CenteredFooter;
