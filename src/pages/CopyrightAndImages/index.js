import { Grid } from "@mui/material";
import { Header, Statement } from "sections";
import { Section, StyledCard } from "components";
import copyrightAndImagesDisclaimer from "./data/copyrightAndImagesDisclaimer";
import { copyrightAndImagesBanner } from "../../assets/images";

function CopyrightAndImages() {
    return (
        <>
            <Header
                title={copyrightAndImagesDisclaimer.title}
                image={copyrightAndImagesBanner}
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
                        body={copyrightAndImagesDisclaimer.body}
                    />
                </Section>
            </StyledCard>
        </>
    );
}

export default CopyrightAndImages;
