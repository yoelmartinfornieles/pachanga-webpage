// @mui material components
import Grid from "@mui/material/Grid";
import MKSocialButton from "components/MKSocialButton";

//Social url data
import socialUrls from "./data/socialData";

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
        sx={{ flex: 1, mx: 1, p: 2 }}
    >
        <i className="fab fa-facebook" />
        &nbsp;Compartir en Facebook
    </MKSocialButton>
    <MKSocialButton
        component="a"
        href={socialUrls.tweetUrl}
        target="_blank"
        color="twitter"
        sx={{ flex: 1, mx: 1, p: 2 }}
    >
        <i className="fab fa-twitter" />
        &nbsp;Tweet
    </MKSocialButton>
    <MKSocialButton
        component="a"
        href={socialUrls.instagramShareUrl}
        target="_blank"
        color="instagram"
        sx={{ flex: 1, mx: 1, p: 2 }}
    >
        <i className="fab fa-instagram" />
        &nbsp;Compartir en Instagram
    </MKSocialButton>
</Grid>;
