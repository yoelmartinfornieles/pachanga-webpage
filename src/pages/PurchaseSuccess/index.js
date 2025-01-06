import React from "react";
import { Helmet } from "react-helmet";
import Card from "@mui/material/Card";
import { useTheme, styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MKButton, MKTypography } from "components";
import { Header } from "sections";
import { purchaseSuccessBanner } from "assets/images";
import {
    SUCCESS_TITLE,
    THANK_YOU_MESSAGE,
    EMAIL_CONFIRMATION_MESSAGE,
} from "./data/successMessages";
import {
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_MOBILE_BODY,
    FONT_SIZE_MOBILE_HEADING,
} from "shared";

const StyledHeading = styled(MKTypography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: FONT_SIZE_DESKTOP_HEADING,
    color: theme.palette.white.main,
    [theme.breakpoints.down("sm")]: {
        fontSize: FONT_SIZE_MOBILE_HEADING,
    },
}));

const StyledBodyText = styled(MKTypography)(({ theme }) => ({
    fontSize: FONT_SIZE_DESKTOP_BODY,
    [theme.breakpoints.down("sm")]: {
        fontSize: FONT_SIZE_MOBILE_BODY,
    },
}));

function PurchaseSuccess() {
    const theme = useTheme();

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "none",
        },
        visible: {
            pathLength: 1,
            fill: "none",
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <>
            <Helmet>
                <title>Compra Completada</title>
                <meta
                    name="description"
                    content="Tu compra se ha completado con éxito. Gracias por tu compra."
                />
                <meta
                    name="keywords"
                    content="Compra, Éxito, Confirmación, Tienda"
                />
            </Helmet>
            <Header title="Compra Completada" image={purchaseSuccessBanner} />
            <Card
                sx={{
                    p: 4,
                    mx: { xs: 2, lg: 3 },
                    mt: -5,
                    mb: 4,
                    backgroundColor: ({
                        palette: { black },
                        functions: { rgba },
                    }) => rgba(black.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: `0 10px 30px ${theme.palette.black.main}, 0 4px 10px rgba(0, 0, 0, 0.2)`,
                    textAlign: "center",
                    borderRadius: "16px",
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [1, 0.8, 1],
                        scale: [1, 1.05, 1],
                        boxShadow: [
                            `0 0 0px ${theme.palette.success.main}`,
                            `0 0 40px ${theme.palette.success.main}`,
                            `0 0 0px ${theme.palette.success.main}`,
                        ],
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: 2,
                        repeatType: "mirror",
                        delay: 4,
                    }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "150px",
                        height: "150px",
                        margin: "0 auto 24px",
                        borderRadius: "50%",
                    }}
                >
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke={theme.palette.success.main}
                            strokeWidth={2}
                            fill="none"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 4, ease: "easeInOut" },
                                fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                            }}
                        />
                        <motion.path
                            d="M30 50 L45 65 L70 35"
                            stroke={theme.palette.success.main}
                            strokeWidth={2}
                            fill="none"
                            variants={icon}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                default: { duration: 2, ease: "easeInOut" },
                                fill: { duration: 1, ease: [1, 0, 0.8, 1] },
                            }}
                        />
                    </motion.svg>
                </motion.div>

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <StyledHeading variant="h4" color="white" mt={2} mb={2}>
                        {SUCCESS_TITLE}
                    </StyledHeading>
                </motion.div>

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <StyledBodyText variant="body1" color="text" mb={2}>
                        {THANK_YOU_MESSAGE}
                    </StyledBodyText>
                </motion.div>

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <StyledBodyText variant="body1" color="text" mb={4}>
                        {EMAIL_CONFIRMATION_MESSAGE}
                    </StyledBodyText>
                </motion.div>

                <motion.div
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    <MKButton
                        component={Link}
                        to="/"
                        variant="contained"
                        color="warning"
                        sx={{ mt: 3 }}
                    >
                        Volver a la página principal
                    </MKButton>
                </motion.div>
            </Card>
        </>
    );
}

export default PurchaseSuccess;
