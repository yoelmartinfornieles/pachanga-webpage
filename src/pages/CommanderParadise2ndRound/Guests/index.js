import React from "react";
import { Grid } from "@mui/material";
import { Helmet } from "react-helmet";
import { Header, GuestsIntro, Illustrators } from "sections";
import { useHashScroll, findEventByName } from "shared";
import { MKBox, Logo, Section, StyledCard } from "components";

function Guests() {
    useHashScroll();

    const event = findEventByName("Commander Paradise: 2nd Round");
    if (!event) return null;

    return (
        <>
            <Helmet>
                <title>Invitados - Commander Paradise: 2nd Round</title>
                <meta
                    name="description"
                    content={`Conoce a los invitados especiales del Commander Paradise: 2nd Round.`}
                />
                <meta
                    name="keywords"
                    content="Magic, Invitados, Commander Paradise, Torneo"
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
                <Section id="main" />
                <Section id="guestsintro">
                    <GuestsIntro event={event} />
                </Section>
                <Section
                    id="illustrators"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    <Illustrators event={event} />
                </Section>
            </StyledCard>
        </>
    );
}

export default Guests;
