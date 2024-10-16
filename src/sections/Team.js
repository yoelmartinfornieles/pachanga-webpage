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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "../components/HorizontalTeamCard";

function Team({ title, description, teamMembers }) {
    return (
        <MKBox
            component="section"
            variant="gradient"
            bgColor="dark"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
        >
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                        <MKTypography variant="h3" color="white">
                            {title}
                        </MKTypography>
                        <MKTypography
                            variant="body2"
                            color="white"
                            opacity={0.8}
                        >
                            {description}
                        </MKTypography>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} lg={6} key={index}>
                            <MKBox mb={1}>
                                <HorizontalTeamCard
                                    image={member.image}
                                    name={member.name}
                                    position={{
                                        color: member.position.color,
                                        label: member.position.label,
                                    }}
                                    description={member.description}
                                />
                            </MKBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default Team;
