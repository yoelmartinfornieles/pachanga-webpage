import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
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
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const hash = window.location.hash;
        console.log("Current hash:", hash); // Log the current hash
        if (hash) {
            requestAnimationFrame(() => {
                const element = document.getElementById(hash.substring(1)); // Remove the '#' from the hash
                console.log("Element found:", element); // Log the found element
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                } else {
                    console.log("Element not found for hash:", hash); // Log if the element is not found
                }
            });
        }
    }, [location]); // Add location as a dependency

    // Check for hash on initial mount
    useEffect(() => {
        const initialHash = window.location.hash;
        if (initialHash) {
            const element = document.getElementById(initialHash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []); // Run only on initial mount

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
                <Foundations id="foundations" foundations={event.foundations} />
                <div id="referee-team">
                    <Team // Ensure this ID matches the hash
                        title="Equipo de árbitros"
                        description="Porque este equipazo de árbitros lo tienes que conocer"
                        teamMembers={teamMembers}
                    />
                </div>
            </Card>
        </>
    );
}

export default MainEvent;
