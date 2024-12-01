import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Card from "@mui/material/Card";
import { Header } from "../../../sections";
import events from "../../../events";
import { Streamers } from "../../../sections";
import streamersData from "./data/streamersData";

const event = events.find((event) => event.name === "Pachanga Tournament IV");

function Stream() {
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
                <div id="streamers">
                    <Streamers
                        streamersData={streamersData}
                        backgroundColor1="black"
                        backgroundColor2="cerulean"
                        opacity1={0}
                        opacity2={0} /* {0.5} */
                        gradient1={98}
                        gradient2={100}
                        gradientAngle={180}
                    />
                </div>
            </Card>
        </>
    );
}

export default Stream;
