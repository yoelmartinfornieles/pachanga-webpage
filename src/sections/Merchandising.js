import { Grid, Container, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MKBox, MKTypography } from "components";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

function Merchandising() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            sx={{ mb: -10, mt: 0 }}
        >
            <Container>
                <Grid container>
                    <Grid
                        container
                        justifyContent={isMobile ? "center" : "flex-start"}
                    >
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
                            Merchandising
                        </MKTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justifyContent="center">
                    <MKTypography
                        style={{
                            whiteSpace: "pre-line",
                            textAlign: isMobile ? "left" : "center",
                        }}
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: isMobile
                                ? FONT_SIZE_MOBILE_BODY
                                : FONT_SIZE_DESKTOP_BODY,
                            overflow: "hidden",
                            mb: 6,
                        }}
                    >
                        {`Se viene...`}
                    </MKTypography>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Merchandising;
