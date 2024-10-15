import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

function TransparentCard({ image, title, price, description, link, action }) {
    const cardActionStyles = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
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
        <MKBox
            position="relative"
            borderRadius="lg"
            sx={{ height: "auto", width: "100%", overflow: "hidden" }}
        >
            <MKBox
                component="img"
                src={image}
                alt={title}
                borderRadius="lg"
                shadow="md"
                width="100%"
                height="auto"
                position="relative"
                zIndex={1}
                sx={{ objectFit: "cover" }}
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
                    transform: "scale(0.75)",
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
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                overflow: "hidden",
                height: "auto",
                width: "100%",
                maxWidth: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                transform: "scale(1.05)",
                transition: "transform 0.3s, box-shadow 0.3s, filter 0.3s",
                "&:hover": {
                    boxShadow: "0 6px 30px rgba(0, 0, 0, 0.3)",
                    filter: "brightness(1.2) saturate(1.5)",
                    color: "info.main",
                },
            }}
        >
            {action === "internal" ? (
                <Link to={link}>{imageTemplate}</Link>
            ) : (
                <MuiLink href={link || "#"} target="_blank" rel="noreferrer">
                    {imageTemplate}
                </MuiLink>
            )}
            <MKBox
                pt={2}
                pb={3}
                px={2}
                sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <MKBox
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "2em",
                        overflow: "hidden",
                        width: "100%",
                    }}
                >
                    <MuiLink
                        href={link || "#"}
                        target="_blank"
                        rel="noreferrer"
                        sx={cardActionStyles}
                    >
                        <MKTypography
                            variant="h3"
                            gutterBottom
                            sx={{
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                width: "100%",
                            }}
                            color="info"
                        >
                            {title}
                        </MKTypography>
                    </MuiLink>
                </MKBox>
                <MKTypography variant="body2" component="p" color="text" mb={0}>
                    {price}€
                </MKTypography>
                <MKBox
                    sx={{
                        height: "4em",
                        overflow: "hidden",
                        width: "100%",
                    }}
                >
                    <MKTypography
                        variant="body2"
                        component="span"
                        color="text"
                        mb={3}
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {description}
                    </MKTypography>
                </MKBox>
                <MKButton
                    component="a"
                    href={link || "#"}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    color="info"
                    size="medium"
                    sx={{ mt: 1, mb: 0, width: "100%" }}
                >
                    comprar
                </MKButton>
            </MKBox>
        </Card>
    );
}

TransparentCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
};

export default TransparentCard;
