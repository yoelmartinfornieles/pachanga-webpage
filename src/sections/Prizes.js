import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import { InfoCard, CenteredCard } from "../components";
import MKTypography from "components/MKTypography";

const prizesImage = require("assets/images/city-profile.jpg");

function Prizes({ prizes }) {
    return (
        <MKBox
            component="section"
            py={12}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
            mt={-15}
        >
            <MKBox
                component="section"
                position="relative"
                py={6}
                px={{ xs: 2, lg: 0 }}
                mx={-4}
            >
                <Container>
                    <Grid container>
                        <Grid item></Grid>
                        <Grid container justifyContent="flex-end">
                            <MKTypography
                                variant="h3"
                                color="white"
                                textAlign="right"
                            >
                                Premios
                            </MKTypography>
                        </Grid>
                    </Grid>
                </Container>
            </MKBox>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={6}>
                        <Grid container justifyContent="flex-start">
                            {prizes.map((prize, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <MKBox mb={5}>
                                        <InfoCard
                                            icon={prize.icon}
                                            title={prize.name}
                                            description={prize.description}
                                        />
                                    </MKBox>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        lg={4}
                        sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}
                    >
                        <CenteredCard
                            title="¡Conviertete en el campeón!"
                            description="No es fácil ser el mejor. Y menos en el Pachanga, donde las distracciones y el entretenimiento nos tientan a todas horas. ¿Serás tú el que se mantenga firme y se alce con la victoria en esta edición?"
                            image={prizesImage}
                            color="black"
                            opacity="0"
                        />
                    </Grid>
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Prizes;
