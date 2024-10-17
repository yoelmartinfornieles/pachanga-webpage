// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import {
    pachangaRotatingCardBgFront,
    pachangaRotatingCardBgBack,
    paradiseRotatingCardBgFront,
    paradiseRotatingCardBgBack,
} from "assets/images";

// Icons
import DrawOutlinedIcon from "@mui/icons-material/DrawOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { styled } from "@mui/material/styles"; // Import styled from Material-UI

// Create a styled Link component
const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
    transition: "text-shadow 0.3s ease", // Smooth transition for the shadow effect
    "&:hover": {
        textShadow: `0 0 5px ${theme.palette.info.main}, 0 0 10px ${theme.palette.info.main}`, // Shadow effect on hover
    },
}));

function Information() {
    return (
        <MKBox component="section" py={6} my={6} sx={{ ml: -3 }}>
            <Container>
                <Grid
                    container
                    item
                    xs={11}
                    spacing={3}
                    alignItems="center"
                    sx={{ mx: "auto" }}
                >
                    <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <RotatingCard>
                                    <RotatingCardFront
                                        image={pachangaRotatingCardBgFront}
                                        icon="touch_app"
                                        title={<>Pachanga Tournament</>}
                                        description="10+ rondas de Modern into Top16, con premios a los 32 mejores jugadores."
                                    />
                                    <RotatingCardBack
                                        image={pachangaRotatingCardBgBack}
                                        title={<>Descubre Más</>}
                                        description="Disfruta en una ubicación de ensueño de un evento de Magic the Gathering en el que disfrutan tanto los jugadores como sus familiares y amigos."
                                        action={{
                                            type: "internal",
                                            route: "/sections/page-sections/page-headers",
                                            label: "Todos los detalles del torneo",
                                        }}
                                    />
                                </RotatingCard>
                            </Grid>
                            <Grid item xs={12}>
                                <RotatingCard>
                                    <RotatingCardFront
                                        image={paradiseRotatingCardBgFront}
                                        icon="touch_app"
                                        title={<>Commander Paradise</>}
                                        description="Battle Royal de 4 jugadores, con premios a los 32 mejores jugadores."
                                    />
                                    <RotatingCardBack
                                        image={paradiseRotatingCardBgBack}
                                        title={<>Descubre Más</>}
                                        description="¿Construído de 60 cartas? Nah, esto es EDH en estado puro. En tu Command Zone va a pegar el solete. "
                                        action={{
                                            type: "internal",
                                            route: "/sections/page-sections/page-headers",
                                            label: "Todos los detalles del torneo",
                                        }}
                                    />
                                </RotatingCard>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={7}
                        sx={{ ml: "auto" }}
                        alignItems="center"
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon={
                                        <DrawOutlinedIcon
                                            sx={{ color: "warning.main" }}
                                        />
                                    }
                                    title={
                                        <StyledLink
                                            sx={{ color: "white.main" }}
                                            to="/your-internal-route"
                                        >
                                            Sirviente del pintor
                                        </StyledLink>
                                    }
                                    description="A los jugadores de MTG nos gusta el arte de las cartas, y por eso contamos con ilustradores de renombre para que te sorprendan con sus creaciones exclusivas para los torneos y te firmen esas cartitas tan chulas que llevas en la baraja."
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon={
                                        <LiveTvOutlinedIcon
                                            sx={{ color: "warning.main" }}
                                        />
                                    }
                                    title={
                                        <StyledLink
                                            sx={{ color: "white.main" }}
                                            to="/your-internal-route"
                                        >
                                            Muestra y Explica
                                        </StyledLink>
                                    }
                                    description="Ivan Ojeda (Modern State Of Mind) retransmite el Pachanga Tournament en directo para que no te pierdas ninguno de los momentos más emocionantes... ni las antxoas más gordas."
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            spacing={3}
                            sx={{ mt: { xs: 0, md: 6 } }}
                        >
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon={
                                        <HandshakeOutlinedIcon
                                            sx={{ color: "warning.main" }}
                                        />
                                    }
                                    title={
                                        <StyledLink
                                            to="/your-internal-route"
                                            sx={{ color: "white.main" }}
                                        >
                                            Abrir la Armería
                                        </StyledLink>
                                    }
                                    description="Tanto Pachanga Tournament como Commander Paradise cuentan con el apoyo de varias LGS, para que no te falte nada a la hora de competir y te pegues esos caprichitos que tanto te gustan."
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <DefaultInfoCard
                                    icon={
                                        <LuggageOutlinedIcon
                                            sx={{ color: "warning.main" }}
                                        />
                                    }
                                    title={
                                        <StyledLink
                                            to="/your-internal-route"
                                            sx={{ color: "white.main" }}
                                        >
                                            Una oferta que no podrás rechazar
                                        </StyledLink>
                                    }
                                    description="Los torneos se llevan a cabo en un hotel de la isla de Gran Canaria, y diversos negocios locales se han aliado con nosotros para que la experiencia sea inolvidable."
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Information;
