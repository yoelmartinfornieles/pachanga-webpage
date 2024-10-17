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
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function CenteredCard({
    image,
    title,
    description,
    color,
    action,
    opacity = 1,
}) {
    return (
        <Card
            sx={{
                backgroundColor: (theme) => {
                    const { palette, functions } = theme;
                    const baseColor =
                        typeof color === "string" && theme.palette[color]
                            ? palette[color].main
                            : color.main;
                    return functions.rgba(baseColor, opacity);
                },
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
                <MKBox
                    component="img"
                    src={image}
                    alt={title}
                    borderRadius="lg"
                    width="100%"
                    position="relative"
                    zIndex={1}
                />
                <MKBox
                    borderRadius="lg"
                    shadow="md"
                    width="100%"
                    height="100%"
                    position="absolute"
                    left={0}
                    top={0}
                    sx={{
                        backgroundImage: `url(${image})`,
                        transform: "scale(0.94)",
                        filter: "blur(12px)",
                        backgroundSize: "cover",
                    }}
                />
            </MKBox>
            <MKBox p={3} mt={-1} textAlign="center">
                <MKTypography
                    display="inline"
                    variant="h5"
                    textTransform="capitalize"
                    fontWeight="regular"
                >
                    {title}
                </MKTypography>
                <MKBox mt={1} mb={3}>
                    <MKTypography variant="body2" component="p" color="text">
                        {description}
                    </MKTypography>
                </MKBox>
                {action &&
                    (action.type === "external" ? (
                        <MKButton
                            component={MuiLink}
                            href={action.route}
                            target="_blank"
                            rel="noreferrer"
                            variant="gradient"
                            size="small"
                            color={action.color ? action.color : "dark"}
                        >
                            {action.label}
                        </MKButton>
                    ) : (
                        <MKButton
                            component={Link}
                            to={action.route}
                            variant="gradient"
                            size="small"
                            color={action.color ? action.color : "dark"}
                        >
                            {action.label}
                        </MKButton>
                    ))}
            </MKBox>
        </Card>
    );
}

CenteredCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.oneOfType([
        PropTypes.string, // Allow string for palette colors
        PropTypes.shape({
            main: PropTypes.string.isRequired,
        }),
    ]).isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]),
        route: PropTypes.string,
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
        label: PropTypes.string,
    }),
    opacity: PropTypes.number, // New prop for opacity
};

export default CenteredCard;
