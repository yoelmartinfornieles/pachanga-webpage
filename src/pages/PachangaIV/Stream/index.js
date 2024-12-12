import { Grid } from "@mui/material";
import { Header, Streamers, Recordings, Streaming } from "sections";
import { MKBox, Logo, Section, StyledCard } from "components";
import { useHashScroll, findEventByName } from "shared";
import streamersData from "./data/streamersData";

function Stream() {
    useHashScroll();

    const event = findEventByName("Pachanga Tournament IV");
    if (!event) return null;

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
                        <Logo logo={event.logo} />
                    </MKBox>
                </Grid>
            </Grid>
            <StyledCard>
                <Section id="main" />
                <Section id="streaming">
                    <Streaming />
                </Section>
                <Section
                    id="streamers"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Streamers streamersData={streamersData} />
                </Section>
                <Section id="recordings">
                    <Recordings />
                </Section>
            </StyledCard>
        </>
    );
}

export default Stream;
