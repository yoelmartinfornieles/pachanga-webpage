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
import DefaultFooter from "examples/Footers/DefaultFooter";

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
                Pachanga Tournament IV
                <br />
                03/10/2025
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
                Commander Paradise by Pachanga, 2nd Round
                <br />
                21/02/2025
            </>
        ),
        description: `Repetimos. El verdadero espíritu EDH vuelve a la isla. ¡No te pierdas la oportunidad de jugar con los mejores!`,
    },
    {
        image: carouselImage4,
        title: "Disfruta del Gathering",
        description: `Porque tenemos claro que no todo es competir. Relájate con nuestro coctelero o juégate unas partiditas nocturnas con los demás participantes, y al día siguiente vacila de tu victoria o descarga tu venganza en la piscina.`,
    },
    {
        image: carouselImage5,
        title: "Manquea con estilo",
        description: `Las derrotas nunca supieron mejor. Si pierdes descuida, disfrutarás tanto  como si ganaras. ¡No te preocupes por perder, solo por ganar!`,
    },
];

function Presentation() {
    return (
        <>
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    pt: 17,
                    pb: 5,
                    mt: 0,
                    mb: 0,
                }}
            >
                <Container
                    maxWidth="lg"
                    sx={{ p: 0, m: 0, pt: 0, pb: 0, mt: 0, mb: 0 }}
                >
                    {" "}
                    <Carousel
                        animation="fade"
                        duration={1000}
                        navButtonsAlwaysVisible={false}
                        indicators={false}
                        height="56.25vh"
                        sx={{
                            width: "100%",
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
                                sx={{ height: "75vh" }}
                            >
                                <MKBox
                                    height="100%"
                                    width="100%"
                                    sx={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${item.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
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
                                                        [breakpoints.down(
                                                            "md"
                                                        )]: {
                                                            fontSize:
                                                                size["3xl"],
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
                                                        [breakpoints.down(
                                                            "md"
                                                        )]: {
                                                            fontSize:
                                                                size["md"],
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
                </Container>
            </MKBox>
            <Container maxWidth="lg" sx={{ p: 0, m: 0 }}>
                <Card
                    sx={{
                        p: 0,
                        mx: { xs: 0, lg: 0 },
                        mt: 0,
                        mb: 0,
                        position: "relative",
                        zIndex: 2,
                        backgroundColor: ({
                            palette: { white },
                            functions: { rgba },
                        }) => rgba(white.main, 0.8),
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    }}
                >
                    <Counters sx={{ mt: 0, mb: 0, p: 0 }} />
                    <Information />
                    <MKBox pt={5} pb={6}>
                        <Container>
                            <Grid container spacing={3}>
                                <Grid
                                    item
                                    xs={12}
                                    lg={5}
                                    my={{ xs: 5, lg: "auto" }}
                                    mr={{ xs: 0, lg: "auto" }}
                                    sx={{
                                        textAlign: {
                                            xs: "center",
                                            lg: "right",
                                        },
                                    }}
                                >
                                    <MKSocialButton
                                        component="a"
                                        href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                                        target="_blank"
                                        color="twitter"
                                        sx={{ mr: 1 }}
                                    >
                                        <i className="fab fa-twitter" />
                                        &nbsp;Tweet
                                    </MKSocialButton>
                                    <MKSocialButton
                                        component="a"
                                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                                        target="_blank"
                                        color="facebook"
                                        sx={{ mr: 1 }}
                                    >
                                        <i className="fab fa-facebook" />
                                        &nbsp;Share
                                    </MKSocialButton>
                                    <MKSocialButton
                                        component="a"
                                        href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                                        target="_blank"
                                        color="pinterest"
                                    >
                                        <i className="fab fa-pinterest" />
                                        &nbsp;Pin it
                                    </MKSocialButton>
                                </Grid>
                            </Grid>
                        </Container>
                    </MKBox>
                </Card>
            </Container>
            <MKBox pt={0} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    );
}

export default Presentation;
