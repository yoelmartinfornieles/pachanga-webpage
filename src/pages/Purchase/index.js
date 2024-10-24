import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import { Header } from "../../sections";
import { EventProductList } from "./sections";
import events from "../../events";
import { purchaseBanner } from "../../assets/images";

const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

function Purchase() {
    return (
        <>
            <Header title="Tienda" image={purchaseBanner} />
            <Card
                sx={{
                    p: 4,
                    mx: { xs: 2, lg: 3 },
                    mt: -5,
                    mb: 4,
                    backgroundColor: ({
                        palette: { black },
                        functions: { rgba },
                    }) => rgba(black.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                    borderRadius: "16px",
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
                                    color="warning.main"
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
