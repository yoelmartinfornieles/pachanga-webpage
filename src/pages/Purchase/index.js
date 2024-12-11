import { Header } from "sections";
import { purchaseBanner } from "assets/images";
import { Section, StyledCard } from "components";
import { EventTickets, Merchandising } from "sections";
function Purchase() {
    return (
        <>
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
