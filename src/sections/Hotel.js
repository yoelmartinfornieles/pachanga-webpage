import React, { useState } from "react";
import {
    Container,
    Grid,
    useMediaQuery,
    Modal,
    Box,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { MKBox, MKTypography, HotelCard, MKButton } from "components";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

const LazyHotelCard = ({ hotel, color }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} style={{ width: "100%" }}>
            {inView && (
                <HotelCard
                    color={color}
                    name={hotel.name}
                    location={hotel.location}
                    description={hotel.description}
                    logo={hotel.logo}
                    webpage={hotel.webpage}
                    photos={hotel.photos}
                    position={hotel.position}
                    services={hotel.services}
                    links={hotel.links}
                />
            )}
        </div>
    );
};

const HotelPresentation = ({ name, intro, hotel, color, isMobile }) => {
    const headingFontSize = isMobile
        ? FONT_SIZE_MOBILE_HEADING
        : FONT_SIZE_DESKTOP_HEADING;
    const bodyFontSize = isMobile
        ? FONT_SIZE_MOBILE_BODY
        : FONT_SIZE_DESKTOP_BODY;
    const textAlign = isMobile ? "left" : "center";

    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <MKTypography
                        variant="h1"
                        color="white"
                        gutterBottom
                        sx={{
                            textAlign: "center",
                            fontSize: headingFontSize,
                        }}
                    >
                        El Hotel
                    </MKTypography>
                </Grid>
                <Grid item xs={12}>
                    <MKTypography
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        textAlign={textAlign}
                        sx={{
                            whiteSpace: "pre-line",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: bodyFontSize,
                            mb: 3,
                        }}
                    >
                        {intro}
                    </MKTypography>
                </Grid>
                <Grid item xs={12}>
                    <LazyHotelCard hotel={hotel} color={color} />
                </Grid>
            </Grid>
        </Container>
    );
};

const HotelOffer = ({
    offer,
    mainColor,
    secondaryColor,
    altColor,
    isMobile,
    eventName,
}) => {
    const {
        intro,
        code,
        activeDates,
        rooms,
        cancellationConditions,
        purchaseLink,
    } = offer;

    const headingFontSize = isMobile
        ? FONT_SIZE_MOBILE_HEADING
        : FONT_SIZE_DESKTOP_HEADING;
    const bodyFontSize = isMobile
        ? FONT_SIZE_MOBILE_BODY
        : FONT_SIZE_DESKTOP_BODY;
    const textAlign = isMobile ? "left" : "center";

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const isPachanga = eventName.toLowerCase().includes("pachanga");
    const isParadise = eventName.toLowerCase().includes("paradise");

    const bannerStyles = isPachanga
        ? {
              background:
                  "repeating-linear-gradient(45deg, black, black 10px, #FFD700 10px, #FFD700 20px)",
              color: "white",
              boxShadow: "0 0 0 3px black",
              textShadow: "2px 2px 4px black",
          }
        : isParadise
        ? {
              color: theme.palette[mainColor].main,
              textShadow: `0 0 5px ${theme.palette[mainColor].main}, 
                           0 0 10px ${theme.palette[mainColor].main}, 
                           0 0 15px ${theme.palette[mainColor].main}, 
                           0 0 20px ${theme.palette[mainColor].main}, 
                           0 0 25px ${theme.palette[mainColor].main}`,
              animation: "neon 1.5s ease-in-out infinite alternate",
              filter: "brightness(1.5)",
          }
        : {};

    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        position: "relative",
                        overflow: "visible",
                        height: "30px",
                    }}
                >
                    <MKTypography
                        variant="h1"
                        color="white"
                        gutterBottom
                        sx={{
                            textAlign: "center",
                            fontSize: headingFontSize,
                            padding: "5px 0",
                            width: "200vw",
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: isPachanga
                                ? "translate(-50%, -50%) rotate(-5deg)"
                                : "translate(-50%, -50%) rotate(5deg)",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            display: "flex",
                            ...bannerStyles,
                            "& > div": {
                                display: "inline-block",
                                whiteSpace: "nowrap",
                                animation: "marquee 300s linear infinite",
                            },
                        }}
                    >
                        <div>
                            - NOTICIAS FRESQUITAS - NOTICIAS FRESQUITAS -
                            NOTICIAS FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS -
                        </div>
                        <div>
                            - NOTICIAS FRESQUITAS - NOTICIAS FRESQUITAS -
                            NOTICIAS FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS
                        </div>
                    </MKTypography>
                </Grid>
                <Grid item xs={12}>
                    <MKTypography
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        textAlign={textAlign}
                        sx={{
                            whiteSpace: "pre-line",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: bodyFontSize,
                            mb: 0,
                            mt: isMobile ? 2 : 6,
                        }}
                    >
                        {intro}
                    </MKTypography>
                </Grid>

                <Grid item xs={12}>
                    {rooms.map((room, index) => (
                        <MKTypography
                            key={index}
                            variant="body1"
                            fontWeight="light"
                            color="text"
                            textAlign={textAlign}
                            sx={{
                                whiteSpace: "pre-line",
                                width: "100%",
                                maxWidth: "100%",
                                padding: 2,
                                margin: 0,
                                fontSize: bodyFontSize,
                                mb: 2,
                                mt: 0,
                                borderRadius: 2,
                                boxShadow: `0 0 10px 2px ${theme.palette[mainColor].main}`,
                            }}
                        >
                            <strong>{room.name}</strong>
                            {"\n"}
                            {room.description}
                            {"\n"}
                            <em>{room.price}</em>
                        </MKTypography>
                    ))}
                </Grid>

                <Grid item xs={12}>
                    <MKTypography
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        textAlign={textAlign}
                        sx={{
                            whiteSpace: "pre-line",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: bodyFontSize,
                            mb: 0,
                            mt: 0,
                        }}
                    >
                        Y ya tenemos el código de descuento también, pero shhh,
                        es un secreto.
                        <MKButton
                            onClick={handleOpen}
                            variant="text"
                            color="inherit"
                            sx={{
                                textTransform: "none",
                                padding: 0,
                                minWidth: "auto",
                                marginLeft: "1px",
                                lineHeight: 1,
                                fontSize: bodyFontSize,
                                fontWeight: "bold",
                                verticalAlign: "baseline",
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    textDecoration: "underline",
                                },
                                "&:focus, &:active": {
                                    color: theme.palette.primary.main,
                                },
                            }}
                        >
                            Si quieres verlo, pincha aquí.
                        </MKButton>
                    </MKTypography>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="discount-code-title"
                        aria-describedby="discount-code-description"
                        BackdropProps={{
                            style: {
                                backdropFilter: "blur(5px)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                bgcolor: theme.palette.black.main,
                                border: "2px solid #000",
                                boxShadow: 24,
                                p: 4,
                                borderRadius: 2,
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                id="discount-code-title"
                                variant="h4"
                                component="h2"
                                sx={{
                                    color: theme.palette.text.main,
                                    fontWeight: "bold",
                                }}
                            >
                                Código de Descuento
                            </Typography>
                            <Typography
                                id="discount-code-description"
                                sx={{
                                    mt: 2,
                                    color: theme.palette[secondaryColor].main,
                                    fontSize: "2rem",
                                    fontWeight: "bold",
                                }}
                            >
                                {code}
                            </Typography>
                        </Box>
                    </Modal>
                </Grid>
                <Grid item xs={12}>
                    <MKTypography
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        textAlign={textAlign}
                        sx={{
                            whiteSpace: "pre-line",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: bodyFontSize,
                            mb: 0,
                            mt: 0,
                        }}
                    >
                        Y si lo que quieres es teletransportarte a la página de
                        reserva a velocidad de instant y con el código ya
                        metido, ¡aquí lo tienes, campeón! ¡Dale gas!
                    </MKTypography>
                    <Grid container justifyContent="center">
                        <MKButton
                            onClick={() => window.open(purchaseLink, "_blank")}
                            variant="contained"
                            color="primary"
                            sx={{
                                textTransform: "none",
                                padding: "12px 24px",
                                marginTop: "16px",
                                width: "70%",
                                color: "white",
                                fontSize: "1.25rem",
                                boxShadow: `0 0 5px ${theme.palette[secondaryColor].main}`,
                                backgroundColor:
                                    theme.palette[secondaryColor].main,
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette[secondaryColor].main,
                                    boxShadow: `0 0 10px ${theme.palette[secondaryColor].main}`,
                                },
                                "&:focus, &:active": {
                                    backgroundColor:
                                        theme.palette[secondaryColor].main,
                                },
                            }}
                        >
                            RESERVA EL HOTEL AQUÍ
                        </MKButton>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <MKTypography
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        textAlign={textAlign}
                        sx={{
                            whiteSpace: "pre-line",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: bodyFontSize,
                            mb: 0,
                            mt: 0,
                        }}
                    >
                        {activeDates}
                    </MKTypography>
                    <MKTypography
                        variant="body1"
                        fontWeight="light"
                        color="text"
                        textAlign={textAlign}
                        sx={{
                            whiteSpace: "pre-line",
                            width: "100%",
                            maxWidth: "100%",
                            padding: 0,
                            margin: 0,
                            fontSize: bodyFontSize,
                            mb: 0,
                            mt: 0,
                        }}
                    >
                        {cancellationConditions}
                    </MKTypography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        position: "relative",
                        overflow: "visible",
                        height: "50px",
                        marginBottom: "50px",
                    }}
                >
                    <MKTypography
                        variant="h1"
                        color="white"
                        gutterBottom
                        sx={{
                            textAlign: "center",
                            fontSize: headingFontSize,
                            padding: "5px 0",
                            width: "200vw",
                            position: "absolute",
                            marginTop: "50px",

                            left: "50%",
                            top: "50%",
                            transform: isPachanga
                                ? "translate(-50%, -50%) rotate(-5deg)"
                                : "translate(-50%, -50%) rotate(5deg)",
                            whiteSpace: "nowrap",
                            zIndex: 1,
                            display: "flex",
                            ...bannerStyles,
                            "& > div": {
                                display: "inline-block",
                                whiteSpace: "nowrap",
                                animation: "marquee 300s linear infinite",
                            },
                        }}
                    >
                        <div>
                            NOTICIAS FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS -
                        </div>
                        <div>
                            NOTICIAS FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS - NOTICIAS FRESQUITAS - NOTICIAS
                            FRESQUITAS -
                        </div>
                    </MKTypography>
                </Grid>
            </Grid>
        </Container>
    );
};

const Hotel = ({
    event,
    backgroundColor1,
    backgroundColor2,
    opacity1 = 0.8,
    opacity2 = 0.1,
    gradient1 = 1,
    gradient2 = 75,
    gradientAngle = 185,
}) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const color1 = theme.palette[backgroundColor1]?.main || backgroundColor1;
    const color2 = theme.palette[backgroundColor2]?.main || backgroundColor2;

    const intro = `El ${event.name} se celebra en el hotel Vistaflor de Maspalomas, donde la experiencia es tan completa como un mazo de cinco colores. 
Lo mejor de todo es que, si te alojas con nosotros y aprovechas la oferta exclusiva para reservar podrás disfrutar del ambientazo del ${event.name} desde la mañana hasta que el sol se esconda, y quizás hasta altas horas de la madrugada. 
¿Cómo sino hubiese podido ocurrir el fastuoso 'Incidente culito blanco'? 
El código para realizar la reserva te lo enviaremos por correo, porque, ya sabes, el hotel no abre reservas hasta que el universo lo permita, y el universo dice que la prisa mata, amigo. 
¡Pero oye, si estás en un apuro y encuentras una oferta irresistible, no te detengas! ¡Ve por ella sin pensarlo dos veces! Nosotros estaremos aquí, apoyando tu decisión de reservar lo que mejor se adapte a tus necesidades. ¡Haz lo que te haga feliz!
¡Y además, con tu código pueden reservar tantos acompañantes como quieras, jueguen el torneo o no, tan importante es el gathering como el Magic, mi arma!`;

    const offer = event.hotel.offers[event.name];

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, md: 0 }}
            mx={-4}
            sx={{
                background: `linear-gradient(${gradientAngle}deg, ${theme.functions.rgba(
                    color1,
                    opacity1
                )} ${gradient1}%, ${theme.functions.rgba(
                    color2,
                    opacity2
                )} ${gradient2}%)`,
            }}
        >
            <HotelPresentation
                name={event.name}
                intro={intro}
                hotel={event.hotel}
                color={event.colors.warning}
                isMobile={isMobile}
            />
            {offer && (
                <HotelOffer
                    offer={offer}
                    mainColor={event.colors.warning}
                    secondaryColor={event.colors.success}
                    altColor={event.colors.info}
                    isMobile={isMobile}
                    backgroundColor={color1}
                    eventName={event.name}
                />
            )}
        </MKBox>
    );
};

export default Hotel;
