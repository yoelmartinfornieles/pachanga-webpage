import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import { Header, GuestsIntro, Illustrators } from "sections";
import { useHashScroll, findEventByName } from "shared";
import { MKBox, Logo, Section, StyledCard } from "components";

function Guests() {
    useHashScroll();

    const event = findEventByName("Pachanga Tournament IV");
    if (!event) return null;

    return (
        <>
            <Helmet>
                <title>Invitados - Pachanga IV</title>
                <meta
                    name="description"
                    content="Página de Invitados para el Pachanga Tournament IV"
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
