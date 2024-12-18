import { useEffect, useState } from "react";
import { Grid, useMediaQuery, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { MKBox, MKTypography, IllustratorCard } from "components";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_MOBILE_HEADING,
    useHashScroll,
} from "shared";

const LazyIllustratorCard = ({ illustrator, color }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView && (
                <IllustratorCard illustrator={illustrator} color={color} />
            )}
        </div>
    );
};

const IllustratorsList = ({ illustrators, color }) => (
    <Grid container spacing={3} justifyContent="center">
        {illustrators.map((illustrator) => (
            <Grid item xs={12} key={illustrator.id} sx={{ ml: 0 }}>
                <div id={illustrator.id}>
                    <LazyIllustratorCard
                        illustrator={illustrator}
                        color={color}
                    />
                </div>
            </Grid>
        ))}
    </Grid>
);

const Illustrators = ({ event }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [shuffledIllustrators, setShuffledIllustrators] = useState([]);

    useHashScroll();

    useEffect(() => {
        const shuffleIllustrators = (illustrators) => {
            return [...illustrators].sort(() => Math.random() - 0.5);
        };

        if (shuffledIllustrators.length === 0) {
            setShuffledIllustrators(
                shuffleIllustrators(event.guests.illustrators)
            );
        }
    }, [event.guests.illustrators, shuffledIllustrators]);

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
                <Grid
                    container
                    justifyContent={isMobile ? "center" : "flex-end"}
                >
                    <MKTypography
                        variant="h1"
                        color="white"
                        textAlign="left"
                        sx={{
                            mb: 8,
                            fontSize: isMobile
                                ? FONT_SIZE_MOBILE_HEADING
                                : FONT_SIZE_DESKTOP_HEADING,
                        }}
                    >
                        Ilustradores
                    </MKTypography>
                </Grid>
                <IllustratorsList
                    illustrators={shuffledIllustrators}
                    color={event.colors.success}
                />
            </Container>
        </MKBox>
    );
};

export default Illustrators;
