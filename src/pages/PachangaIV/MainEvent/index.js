import Card from "@mui/material/Card";
import { Foundations } from "../../../shared/sections";
import { Header } from "../../../shared/sections";
import events from "../../../events";

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
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -5,
                    mb: 4,
                    backgroundColor: ({
                        palette: { white, black },
                        functions: { rgba },
                    }) => rgba(black.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Foundations foundations={event.foundations} />
            </Card>
        </>
    );
}

export default MainEvent;
