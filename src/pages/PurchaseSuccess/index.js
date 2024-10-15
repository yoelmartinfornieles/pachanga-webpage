import Card from "@mui/material/Card";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import { Header } from "../../shared/sections";
import { Link } from "react-router-dom";
import { purchaseSuccessBanner } from "../../assets/images";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

// Styled component for the heading
const StyledHeading = styled(MKTypography)(({ theme }) => ({
    fontWeight: 700, // Bold font weight for the heading
    fontSize: "2rem", // Larger font size for emphasis
    color: theme.palette.white.main, // Use a color from the theme
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

    // Define entrance animation variants
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
                    boxShadow: `0 10px 30px ${theme.palette.black.main}, 0 4px 10px rgba(0, 0, 0, 0.2)`, // Increased shadow for depth
                    textAlign: "center",
                    borderRadius: "16px",
                }}
            >
                {/* Breathing Icon */}
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
                        repeat: 2, // Breathe 3 times
                        repeatType: "mirror",
                        delay: 4, // Start breathing effect after 4 seconds
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

                {/* Animated Heading */}
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <StyledHeading variant="h4" color="white" mt={2} mb={2}>
                        ¡Felicidades, estás un paso más cerca de disfrutar del
                        evento más jarto de MTG!
                    </StyledHeading>
                </motion.div>

                {/* Animated Body Text */}
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <MKTypography variant="body1" color="white" mb={2}>
                        ¡Gracias por tu compra! Verás un cargo en tu cuenta en
                        los próximos días.
                    </MKTypography>
                </motion.div>

                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <MKTypography variant="body1" color="white" mb={4}>
                        Hemos enviado también un email de confirmación a tu
                        dirección de correo electrónico. Si no lo encuentras,
                        asegúrate de que no haya caído en la carpeta de No
                        Deseados. Que nos conocemos.
                    </MKTypography>
                </motion.div>

                {/* Animated Button */}
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
                        color="info"
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
