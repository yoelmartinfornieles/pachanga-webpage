import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function scrollToElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        console.log("Scrolling to element with ID:", elementId);
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
            console.log("Hash changed:", hash);
            setTimeout(() => {
                requestAnimationFrame(() =>
                    scrollToElementById(hash.substring(1))
                );
            }, 100);
        }
    }, [location]);

    useEffect(() => {
        const initialHash = window.location.hash;
        if (initialHash) {
            console.log("Initial hash:", initialHash);
            setTimeout(() => {
                scrollToElementById(initialHash.substring(1));
            }, 100);
        }
    }, []);
}
