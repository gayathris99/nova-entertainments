import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import { getEventBySlug } from "../data/events";

const TBA = "To be announced";

function formatDate(date, options, dateLabel) {
  if (!date) return dateLabel ? `${dateLabel}, ${TBA}` : TBA;
  const parsedDate = new Date(`${date}T12:00:00`);
  return Number.isNaN(parsedDate.getTime())
    ? TBA
    : parsedDate.toLocaleDateString("en-US", options);
}

export default function EventDetails() {
  const { slug } = useParams();
  const event = getEventBySlug(slug);

  if (!event) {
    return (
      <>
        <Navbar />
        <main className="not-found">
          <h1>Event not found.</h1>
          <Link to="/events">← BACK TO ALL EVENTS</Link>
          <ContactSection />
        </main>
        <Footer />
      </>
    );
  }

  const shortDate = formatDate(event.date, {
    month: "short",
    day: "numeric",
    year: "numeric",
  }, event.dateLabel);

  return (
    <>
      <Navbar />
      <main>
        <div className="back">
          <Link to="/events"><span>←</span> BACK TO ALL EVENTS</Link>
        </div>

        <section className="detail-hero">
          <div className="detail-copy">
            <div className="eyebrow">
              {event.category.toUpperCase()} · NOVA ENTERTAINMENTS
            </div>
            <h1 className="title">{event.name}</h1>
            <p className="intro">{event.description}</p>
            <div className="hero-meta">
              <div className="meta-item"><div className="meta-label">DATE</div><div className="meta-value">{shortDate}</div></div>
              <div className="meta-item"><div className="meta-label">TIME</div><div className="meta-value">{event.time || TBA}</div></div>
              <div className="meta-item"><div className="meta-label">VENUE</div><div className="meta-value">{event.venue.name || TBA}</div></div>
              <div className="meta-item"><div className="meta-label">LOCATION</div><div className="meta-value">{event.venue.city || TBA}</div></div>
            </div>
            {event.bookingUrl ? (
              <a className="booking detail-booking" href={event.bookingUrl} target="_blank" rel="noreferrer">
                BOOK NOW <span>↗</span>
              </a>
            ) : (
              <button className="booking detail-booking" type="button" disabled>
                BOOK NOW <span>↗</span>
              </button>
            )}
          </div>
          <div className="detail-media">
            <img src={event.media.poster} alt={event.name} />
            <div className="media-label">{shortDate}</div>
          </div>
        </section>

        {event.media.video && <section className="video">
          <div className="video-head">
            <div>
              <div className="section-kicker">THE NOVA EXPERIENCE</div>
              <h2>See the night<br /><em>come alive.</em></h2>
            </div>
            <p>A glimpse of what&apos;s in store.</p>
          </div>
          <div className="video-frame"><video controls poster={event.media.poster} src={event.media.video} /></div>
        </section>}

        <section className="details">
          <div>
            <div className="detail-kicker">SAVE YOUR PLACE</div>
            <h2 className="detail-heading">Be there<br />when it happens.</h2>
          </div>
          <div>
            <p className="detail-copy">
              Booking details will be announced soon. Check back here for ticket
              and registration information.
            </p>
            {event.bookingUrl ? (
              <a className="booking" href={event.bookingUrl} target="_blank" rel="noreferrer">
                BOOK THE EVENT <span>↗</span>
              </a>
            ) : (
              <button className="booking" type="button" disabled>
                BOOK THE EVENT <span>↗</span>
              </button>
            )}
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
