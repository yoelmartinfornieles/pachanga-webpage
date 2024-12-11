import Card from "@mui/material/Card";

function StyledCard({ children }) {
    return (
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
            {children}
        </Card>
    );
}

export default StyledCard;
