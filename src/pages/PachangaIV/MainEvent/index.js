import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import { Tournament, Hotel, Foundations, Prizes, Header } from "sections";
import { MKBox, Logo, Section, StyledCard } from "components";
import { useHashScroll, findEventByName } from "shared";

function MainEvent() {
    useHashScroll();

    const event = findEventByName("Pachanga Tournament IV");
    if (!event) return null;

    return (
        <>
            <Helmet>
                <title>Evento Principal - Pachanga IV</title>
                <meta
                    name="description"
                    content={`Detalles del evento principal del Pachanga IV, incluyendo torneo, hotel y premios.`}
                />
            </Helmet>
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
                        event={event}
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
                    <Prizes event={event} />
                </Section>
            </StyledCard>
        </>
    );
}

export default MainEvent;
