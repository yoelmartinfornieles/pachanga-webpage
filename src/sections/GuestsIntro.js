import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { Grid, Link } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

function GuestsIntro({
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
                    <Grid container justifyContent="center">
                        <MKTypography
                            variant={isMobile ? "h3" : "h1"}
                            color="white"
                            sx={{
                                mb: 2,
                            }}
                        >
                            Invitados
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
                                fontSize: { xs: "0.875rem", sm: "1rem" },
                                overflow: "hidden",
                                mb: 6,
                            }}
                        >
                            {`¡Ey, ey, ey! Sin nuestros invitados, esto sería como un mazo de Magic sin tierras: ¡totalmente inútil! Sin toda esos chalaos que hacen que el Pachanga sea una fiesta de locos, no hay diversión. Sin ilustradores, las cartitas serían más aburridas que un juego de Monopoly. ¡Así que, a lo que vinimos, vamos con nuestros invitados!`}
                        </MKTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3}></Grid>
            </Container>
        </MKBox>
    );
}

export default GuestsIntro;
