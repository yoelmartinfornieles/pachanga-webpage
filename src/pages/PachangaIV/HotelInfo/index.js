import React from "react";
import { Helmet } from "react-helmet";
import { Grid } from "@mui/material";
import { Hotel, Header } from "sections";
import { MKBox, Logo, Section, StyledCard } from "components";
import { useHashScroll, findEventByName } from "shared";

function HotelInfo() {
    useHashScroll();

    const event = findEventByName("Pachanga Tournament IV");
    if (!event) return null;

    return (
        <>
            <Helmet>
                <title>Hotel - Pachanga IV</title>
                <meta
                    name="description"
                    content={`Detalles del hotel del Pachanga IV.`}
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
            </StyledCard>
        </>
    );
}

export default HotelInfo;
