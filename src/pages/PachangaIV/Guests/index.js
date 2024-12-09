import { Grid } from "@mui/material";
import { Header, GuestsIntro, Illustrators } from "sections";
import { useHashScroll, findEventByName } from "shared";
import { MKBox, PachangaLogo, Section, StyledCard } from "components";
import illustratorsData from "./data/illustratorsData";

function Guests() {
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
                        <PachangaLogo />
                    </MKBox>
                </Grid>
            </Grid>
            <StyledCard>
                <Section id="main" />
                <Section id="guestsintro">
                    <GuestsIntro />
                </Section>
                <Section
                    id="illustrators"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Illustrators illustratorsData={illustratorsData} />
                </Section>
            </StyledCard>
        </>
    );
}

export default Guests;
