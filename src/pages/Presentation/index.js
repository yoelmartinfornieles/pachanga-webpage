// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Presentation page sections
import {
    Banner,
    Counters,
    Information,
    Social,
} from "pages/Presentation/sections";

function Presentation() {
    return (
        <MKBox
            width="100%"
            sx={{
                backgroundColor: "#272B2E",
                minHeight: "100vh",
            }}
        >
            <Banner />
            <Container maxWidth="lg" sx={{ p: 0, m: 0, ml: 0 }}>
                <Card
                    sx={{
                        p: 0,
                        mx: { xs: 0, lg: 0 },
                        mt: -5,
                        mb: 0,
                        position: "relative",
                        zIndex: 2,
                        backgroundColor: ({
                            palette: { black },
                            functions: { rgba },
                        }) => rgba(black.main, 0.8),
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: ({ boxShadows: { xxl } }) => xxl,
                    }}
                >
                    <Counters sx={{ mt: 0, mb: 0, p: 0 }} />
                    <Information />
                    <Social />
                </Card>
            </Container>
        </MKBox>
    );
}

export default Presentation;
