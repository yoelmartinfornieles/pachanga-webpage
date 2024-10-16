import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import { pachangaGreyLogo } from "assets/images/logos";

function Foundations({ foundations }) {
    return (
        <MKBox component="section" py={{ xs: 3, sm: 12 }}>
            <Container>
                <Grid container justifyContent="center" mx="auto">
                    <Grid item xs={12} md={8} textAlign="center">
                        <MKBox mt={{ xs: -16, md: -28 }}>
                            <Box
                                sx={{
                                    mt: 3,
                                    position: "relative",
                                    width: {
                                        xs: "100px",
                                        sm: "120px",
                                        md: "150px",
                                        lg: "180px",
                                    },
                                    height: {
                                        xs: "100px",
                                        sm: "120px",
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
                    <MKTypography variant="h3" color="white" gutterBottom>
                        Bases del torneo
                    </MKTypography>
                    <MKTypography
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        textAlign="justify"
                        sx={{
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        {foundations}
                    </MKTypography>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Foundations;
