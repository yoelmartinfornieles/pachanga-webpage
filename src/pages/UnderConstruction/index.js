import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import { useMediaQuery } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Grid } from "@mui/material";
import { Header } from "sections";
import { MKTypography, MKBox, Logo, Section, StyledCard } from "components";
import { findEventByName } from "shared";
import { useTheme } from "@mui/material/styles";
import { comingSoonBg } from "../../assets/images";
import "../../assets/fonts/fonts.css"; // Import the CSS file
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

const messages = [
    "Por motivos que ni el mismo Urza podría entender, toca esperar un poco más, ¡pero no te preocupes, tengo un mazo de cartas para entretenerte!",
    "El hielo para los cócteles aún no está frío, pero al menos no se ha convertido en un artefacto legendario... aún.",
    "La piscina tiene un agujero, así que si ves a alguien nadando, ¡dile que se prepare para un 'game over' inesperado!",
    "Enseguida abrimos, pero primero, necesito asegurarme de que mis cartas estén bien barajadas.",
    "Ultimando detalles, hype a tope, como si estuviera esperando el lanzamiento de la próxima expansión de Magic.",
    "Este es un evento que se sirve calentito, como mis estrategias de juego, ¡y eso es decir mucho!",
    "Si estás leyendo esto, ¡felicidades! Has encontrado el único lugar donde la procrastinación es un arte.",
    "Counter al contador de tiempo",
    "Recuerda, si el evento se retrasa, es solo porque estoy tratando de encontrar la carta perfecta para ganar.",
    "Si el contador se detiene, no es un bug, ¡es solo un 'suspenso dramático' para aumentar la emoción!",
    "¿Listo para el torneo? ¡Espero que hayas traído tus mejores cartas y tu sentido del humor!",
    "Si el evento se siente un poco lento, es solo porque estoy intentando hacer malabares con mis habilidades de desarrollador y mis habilidades de jugador.",
    "¡Esperad Insensatos!",
    "No te preocupes si la web se retrasa, ¡es solo un Time Walk que nos da más oportunidades para petarla!",
    "Recuerda, en este torneo, ¡los únicos 'bugs' que aceptamos son los de las cartas de criatura!",
    "¡Ey, colega! La prisa es para los que no tienen dos manas azules abiertos.",
    "Relájate, que hasta los Eldrazi necesitan su siesta canaria.",
    "Mientras esperas, ¿por qué no practicas tu mejor cara de póker para cuando te enfrentes a un dragón?",
    "¡Nos vemos en el campo de batalla, donde las cartas vuelan y los chistes malos son nuestra mejor arma!",
];

const END_DATE = "2025-02-25 00:00:00";
const TIMEZONE = "Europe/Lisbon";

function Countdown({ timeLeft, fontFamily, color, glowColor }) {
    const formatTime = (time) => String(time).padStart(2, "0");

    return (
        <MKBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                borderRadius: "10px",
                width: "100%",
                padding: "20px",
                backgroundColor: ({
                    palette: { black },
                    functions: { rgba },
                }) => rgba(black.main, 0.8),
                color: color,
                fontFamily: fontFamily,
                fontSize: {
                    xs: FONT_SIZE_MOBILE_HEADING,
                    md: FONT_SIZE_DESKTOP_HEADING,
                },
                textAlign: "center",
                boxShadow: `0 0 20px ${color},0 0 20px ${color},0 0 20px ${color}`, // Glow effect
            }}
        >
            <MKTypography
                variant="h4"
                sx={{
                    color: "inherit",
                    fontFamily: fontFamily,
                    textShadow: `0 0 20px ${glowColor}, 0 0 30px ${glowColor}`, // Stronger glow effect with secondaryColor
                }}
            >
                {`${formatTime(timeLeft.days)}:${formatTime(
                    timeLeft.hours
                )}:${formatTime(timeLeft.minutes)}:${formatTime(
                    timeLeft.seconds
                )}`}
            </MKTypography>
        </MKBox>
    );
}

function UnderConstruction() {
    const [message, setMessage] = useState("");
    const [timeLeft, setTimeLeft] = useState(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        const endDate = moment.tz(END_DATE, TIMEZONE);
        const now = moment();

        // Set a random message at the start
        setMessage(messages[Math.floor(Math.random() * messages.length)]);

        if (now.isBefore(endDate)) {
            const interval = setInterval(() => {
                const now = moment();
                const duration = moment.duration(endDate.diff(now));
                if (duration.asSeconds() <= 0) {
                    clearInterval(interval);
                    setTimeLeft(null);
                } else {
                    setTimeLeft({
                        days: duration.days(),
                        hours: duration.hours(),
                        minutes: duration.minutes(),
                        seconds: duration.seconds(),
                    });
                }
            }, 1000);

            return () => clearInterval(interval);
        } else {
            setTimeLeft(null);
        }
    }, []);

    const event = findEventByName("Commander Paradise: 2nd Round");
    if (!event) return null;

    const fontFamily = event.fontFamily || "'Digital-7', sans-serif";
    const mainColor = theme.palette[event.colors.warning].main || "#0f0";
    const secondaryColor = theme.palette["error"].main || "#0f0";

    return (
        <>
            <Header
                fontFamily={event.fontFamily}
                title={event.name}
                image={event.image}
            />
            <Grid
                container
                justifyContent="center"
                mx="auto"
                position="relative"
            >
                <Grid item xs={12} md={8} textAlign="center">
                    <MKBox
                        mt={{ xs: -2, md: -13 }}
                        sx={{ position: "relative", zIndex: 1 }}
                    >
                        <Logo logo={event.logo} />
                    </MKBox>
                </Grid>
            </Grid>
            <StyledCard background={comingSoonBg}>
                <Section id="underconstruction">
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="60vh"
                        spacing={2}
                    >
                        <Grid container justifyContent="center" mx="auto">
                            <MKBox
                                component="section"
                                position="relative"
                                py={0}
                                px={{ xs: 2, lg: 0 }}
                                mx={-4}
                                mb={2}
                            >
                                <MKTypography
                                    variant="h1"
                                    color="white"
                                    textAlign="center"
                                    sx={{
                                        mb: 2,
                                        fontSize: isMobile
                                            ? FONT_SIZE_MOBILE_HEADING
                                            : FONT_SIZE_DESKTOP_HEADING,
                                    }}
                                >
                                    {"COMING SOON..."}
                                </MKTypography>
                            </MKBox>
                        </Grid>
                        <Grid item>
                            {timeLeft && (
                                <Countdown
                                    timeLeft={timeLeft}
                                    fontFamily="'Digital-7'"
                                    color={mainColor}
                                    glowColor={mainColor}
                                />
                            )}
                        </Grid>
                        <Grid item>
                            <MKTypography
                                variant="h5"
                                textAlign="center"
                                sx={{
                                    mt: 2,
                                    fontFamily: fontFamily,
                                    color: secondaryColor,
                                    textShadow: `0 0 10px white, 0 0 10px white, 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white, 0 0 50px white`, // Much stronger glow effect
                                    whiteSpace: "pre-line",
                                    fontSize: {
                                        xs: FONT_SIZE_MOBILE_BODY,
                                        md: FONT_SIZE_DESKTOP_BODY,
                                    },
                                }}
                            >
                                {message}
                            </MKTypography>
                        </Grid>
                    </Grid>
                </Section>
            </StyledCard>
        </>
    );
}

export default UnderConstruction;
