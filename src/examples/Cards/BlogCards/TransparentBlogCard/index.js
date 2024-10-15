// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function TransparentBlogCard({
    image,
    title,
    price,
    description,
    link,
    action,
}) {
    const cardActionStyles = {
        display: "flex",
        alignItems: "center",
        width: "max-content",
        "& .material-icons, .material-icons-round,": {
            transform: `translateX(2px)`,
            transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
        },
        "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
            {
                transform: `translateX(6px)`,
            },
    };

    const imageTemplate = (
        <MKBox position="relative" borderRadius="lg">
            <MKBox
                component="img"
                src={image}
                alt={title}
                borderRadius="lg"
                shadow="md"
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
    );

    return (
        <Card
            sx={{
                background: "transparent",
                boxShadow: "none",
                overflow: "visible",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                },
            }}
        >
            {action === "internal" ? (
                <Link to={link}>{imageTemplate}</Link>
            ) : (
                <MuiLink href={link} target="_blank" rel="noreferrer">
                    {imageTemplate}
                </MuiLink>
            )}
            <MKBox
                pt={2}
                pb={3}
                px={2} // Add horizontal padding
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <div>
                    {action === "internal" ? (
                        <Link to={link} sx={cardActionStyles}>
                            <MKTypography variant="h5" gutterBottom>
                                {title}
                            </MKTypography>
                        </Link>
                    ) : (
                        <MuiLink
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            sx={cardActionStyles}
                        >
                            <MKTypography variant="h5" gutterBottom>
                                {title}
                            </MKTypography>
                        </MuiLink>
                    )}
                    <MKTypography
                        variant="body2"
                        component="p"
                        color="text"
                        mb={0}
                    >
                        {price}€
                    </MKTypography>
                    <MKBox
                        sx={{
                            height: "7.8em", // Fixed height for description space
                            overflow: "hidden",
                        }}
                    >
                        <MKTypography
                            variant="body2"
                            component="p"
                            color="text"
                            mb={3}
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 5,
                                WebkitBoxOrient: "vertical",
                            }}
                        >
                            {description}
                        </MKTypography>
                    </MKBox>
                </div>
                <MKButton
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    color="info"
                    size="medium"
                >
                    comprar
                </MKButton>
            </MKBox>
        </Card>
    );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]),
        route: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        color: PropTypes.oneOf([
            "inherit",
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "light",
            "dark",
            "text",
        ]).isRequired,
    }).isRequired,
};

export default TransparentBlogCard;
