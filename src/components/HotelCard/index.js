import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Card, Button, CardContent } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitchIcon from "@mui/icons-material/LiveTv";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicIcon from "@mui/icons-material/Public";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GlowButton = styled(Button)(({ theme }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "scale(1.3)",
        boxShadow: `0 0 30px ${theme.palette.warning.main}`,
    },
    borderRadius: "50%",
    overflow: "hidden",
}));

const HotelCard = ({
    name,
    location,
    description,
    logo,
    webpage,
    photos,
    position,
    services,
    links,
    glow = true,
}) => {
    const theme = useTheme();
    const platformIcons = {
        ArtStation: (
            <ArtTrackIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Instagram: (
            <InstagramIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Twitch: (
            <TwitchIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        YouTube: (
            <YouTubeIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        X: (
            <XIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Facebook: (
            <FacebookIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Web: (
            <LanguageIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Shop: (
            <ShoppingCartIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Scryfall: (
            <PublicIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Phone: (
            <PhoneIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
        Email: (
            <EmailIcon
                sx={{
                    fontSize: {
                        xs: "1.5rem",
                        md: "2rem",
                        transform: "scale(1.5)",
                    },
                }}
            />
        ),
    };

    return (
        <Card
            sx={{
                height: { md: "700px" },
                width: "100%",
                margin: "16px 0",
                background: `linear-gradient(210deg, ${
                    theme.palette["black"].main
                } 80%, ${theme.palette[position.color].main} 140%)`,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                borderRadius: "16px",
                position: "relative",
                overflow: "visible",
                boxShadow: glow
                    ? `0 0 30px ${theme.palette[position.color].main}`
                    : "none",
                marginBottom: "32px",
            }}
        >
            <MKBox
                sx={{
                    width: { xs: "100%", sm: "100%", md: "90%" },
                    height: { xs: "200px", sm: "300px", md: "400px" },
                    objectFit: "cover",
                    objectPosition: "top",
                    position: { xs: "relative", md: "absolute" },
                    top: { xs: "0", md: "-220px" },
                    left: { xs: "0", md: "60px" },
                    borderRadius: "8px",
                    boxShadow: {
                        xs: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sin glow en mobile
                        md: "0 4px 8px rgba(0, 0, 0, 0.2), 0 0 10px white", // Glow blanco en desktop
                    },
                    marginBottom: { xs: "8px", md: "0" },
                    zIndex: 1,
                }}
            >
                <Carousel
                    animation="fade"
                    duration={1000}
                    navButtonsAlwaysVisible={false}
                    indicators={false}
                    height="100%"
                    sx={{
                        width: "100%",
                        height: "100%",
                        "& .MuiPaper-root": {
                            borderRadius: "xl",
                            overflow: "hidden",
                        },
                    }}
                >
                    {photos.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{ height: "100%", width: "100%" }}
                        >
                            <MKBox
                                height="100%"
                                width="100%"
                                sx={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.0)), url(${item})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    paddingTop: "100px",
                                }}
                            ></MKBox>
                        </Paper>
                    ))}
                </Carousel>
            </MKBox>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    position: "relative",
                    zIndex: 2,
                    mt: { xs: "0", md: "200px" },
                }}
            >
                <MKBox sx={{ flex: 1, width: "100%" }}>
                    <a href={webpage} target="_blank" rel="noopener noreferrer">
                        <MKTypography
                            variant="h2"
                            component="div"
                            sx={{
                                fontSize: { xs: "1.5rem", md: "2rem" },
                                width: "100%",
                            }}
                            color="white"
                        >
                            {name}
                        </MKTypography>
                    </a>
                </MKBox>
                <MKBox sx={{ width: "100%" }}>
                    <MKTypography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.875rem", md: "1rem" },
                            fontWeight: "bold",
                        }}
                        color="warning"
                    >
                        {location}
                    </MKTypography>
                </MKBox>
                <MKBox sx={{ width: "100%" }}>
                    <MKTypography
                        variant="body2"
                        color="text"
                        sx={{
                            marginTop: "-10px",
                            fontSize: { xs: "0.875rem", md: "1rem" },
                            whiteSpace: "pre-line",
                        }}
                    >
                        {description}
                    </MKTypography>
                </MKBox>
                <MKBox
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "16px",
                        flexWrap: "wrap",
                        maxWidth: "100%",
                        gap: { xs: "10px", md: "22px" }, // Espacio entre los íconos
                    }}
                >
                    {links.map((link) => {
                        const linkProps = {
                            key: link.platform,
                            color: "error",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            sx: {
                                width: {
                                    xs: "40px",
                                    sm: "50px",
                                    md: "60px",
                                },
                                height: {
                                    xs: "40px",
                                    sm: "50px",
                                    md: "60px",
                                },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        };

                        if (link.platform === "Phone") {
                            linkProps.href = `tel:${link.url}`;
                        } else if (link.platform === "Email") {
                            linkProps.href = `mailto:${link.url}`;
                        } else {
                            linkProps.href = link.url;
                        }

                        return (
                            <GlowButton {...linkProps}>
                                {platformIcons[link.platform]}
                            </GlowButton>
                        );
                    })}
                </MKBox>
            </CardContent>
        </Card>
    );
};

export default HotelCard;
