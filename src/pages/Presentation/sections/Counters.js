/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

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
                            description="Ilustradores, firmas, tiendas invitadas, streamers, cosplayers, partidas de rol, Pool Party, Dj... y sorpresas sorpresas sorpresas hasta el final"
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Counters;
