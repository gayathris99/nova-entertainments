export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-content">
        <h2 id="contact-heading">Contact us.</h2>

        <div className="contact-email-block">
          <div className="contact-eyebrow">MAIL US AT</div>
          <a className="contact-email-link" href="mailto:Entertainmentsnova@gmail.com">
            Entertainmentsnova@gmail.com
          </a>
        </div>

        <div className="contact-direct">
          <div className="contact-eyebrow">CALL US AT</div>
          <div className="contact-details">
            <a className="contact-person" href="tel:+17745191222">
              <strong>Srikar</strong>
              <span>+1 (774) 519-1222</span>
            </a>
            <a className="contact-person" href="tel:+12017250057">
              <strong>Bharat</strong>
              <span>+1 (201) 725-0057</span>
            </a>
            <a className="contact-person" href="tel:+19402978072">
              <strong>Akhil</strong>
              <span>+1 (940) 297-8072</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
