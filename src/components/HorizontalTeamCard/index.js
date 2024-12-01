/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useTheme } from "@mui/material/styles"; // Import useTheme

function HorizontalTeamCard({
    image,
    name,
    position,
    description,
    gradient,
    children,
}) {
    const theme = useTheme(); // Get the theme

    // Set a default color if none is provided
    const defaultPosition = {
        color: "primary", // Default color
        label: "Member", // Default label
    };

    const currentPosition = position || defaultPosition; // Use provided position or default

    // Get the actual colors from the theme
    const color1 =
        gradient && theme.palette[gradient.color1]
            ? theme.palette[gradient.color1].main
            : "transparent";
    const color2 =
        gradient && theme.palette[gradient.color2]
            ? theme.palette[gradient.color2].main
            : "transparent";

    // Define gradient properties
    const gradientAngle = gradient ? gradient.angle : 0; // Default angle
    const gradient1 = gradient ? 80 : 100; // First color percentage
    const gradient2 = gradient ? 100 : 100; // Second color percentage
    const opacity1 = gradient ? 1 : 1; // Opacity for the first color
    const opacity2 = gradient ? 1 : 1; // Opacity for the second color

    return (
        <Card
            sx={{
                mt: 3,
                background: gradient
                    ? `linear-gradient(${gradientAngle}deg, ${theme.functions.rgba(
                          color1,
                          opacity1
                      )} ${gradient1}%, ${theme.functions.rgba(
                          color2,
                          opacity2
                      )} ${gradient2}%)`
                    : "transparent",
                borderRadius: "11px", // Optional: Add border radius for rounded corners
                height: "400px", // Set a fixed height for the card
            }}
        >
            <Grid
                container
                sx={(theme) => ({
                    my: "auto",
                    color: "white", // Optional: Set text color to white for contrast
                    p: 2, // Optional: Add padding for spacing
                })}
            >
                <Grid item xs={12} md={6} lg={3} sx={{ mt: -6 }}>
                    <MKBox width="100%" pt={2} pb={1} px={2}>
                        <MKBox
                            component="div"
                            sx={{
                                maxHeight: "50%", // Set maximum height to 75% of the card height
                                overflow: "hidden", // Hide overflow content
                                position: "relative", // Position relative for absolute child
                            }}
                        >
                            <MKBox
                                component="img"
                                src={image}
                                alt={name}
                                width="100%"
                                height="100%"
                                sx={{
                                    objectFit: "contain", // Ensure the image fits within the container
                                    transition: "transform 0.3s ease", // Smooth transition for zoom effect
                                    // Removed absolute positioning for better resizing
                                }}
                            />
                        </MKBox>
                    </MKBox>
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                    <MKBox
                        pt={{ xs: 1, lg: 2.5 }}
                        pb={2.5}
                        pr={4}
                        pl={{ xs: 4, lg: 1 }}
                        lineHeight={1}
                    >
                        <MKTypography variant="h5" color="text">
                            {name}
                        </MKTypography>
                        <MKTypography
                            variant="h6"
                            color={currentPosition.color} // Use the current position color
                            mb={1}
                        >
                            {currentPosition.label}
                        </MKTypography>
                        <MKTypography
                            variant="body2"
                            color="text"
                            sx={{ whiteSpace: "pre-wrap" }}
                        >
                            {description}
                        </MKTypography>
                        {children}
                    </MKBox>
                </Grid>
            </Grid>
        </Card>
    );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.shape({
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "light",
        ]),
        label: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    gradient: PropTypes.shape({
        angle: PropTypes.number.isRequired,
        color1: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "light",
        ]),
        color2: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "light",
        ]),
    }), // New prop for gradient
    children: PropTypes.node,
};

// Default props
HorizontalTeamCard.defaultProps = {
    position: {
        color: "primary", // Default color
        label: "Member", // Default label
    },
    gradient: null, // Default to no gradient
};

export default HorizontalTeamCard;
