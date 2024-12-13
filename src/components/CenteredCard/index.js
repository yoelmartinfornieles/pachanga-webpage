import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Carousel from "react-material-ui-carousel";
import { useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

function CenteredCard({
    image,
    title,
    description,
    color,
    action,
    opacity = 1,
}) {
    const theme = useTheme();
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
            <MKBox
                position="relative"
                borderRadius="lg"
                mx={2}
                mt={-3}
                sx={{
                    height: "300px",
                    overflow: "hidden",
                    paddingTop: "100%",
                }}
            >
                {Array.isArray(image) ? (
                    <Carousel
                        animation="fade"
                        duration={1000}
                        navButtonsAlwaysVisible={false}
                        indicators={false}
                        height="100%"
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            "& .MuiPaper-root": {
                                borderRadius: "xl",
                                overflow: "hidden",
                            },
                        }}
                    >
                        {image.map((item, index) => (
                            <Paper
                                key={index}
                                elevation={0}
                                sx={{ height: "100%", width: "100%" }}
                            >
                                <MKBox
                                    height="100%"
                                    width="100%"
                                    sx={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${item})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        paddingTop: "100px",
                                    }}
                                ></MKBox>
                            </Paper>
                        ))}
                    </Carousel>
                ) : (
                    <MKBox
                        component="img"
                        src={image}
                        alt={title}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />
                )}
            </MKBox>
            <MKBox p={3} mt={-1} textAlign="center">
                <div>
                    <MKTypography
                        display="inline"
                        variant="h5"
                        textTransform="capitalize"
                        fontWeight="regular"
                    >
                        {title}
                    </MKTypography>
                </div>
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
                            sx={{
                                backgroundColor:
                                    theme.palette[action.color]?.main ||
                                    theme.palette.dark.main,
                                color:
                                    theme.palette[action.color]?.contrastText ||
                                    theme.palette.dark.contrastText,
                            }}
                        >
                            {action.label}
                        </MKButton>
                    ) : (
                        <MKButton
                            component={Link}
                            to={action.route}
                            variant="gradient"
                            size="small"
                            sx={{
                                backgroundColor:
                                    theme.palette[action.color]?.main ||
                                    theme.palette.dark.main,
                                color:
                                    theme.palette[action.color]?.contrastText ||
                                    theme.palette.dark.contrastText,
                            }}
                        >
                            {action.label}
                        </MKButton>
                    ))}
            </MKBox>
        </Card>
    );
}

CenteredCard.propTypes = {
    image: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.arrayOf(PropTypes.string).isRequired,
    ]).isRequired,
    title: PropTypes.any.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.oneOfType([
        PropTypes.string,
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
    opacity: PropTypes.number,
};

export default CenteredCard;
