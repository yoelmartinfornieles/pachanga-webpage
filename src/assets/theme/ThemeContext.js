import React, { createContext, useState, useContext } from "react";
import { createTheme } from "@mui/material/styles";
import baseTheme from "assets/theme"; // Import your base theme

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const currentTheme = createTheme({
        ...baseTheme,
        palette: {
            ...baseTheme.palette,
            mode: isDarkMode ? "dark" : "light",
            ...(isDarkMode && {
                background: {
                    default: "#121212", // Dark background
                    paper: "#1D1D1D", // Dark paper
                },
                text: {
                    primary: "#FFFFFF", // Light text
                    secondary: "#B0BEC5", // Light secondary text
                },
            }),
        },
    });

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
