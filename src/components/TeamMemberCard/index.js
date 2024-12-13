import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Card, Button, CardContent } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import XIcon from "@mui/icons-material/X";
import {
    faFacebook,
    faYoutube,
    faTwitch,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Import LinkedIn icon from Material UI
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

const ICON_SIZE = "2x";
const ICON_COLOR = "primary";

const GlowButton = styled(Button)(({ theme, color }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "scale(1.1)",
        boxShadow: `0 0 10px ${theme.palette[color].main}`,
    },
    borderRadius: "50%",
    overflow: "hidden",
}));

const SocialMediaIcon = ({ platform, url, color }) => {
    const icons = {
        Twitch: faTwitch,
        YouTube: faYoutube,
        X: XIcon,
        Facebook: faFacebook,
        Instagram: faInstagram,
        Linkedin: LinkedInIcon,
    };

    const IconComponent =
        platform === "X"
            ? XIcon
            : platform === "Linkedin"
            ? LinkedInIcon
            : FontAwesomeIcon;
    const iconProps =
        platform === "X" || platform === "Linkedin"
            ? { fontSize: "large" }
            : { icon: icons[platform], size: ICON_SIZE, color: ICON_COLOR };

    return (
        <GlowButton
            color={color}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                marginRight: { xs: "8px", md: "0" },
                marginBottom: { md: "8px" },
                width: { xs: "40px", sm: "50px", md: "60px" },
                height: { xs: "40px", sm: "50px", md: "60px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <IconComponent {...iconProps} />
        </GlowButton>
    );
};

const TeamMemberCard = ({ teamMember, color, glow = true }) => {
    const { name, image, description, links, work } = teamMember;
    const theme = useTheme();

    return (
        <Card
            sx={{
                width: "100%",
                margin: { xs: "8px 0", md: "16px 0" },
                background: `linear-gradient(210deg, ${theme.palette["black"].main} 80%, ${theme.palette[color].main} 180%)`,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                borderRadius: "16px",
                position: "relative",
                overflow: "visible",
                boxShadow: glow
                    ? `0 0 10px ${theme.palette[color].main}`
                    : "none",
                marginBottom: { xs: "2rem", md: "200px" },
            }}
        >
            <MKBox
                component="img"
                src={image}
                alt={name}
                sx={{
                    width: { xs: "100%", sm: "150px", md: "250px" },
                    height: { xs: "200px", sm: "150px", md: "250px" },
                    objectFit: "cover",
                    objectPosition: "top",
                    position: { xs: "relative", md: "absolute" },
                    top: { xs: "0", md: "-150px" },
                    left: { xs: "0", md: "50%" },
                    transform: { md: "translateX(-50%)" },
                    borderRadius: "16px",
                    boxShadow: {
                        xs: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        md: "0 4px 8px rgba(0, 0, 0, 0.2), 0 0 10px white",
                    },
                    marginBottom: { xs: "8px", md: "0" },
                }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: { xs: "8px", md: "20px" },
                    marginLeft: { xs: "0", md: "0" },
                    marginTop: { xs: "0", md: "100px" },
                    paddingBottom: { xs: "0", md: "100px" },
                }}
            >
                <MKBox sx={{ flex: 1, textAlign: "center" }}>
                    <MKTypography
                        variant="h2"
                        component="div"
                        sx={{
                            fontSize: { xs: "1.3rem", md: "2rem" },
                            textAlign: "center",
                            textShadow: `0 0 10px ${theme.palette[color].main}, 0 0 20px ${theme.palette[color].main}, 0 0 30px ${theme.palette[color].main}`,
                        }}
                        color="white"
                    >
                        {name}
                    </MKTypography>

                    <MKTypography
                        variant="body2"
                        sx={{
                            fontSize: { xs: "0.875rem", md: "1rem" },
                            fontWeight: "bold",
                            textAlign: "center",
                            marginTop: "8px",
                        }}
                        color={color}
                    >
                        {work}
                    </MKTypography>

                    <MKTypography
                        variant="body2"
                        color="text"
                        sx={{
                            marginTop: "8px",
                            fontSize: { xs: "0.875rem", md: "1rem" },
                            whiteSpace: "pre-line",
                            textAlign: "center",
                        }}
                    >
                        {description}
                    </MKTypography>
                </MKBox>
                <MKBox
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        marginTop: "16px",
                    }}
                >
                    {links.map((link) => (
                        <SocialMediaIcon
                            color={color}
                            key={link.platform}
                            platform={link.platform}
                            url={link.url}
                        />
                    ))}
                </MKBox>
            </CardContent>
        </Card>
    );
};

export default TeamMemberCard;
