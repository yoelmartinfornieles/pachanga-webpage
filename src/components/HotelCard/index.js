import React from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Paper } from "@mui/material";
import {
    X as XIcon,
    ArtTrack as ArtTrackIcon,
    Instagram as InstagramIcon,
    LiveTv as TwitchIcon,
    YouTube as YouTubeIcon,
    Facebook as FacebookIcon,
    Language as LanguageIcon,
    ShoppingCart as ShoppingCartIcon,
    Public as PublicIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
} from "@mui/icons-material";
import { MKTypography, MKBox, GlowButton } from "components";
import Carousel from "react-material-ui-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const platformIcons = {
    ArtStation: ArtTrackIcon,
    Instagram: InstagramIcon,
    Twitch: TwitchIcon,
    YouTube: YouTubeIcon,
    X: XIcon,
    Facebook: FacebookIcon,
    Web: LanguageIcon,
    Shop: ShoppingCartIcon,
    Scryfall: PublicIcon,
    Phone: PhoneIcon,
    Email: EmailIcon,
};

const IconComponent = ({ platform }) => {
    const Icon = platformIcons[platform];
    return (
        <Icon
            sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                transform: "scale(1.5)",
            }}
        />
    );
};

const HotelCard = ({
    color,
    name,
    location,
    description,
    webpage,
    photos,
    position,
    links,
    glow = true,
}) => {
    const theme = useTheme();

    return (
        <>
            <MKBox
                sx={{
                    width: "100%",
                    height: { xs: "0px", sm: "210px", md: "210px" },
                    position: "relative",
                    zIndex: 0,
                    backgroundColor: "transparent",
                }}
            />
            <Card
                sx={{
                    width: "100%",
                    margin: "16px 0",
                    background: `linear-gradient(210deg, ${theme.palette.black.main} 80%, ${theme.palette[color].main} 140%)`,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    borderRadius: "16px",
                    position: "relative",
                    overflow: "visible",
                    boxShadow: glow
                        ? `0 0 30px ${theme.palette[color].main}`
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
                        left: { xs: "0", md: "50%" },
                        transform: { md: "translateX(-50%)" },
                        borderRadius: "8px",
                        boxShadow: {
                            xs: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            md: "0 4px 8px rgba(0, 0, 0, 0.2), 0 0 10px white",
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
                                />
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
                        <a
                            href={webpage}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
                            color={color}
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
                            gap: { xs: "10px", md: "22px" },
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
                                href:
                                    link.platform === "Phone"
                                        ? `tel:${link.url}`
                                        : link.platform === "Email"
                                        ? `mailto:${link.url}`
                                        : link.url,
                            };

                            return (
                                <GlowButton
                                    key={`${link.platform}-${Math.random()}`}
                                    color={color}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        marginRight: { xs: "8px", md: "0" },
                                        marginBottom: { md: "8px" },
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
                                    }}
                                >
                                    <IconComponent platform={link.platform} />
                                </GlowButton>
                            );
                        })}
                    </MKBox>
                </CardContent>
            </Card>
        </>
    );
};

export default HotelCard;
