import PropTypes from "prop-types";
import { Link, Grid, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { MKBox, MKTypography } from "components";

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
                            Pachanga Tournament & YM3.
                        </MKTypography>
                        .
                    </MKTypography>
                </Grid>
            </Grid>
        </MKBox>
    );
}

CenteredFooter.defaultProps = {
    company: {
        href: "https://www.pachangaTournament.com/",
        name: "Pachanga Tournament",
    },
    links: [
        {
            href: "/about-us",
            name: "Sobre Nosotros",
        },
        {
            href: "mailto:pachangaTournament@gmail.com",
            name: "Contáctanos",
        },
        {
            href: "/sponsors",
            name: "Patrocinadores",
        },
        {
            href: "/data-protection-policy",
            name: "Política de Protección de Datos",
        },
        {
            href: "/copyright-and-images",
            name: "Copyright e imágenes",
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
