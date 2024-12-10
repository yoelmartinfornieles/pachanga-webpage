import React, { useState } from "react";
import { Grid, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Recordings() {
    const theme = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            sx={{}}
        >
            <Container>
                <Grid container justifyContent="center" mx="auto">
                    <Grid item xs={12} md={8} textAlign="center">
                        <MKBox mt={{ xs: -32, md: -42 }}>
                            <Box
                                sx={{
                                    mt: 3,
                                    position: "relative",
                                    width: {
                                        xs: "80px",
                                        sm: "100px",
                                        md: "150px",
                                        lg: "180px",
                                    },
                                    height: {
                                        xs: "80px",
                                        sm: "100px",
                                        md: "150px",
                                        lg: "180px",
                                    },
                                    overflow: "hidden",
                                    display: "inline-block",
                                }}
                            ></Box>
                        </MKBox>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-start" mx="auto">
                    <MKBox
                        component="section"
                        position="relative"
                        py={0}
                        px={{ xs: 2, lg: 0 }}
                        mx={-4}
                        mb={2}
                    >
                        <MKTypography
                            variant={isMobile ? "h3" : "h1"}
                            color="white"
                            textAlign="center"
                            sx={{ mb: 2 }}
                        >
                            Grabaciones
                        </MKTypography>
                    </MKBox>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} textAlign="center">
                        <MKTypography
                            style={{ whiteSpace: "pre-wrap" }}
                            variant="body1"
                            fontWeight="light"
                            color="text"
                            textAlign="justify"
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                padding: 0,
                                margin: 0,
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                overflow: "hidden",
                                mb: 4,
                            }}
                        >
                            Bienvenidos al canal de YouTube donde los videos de
                            torneos anteriores son más emocionantes que ver a un
                            gato persiguiendo su propia cola. ¡Preparáos para
                            una montaña rusa de emociones! (Sí, eso incluye
                            llorar un poco. No te preocupes, yo también lo
                            hago).
                        </MKTypography>
                        <Link
                            href="https://youtube.com/@pachangatournament?si=6x7yFNzKo_LaHzac_"
                            target="_blank"
                            rel="noopener"
                        >
                            <MKBox
                                sx={{
                                    fontSize: "8rem",
                                    mb: -6,
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
                                <YouTubeIcon
                                    fontSize="inherit"
                                    sx={{ color: "#FF0000" }}
                                />
                            </MKBox>
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <MKBox
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                        >
                            <MKTypography
                                style={{ whiteSpace: "pre-wrap" }}
                                variant="body1"
                                fontWeight="light"
                                color="text"
                                textAlign="justify"
                                sx={{
                                    width: "100%",
                                    maxWidth: "100%",
                                    padding: 0,
                                    margin: 0,
                                    fontSize: { xs: "0.875rem", sm: "1rem" },
                                    overflow: "hidden",
                                    mb: 2,
                                }}
                            >
                                Aqui el video del torneo de 2024. Jugadas
                                legendarias, comentarios sarcásticos, manqueos
                                de vértigo y esos momentos de "¿en qué demonios
                                estaba pensando?" que todos amamos. En
                                definitva, todo lo que un pachanguero podria
                                desear. ¡Disfrutalo o me veré obligado a enviar
                                a mi amigo el unicornio a buscarte!!
                            </MKTypography>
                            <MKBox
                                sx={{
                                    mt: 2,
                                    position: "relative",
                                    width: "100%",
                                    paddingBottom: "56.25%",
                                    height: 0,
                                    border: "10px solid #fff",
                                    borderRadius: "10px",
                                    boxShadow: isPlaying
                                        ? "0 0 30px rgba(255, 0, 0, 0.8)"
                                        : "0 0 20px rgba(0, 0, 0, 0.5)",
                                    overflow: "hidden",
                                    backgroundColor: "#000",
                                    transition: "box-shadow 0.3s",
                                }}
                            >
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/dVE1Y8oGFuM?enablejsapi=1"
                                    title="Pachanga 2024"
                                    frameBorder="0"
                                    allow="fullscreen"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "10px",
                                    }}
                                    onLoad={() => setIsPlaying(true)}
                                ></iframe>
                            </MKBox>
                        </MKBox>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Recordings;
