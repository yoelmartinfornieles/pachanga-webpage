import Card from "@mui/material/Card";
import { Foundations, Team } from "../../../sections";
import { Header } from "../../../sections";
import events from "../../../events";

import kepaRefereePhoto from "../../../assets/images/bruce-mars.jpg";

const teamMembers = [
    {
        image: kepaRefereePhoto,
        name: "Kepa",
        position: { color: "info", label: "Head Judge" },
        description: "Le gustan los chuletunes mas que a un tonto un pirulí.",
    },
    {
        image: kepaRefereePhoto,
        name: "Kepa",
        position: { color: "info", label: "Head Judge" },
        description: "Le gustan los chuletunes mas que a un tonto un pirulí.",
    },
    {
        image: kepaRefereePhoto,
        name: "Kepa",
        position: { color: "info", label: "Head Judge" },
        description: "Le gustan los chuletunes mas que a un tonto un pirulí.",
    },
    {
        image: kepaRefereePhoto,
        name: "Kepa",
        position: { color: "info", label: "Head Judge" },
        description: "Le gustan los chuletunes mas que a un tonto un pirulí.",
    },
];

const event = events.find((event) => event.name === "Pachanga Tournament IV");

function MainEvent() {
    return (
        <>
            <Header
                fontFamily={event.fontFamily}
                title={event.name}
                image={event.image}
            />
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
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Foundations foundations={event.foundations} />
                <Team
                    id="referee-team"
                    title="Equipo de árbitros"
                    description="Porque este equipazo de árbitros lo tienes que conocer"
                    teamMembers={teamMembers}
                    sx={{ width: "100%" }}
                />
            </Card>
        </>
    );
}

export default MainEvent;
