import events from "./events.json";

export function getAllEvents() {
  return events;
}

export function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug);
}

export function getUpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((event) => {
      if (!event.date) return true;
      return new Date(`${event.date}T00:00:00`) >= today;
    })
    .sort((a, b) => {
      if (!a.date) return -1;
      if (!b.date) return 1;
      return new Date(b.date) - new Date(a.date);
    });
}

export function getPastEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return events
    .filter((event) => event.date && new Date(`${event.date}T00:00:00`) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
