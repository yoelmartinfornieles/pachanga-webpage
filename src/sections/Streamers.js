import { useEffect } from "react";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import StreamerCard from "../components/StreamerCard";
import { FONT_SIZE_DESKTOP_HEADING, FONT_SIZE_MOBILE_HEADING } from "shared";

function Streamers({ streamersData }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 2000);
            }
        }
    }, [location]);

    useEffect(() => {
        const initialHash = window.location.hash;
        if (initialHash) {
            const element = document.getElementById(initialHash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth" });
                }, 2000);
            }
        }
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
                <Grid container>
                    <Grid item></Grid>
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
                            Streamers
                        </MKTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justifyContent="center">
                    {streamersData.map((streamer) => (
                        <div id={streamer.id} key={streamer.id}>
                            <Grid item xs={12} sx={{ ml: 3 }}>
                                <StreamerCard
                                    name={streamer.name}
                                    photo={streamer.image}
                                    description={streamer.description}
                                    links={streamer.links}
                                    position={streamer.position}
                                />
                            </Grid>
                        </div>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Streamers;
