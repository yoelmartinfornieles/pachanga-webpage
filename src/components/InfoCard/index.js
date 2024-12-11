/*
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
import React, { useState, useEffect } from "react";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function InfoCard({ color, icon, title, description, direction, small }) {
    const [textDirection, setTextDirection] = useState(direction);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setTextDirection("center");
            } else {
                setTextDirection(direction);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [direction]);

    return (
        <MKBox
            lineHeight={1}
            p={textDirection === "center" ? 2 : 0}
            textAlign={textDirection}
        >
            {typeof icon === "string" ? (
                <MKTypography
                    display="block"
                    variant={textDirection === "center" ? "h2" : "h3"}
                    color={color}
                    textGradient
                >
                    {" "}
                    <Icon>{icon}</Icon>{" "}
                </MKTypography>
            ) : (
                <MKTypography
                    display="block"
                    variant={textDirection === "center" ? "h2" : "h3"}
                    color={color}
                    textGradient
                >
                    {icon}{" "}
                </MKTypography>
            )}
            <MKTypography
                display="block"
                variant="5"
                fontWeight="bold"
                mt={textDirection === "center" ? 1 : 2}
                mb={1.5}
            >
                {title}
            </MKTypography>
            <MKTypography
                display="block"
                variant={small ? "button" : "body2"}
                color="text"
                pr={textDirection === "left" ? 6 : 0}
                pl={textDirection === "right" ? 6 : 0}
            >
                {description}
            </MKTypography>
        </MKBox>
    );
}

InfoCard.defaultProps = {
    color: "info",
    direction: "left",
    small: false,
};

InfoCard.propTypes = {
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

export default InfoCard;
