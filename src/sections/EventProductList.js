import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransparentCard, MKTypography } from "../components";
import {
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_DESKTOP_TITLE,
    FONT_SIZE_MOBILE_TITLE,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

function EventProductList({ event, eventIndex }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div key={eventIndex} style={{ marginBottom: "0px" }}>
            <Grid container item xs={12}>
                <MKTypography
                    variant="h2"
                    mb={6}
                    color="white"
                    sx={{
                        fontFamily: event.fontFamily,
                        fontSize: isMobile
                            ? FONT_SIZE_MOBILE_TITLE
                            : FONT_SIZE_DESKTOP_TITLE,
                    }}
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
                                <MKTypography
                                    color="warning"
                                    variant="h3"
                                    sx={{
                                        fontSize: isMobile
                                            ? FONT_SIZE_MOBILE_TITLE
                                            : FONT_SIZE_DESKTOP_TITLE,
                                    }}
                                >
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
                                        fontSize: isMobile
                                            ? FONT_SIZE_MOBILE_BODY
                                            : FONT_SIZE_DESKTOP_BODY,
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
