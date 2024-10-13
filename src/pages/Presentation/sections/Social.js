// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKSocialButton from "components/MKSocialButton";

//Social url data
import socialUrls from "./data/socialData";

function Social() {
    return (
        <MKBox pt={5} pb={6}>
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    <Grid
                        item
                        xs={12}
                        lg={5}
                        my={{ xs: 5, lg: "auto" }}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            textAlign: "center",
                        }}
                    >
                        <MKSocialButton
                            component="a"
                            href={socialUrls.facebookShareUrl}
                            target="_blank"
                            color="facebook"
                            sx={{ flex: 1, mx: 1 }}
                        >
                            <i className="fab fa-facebook" />
                            &nbsp;Compartir en Facebook
                        </MKSocialButton>
                        <MKSocialButton
                            component="a"
                            href={socialUrls.tweetUrl}
                            target="_blank"
                            color="twitter"
                            sx={{ flex: 1, mx: 1 }}
                        >
                            <i className="fab fa-twitter" />
                            &nbsp;Tweet
                        </MKSocialButton>
                        <MKSocialButton
                            component="a"
                            href={socialUrls.instagramShareUrl}
                            target="_blank"
                            color="instagram"
                            sx={{ flex: 1, mx: 1 }}
                        >
                            <i className="fab fa-instagram" />
                            &nbsp;Compartir en Instagram
                        </MKSocialButton>
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Social;
