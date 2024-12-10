import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Card from "@mui/material/Card";
import {
    Tournament,
    Hotel,
    Foundations,
    Prizes,
    Team,
} from "../../../sections";
import { Header } from "../../../sections";
import events from "../../../events";

const event = events.find((event) => event.name === "Pachanga Tournament IV");

function MainEvent() {
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            requestAnimationFrame(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    }, [location]);

    useEffect(() => {
        const initialHash = window.location.hash;
        if (initialHash) {
            const element = document.getElementById(initialHash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

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
                <div id="tournament">
                    <Tournament
                        info={event.info}
                        poster={event.posters[0]}
                        backgroundColor1="black"
                        backgroundColor2="cerulean"
                        opacity1={0}
                        opacity2={0} /* {0.5} */
                        gradient1={98}
                        gradient2={100}
                        gradientAngle={180}
                    />
                </div>{" "}
                <div id="hotel">
                    <Hotel
                        hotel={event.hotel}
                        backgroundColor1="black"
                        backgroundColor2="cerulean"
                        opacity1={0}
                        opacity2={0} /* {0.5} */
                        gradient1={98}
                        gradient2={100}
                        gradientAngle={180}
                    />
                </div>
                <div id="foundations">
                    <Foundations
                        foundations={event.foundations}
                        backgroundColor1="black"
                        backgroundColor2="cerulean"
                        opacity1={0}
                        opacity2={0} /* {0.5} */
                        gradient1={98}
                        gradient2={100}
                        gradientAngle={180}
                    />
                </div>
                {/* {
                    <div id="referee-team">
                        <Team
                            title="Equipo de árbitros"
                            description="Porque este equipazo de árbitros lo tienes que conocer"
                            teamMembers={event.refereeTeam}
                            backgroundColor1="cerulean"
                            backgroundColor2="black"
                            opacity1={0.5}
                            opacity2={0}
                            gradient1={60}
                            gradient2={90}
                            gradientAngle={180}
                        />
                    </div>
                } */}
                <div id="prizes">
                    <Prizes prizes={event.prizes} />{" "}
                </div>
            </Card>
        </>
    );
}

export default MainEvent;
