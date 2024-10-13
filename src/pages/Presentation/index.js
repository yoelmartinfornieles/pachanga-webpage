// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import CenteredFooter from "examples/Footers/CenteredFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import { carouselImage3, carouselImage4, carouselImage5 } from "assets/images";

// Replace the carouselImages array with this new carouselItems array
const carouselItems = [
    {
        image: "https://images.ctfassets.net/0piqveu8x9oj/1x09dLcGzlPP67VcuHf9dt/c5b80ded3c3e83364a6ca20be90a206a/WPN_Thumbnail_w08_04.jpg",
        title: (
            <>
                <MKTypography
                    variant="h1"
                    sx={{
                        fontFamily: "'Permanent Marker'",
                        fontSize: "5rem",
                        textShadow: "2px 2px 4px black",
                    }}
                    color="white.main"
                >
                    Pachanga Tournament IV
                </MKTypography>
                <MKTypography
                    variant="h6"
                    sx={{
                        fontSize: "1.5rem",
                    }}
                    color="white.main"
                >
                    03/10/2025
                </MKTypography>
            </>
        ),
        description: `El pachanga vuelve más grande y mejor que nunca. ¿Te lo vas a perder?`,
    },
    {
        image: "https://pachangatournament.com/images/2024/gallery-7.jpg",
        title: "Competición y Diversión",
        description:
            "Disfruta de intensas partidas y conoce a otros apasionados del juego. ¡Demuestra tus habilidades y estrategias!",
    },
    {
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/5d/a9/0d/lopesan-costa-meloneras.jpg?w=1100&h=-1&s=1",
        title: "Alójate como dios",
        description: `Enchúfate cócteles hasta reventar disfrutando de un clima espectacular. Gafas de sol 24/7.`,
    },
    {
        image: carouselImage3,
        title: (
            <>
                <MKTypography
                    variant="h1"
                    sx={{
                        fontFamily: "'Cinzel'",
                        fontSize: "4rem",
                        textShadow: "2px 2px 4px black",
                    }}
                    color="white.main"
                >
                    Commander Paradise by Pachanga, 2nd Round
                </MKTypography>
                <MKTypography
                    variant="h6"
                    sx={{
                        fontSize: "1.5rem",
                    }}
                    color="white.main"
                >
                    21/02/2025
                </MKTypography>
            </>
        ),
        description: `Repetimos. El verdadero espíritu EDH vuelve a la isla. ¡No te pierdas la oportunidad de jugar con los mejores!`,
    },
    {
        image: carouselImage4,
        title: "Manquea con estilo",
        description: `Las derrotas nunca supieron mejor. Si pierdes descuida, disfrutarás tanto  como si ganaras. ¡No te preocupes por perder, solo por ganar!`,
    },
    {
        image: carouselImage5,
        title: "Disfruta del Gathering",
        description: `Porque tenemos claro que no todo es competir. Relájate con nuestro coctelero o juégate unas partiditas nocturnas con los demás participantes, y al día siguiente vacila de tu victoria o descarga tu venganza en la piscina.`,
    },
];

function Presentation() {
    const getTweetText = () => {
        const currentDate = new Date();
        const events = [
            {
                nombre: "Pachanga Tournament IV",
                fecha: new Date("2025-10-03"),
                tweet: "Pachanga Tournament IV cada día está más cerca. ¿Te lo vas a perder? Compra ya tu entrada en www.pachangatournament.com #pachangaTournamentIV, @pachangaTorneo",
            },
            {
                nombre: "Commander Paradise by Pachanga - 2nd Round",
                fecha: new Date("2025-02-21"),
                tweet: "Comandante, el Commander Paradise by Pachanga - 2nd Round está al caer. Agarra tus 100, corre a pachangatournament.com a por tu entrada y prepara los tambores de guerra #commanderParadise2ndRound @pachangaTorneo",
            },
            {
                nombre: "Pachanga Tournament V",
                fecha: new Date("2026-10-03"),
                tweet: "Pachanga Tournament V cada día está más cerca. ¿Te lo vas a perder? Compra ya tu entrada en www.pachangatournament.com #pachangaTournamentV, @pachangaTorneo",
            },
        ];

        const upcomingEvents = events.filter(
            (event) => event.fecha > currentDate
        );

        if (upcomingEvents.length === 0) {
            return "Todos los eventos han pasado. ¡Mantente atento para futuros eventos!";
        }

        const closestEvent = upcomingEvents.reduce((prev, curr) => {
            return curr.fecha - currentDate < prev.fecha - currentDate
                ? curr
                : prev;
        });

        return closestEvent.tweet;
    };

    const tweetText = getTweetText();
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
    )}`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        "https://www.pachangatournament.com"
    )}&quote=${encodeURIComponent(tweetText)}`;
    const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(
        "https://www.pachangatournament.com"
    )}`;

    return (
        <MKBox
            width="100%"
            sx={{
                backgroundColor: "#272B2E",
                minHeight: "100vh",
            }}
        >
            <DefaultNavbar
                routes={routes}
                action={{
                    type: "external",
                    route: "https://www.twitter.com",
                    label: "comprar tickets",
                    color: "info",
                }}
                sticky
            />
            <MKBox
                width="100%"
                sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "100vh",
                    mt: -8,
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
                    {carouselItems.map((item, index) => (
                        <Paper
                            key={index}
                            elevation={0}
                            sx={{ height: "100%" }}
                        >
                            <MKBox
                                height="100%"
                                width="100%"
                                sx={{
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${item.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "top",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Container>
                                    <Grid
                                        container
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{ height: "100%" }}
                                    >
                                        <Grid item xs={12} lg={8} xl={6}>
                                            <MKTypography
                                                variant="h1"
                                                color="white"
                                                mb={3}
                                                sx={({
                                                    breakpoints,
                                                    typography: { size },
                                                }) => ({
                                                    fontSize: size["5xl"],
                                                    [breakpoints.down("md")]: {
                                                        fontSize: size["3xl"],
                                                    },
                                                })}
                                                textAlign="center"
                                            >
                                                {item.title}
                                            </MKTypography>
                                            <MKTypography
                                                variant="body1"
                                                color="white"
                                                textAlign="center"
                                                px={{ xs: 6, lg: 12 }}
                                                mt={1}
                                                sx={({
                                                    breakpoints,
                                                    typography: { size },
                                                }) => ({
                                                    fontSize: size["lg"],
                                                    [breakpoints.down("md")]: {
                                                        fontSize: size["md"],
                                                    },
                                                })}
                                            >
                                                {item.description}
                                            </MKTypography>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </MKBox>
                        </Paper>
                    ))}
                </Carousel>
            </MKBox>
            <Container maxWidth="lg" sx={{ p: 0, m: 0 }}>
                <Card
                    sx={{
                        p: 0,
                        mx: { xs: 0, lg: 0 },
                        mt: -5,
                        mb: 0,
                        position: "relative",
                        zIndex: 2,
                        backgroundColor: ({
                            palette: { black },
                            functions: { rgba },
                        }) => rgba(black.main, 0.8),
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    }}
                >
                    <Counters sx={{ mt: 0, mb: 0, p: 0 }} />
                    <Information />
                    <MKBox pt={5} pb={6}>
                        <Container>
                            <Grid container spacing={3} justifyContent="center">
                                <Grid
                                    item
                                    xs={12}
                                    lg={5}
                                    my={{ xs: 5, lg: "auto" }}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        textAlign: "center",
                                    }}
                                >
                                    <MKSocialButton
                                        component="a"
                                        href={facebookShareUrl}
                                        target="_blank"
                                        color="facebook"
                                        sx={{ flex: 1, mx: 1 }}
                                    >
                                        <i className="fab fa-facebook" />
                                        &nbsp;Compartir en Facebook
                                    </MKSocialButton>
                                    <MKSocialButton
                                        component="a"
                                        href={tweetUrl}
                                        target="_blank"
                                        color="twitter"
                                        sx={{ flex: 1, mx: 1 }}
                                    >
                                        <i className="fab fa-twitter" />
                                        &nbsp;Tweet
                                    </MKSocialButton>
                                    <MKSocialButton
                                        component="a"
                                        href={instagramShareUrl}
                                        target="_blank"
                                        color="instagram"
                                        sx={{ flex: 1, mx: 1 }}
                                    >
                                        <i className="fab fa-instagram" />
                                        &nbsp;Compartir en Instagram
                                    </MKSocialButton>
                                </Grid>
                            </Grid>
                        </Container>
                    </MKBox>
                </Card>
            </Container>
            <MKBox
                pt={0}
                px={1}
                mt={6}
                sx={{
                    backgroundColor: "#212529",
                    opacity: 0.98,
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <CenteredFooter />
            </MKBox>
        </MKBox>
    );
}

export default Presentation;
