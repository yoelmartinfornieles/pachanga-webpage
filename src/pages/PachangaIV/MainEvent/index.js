import { Grid } from "@mui/material";
import { Tournament, Hotel, Foundations, Prizes, Header } from "sections";
import { MKBox, PachangaLogo, Section, StyledCard } from "components";
import { useHashScroll, findEventByName } from "shared";

function MainEvent() {
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
                <Section id="tournament">
                    <Tournament
                        info={event.info}
                        poster={event.posters[0]}
                        backgroundColor1="black"
                        backgroundColor2="cerulean"
                        opacity1={0}
                        opacity2={0}
                        gradient1={98}
                        gradient2={100}
                        gradientAngle={180}
                    />
                </Section>
                <Section id="hotel">
                    <Hotel
                        hotel={event.hotel}
                        backgroundColor1="black"
                        backgroundColor2="cerulean"
                        opacity1={0}
                        opacity2={0}
                        gradient1={98}
                        gradient2={100}
                        gradientAngle={180}
                    />
                </Section>
                <Section id="foundations">
                    <Foundations
                        foundations={event.foundations}
                        backgroundColor1="black"
                        backgroundColor2="cerulean"
                        opacity1={0}
                        opacity2={0}
                        gradient1={98}
                        gradient2={100}
                        gradientAngle={180}
                    />
                </Section>
                <Section id="prizes">
                    <Prizes prizes={event.prizes} />
                </Section>
            </StyledCard>
        </>
    );
}

export default MainEvent;