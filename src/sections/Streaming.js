import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { Grid, Link } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

function Streaming({
    title,
    description,
    teamMembers,
    backgroundColor1,
    backgroundColor2,
    opacity1 = 0.8,
    opacity2 = 0.1,
    gradient1 = 1,
    gradient2 = 75,
    gradientAngle = 185,
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            sx={{ mb: -10 }}
        >
            <Container>
                <Grid container>
                    <Grid item></Grid>
                    <Grid
                        container
                        justifyContent={isMobile ? "center" : "center"}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            sx={{
                                mb: 2,
                                fontSize: isMobile
                                    ? FONT_SIZE_MOBILE_HEADING
                                    : FONT_SIZE_DESKTOP_HEADING,
                            }}
                        >
                            Streaming
                        </MKTypography>
                        <MKTypography
                            style={{
                                whiteSpace: "pre-line",
                                textAlign: isMobile ? "left" : "center",
                            }}
                            variant="body1"
                            fontWeight="light"
                            color="text"
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                padding: 0,
                                margin: 0,
                                fontSize: isMobile
                                    ? FONT_SIZE_MOBILE_BODY
                                    : FONT_SIZE_DESKTOP_BODY,
                                overflow: "hidden",
                                mb: 6,
                            }}
                        >
                            {`Señores, señoras, niños y niñas, gatos, perros, periquitos, hámsters y demás aficionados a Magic The Gathering; ¡Preparáos para el streaming más épico que la humanidad haya presenciado! 
                            ¡Ouh mama, sí, lo habéis adivinado: El streaming del Pachanga IV! 
                            Aquí se enfrentarán los mejores jugadores del universo (pffffbwahahaha), y tú, sí, tú, el afortunado que está viendo esto, podrás disfrutarlo en riguroso directo (bueno, más o menos, porque la vida es un poco complicada y hay un pequeño retraso, pero estoy seguro de que lo superarás). 
                            Prepárate para ver jugadas tan locas que harán que tu cerebro explote como cuando lanzas una bauble con un chalice de 0 en mesa. Los jugadores estarán más concentrados que un mago en una partida de ajedrez, y las cartas volarán más rápido que un dragón en un buffet libre. 
                            Agarra tus palomitas, ajusta el volumen y prepárate para una montaña rusa de emociones que te dejará más enganchado que un Gremlin en un jacuzzi. ¡No digas que no te lo advertí, chacho!
                            Todo aderezado con los comentarios de los casters más chiripitifláuticos que jamás hayas visto, la creme de la creme, la élite de los comentaristas, los maestros de la estrategia, los titanes del análisis, los gurús del entretenimiento, la guinda del pastel que hará que te partas de risa mientras intentas seguir el caos de la pantalla. 
                            Estos maestros del micrófono tienen más chispa que un rayo en una tormenta, y te garantizo que sus apuntes te dejarán más boquiabierto que un Jedi viendo a Yoda bailar breakdance. 
                            ¡Un espectáculo más majestuoso que un dragón intentando bailar salsa!
                            Así que, el día del torneo, no cambies de canal, porque si parpadeas, ¡te lo pierdes! Y no quiero que te arrepientas como cuando te comiste aquel kebab de pescado...
`}
                        </MKTypography>
                        <MKBox
                            sx={{
                                fontSize: "8rem",
                                mb: 0,
                                mt: -12,
                                transition:
                                    "transform 0.3s, box-shadow 0.3s, filter 0.3s",
                                "&:hover": {
                                    transform: "scale(1.1)",
                                    filter: "brightness(1.2)",
                                },
                                display: "inline-flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Link
                                href="https://m.twitch.tv/pachangatournament/home"
                                target="_blank"
                                rel="noopener"
                            >
                                <FontAwesomeIcon
                                    icon={faTwitch}
                                    style={{
                                        color: "#9146FF",
                                        width: "80px",
                                        height: "80px",
                                        marginBottom: "8px",
                                    }}
                                />
                            </Link>
                        </MKBox>
                    </Grid>
                </Grid>
                <Grid container spacing={3}></Grid>
            </Container>
        </MKBox>
    );
}

export default Streaming;
