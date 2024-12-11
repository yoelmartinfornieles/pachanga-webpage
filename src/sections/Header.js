import React from "react";
import PropTypes from "prop-types";
import MKBox from "components/MKBox";
import Typography from "@mui/material/Typography";

function Header({ fontFamily, title, image }) {
    return (
        <MKBox
            sx={{
                minHeight: { xs: "25rem", md: "35rem" },
                width: "100%",
                backgroundImage: ({
                    functions: { linearGradient, rgba },
                    palette: { gradients },
                }) =>
                    `${linearGradient(
                        rgba(gradients.dark.main, 0.0),
                        rgba(gradients.dark.state, 0.0)
                    )}, url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                display: "grid",
                placeItems: "center",
            }}
        >
            <Typography
                variant="h1"
                color="white.main"
                sx={{
                    textShadow: "2px 2px 4px black",
                    textAlign: "center",
                    maxWidth: "90%",
                    width: "100%",
                    textJustify: "inter-word",
                    padding: "1rem",
                    fontSize: {
                        xs: "3rem",
                        sm: "4rem",
                        md: "5rem",
                    },
                    fontFamily: fontFamily,
                }}
            >
                {title}
            </Typography>
        </MKBox>
    );
}

Header.defaultProps = {
    fontFamily: "'Roboto'",
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Header;
