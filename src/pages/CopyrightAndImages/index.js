import React, { lazy, Suspense } from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Section, StyledCard } from "components";
import copyrightAndImagesDisclaimer from "./data/copyrightAndImagesDisclaimer";
import { copyrightAndImagesBanner } from "../../assets/images";

const Header = lazy(() => import("sections/Header"));
const Statement = lazy(() => import("sections/Statement"));

function CopyrightAndImages() {
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
                <title>Copyright e Imágenes</title>
                <meta
                    name="description"
                    content="Información sobre derechos de autor y uso de imágenes en nuestro sitio web."
                />
                <meta
                    name="keywords"
                    content="Copyright, Imágenes, Derechos de Autor"
                />
            </Helmet>
            <Suspense fallback={loadingSpinner}>
                <Header
                    title={copyrightAndImagesDisclaimer.title}
                    image={copyrightAndImagesBanner}
                />
            </Suspense>
            <Grid
                container
                justifyContent="center"
                mx="auto"
                position="relative"
            ></Grid>
            <StyledCard>
                <Section id="dataprotectionpolicy">
                    <Suspense fallback={loadingSpinner}>
                        <Statement
                            title=""
                            body={copyrightAndImagesDisclaimer.body}
                        />
                    </Suspense>
                </Section>
            </StyledCard>
        </>
    );
}

export default CopyrightAndImages;
