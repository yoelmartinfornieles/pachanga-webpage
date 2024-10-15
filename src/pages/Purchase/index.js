// @mui material components
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Ensure correct import path and method for Header
import Header from "../../shared/sections/Header";
import events from "../../events";

// images
import { purchaseBanner } from "../../assets/images";

import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

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
                        palette: { white, black },
                        functions: { rgba },
                    }) => rgba(black.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <MKBox component="section" py={2}>
                    <Container>
                        {events
                            .filter(
                                (event) =>
                                    event.tickets && event.tickets.length > 0
                            )
                            .map((event, eventIndex) => (
                                <div
                                    key={eventIndex}
                                    style={{ marginBottom: "40px" }}
                                >
                                    <Grid container item xs={12} lg={6}>
                                        <MKTypography
                                            variant="h3"
                                            mb={6}
                                            color="white"
                                        >
                                            {event.name}
                                        </MKTypography>
                                    </Grid>
                                    <Grid container spacing={3}>
                                        {event.tickets.map(
                                            (ticket, ticketIndex) => (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    lg={3}
                                                    key={ticketIndex}
                                                    mb={20}
                                                >
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        spacing={2}
                                                    >
                                                        <Grid item>
                                                            <TransparentBlogCard
                                                                image={
                                                                    ticket.image
                                                                }
                                                                title={
                                                                    <MKTypography
                                                                        variant="h3"
                                                                        color="info"
                                                                    >
                                                                        {
                                                                            ticket.name
                                                                        }
                                                                    </MKTypography>
                                                                }
                                                                description={
                                                                    ticket.description
                                                                }
                                                                price={
                                                                    ticket.price
                                                                }
                                                                link={
                                                                    ticket.stripeLink
                                                                }
                                                                action="external"
                                                                sx={{
                                                                    display:
                                                                        "flex",
                                                                    flexDirection:
                                                                        "column",
                                                                    justifyContent:
                                                                        "center",
                                                                }}
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            )
                                        )}
                                    </Grid>
                                </div>
                            ))}
                    </Container>
                </MKBox>
            </Card>
        </>
    );
}

export default Purchase;
