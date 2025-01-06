import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "sections";
import { purchaseBanner } from "assets/images";
import { Section, StyledCard } from "components";
import { EventTickets, Merchandising } from "sections";

function Purchase() {
    return (
        <>
            <Helmet>
                <title>Tienda</title>
                <meta
                    name="description"
                    content="Compra tus entradas y merchandising para el evento."
                />
                <meta
                    name="keywords"
                    content="Tienda, Entradas, Merchandising, Evento"
                />
            </Helmet>
            <Header title="Tienda" image={purchaseBanner} />
            <StyledCard>
                <Section id="main" />
                <Section id="eventtickets">
                    <EventTickets />
                </Section>
                <Section id="merchandising">
                    <Merchandising />
                </Section>
            </StyledCard>
        </>
    );
}

export default Purchase;
