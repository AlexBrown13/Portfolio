import { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
const { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } = import.meta.env;

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(PUBLIC_KEY, SERVICE_ID, formRef.current, TEMPLATE_ID).then(
      () => {
        console.log("Message sent successfully!");
        formRef.current.reset();
      },
      () => {
        console.log("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to send me a message. I’ll get back to you soon.</p>

      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />

        <textarea name="message" placeholder="Your Message" rows="5" required />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
