import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function scrollToElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    } else {
        console.log("Element not found for ID:", elementId);
    }
}

export function useHashScroll() {
    const location = useLocation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            requestAnimationFrame(() => scrollToElementById(hash.substring(1)));
        }
    }, [location]);

    useEffect(() => {
        const initialHash = window.location.hash;
        if (initialHash) {
            scrollToElementById(initialHash.substring(1));
        }
    }, []);
}
