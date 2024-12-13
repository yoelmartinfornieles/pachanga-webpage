import Card from "@mui/material/Card";

function StyledCard({ children, background }) {
    return (
        <Card
            sx={{
                p: 4,
                mx: { xs: 2, lg: 3 },
                mt: -5,
                mb: 4,
                position: "relative",
                overflow: "hidden",
                backgroundColor: background
                    ? "transparent"
                    : ({ palette: { black }, functions: { rgba } }) =>
                          rgba(black.main, 0.8),
                backdropFilter: "saturate(200%) blur(30px)",
                boxShadow: `0 20px 40px rgba(0, 0, 0, 0.3)`,
                borderRadius: "16px",
                display: "flex",
                flexDirection: "column",
                backgroundImage: background ? `url(${background})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                "&::before": background
                    ? {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
                          zIndex: 1,
                      }
                    : {},
                "& > *": {
                    position: "relative",
                    zIndex: 2,
                },
            }}
        >
            {children}
        </Card>
    );
}

export default StyledCard;
