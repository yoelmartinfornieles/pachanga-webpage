import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

function GuestsIntro({ event }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const headingFontSize = isMobile
        ? FONT_SIZE_MOBILE_HEADING
        : FONT_SIZE_DESKTOP_HEADING;
    const bodyFontSize = isMobile
        ? FONT_SIZE_MOBILE_BODY
        : FONT_SIZE_DESKTOP_BODY;
    const textAlign = isMobile ? "left" : "center";

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            sx={{ mb: -10 }}
        >
            <Container>
                <Grid container justifyContent="center">
                    <MKTypography
                        variant="h1"
                        color="white"
                        sx={{ mb: 2, fontSize: headingFontSize }}
                    >
                        Invitados
                    </MKTypography>
                    <MKTypography
                        style={{ whiteSpace: "pre-line", textAlign }}
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: bodyFontSize,
                            overflow: "hidden",
                            mb: 6,
                        }}
                    >
                        {event.guests.intro}
                    </MKTypography>
                </Grid>
                <Grid container spacing={3}></Grid>
            </Container>
        </MKBox>
    );
}

export default GuestsIntro;
