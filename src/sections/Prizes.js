import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery, Container, Grid } from "@mui/material";
import { InfoCard, CenteredCard, MKBox, MKTypography } from "../components";
import { useInView } from "react-intersection-observer";
import { FONT_SIZE_DESKTOP_HEADING, FONT_SIZE_MOBILE_HEADING } from "shared";

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const LazyInfoCard = ({ prize, color }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView && (
                <MKBox mb={5}>
                    <InfoCard
                        color={color}
                        icon={prize.icon}
                        title={prize.name}
                        description={prize.description}
                    />
                </MKBox>
            )}
        </div>
    );
};

const LazyCenteredCard = ({ title, description, image, color, opacity }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView && (
                <CenteredCard
                    title={title}
                    description={description}
                    image={image}
                    color={color}
                    opacity={opacity}
                />
            )}
        </div>
    );
};

function Prizes({ event }) {
    const catchPhrase = event.prizesCatchPhrase;
    const description = event.prizesDescription;
    const prizes = event.prizes;
    const previousWinnersPhotos = event.previousWinnersPhotos;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const shuffledChampionImages = shuffleArray([...previousWinnersPhotos]);
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
            mt={-4}
        >
            <MKBox
                component="section"
                position="relative"
                py={6}
                px={{ xs: 2, lg: 0 }}
                mx={-4}
                mt={-14}
            >
                <Container>
                    <Grid container justifyContent="center">
                        <MKTypography
                            variant="h1"
                            color="white"
                            textAlign="center"
                            sx={{
                                fontSize: isMobile
                                    ? FONT_SIZE_MOBILE_HEADING
                                    : FONT_SIZE_DESKTOP_HEADING,
                            }}
                        >
                            Premios
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Grid container justifyContent="flex-start">
                            {prizes.map((prize, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <LazyInfoCard
                                        prize={prize}
                                        color={event.colors.warning}
                                    />
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
                        <LazyCenteredCard
                            title={
                                <span
                                    style={{
                                        color: theme.palette[
                                            event.colors.warning
                                        ].main,
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.7)",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        fontSize: isMobile
                                            ? "1.2rem"
                                            : "1.25rem",
                                    }}
                                >
                                    {catchPhrase}
                                </span>
                            }
                            description={description}
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
