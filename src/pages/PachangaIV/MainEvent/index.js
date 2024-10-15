import Card from "@mui/material/Card";
import { Foundations, Team } from "../../../sections";
import { Header } from "../../../sections";
import events from "../../../events";

const teamMembers = [
    {
        image: null,
        name: "Emma Roberts",
        position: { color: "info", label: "UI Designer" },
        description:
            "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    },
    {
        image: null,
        name: "Bruce Mars",
        position: { color: "info", label: "Web Developer" },
        description:
            "Web Developer with a passion for creating beautiful and functional websites.",
    },
    {
        image: null,
        name: "Ivana Square",
        position: { color: "info", label: "Graphic Designer" },
        description: "Graphic Designer who loves to create stunning visuals.",
    },
    {
        image: null,
        name: "John Doe",
        position: { color: "info", label: "Project Manager" },
        description: "Project Manager with a knack for keeping teams on track.",
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
                }}
            >
                <Foundations foundations={event.foundations} />
                <Team teamMembers={teamMembers} />
            </Card>
        </>
    );
}

export default MainEvent;
