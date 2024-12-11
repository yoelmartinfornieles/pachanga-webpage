import { Container, Grid, Divider } from "@mui/material";
import { MKBox } from "components";
import { DefaultCounterCard } from "components";

function Counters() {
    return (
        <MKBox component="section" py={3}>
            <Container>
                <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
                    <Grid item xs={12} md={4}>
                        <DefaultCounterCard
                            color="warning"
                            count={110}
                            suffix="+"
                            title="Jugadores"
                            description="Desde casuals a profesionales, pasando por streamers y commanderos, está to pagao, Diego"
                        />
                    </Grid>
                    <Grid item xs={12} md={4} display="flex">
                        <Divider
                            orientation="vertical"
                            sx={{ display: { xs: "none", md: "block" }, mx: 0 }}
                        />
                        <DefaultCounterCard
                            color="warning"
                            count={3}
                            title="Días de torneo"
                            description="Desde el viernes hasta el domingo, con diferentes paralelos y eventos, un no parar de partidas"
                        />
                        <Divider
                            orientation="vertical"
                            sx={{ display: { xs: "none", md: "block" }, ml: 0 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <DefaultCounterCard
                            color="warning"
                            count={8}
                            suffix="+"
                            title="Actividades Paralelas"
                            description="Ilustradores, firmas, tiendas invitadas, streamers... y sorpresas sorpresas sorpresas hasta el final"
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Counters;
