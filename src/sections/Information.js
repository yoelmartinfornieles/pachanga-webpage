import { Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { MKBox, MKTypography } from "components";
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import {
    pachangaRotatingCardBgFront,
    pachangaRotatingCardBgBack,
    paradiseRotatingCardBgFront,
    paradiseRotatingCardBgBack,
} from "assets/images";
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { FONT_SIZE_DESKTOP_TITLE } from "shared";

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
    transition: "text-shadow 0.3s ease",
    "&:hover": {
        textShadow: `0 0 5px ${theme.palette.info.main}, 0 0 10px ${theme.palette.info.main}`,
    },
}));

const cardData = [
    {
        frontImage: pachangaRotatingCardBgFront,
        backImage: pachangaRotatingCardBgBack,
        title: "Pachanga Tournament",
        description:
            "10+ rondas de Modern into Top16, con premios a los 32 mejores jugadores.",
        backDescription:
            "Disfruta en una ubicación de ensueño de un evento de Magic the Gathering en el que disfrutan tanto los jugadores como sus familiares y amigos.",
        route: "/pachangaIV/main-event",
    },
    {
        frontImage: paradiseRotatingCardBgFront,
        backImage: paradiseRotatingCardBgBack,
        title: "Commander Paradise",
        description:
            "Battle Royal de 4 jugadores, con premios a los 32 mejores jugadores.",
        backDescription:
            "¿Construído de 60 cartas? Nah, esto es EDH en estado puro. En tu Command Zone va a pegar el solete.",
        route: "/commander-paradise/main-event",
    },
];

const infoCardData = [
    {
        icon: <DrawOutlinedIcon sx={{ color: "warning.main" }} />,
        title: "Sirviente del pintor",
        description:
            "A los jugadores de MTG nos gusta el arte de las cartas, y por eso contamos con ilustradores de renombre para que te sorprendan con sus creaciones exclusivas para los torneos y te firmen esas cartitas tan chulas que llevas en la baraja.",
        route: "/pachangaIV/guests",
    },
    {
        icon: <LiveTvOutlinedIcon sx={{ color: "warning.main" }} />,
        title: "Muestra y Explica",
        description:
            "Ivan Ojeda (Modern State Of Mind) y Carlos Oliveros retransmiten el Pachanga Tournament en directo para que no te pierdas ninguno de los momentos más emocionantes... ni las antxoas más gordas.",
        route: "/pachangaIV/stream",
    },
    {
        icon: <HandshakeOutlinedIcon sx={{ color: "warning.main" }} />,
        title: "Abrir la Armería",
        description:
            "Tanto Pachanga Tournament como Commander Paradise cuentan con el apoyo de varias LGS, para que no te falte nada a la hora de competir y te pegues esos caprichitos que tanto te gustan.",
        route: "/sponsors",
    },
    {
        icon: <LuggageOutlinedIcon sx={{ color: "warning.main" }} />,
        title: "Una oferta que no podrás rechazar",
        description:
            "Los torneos se llevan a cabo en un hotel de la isla de Gran Canaria, y diversos negocios locales se han aliado con nosotros para que la experiencia sea inolvidable.",
        route: "/pachangaIV/main-event#hotel",
    },
];

function Information() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MKBox component="section" py={6} my={6} sx={{ ml: -3 }}>
            <Container>
                <Grid
                    container
                    item
                    xs={11}
                    spacing={3}
                    alignItems="center"
                    justifyContent={isMobile ? "center" : "flex-start"}
                    sx={{ mx: "auto" }}
                >
                    <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
                        <Grid container spacing={5}>
                            {cardData.map((card, index) => (
                                <Grid item xs={12} key={index}>
                                    <RotatingCard>
                                        <RotatingCardFront
                                            image={card.frontImage}
                                            icon="touch_app"
                                            title={
                                                <MKTypography
                                                    variant="h3"
                                                    sx={{
                                                        fontSize:
                                                            FONT_SIZE_DESKTOP_TITLE,
                                                        color: theme.palette[
                                                            "warning"
                                                        ].main,
                                                    }}
                                                >
                                                    {card.title}
                                                </MKTypography>
                                            }
                                            description={card.description}
                                        />
                                        <RotatingCardBack
                                            image={card.backImage}
                                            title={
                                                <MKTypography
                                                    variant="h5"
                                                    sx={{
                                                        fontSize:
                                                            FONT_SIZE_DESKTOP_TITLE,
                                                        color: theme.palette[
                                                            "white"
                                                        ].main,
                                                    }}
                                                >
                                                    Descubre Más
                                                </MKTypography>
                                            }
                                            description={card.backDescription}
                                            action={{
                                                type: "internal",
                                                route: card.route,
                                                label: "Todos los detalles del torneo",
                                            }}
                                        />
                                    </RotatingCard>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={7}
                        sx={{ ml: "auto" }}
                        alignItems="center"
                        justifyContent={isMobile ? "center" : "flex-start"}
                    >
                        <Grid container spacing={3}>
                            {infoCardData.slice(0, 2).map((info, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <DefaultInfoCard
                                        icon={info.icon}
                                        title={
                                            <StyledLink
                                                to={info.route}
                                                sx={{
                                                    color: "white.main",
                                                    fontSize:
                                                        FONT_SIZE_DESKTOP_TITLE,
                                                }}
                                            >
                                                {info.title}
                                            </StyledLink>
                                        }
                                        description={info.description}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            sx={{ mt: { xs: 0, md: 6 } }}
                        >
                            {infoCardData.slice(2).map((info, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <DefaultInfoCard
                                        icon={info.icon}
                                        title={
                                            <StyledLink
                                                to={info.route}
                                                sx={{
                                                    color: "white.main",
                                                    fontSize:
                                                        FONT_SIZE_DESKTOP_TITLE,
                                                }}
                                            >
                                                {info.title}
                                            </StyledLink>
                                        }
                                        description={info.description}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Information;
