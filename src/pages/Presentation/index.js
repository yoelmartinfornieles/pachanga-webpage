import React, { lazy, Suspense } from "react";
import { Container, Card, CircularProgress, Box } from "@mui/material";
import MKBox from "components/MKBox";
import { Helmet } from "react-helmet";

const Banner = lazy(() => import("sections/Banner"));
const Counters = lazy(() => import("sections/Counters"));
const Information = lazy(() => import("sections/Information"));
const Social = lazy(() => import("sections/Social"));

function Presentation() {
    const loadingSpinner = (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
            }}
        >
            <CircularProgress />
        </Box>
    );

    return (
        <>
            <Helmet>
                <title>
                    Pachanga Tournament - Commander Paradise - Magic: The
                    Gathering
                </title>
                <meta
                    name="description"
                    content="Join the Pachanga Tournament and Commander paradise, the ultimate Magic: The Gathering tournaments in the Canary Islands. Discover top players, exciting matches, ticket info, and surprises."
                />
                <meta
                    property="og:title"
                    content="Pachanga Tournament - Commander Paradise - Magic: The Gathering"
                />
                <meta
                    property="og:description"
                    content="Join the Pachanga Tournament and Commander paradise, the ultimate Magic: The Gathering tournaments in the Canary Islands. Discover top players, exciting matches, ticket info, and surprises."
                />
                <meta property="og:image" content="%PUBLIC_URL%/favicon.png" />
                <meta
                    property="og:url"
                    content="https://www.pachangatournament.com"
                />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <MKBox
                component="main"
                width="100%"
                sx={{
                    backgroundColor: "#272B2E",
                    minHeight: "100vh",
                }}
            >
                <Suspense fallback={loadingSpinner}>
                    <Banner />
                </Suspense>
                <Container
                    component="section"
                    maxWidth="lg"
                    sx={{ p: 0, m: 0 }}
                >
                    <Card
                        sx={{
                            position: "relative",
                            zIndex: 2,
                            p: 4,
                            mx: { xs: 1, lg: -8.5 },
                            mt: -5,
                            mb: 4,
                            backgroundColor: ({
                                palette: { black },
                                functions: { rgba },
                            }) => rgba(black.main, 0.8),
                            backdropFilter: "saturate(200%) blur(30px)",
                            boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                            borderRadius: "16px",
                        }}
                    >
                        <Suspense fallback={loadingSpinner}>
                            <Counters sx={{ mt: 0, mb: 0, p: 0 }} />
                            <Information />
                            <Social />
                        </Suspense>
                    </Card>
                </Container>
            </MKBox>
        </>
    );
}

export default Presentation;
