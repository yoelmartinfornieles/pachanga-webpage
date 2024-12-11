import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { FONT_SIZE_DESKTOP_BODY, FONT_SIZE_MOBILE_BODY } from "shared";

function DefaultNavbarDropdown({
    name,
    icon,
    children,
    collapseStatus,
    light,
    href,
    route,
    collapse,
    ...rest
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const linkComponent = {
        component: "a",
        href,
        target: "_blank",
        rel: "noreferrer",
    };

    const routeComponent = {
        component: Link,
        to: route,
    };

    return (
        <>
            <MKBox
                {...rest}
                mx={1}
                p={1}
                display="flex"
                alignItems="baseline"
                color={light ? "white" : "dark"}
                opacity={light ? 1 : 0.6}
                sx={{ cursor: "pointer", userSelect: "none" }}
                {...(route && routeComponent)}
                {...(href && linkComponent)}
            >
                <MKTypography
                    variant="body2"
                    lineHeight={1}
                    color="secondary"
                    sx={{
                        alignSelf: "center",
                        "& *": { verticalAlign: "middle" },
                        fontSize: isMobile
                            ? FONT_SIZE_MOBILE_BODY
                            : FONT_SIZE_DESKTOP_BODY,
                    }}
                >
                    {icon}
                </MKTypography>
                <MKTypography
                    variant="button"
                    fontWeight="regular"
                    textTransform="capitalize"
                    color="secondary"
                    sx={{
                        fontWeight: "100%",
                        ml: 1,
                        mr: 0.25,
                        fontSize: isMobile
                            ? FONT_SIZE_MOBILE_BODY
                            : FONT_SIZE_DESKTOP_BODY,
                    }}
                >
                    {name}
                </MKTypography>
                <MKTypography
                    variant="body2"
                    color={light ? "white" : "dark"}
                    ml="auto"
                    sx={{
                        fontSize: isMobile
                            ? FONT_SIZE_MOBILE_BODY
                            : FONT_SIZE_DESKTOP_BODY,
                    }}
                >
                    <Icon
                        sx={{
                            fontWeight: "normal",
                            verticalAlign: "middle",
                            fontSize: isMobile ? "15rem" : "inherit",
                            color: isMobile ? "white" : "inherit",
                        }}
                    >
                        {collapse && "keyboard_arrow_down"}
                    </Icon>
                </MKTypography>
            </MKBox>
            {children && (
                <Collapse
                    in={Boolean(collapseStatus)}
                    timeout={400}
                    unmountOnExit
                >
                    {children}
                </Collapse>
            )}
        </>
    );
}

DefaultNavbarDropdown.defaultProps = {
    children: false,
    collapseStatus: false,
    light: false,
    href: "",
    route: "",
};

DefaultNavbarDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    children: PropTypes.node,
    collapseStatus: PropTypes.bool,
    light: PropTypes.bool,
    href: PropTypes.string,
    route: PropTypes.string,
    collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
