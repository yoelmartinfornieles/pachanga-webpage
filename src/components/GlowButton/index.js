import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const GlowButton = styled(Button)(({ theme, color }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "scale(1.3)",
        boxShadow: `0 0 30px ${theme.palette[color].main}`,
    },
    borderRadius: "50%",
    overflow: "hidden",
}));

export default GlowButton;
