import { Paper, Grid, Container } from "@mui/material";
import { MKBox, MKTypography } from "components";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

function BannerCarouselItem({ item }) {
    return (
        <Paper elevation={0} sx={{ height: "100%" }}>
            <MKBox
                height="100%"
                width="100%"
                sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "100px",
                }}
            >
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: "100%" }}
                    >
                        <Grid item xs={12} lg={8} xl={6}>
                            <ContentBox item={item} />
                        </Grid>
                    </Grid>
                </Container>
            </MKBox>
        </Paper>
    );
}

function ContentBox({ item }) {
    return (
        <MKBox display="flex" flexDirection="column" alignItems="center">
            {item.title}
            {item.subtitle}
            <MKTypography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
                sx={({ typography: { size } }) => ({
                    fontSize: {
                        xs: size["lg"],
                        sm: size["lg"],
                        md: size["lg"],
                    },
                    maxWidth: "90%",
                })}
            >
                {item.description}
            </MKTypography>
        </MKBox>
    );
}

export default BannerCarouselItem;
