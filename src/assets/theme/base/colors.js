const themeColors = {
    background: {
        default: "#272B2E",
    },

    text: {
        main: "#7b809a",
        focus: "#7b809a",
    },

    transparent: {
        main: "transparent",
    },

    white: {
        main: "#ffffff",
        focus: "#ffffff",
    },

    black: {
        light: "#495057",
        main: "#1A1A1A",
        focus: "#000000",
    },

    primary: {
        main: "#325A64",
        focus: "#325A64",
    },

    secondary: {
        main: "#7b809a",
        focus: "#8f93a9",
    },

    info: {
        main: "#007096", // Cerulean color
        focus: "#005f7a", // Adjusted focus color for cerulean
    },

    success: {
        main: "#126D68", // Caribbean color
        focus: "#0E5B54", // Adjusted focus color
    },

    warning: {
        main: "#E18E04", // HarvestGold color
        focus: "#B37403", // Adjusted focus color for harvestGold
    },

    pachangaInfo: {
        main: "#007096", // Cerulean color
        focus: "#005f7a", // Adjusted focus color for cerulean
    },

    pachangaSuccess: {
        main: "#126D68", // Caribbean color
        focus: "#0E5B54", // Adjusted focus color
    },

    pachangaWarning: {
        main: "#E18E04", // HarvestGold color
        focus: "#B37403", // Adjusted focus color for harvestGold
    },

    pachangaError: {
        main: "#8C0027", // Burgundy color
        focus: "#6A001F", // Adjusted focus color
    },

    paradiseInfo: {
        main: "#B73D6E", // Raspberry color
        focus: "#241965", // Adjusted focus color for Raspberry
    },

    paradiseSuccess: {
        main: "#653993", // Rebecca color
        focus: "#B37403", // Adjusted focus color for Rebecca
    },

    paradiseWarning: {
        main: "#2ABA9E", // Keppel color
        focus: "#0E5B54", // Adjusted focus color for Keppel
    },

    paradiseError: {
        main: "#8C0027", // Melon color
        focus: "#6A001F", // Adjusted focus color
    },

    error: {
        main: "#8C0027", // Burgundy color
        focus: "#6A001F", // Adjusted focus color
    },

    light: {
        main: "#f0f2f5",
        focus: "#f0f2f5",
    },

    dark: {
        main: "#344767",
        focus: "#2c3c58",
    },

    grey: {
        100: "#f8f9fa",
        200: "#f0f2f5",
        300: "#dee2e6",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#6c757d",
        700: "#495057",
        800: "#343a40",
        900: "#212529",
    },

    webOrange: {
        main: "#FCB632",
    },
    syracuseRed: {
        main: "#DD4111",
    },
    burgundy: {
        main: "#8C0027", // Burgundy color
    },
    jungleGreen: {
        main: "#2BAF90",
    },
    celadon: {
        main: "#A1D4B1",
    },
    cerulean: {
        main: "#007096", // Cerulean color
    },
    lightOrange: {
        main: "#FBD0A6",
    },
    pumpkin: {
        main: "#F37022",
    },
    mikadoYellow: {
        main: "#FFC31B", // Mikado Yellow color
    },
    bone: {
        main: "#E7DCC9",
    },
    sunset: {
        main: "#FACA78", // Sunset color
    },
    goldenrod: {
        main: "#DAA520", // Goldenrod color
    },
    harvestGold: {
        main: "#E18E04", // HarvestGold color
    },
    orangePeel: {
        main: "#FD9A02",
    },
    verdigris: {
        main: "#1DB7B9",
    },
    caribbean: {
        main: "#126D68", // Caribbean color
    },
    darkSlateGrey: {
        main: "#325A64",
    },
    prussianBlue: {
        main: "#06394D",
    },

    gradients: {
        primary: {
            main: "#EC407A",
            state: "#D81B60",
        },

        secondary: {
            main: "#747b8a",
            state: "#495361",
        },

        info: {
            main: "#007096", // Adjusted gradient main color to match cerulean
            state: "#005f7a", // Adjusted state color to match focus color
        },

        success: {
            main: "#1DB7B9", // Adjusted gradient main color to match caribbean
            state: "#126D68", // Adjusted state color to caribbean
        },

        warning: {
            main: "#E18E04", // Adjusted gradient main color to match harvestGold
            state: "#B37403", // Adjusted state color to match focus color
        },

        error: {
            main: "#A52A2A", // Adjusted gradient main color to match burgundy
            state: "#8C0027", // Adjusted state color to burgundy
        },

        light: {
            main: "#EBEFF4",
            state: "#CED4DA",
        },

        dark: {
            main: "#42424a",
            state: "#191919",
        },
    },

    // Backup for success and info colors
    backupColors: {
        success: {
            main: "#126D68", // Backup main color for caribbean
            focus: "#0E5B54", // Backup focus color
            gradient: {
                main: "#1DB7B9", // Backup gradient main color
                state: "#126D68", // Backup state color
            },
            badge: {
                background: "#b2e0e0", // Adjusted badge background
                text: "#0A4B4B", // Adjusted badge text color
            },
            coloredShadow: "#1DB7B9", // Adjusted colored shadow
        },
        info: {
            main: "#007096", // Backup main color for cerulean
            focus: "#005f7a", // Backup focus color
            gradient: {
                main: "#007096", // Backup gradient main color
                state: "#005f7a", // Backup state color
            },
            badge: {
                background: "#A1D4E0", // Adjusted badge background for cerulean
                text: "#004d63", // Adjusted badge text color for cerulean
            },
            coloredShadow: "#007096", // Adjusted colored shadow for cerulean
        },
        error: {
            main: "#8C0027", // Backup main color for burgundy
            focus: "#6A001F", // Backup focus color
            gradient: {
                main: "#A52A2A", // Backup gradient main color
                state: "#8C0027", // Backup state color
            },
            badge: {
                background: "#fcd3d0", // Adjusted badge background for burgundy
                text: "#f61200", // Adjusted badge text color for burgundy
            },
            coloredShadow: "#6A001F", // Adjusted colored shadow for burgundy
        },
    },

    socialMediaColors: {
        facebook: {
            main: "#3b5998",
            dark: "#344e86",
        },

        twitter: {
            main: "#55acee",
            dark: "#3ea1ec",
        },

        instagram: {
            main: "#125688",
            dark: "#0e456d",
        },

        linkedin: {
            main: "#0077b5",
            dark: "#00669c",
        },

        pinterest: {
            main: "#cc2127",
            dark: "#b21d22",
        },

        youtube: {
            main: "#e52d27",
            dark: "#d41f1a",
        },

        vimeo: {
            main: "#1ab7ea",
            dark: "#13a3d2",
        },

        slack: {
            main: "#3aaf85",
            dark: "#329874",
        },

        dribbble: {
            main: "#ea4c89",
            dark: "#e73177",
        },

        github: {
            main: "#24292e",
            dark: "#171a1d",
        },

        reddit: {
            main: "#ff4500",
            dark: "#e03d00",
        },

        tumblr: {
            main: "#35465c",
            dark: "#2a3749",
        },
    },

    badgeColors: {
        primary: {
            background: "#f8b3ca",
            text: "#cc084b",
        },

        secondary: {
            background: "#d7d9e1",
            text: "#6c757d",
        },

        info: {
            background: "#A1D4E0", // Adjusted badge background for cerulean
            text: "#004d63", // Adjusted badge text color for cerulean
        },

        success: {
            background: "#b2e0e0", // Adjusted badge background for caribbean
            text: "#0A4B4B", // Adjusted badge text color for caribbean
        },

        error: {
            background: "#fcd3d0", // Adjusted badge background for burgundy
            text: "#f61200", // Adjusted badge text color for burgundy
        },

        warning: {
            background: "#F3C16B", // Adjusted badge background for harvestGold
            text: "#B37403", // Adjusted badge text color for harvestGold
        },

        light: {
            background: "#ffffff",
            text: "#c7d3de",
        },

        dark: {
            background: "#8097bf",
            text: "#1e2e4a",
        },
    },

    coloredShadows: {
        primary: "#e91e62",
        secondary: "#110e0e",
        info: "#007096", // Adjusted to match cerulean
        success: "#1DB7B9", // Adjusted to match caribbean
        error: "#6A001F", // Adjusted to match burgundy
        warning: "#E18E04", // Adjusted to match harvestGold
        light: "#adb5bd",
        dark: "#404040",
    },

    inputBorderColor: "#d2d6da",

    tabs: {
        indicator: { boxShadow: "#ddd" },
    },
};

export default themeColors;
