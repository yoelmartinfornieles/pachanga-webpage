import { Grid, Box } from "@mui/material"; // Import necessary Material-UI components
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
import { pachangaGreyLogo } from "assets/images/logos";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import StreamerCard from "../components/StreamerCard";

function Streamers({
    streamersData,
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
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
                        <MKBox mt={{ xs: -16, md: -22 }}>
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
                </Grid>{" "}
                <Grid container justifyContent="center" mx="auto">
                    <MKBox
                        component="section"
                        position="relative"
                        py={2}
                        px={{ xs: 2, lg: 0 }}
                        mx={-4}
                    >
                        <MKTypography
                            variant={isMobile ? "h3" : "h1"}
                            color="white"
                            textAlign="center"
                        >
                            Stream
                        </MKTypography>
                    </MKBox>
                </Grid>
                <Grid container spacing={3}>
                    {streamersData.map((streamer) => (
                        <Grid item xs={12} key={streamer.name}>
                            <StreamerCard
                                name={streamer.name}
                                photo={streamer.image}
                                description={streamer.description}
                                links={streamer.links}
                                position={streamer.position}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Streamers;
