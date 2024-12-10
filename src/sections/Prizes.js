import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import { InfoCard, CenteredCard } from "../components";
import MKTypography from "components/MKTypography";
import {
    pachangaIIIModernChampion,
    pachangaIIIPioneerChampion,
    pachangaIIISealedChampion,
    pachangaIIModernChampion,
    pachangaIIPioneerChampion,
    pachangaIISealedChampion,
    pachangaIModernChampion,
    pachangaIPioneerChampion,
    pachangaISealedChampion,
} from "../assets/images";

const championImages = [
    pachangaIIIModernChampion,
    pachangaIIIPioneerChampion,
    pachangaIIISealedChampion,
    pachangaIIModernChampion,
    pachangaIIPioneerChampion,
    pachangaIISealedChampion,
    pachangaIModernChampion,
    pachangaIPioneerChampion,
    pachangaISealedChampion,
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Prizes({ prizes }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const shuffledChampionImages = shuffleArray([...championImages]);
    const prizeImages = shuffleArray([...prizes.map((prize) => prize.image)]);
    const combinedImages = [];
    let championIndex = 0;
    let prizeIndex = 0;

    while (
        prizeIndex < prizeImages.length ||
        championIndex < shuffledChampionImages.length
    ) {
        for (let i = 0; i < 2; i++) {
            if (prizeIndex < prizeImages.length) {
                combinedImages.push(prizeImages[prizeIndex]);
                prizeIndex++;
            } else {
                combinedImages.push(
                    prizeImages[prizeIndex % prizeImages.length]
                );
                prizeIndex++;
            }
        }
        if (championIndex < shuffledChampionImages.length) {
            combinedImages.push(shuffledChampionImages[championIndex]);
            championIndex++;
        } else {
            combinedImages.push(
                shuffledChampionImages[
                    championIndex % shuffledChampionImages.length
                ]
            );
            championIndex++;
        }
    }

    return (
        <MKBox
            component="section"
            py={12}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            mt={-20}
        >
            <MKBox
                component="section"
                position="relative"
                py={6}
                px={{ xs: 2, lg: 0 }}
                mx={-4}
            >
                <Container>
                    <Grid container>
                        <Grid item></Grid>
                        <Grid container justifyContent="center">
                            <MKTypography
                                variant={isMobile ? "h3" : "h1"}
                                color="white"
                                textAlign="center"
                            >
                                Premios
                            </MKTypography>
                        </Grid>
                    </Grid>
                </Container>
            </MKBox>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Grid container justifyContent="flex-start">
                            {prizes.map((prize, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <MKBox mb={5}>
                                        <InfoCard
                                            color="warning"
                                            icon={prize.icon}
                                            title={prize.name}
                                            description={prize.description}
                                        />
                                    </MKBox>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={5}
                        sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}
                    >
                        <CenteredCard
                            title={
                                <span
                                    style={{
                                        color: "#E18E04",
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.7)",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                    }}
                                >
                                    ¡Hey, tú! Sí, tú. ¡Deja de procrastinar y
                                    conviértete en el campeón! O al menos
                                    intenta no dar mucha pena en el intento.
                                    ¡Vamos, que no es tan difícil!
                                </span>
                            }
                            description="No es fácil ser el mejor, ¿verdad? Especialmente en el Pachanga, donde las distracciones y el entretenimiento son más tentadores que un durum mixto a las 3 a.m. ¿Serás tú el valiente que se mantenga firme y se alce con la victoria en esta edición? O, ya sabes, ¿simplemente te rendirás y te irás a ver Netflix?"
                            image={combinedImages}
                            color="black"
                            opacity={0}
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Prizes;
