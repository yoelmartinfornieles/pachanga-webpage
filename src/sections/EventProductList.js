import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TransparentCard, MKTypography } from "../components";
import { useInView } from "react-intersection-observer";
import {
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_DESKTOP_TITLE,
    FONT_SIZE_MOBILE_TITLE,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

const getFontSize = (isMobile, mobileSize, desktopSize) => {
    return isMobile ? mobileSize : desktopSize;
};

const Typography = ({
    variant,
    color,
    text,
    isMobile,
    mobileSize,
    desktopSize,
    sx,
}) => (
    <MKTypography
        variant={variant}
        color={color}
        sx={{
            fontSize: getFontSize(isMobile, mobileSize, desktopSize),
            ...sx,
        }}
    >
        {text}
    </MKTypography>
);

const LazyTransparentCard = ({ ticket, isMobile }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView && (
                <TransparentCard
                    image={ticket.image}
                    title={
                        <Typography
                            color="warning"
                            variant="h3"
                            text={ticket.name}
                            isMobile={isMobile}
                            mobileSize={FONT_SIZE_MOBILE_TITLE}
                            desktopSize={FONT_SIZE_DESKTOP_TITLE}
                        />
                    }
                    description={
                        <MKTypography
                            variant="body2"
                            color="text"
                            style={{ whiteSpace: "pre-wrap" }}
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: "vertical",
                                fontSize: getFontSize(
                                    isMobile,
                                    FONT_SIZE_MOBILE_BODY,
                                    FONT_SIZE_DESKTOP_BODY
                                ),
                            }}
                        >
                            {ticket.description}
                        </MKTypography>
                    }
                    price={ticket.price}
                    link={ticket.stripeLink}
                    action="external"
                />
            )}
        </div>
    );
};

function EventProductList({ event, eventIndex }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div key={eventIndex} style={{ marginBottom: "0px" }}>
            <Grid container item xs={12}>
                <Typography
                    variant="h2"
                    color="white"
                    text={event.name}
                    isMobile={isMobile}
                    mobileSize={FONT_SIZE_MOBILE_TITLE}
                    desktopSize={FONT_SIZE_DESKTOP_TITLE}
                    sx={{ fontFamily: event.fontFamily, mb: 6 }}
                />
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
                        <LazyTransparentCard
                            ticket={ticket}
                            isMobile={isMobile}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default EventProductList;
