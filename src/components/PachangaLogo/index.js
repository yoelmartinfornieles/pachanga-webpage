import { Box } from "@mui/material";
import { pachangaGreyLogo } from "assets/images/logos";

function PachangaLogo() {
    return (
        <Box
            sx={{
                position: "absolute",
                top: -50,
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: "80px", sm: "100px", md: "150px", lg: "180px" },
                height: { xs: "80px", sm: "100px", md: "150px", lg: "180px" },
                overflow: "hidden",
                display: "inline-block",
            }}
        >
            <img
                src={pachangaGreyLogo}
                alt="pachanga logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
        </Box>
    );
}

export default PachangaLogo;
