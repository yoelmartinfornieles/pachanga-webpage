import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Card from "@mui/material/Card";
import { Header } from "../../../sections";
import events from "../../../events";
import { GuestsIntro, Illustrators } from "../../../sections";
import illustratorsData from "./data/illustratorsData";
import { Grid, Box } from "@mui/material";
import MKBox from "components/MKBox";
import { pachangaGreyLogo } from "assets/images/logos";

const event = events.find((event) => event.name === "Pachanga Tournament IV");

function Guests() {
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            requestAnimationFrame(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    }, [location]);

    useEffect(() => {
        const initialHash = window.location.hash;
        if (initialHash) {
            const element = document.getElementById(initialHash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <>
            <Header
                fontFamily={event.fontFamily}
                title={event.name}
                image={event.image}
            />
            <Grid
                container
                justifyContent="center"
                mx="auto"
                position="relative"
            >
                <Grid item xs={12} md={8} textAlign="center">
                    <MKBox
                        mt={{ xs: -2, md: -13 }}
                        sx={{ position: "relative", zIndex: 1 }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: -50,
                                left: "50%",
                                transform: "translateX(-50%)",
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
                        >
                            <img
                                src={pachangaGreyLogo}
                                alt="pachanga logo"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </MKBox>
                </Grid>
            </Grid>
            <Card
                sx={{
                    p: 4,
                    mx: { xs: 2, lg: 3 },
                    mt: -5,
                    mb: 4,
                    backgroundColor: ({
                        palette: { black },
                        functions: { rgba },
                    }) => rgba(black.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div id="guestsintro">
                    <GuestsIntro />
                </div>
                <div
                    id="illustrators"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Illustrators illustratorsData={illustratorsData} />
                </div>
            </Card>
        </>
    );
}

export default Guests;
