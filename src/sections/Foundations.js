import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

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
            mt={-8}
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
                <Grid
                    container
                    justifyContent={isMobile ? "center" : "flex-end"}
                    mx="auto"
                >
                    <MKTypography
                        variant="h1"
                        color="white"
                        gutterBottom
                        sx={{
                            textAlign: "center",
                            fontSize: isMobile
                                ? FONT_SIZE_MOBILE_HEADING
                                : FONT_SIZE_DESKTOP_HEADING,
                        }}
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
                            fontSize: isMobile
                                ? FONT_SIZE_MOBILE_BODY
                                : FONT_SIZE_DESKTOP_BODY,
                            maxHeight: showMore ? "none" : "19.5em",
                            overflow: "hidden",
                            mt: -3,
                        }}
                    >
                        {foundations}
                    </MKTypography>
                    {!showMore && foundations.split("\n").length > 10 && (
                        <MKButton
                            color={"dark"}
                            onClick={toggleShowMore}
                            sx={{ mt: 3 }}
                        >
                            Mostrar más
                        </MKButton>
                    )}
                    {showMore && (
                        <MKButton
                            color={"dark"}
                            onClick={toggleShowMore}
                            sx={{ mt: 3 }}
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
