/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

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
import Presentation from "layouts/pages/presentation";
import PachangaIV from "pages/PachangaIV/MainEvent"; // Import your other pages
import routes from "routes";

export default function App() {
    const { pathname } = useLocation();

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
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
                {" "}
                <Navbar
                    routes={routes}
                    action={{
                        type: "external",
                        route: "https://www.twitter.com",
                        label: "comprar tickets",
                        color: "info",
                    }}
                    sticky
                />
                <Routes>
                    {getRoutes(routes)}
                    <Route path="/presentation" element={<Presentation />} />
                    <Route path="/pachangaIV" element={<PachangaIV />} />{" "}
                    {/* Add your other routes here */}
                    <Route path="*" element={<Navigate to="/presentation" />} />
                </Routes>
                <Footer />
            </MKBox>
        </ThemeProvider>
    );
}
