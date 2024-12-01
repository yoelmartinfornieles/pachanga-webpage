import React, { useState } from "react";
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

const StreamerCard = ({ name, photo, description, links, position }) => {
    const platformIcons = {
        Twitch: <FontAwesomeIcon icon={faTwitch} size="lg" color="primary" />,
        YouTube: <FontAwesomeIcon icon={faYoutube} size="lg" color="primary" />,
        X: <XIcon />,
        Facebook: (
            <FontAwesomeIcon icon={faFacebook} size="lg" color="primary" />
        ),
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Card
            sx={{
                width: "100%",
                margin: "16px 0",
                background: `linear-gradient(210deg, ${position.color} 80%, black 100%)`,
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
                    marginBottom: { xs: "0", md: "0" }, // Removed margin for mobile
                }}
            />
            <CardContent
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "space-between",
                    alignItems: { md: "center" },
                    paddingTop: { xs: "8px", md: "20px" }, // Reduced padding for mobile
                    marginLeft: { xs: "0", md: "250px" },
                }}
            >
                <MKBox sx={{ flex: 1 }}>
                    <MKTypography
                        variant="h3"
                        component="div"
                        sx={{ fontSize: { xs: "1.25rem", md: "2rem" } }}
                    >
                        {name}
                    </MKTypography>
                    <MKTypography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}
                    >
                        Streamer
                    </MKTypography>
                    <MKTypography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            marginTop: "8px",
                            fontSize: { xs: "0.75rem", md: "1rem" },
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
                    {links.map((link, index) => (
                        <Button
                            key={link.platform}
                            color="error"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                marginRight: { xs: "8px", md: "0" },
                                marginBottom: { md: "8px" },
                                transition:
                                    "transform 0.3s ease, box-shadow 0.3s ease",
                                transform:
                                    hoveredIndex === index
                                        ? "scale(2.3)"
                                        : "scale(2)",
                                boxShadow:
                                    hoveredIndex === index
                                        ? "0 0 30px rgba(255, 255, 255, 0.5)"
                                        : "none",
                                width: { xs: "40px", sm: "50px", md: "60px" },
                                height: { xs: "40px", sm: "50px", md: "60px" },
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {platformIcons[link.platform]}
                        </Button>
                    ))}
                </MKBox>
            </CardContent>
        </Card>
    );
};

export default StreamerCard;
