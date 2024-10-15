import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import { Header } from "../../shared/sections";
import { EventProductList } from "./sections";
import events from "../../events";
import { purchaseBanner } from "../../assets/images";

const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

function Purchase() {
    return (
        <>
            <Header title="Comprar Entradas" image={purchaseBanner} />
            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -5,
                    mb: 4,
                    backgroundColor: ({
                        palette: { black },
                        functions: { rgba },
                    }) => rgba(black.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <MKBox component="section" py={2}>
                    <Container>
                        {sortedEvents
                            .filter(
                                (event) =>
                                    event.tickets && event.tickets.length > 0
                            )
                            .map((event, eventIndex) => (
                                <EventProductList
                                    event={event}
                                    eventIndex={eventIndex}
                                    key={event.name}
                                />
                            ))}
                    </Container>
                </MKBox>
            </Card>
        </>
    );
}

export default Purchase;
