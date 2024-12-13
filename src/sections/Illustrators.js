import { useEffect, useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import IllustratorCard from "../components/IllustratorCard";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_MOBILE_HEADING,
    useHashScroll,
} from "shared";

function Illustrators({ event }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [shuffledIllustrators, setShuffledIllustrators] = useState([]);

    useHashScroll();

    useEffect(() => {
        const shuffled = [...event.guests.illustrators].sort(
            () => Math.random() - 0.5
        );
        setShuffledIllustrators(shuffled);
    }, [event.guests.illustrators]);

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
                <Grid container spacing={3} justifyContent="center">
                    {shuffledIllustrators.map((illustrator) => (
                        <Grid item xs={12} key={illustrator.id} sx={{ ml: 0 }}>
                            <div id={illustrator.id}>
                                <IllustratorCard
                                    illustrator={illustrator}
                                    color={event.colors.success}
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Illustrators;
