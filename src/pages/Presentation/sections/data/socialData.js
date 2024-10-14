import events from "../../../../events";

const getTweetText = () => {
    const currentDate = new Date();
    const upcomingEvents = events.filter(
        (event) =>
            event.date !== null &&
            event.tweet !== null &&
            new Date(event.date) > currentDate
    );

    if (upcomingEvents.length === 0) {
        return "Todos los eventos han pasado. ¡Mantente atento para futuros eventos en www.pachangatournament.com! @pachangaTorneo";
    }

    const closestEvent = upcomingEvents.reduce((prev, curr) => {
        return new Date(curr.date) - currentDate <
            new Date(prev.date) - currentDate
            ? curr
            : prev;
    });

    return closestEvent.tweet;
};

const tweetText = getTweetText();
const socialUrls = {
    tweetUrl: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        tweetText
    )}`,
    facebookShareUrl: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        "https://www.pachangatournament.com"
    )}&quote=${encodeURIComponent(tweetText)}`,
    instagramShareUrl: `https://www.instagram.com/?url=${encodeURIComponent(
        "https://www.pachangatournament.com"
    )}`,
};

export default socialUrls;
