import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { pachangaGreyLogo } from "assets/images/logos";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

function Foundations({
    foundations,
    backgroundColor1,
    backgroundColor2,
    opacity1 = 0.8,
    opacity2 = 0.1,
    gradient1 = 1,
    gradient2 = 75,
    gradientAngle = 185,
}) {
    const theme = useTheme();
    const color1 = theme.palette[backgroundColor1]
        ? theme.palette[backgroundColor1].main
        : backgroundColor1;
    const color2 = theme.palette[backgroundColor2]
        ? theme.palette[backgroundColor2].main
        : backgroundColor2;

    const [showMore, setShowMore] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            sx={{
                background: `linear-gradient(${gradientAngle}deg, ${theme.functions.rgba(
                    color1,
                    opacity1
                )} ${gradient1}%, ${theme.functions.rgba(
                    color2,
                    opacity2
                )} ${gradient2}%)`,
            }}
        >
            <Container>
                <Grid container justifyContent="center" mx="auto">
                    <Grid item xs={12} md={8} textAlign="center">
                        <MKBox mt={{ xs: -16, md: -28 }}>
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
                            >
                                <img
                                    src={pachangaGreyLogo}
                                    alt="pachanga logo"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </Box>
                        </MKBox>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" mx="auto">
                    <MKTypography
                        variant={isMobile ? "h3" : "h1"}
                        color="white"
                        gutterBottom
                        sx={{ textAlign: "center" }}
                    >
                        Bases del torneo
                    </MKTypography>
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
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                            maxHeight: showMore ? "none" : "19.5em",
                            overflow: "hidden",
                        }}
                    >
                        {foundations}
                    </MKTypography>
                    {!showMore && foundations.split("\n").length > 10 && (
                        <MKButton
                            color={"warning"}
                            onClick={toggleShowMore}
                            sx={{ mt: 2 }}
                        >
                            Mostrar más
                        </MKButton>
                    )}
                    {showMore && (
                        <MKButton
                            color={"warning"}
                            onClick={toggleShowMore}
                            sx={{ mt: 2 }}
                        >
                            Mostrar menos
                        </MKButton>
                    )}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Foundations;