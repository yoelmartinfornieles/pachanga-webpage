import { Grid, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MKBox, MKTypography } from "components";
import { EventProductList } from "sections";
import events from "../events";
import { FONT_SIZE_DESKTOP_HEADING, FONT_SIZE_MOBILE_HEADING } from "shared";

function EventTickets() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const sortedEvents = events.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            sx={{ mb: -10, mt: -8 }}
        >
            <Container>
                <Grid container>
                    <Grid item></Grid>
                    <Grid container justifyContent="center">
                        <MKTypography
                            variant="h1"
                            color="white"
                            textAlign="center"
                            sx={{
                                mb: 8,
                                fontSize: isMobile
                                    ? FONT_SIZE_MOBILE_HEADING
                                    : FONT_SIZE_DESKTOP_HEADING,
                            }}
                        >
                            Entradas de eventos
                        </MKTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justifyContent="center">
                    {sortedEvents
                        .filter(
                            (event) => event.tickets && event.tickets.length > 0
                        )
                        .map((event, eventIndex) => (
                            <Grid item xs={12} key={event.name}>
                                <EventProductList
                                    color="warning.main"
                                    event={event}
                                    eventIndex={eventIndex}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default EventTickets;
