import React from "react";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

export function StarIcon({ isHover, isLiked }) {
    const theme = useTheme();
    const fillColor = isLiked
        ? theme.palette.info.main
        : theme.palette.black.main;

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={fillColor}
            width="48px"
            height="48px"
            style={{
                filter: `grayscale(var(--button-star-greyscale)) contrast(var(--button-star-contrast))`,
            }}
        >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </motion.svg>
    );
}
