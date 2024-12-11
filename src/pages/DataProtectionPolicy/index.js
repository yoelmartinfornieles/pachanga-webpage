import { Grid } from "@mui/material";
import { Header, Statement } from "sections";
import { MKBox, PachangaLogo, Section, StyledCard } from "components";
import dataProtectionPolicyStatement from "./data/dataProtectionPolicyStatement";
import { dataProtectionPolicyBanner } from "../../assets/images";

function DataProtectionPolicy() {
    return (
        <>
            <Header
                title={dataProtectionPolicyStatement.title}
                image={dataProtectionPolicyBanner}
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
                        <PachangaLogo />
                    </MKBox>
                </Grid>
            </Grid>
            <StyledCard>
                <Section id="dataprotectionpolicy">
                    <Statement
                        title=""
                        body={dataProtectionPolicyStatement.body}
                    />
                </Section>
            </StyledCard>
        </>
    );
}

export default DataProtectionPolicy;
