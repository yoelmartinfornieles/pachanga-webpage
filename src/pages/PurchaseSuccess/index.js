import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Header } from "../../sections";
import { Link } from "react-router-dom";
import { purchaseSuccessBanner } from "../../assets/images";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

const StyledHeading = styled(MKTypography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "2rem",
    color: theme.palette.white.main,
}));

// Constants for text
const SUCCESS_TITLE =
    "¡Felicidades, estás un paso más cerca de disfrutar del evento más jarto de MTG!";
const THANK_YOU_MESSAGE =
    "¡Gracias por tu compra! Verás un cargo en tu cuenta en los próximos días.";
const EMAIL_CONFIRMATION_MESSAGE =
    "Enviaremos también un email de confirmación a tu dirección de correo electrónico. Si no lo encuentras, asegúrate de que no haya caído en la carpeta de No Deseados. Que nos conocemos. Y si no, siempre puedes contactar con nosotros y te lo volveremos a enviar.";

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
                    <MKTypography variant="body1" color="text" mb={2}>
                        {THANK_YOU_MESSAGE}
                    </MKTypography>
                </motion.div>

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <MKTypography variant="body1" color="text" mb={4}>
                        {EMAIL_CONFIRMATION_MESSAGE}
                    </MKTypography>
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
