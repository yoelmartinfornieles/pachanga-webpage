// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function RotatingCardFront({ color, image, icon, title, description }) {
    return (
        <MKBox
            display="flex"
            justifyContent="center"
            alignContent="center"
            borderRadius="lg"
            coloredShadow={color}
            width="100%"
            position="relative"
            zIndex={2}
            sx={{
                backgroundImage: ({
                    palette: { gradients },
                    functions: { linearGradient, rgba },
                }) =>
                    `${linearGradient(
                        rgba(
                            gradients[color]
                                ? gradients[color].main
                                : gradients.info.main,
                            0
                        ),
                        rgba(
                            gradients[color]
                                ? gradients[color].main
                                : gradients.info.main,
                            0
                        )
                    )}, url(${image})`,
                backgroundSize: "cover",
                backfaceVisibility: "hidden",
            }}
        >
            {/* Overlay for better text readability */}
            <MKBox
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bgcolor="rgba(0, 0, 0, 0.7)" // Increased opacity to 70%
                borderRadius="lg"
                zIndex={1} // Place it below the text
            />
            <MKBox py={12} px={3} textAlign="center" lineHeight={1} zIndex={2}>
                {icon && (
                    <MKTypography
                        variant="h2"
                        color="white"
                        my={2}
                        sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
                    </MKTypography>
                )}
                <div>
                    <MKTypography
                        variant="h3"
                        color="white"
                        gutterBottom
                        sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                    >
                        {title}
                    </MKTypography>
                </div>
                <MKTypography
                    variant="body2"
                    color="white"
                    opacity={0.9}
                    sx={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)" }}
                >
                    {description}
                </MKTypography>
            </MKBox>
        </MKBox>
    );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
    color: "info",
    icon: "",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
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
    image: PropTypes.string.isRequired,
    icon: PropTypes.node,
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
};

export default RotatingCardFront;
