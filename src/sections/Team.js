import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import HorizontalTeamCard from "../components/HorizontalTeamCard";
import {
    FONT_SIZE_DESKTOP_HEADING,
    FONT_SIZE_DESKTOP_BODY,
    FONT_SIZE_MOBILE_HEADING,
    FONT_SIZE_MOBILE_BODY,
} from "shared";

function Team({
    title,
    description,
    teamMembers,
    backgroundColor1,
    backgroundColor2,
    opacity1 = 0.8,
    opacity2 = 0.1,
    gradient1 = 1,
    gradient2 = 75,
    gradientAngle = 185,
}) {
    const theme = useTheme();
    const color1 = theme.palette[backgroundColor1]
        ? theme.palette[backgroundColor1].main
        : backgroundColor1;
    const color2 = theme.palette[backgroundColor2]
        ? theme.palette[backgroundColor2].main
        : backgroundColor2;

    return (
        <MKBox
            component="section"
            position="relative"
            py={6}
            px={{ xs: 2, lg: 0 }}
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
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                        <MKTypography
                            variant="h3"
                            color="white"
                            sx={{
                                fontSize: {
                                    xs: FONT_SIZE_MOBILE_HEADING,
                                    md: FONT_SIZE_DESKTOP_HEADING,
                                },
                            }}
                        >
                            {title}
                        </MKTypography>
                        <MKTypography
                            variant="body2"
                            color="white"
                            opacity={0.8}
                            sx={{
                                fontSize: {
                                    xs: FONT_SIZE_MOBILE_BODY,
                                    md: FONT_SIZE_DESKTOP_BODY,
                                },
                            }}
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
