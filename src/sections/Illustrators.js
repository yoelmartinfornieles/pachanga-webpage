import { useEffect } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import IllustratorCard from "../components/IllustratorCard";
import { FONT_SIZE_DESKTOP_HEADING, FONT_SIZE_MOBILE_HEADING } from "shared";

function Illustrators({ illustratorsData }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const location = useLocation();

    const scrollToElement = (hash) => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 2000);
            }
        }
    };

    useEffect(() => {
        scrollToElement(window.location.hash);
    }, [location]);

    useEffect(() => {
        scrollToElement(window.location.hash);
    }, []);

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
                    {illustratorsData.map((illustrator) => (
                        <Grid item xs={12} key={illustrator.id} sx={{ ml: 3 }}>
                            <IllustratorCard
                                name={illustrator.name}
                                photo={illustrator.image}
                                description={illustrator.description}
                                links={illustrator.links}
                                position={illustrator.position}
                                images={illustrator.images}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Illustrators;
