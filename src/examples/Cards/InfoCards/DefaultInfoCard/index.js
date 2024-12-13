import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function DefaultInfoCard({
    color,
    icon,
    title,
    description,
    direction,
    small,
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <MKBox
            lineHeight={1}
            p={isMobile || direction === "center" ? 2 : 0}
            textAlign={isMobile ? "center" : direction}
        >
            {typeof icon === "string" ? (
                <MKTypography
                    display="block"
                    variant={isMobile || direction === "center" ? "h2" : "h3"}
                    color={color}
                    textGradient
                >
                    <Icon>{icon}</Icon>
                </MKTypography>
            ) : (
                icon
            )}
            <div>
                <MKTypography
                    display="block"
                    variant="h5"
                    fontWeight="bold"
                    mt={isMobile || direction === "center" ? 1 : 2}
                    mb={1.5}
                >
                    {title}
                </MKTypography>
            </div>
            <MKTypography
                display="block"
                variant={small ? "button" : "body2"}
                color="text"
                pr={isMobile || direction === "left" ? 0 : 0}
                pl={isMobile || direction === "right" ? 0 : 0}
            >
                {description}
            </MKTypography>
        </MKBox>
    );
}

DefaultInfoCard.defaultProps = {
    color: "info",
    direction: "left",
    small: false,
};

DefaultInfoCard.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]),
    icon: PropTypes.node.isRequired,
    title: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    direction: PropTypes.oneOf(["left", "right", "center"]),
    small: PropTypes.bool,
};

export default DefaultInfoCard;
