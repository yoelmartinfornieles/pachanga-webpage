import { Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

function Statement({ title, body }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
        >
            <Container>
                <Grid container justifyContent="center" mx="auto">
                    <Grid item xs={12} md={8} textAlign="center">
                        <MKBox mt={{ xs: -32, md: -42 }}>
                            <Box
                                sx={{
                                    mt: 3,
                                    position: "relative",
                                    width: {
                                        xs: "80px",
                                        sm: "100px",
                                        md: "150px",
                                        lg: "180px",
                                    },
                                    height: {
                                        xs: "80px",
                                        sm: "100px",
                                        md: "150px",
                                        lg: "180px",
                                    },
                                    overflow: "hidden",
                                    display: "inline-block",
                                }}
                            ></Box>
                        </MKBox>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" mx="auto">
                    <MKBox
                        component="section"
                        position="relative"
                        py={0}
                        px={{ xs: 2, lg: 0 }}
                        mx={-4}
                        mb={2}
                    >
                        <MKTypography
                            variant="h1"
                            color="white"
                            textAlign="center"
                            sx={{
                                mb: 2,
                                fontSize: isMobile
                                    ? FONT_SIZE_MOBILE_HEADING
                                    : FONT_SIZE_DESKTOP_HEADING,
                            }}
                        >
                            {title}
                        </MKTypography>
                    </MKBox>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} textAlign="center">
                        <MKTypography
                            style={{ whiteSpace: "pre-wrap" }}
                            variant="body1"
                            fontWeight="light"
                            color="text"
                            textAlign="justify"
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                padding: 0,
                                margin: 0,
                                fontSize: isMobile
                                    ? FONT_SIZE_MOBILE_BODY
                                    : FONT_SIZE_DESKTOP_BODY,
                                overflow: "hidden",
                                mb: 4,
                            }}
                        >
                            {body}
                        </MKTypography>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Statement;
