import { Grid } from "@mui/material";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import { TeamMemberCard } from "../components";

function TeamMembers({ members }) {
    return (
        <MKBox
            component="section"
            position="relative"
            paddingTop={{ xs: 3, md: 25 }}
            paddingBottom={{ xs: 3, md: -25 }}
            px={{ xs: 2, lg: 0 }}
            mx={-4}
        >
            <Container>
                <Grid container spacing={3} justifyContent="center">
                    {members.map((member) => (
                        <Grid item xs={12} key={member.id} sx={{ ml: 0 }}>
                            <div id={member.id}>
                                <TeamMemberCard
                                    teamMember={member}
                                    color="pumpkin"
                                />
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </MKBox>
    );
}

export default TeamMembers;
