import events from "../events";

export function findEventByName(name) {
    const event = events.find((event) => event.name === name);
    if (!event) {
        console.error("Event not found");
        return null;
    }
    return event;
}
