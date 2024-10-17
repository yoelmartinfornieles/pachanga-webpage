// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

import { TransparentCard } from "../../../components";

function EventProductList({ event, eventIndex }) {
    return (
        <div key={eventIndex} style={{ marginBottom: "0px" }}>
            <Grid container item xs={12}>
                <MKTypography
                    variant="h2"
                    mb={6}
                    color="white"
                    sx={{ fontFamily: event.fontFamily }}
                >
                    {event.name}
                </MKTypography>
            </Grid>
            <Grid container spacing={3}>
                {event.tickets.map((ticket, ticketIndex) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                        key={ticketIndex}
                        mb={5}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <TransparentCard
                            image={ticket.image}
                            title={
                                <MKTypography color="warning" variant="h3">
                                    {ticket.name}
                                </MKTypography>
                            }
                            description={
                                <MKTypography
                                    variant="body2"
                                    color="text"
                                    sx={{
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                    }}
                                >
                                    {ticket.description}
                                </MKTypography>
                            }
                            price={ticket.price}
                            link={ticket.stripeLink}
                            action="external"
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default EventProductList;
