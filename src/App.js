import { useEffect, useState } from "react";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import { Footer, Navbar } from "shared/sections"; // Adjust the import path as necessary
import { Purchase, Presentation, PachangaIVMainEvent } from "layouts/pages";
import routes from "routes";

export default function App() {
    const { pathname } = useLocation();
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        // Close the navbar when the route changes
        setNavbarOpen(false);
        // Scroll to the top of the page
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [pathname]);

    const getRoutes = (allRoutes) =>
        allRoutes.map((route) => {
            if (route.collapse) {
                return getRoutes(route.collapse);
            }

            if (route.route) {
                return (
                    <Route
                        exact
                        path={route.route}
                        element={route.component}
                        key={route.key}
                    />
                );
            }

            return null;
        });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <MKBox
                width="100%"
                sx={{
                    backgroundColor: "#272B2E",
                    minHeight: "100vh",
                }}
            >
                <Navbar
                    key={pathname} // This will remount the Navbar on route change
                    routes={routes}
                    action={{
                        type: "internal",
                        route: "/purchase",
                        label: "comprar entradas",
                        color: "info",
                    }}
                    sticky
                    open={navbarOpen}
                    onToggle={() => setNavbarOpen(!navbarOpen)}
                />
                <Routes>
                    {getRoutes(routes)}
                    <Route path="/presentation" element={<Presentation />} />
                    <Route
                        path="/pachangaIV/main-event"
                        element={<PachangaIVMainEvent />}
                    />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="*" element={<Navigate to="/presentation" />} />
                </Routes>
                <Footer />
            </MKBox>
        </ThemeProvider>
    );
}
