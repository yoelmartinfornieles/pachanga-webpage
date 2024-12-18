import React from "react";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { MKBox, MKTypography, HotelCard } from "components";
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
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs={12}>
                    <MKTypography
                        variant="h1"
                        color="white"
                        gutterBottom
                        sx={{
                            textAlign: "left",
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
                            mb: 0,
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
Lo mejor de todo es que, si te alojas con nosotros y aprovechas la oferta exclusiva para reservar (te la enviaremos por correo, porque, ya sabes, el hotel no abre reservas hasta que el universo lo permita, y el universo dice que la prisa mata, amigo) podrás disfrutar del ambientazo del ${event.name} desde la mañana hasta que el sol se esconda, y quizás hasta altas horas de la madrugada. 
¿Cómo sino hubiese podido ocurrir el fastuoso 'Incidente culito blanco'? 
¡Y además, tráete a todos los acompanantes que quieras, tan importante es el gathering como el Magic, mi arma!`;

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, md: 0 }}
            mx={-4}
            mt={-8}
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
        </MKBox>
    );
};

export default Hotel;
