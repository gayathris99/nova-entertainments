import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import { getAllEvents } from "../data/events";
import ContactSection from "../components/ContactSection";

export default function Events() {
  const events = [...getAllEvents()].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Navbar />

      <main className="events-page">
        <section className="events-masthead">
          <div className="events-masthead-label">
            <span>THE NOVA CALENDAR</span>
          </div>

          <div className="events-masthead-main">
            <h1>All Events.</h1>

            <p>
              Explore everything Nova is bringing to life — from live music
              and karaoke nights to corporate gatherings, private
              celebrations, cultural events, festivals and more.
            </p>
          </div>
        </section>

        <section className="events-list-section">
          <div className="events-grid">
            {events.map((event, index) => (
              <EventCard
                key={event.slug}
                event={event}
                index={index}
              />
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

    </>
  );
}
