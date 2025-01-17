import React, { lazy, Suspense } from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Section, StyledCard } from "components";
import termsAndConditionsInfo from "./data/termsAndConditionsInfo";
import { termsAndConditionsBanner } from "../../assets/images";

const Header = lazy(() => import("sections/Header"));
const Statement = lazy(() => import("sections/Statement"));

function TermsAndConditions() {
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
                    content="Información sobre los términos y condiciones de nuestro servicio."
                />
                <meta
                    name="keywords"
                    content="Términos, Condiciones, Servicio"
                />
            </Helmet>
            <Suspense fallback={loadingSpinner}>
                <Header
                    title={termsAndConditionsInfo.title}
                    image={termsAndConditionsBanner}
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
                            body={termsAndConditionsInfo.body}
                        />
                    </Suspense>
                </Section>
            </StyledCard>
        </>
    );
}

export default TermsAndConditions;
