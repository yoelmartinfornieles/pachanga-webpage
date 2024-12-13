import { Grid } from "@mui/material";
import { Header, Statement } from "sections";
import { MKBox, Logo, Section, StyledCard } from "components";
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
            ></Grid>
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
