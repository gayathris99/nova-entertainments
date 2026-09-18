import { Link } from "react-router-dom";

function EventCard({ event }) {
  const formattedDate = event.date
    ? new Date(event.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : event.dateLabel
      ? `${event.dateLabel}, To be announced`
      : "To be announced";

  return (
    <Link to={`/events/${event.slug}`} className="event-card">
      <div className="event-card-image">
        <img
          src={event.media.poster}
          alt={event.name}
        />

        <div className="event-card-image-date">
          {formattedDate}
        </div>
      </div>

      <div className="event-card-content">
        <div className="event-card-location">
          {event.venue.name} · {event.venue.city}
        </div>

        <div className="event-card-title-row">
          <h3>{event.name}</h3>

          <span className="event-card-arrow">
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
