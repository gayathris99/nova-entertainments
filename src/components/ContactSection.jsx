export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-content">
        <h2 id="contact-heading">Contact us.</h2>

        <p>For enquiries and bookings, give us a call.</p>

        <a className="contact-number" href="tel:+17745191222">
          +1 774 519 1222 <span>↗</span>
        </a>
      </div>
    </section>
  );
}
