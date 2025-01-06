import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Section, StyledCard } from "components";
import dataProtectionPolicyStatement from "./data/dataProtectionPolicyStatement";
import { dataProtectionPolicyBanner } from "../../assets/images";

const Header = lazy(() => import("sections/Header"));
const Statement = lazy(() => import("sections/Statement"));

function DataProtectionPolicy() {
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
                <title>{dataProtectionPolicyStatement.title}</title>
                <meta
                    name="description"
                    content="Página de Política de Protección de Datos"
                />
            </Helmet>
            <Suspense fallback={loadingSpinner}>
                <Header
                    title={dataProtectionPolicyStatement.title}
                    image={dataProtectionPolicyBanner}
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
                            body={dataProtectionPolicyStatement.body}
                        />
                    </Suspense>
                </Section>
            </StyledCard>
        </>
    );
}

export default DataProtectionPolicy;
