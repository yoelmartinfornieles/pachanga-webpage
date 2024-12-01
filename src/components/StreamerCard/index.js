import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Card, Button, CardContent } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import XIcon from "@mui/icons-material/X";
import {
    faFacebook,
    faYoutube,
    faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

const GlowButton = styled(Button)(({ theme }) => ({
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "scale(1.1)", // Slightly increase the size
        boxShadow: `0 0 10px ${theme.palette.error.main}`, // Smaller glow effect
    },
    borderRadius: "50%", // Make the button round to avoid square shape
    overflow: "hidden", // Ensure the icon fits well
}));

const StreamerCard = ({ name, photo, description, links, position }) => {
    const theme = useTheme();
    const platformIcons = {
        Twitch: <FontAwesomeIcon icon={faTwitch} size="2x" color="primary" />,
        YouTube: <FontAwesomeIcon icon={faYoutube} size="2x" color="primary" />,
        X: <XIcon fontSize="large" />,
        Facebook: (
            <FontAwesomeIcon icon={faFacebook} size="2x" color="primary" />
        ),
    };

    return (
        <Card
            sx={{
                width: "100%",
                margin: "16px 0",
                background: `linear-gradient(210deg, ${
                    theme.palette["black"].main
                } 80%, ${theme.palette[position.color].main} 100%)`,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                borderRadius: "16px",
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                position: "relative",
                overflow: "visible",
            }}
        >
            <MKBox
                component="img"
                src={photo}
                alt={name}
                sx={{
                    width: { xs: "100%", sm: "150px", md: "250px" },
                    height: { xs: "200px", sm: "150px", md: "250px" },
                    objectFit: "cover",
                    objectPosition: "top",
                    position: { xs: "relative", md: "absolute" },
                    top: { xs: "0", md: "-20px" },
                    left: { xs: "0", md: "-20px" },
                    borderRadius: "8px",
                    boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
                    marginBottom: { xs: "0", md: "0" },
                }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { md: "center" },
                    paddingTop: { xs: "8px", md: "20px" },
                    marginLeft: { xs: "0", md: "250px" },
                }}
            >
                <MKBox sx={{ flex: 1 }}>
                    <MKTypography
                        variant="h3"
                        component="div"
                        sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}
                        color="white"
                    >
                        {name}
                    </MKTypography>
                    <MKTypography
                        variant="body2"
                        sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}
                        color="error"
                    >
                        Streamer
                    </MKTypography>
                    <MKTypography
                        variant="body2"
                        color="text"
                        sx={{
                            marginTop: "8px",
                            fontSize: { xs: "0.75rem", md: "1rem" },
                            whiteSpace: "pre-line",
                        }}
                    >
                        {description}
                    </MKTypography>
                </MKBox>
                <MKBox
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "row", md: "column" },
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "16px",
                    }}
                >
                    {links.map((link) => (
                        <GlowButton
                            key={link.platform}
                            color="error"
                            href={link.url}
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
                            {platformIcons[link.platform]}
                        </GlowButton>
                    ))}
                </MKBox>
            </CardContent>
        </Card>
    );
};

export default StreamerCard;
