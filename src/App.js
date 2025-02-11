import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import MKBox from "components/MKBox";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import { Footer, Navbar } from "./sections";
import {
    PurchasePage,
    PurchaseSuccessPage,
    PresentationPage,
    TermsAndConditionsPage,
    DataProtectionPolicyPage,
    AboutUsPage,
    CopyrightAndImagesPage,
} from "layouts/pages";
import routes from "routes";

export default function App() {
    const { pathname } = useLocation();
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        setNavbarOpen(false);
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
            <Helmet>
                <title>Pachanga Tournament</title>
                <meta
                    name="description"
                    content="A Magic: The Gathering tournament in the Canary Islands."
                />
                <meta
                    name="keywords"
                    content="Magic, Tournament, Canary Islands, Pachanga"
                />
                <link rel="canonical" href="https://pachangatournament.com" />
            </Helmet>
            <MKBox
                width="100%"
                sx={{
                    backgroundColor: "#272B2E",
                    minHeight: "100vh",
                }}
            >
                <Navbar
                    key={pathname}
                    routes={routes}
                    action={{
                        type: "internal",
                        route: "/purchase",
                        label: "comprar entradas",
                        color: "warning",
                    }}
                    sticky
                    open={navbarOpen}
                    onToggle={() => setNavbarOpen(!navbarOpen)}
                />
                <Routes>
                    {getRoutes(routes)}
                    <Route
                        path="/presentation"
                        element={<PresentationPage />}
                    />
                    <Route path="/purchase" element={<PurchasePage />} />
                    <Route
                        path="/purchase-success"
                        element={<PurchaseSuccessPage />}
                    />
                    <Route
                        path="/data-protection-policy"
                        element={<DataProtectionPolicyPage />}
                    />{" "}
                    <Route
                        path="/terms-and-conditions"
                        element={<TermsAndConditionsPage />}
                    />{" "}
                    <Route
                        path="/copyright-and-images"
                        element={<CopyrightAndImagesPage />}
                    />{" "}
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="*" element={<Navigate to="/presentation" />} />
                </Routes>
                <Footer />
            </MKBox>
        </ThemeProvider>
    );
}
