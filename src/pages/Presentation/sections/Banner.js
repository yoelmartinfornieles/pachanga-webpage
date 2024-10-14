import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Carousel from "react-material-ui-carousel";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

import { bannerData } from "./data";
const { carouselItems } = bannerData;

function Banner() {
    return (
        <MKBox
            width="100%"
            sx={{
                position: "relative",
                overflow: "hidden",
                height: "92vh",
                mt: -8,
                "@media (max-height: 600px)": {
                    height: "600px",
                },
            }}
        >
            <Carousel
                animation="fade"
                duration={1000}
                navButtonsAlwaysVisible={false}
                indicators={false}
                height="100%"
                sx={{
                    width: "100%",
                    height: "100%",
                    "& .MuiPaper-root": {
                        borderRadius: "xl",
                        overflow: "hidden",
                    },
                }}
            >
                {carouselItems.map((item, index) => (
                    <Paper key={index} elevation={0} sx={{ height: "100%" }}>
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
                                        <MKBox
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                        >
                                            {item.title}
                                            {item.subtitle}
                                            <MKTypography
                                                variant="body1"
                                                color="white"
                                                textAlign="center"
                                                px={{ xs: 6, lg: 12 }}
                                                mt={1}
                                                sx={({
                                                    typography: { size },
                                                }) => ({
                                                    fontSize: {
                                                        xs: size["md"],
                                                        sm: size["lg"],
                                                        md: size["lg"],
                                                    },
                                                    maxWidth: "90%",
                                                })}
                                            >
                                                {item.description}
                                            </MKTypography>
                                        </MKBox>
                                    </Grid>
                                </Grid>
                            </Container>
                        </MKBox>
                    </Paper>
                ))}
            </Carousel>
        </MKBox>
    );
}

export default Banner;
