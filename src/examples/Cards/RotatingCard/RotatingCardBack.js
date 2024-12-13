// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function RotatingCard({ color, image, title, description, action }) {
    return (
        <MKBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="lg"
            coloredShadow={color}
            position="absolute"
            width="100%"
            height="100%"
            top={0}
            left={0}
            zIndex={5}
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
                transform: "rotateY(180deg)",
            }}
        >
            <MKBox
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bgcolor="rgba(0, 0, 0, 0.7)"
                borderRadius="lg"
                zIndex={1}
            />
            <MKBox
                pt={12}
                pb={2}
                px={2}
                textAlign="center"
                lineHeight={1}
                zIndex={2}
            >
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
                {action && (
                    <MKBox width="50%" mt={4} mb={2} mx="auto">
                        {action.type === "external" ? (
                            <MKButton
                                component={MuiLink}
                                href={action.route}
                                target="_blank"
                                rel="noreferrer"
                                color="white"
                                size="small"
                                fullWidth
                            >
                                {action.label}
                            </MKButton>
                        ) : (
                            <MKButton
                                component={Link}
                                to={action.route}
                                color="error"
                                size="small"
                                fullWidth
                                variant="gradient"
                            >
                                {action.label}
                            </MKButton>
                        )}
                    </MKBox>
                )}
            </MKBox>
        </MKBox>
    );
}

// Setting default props for the RotatingCard
RotatingCard.defaultProps = {
    color: "primary",
};

// Typechecking props for the RotatingCard
RotatingCard.propTypes = {
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
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    action: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            type: PropTypes.oneOf(["external", "internal"]).isRequired,
            route: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ]).isRequired,
};

export default RotatingCard;
