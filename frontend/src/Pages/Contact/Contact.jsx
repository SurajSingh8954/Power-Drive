import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setError(
        error.message ||
          "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <Navbar />

      <section className="contact-hero">
        <div className="contact-label">
          03 / CONTACT
        </div>

        <h1>
          Let's move
          <br />
          <span>forward.</span>
        </h1>

        <p>
          Have a question, want to know more about
          EV-olution, or simply want to talk electric
          cars? We'd love to hear from you.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-info">
          <span>GET IN TOUCH</span>

          <h2>
            Start a
            <br />
            conversation.
          </h2>

          <div className="contact-details">

            <div>
              <small>Email</small>

              <a href="mailto:hello@ev-olution.example">
                hello@ev-olution.example
              </a>
            </div>

            <div>
              <small>Location</small>

              <p>
                Dehradun, Uttarakhand, India
              </p>
            </div>

            <div>
              <small>Hours</small>

              <p>
                Monday — Friday / 9:00 — 18:00
              </p>
            </div>

          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              Your name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              Subject
            </label>

            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to know?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Sending..."
              : submitted
              ? "Message sent ✓"
              : "Send message →"}
          </button>

          {submitted && (
            <p className="success-message">
              Thanks! Your message has been received.
            </p>
          )}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

        </form>
      </section>

      <footer className="contact-footer">
        <span>EV-olution</span>

        <p>
          Designed to disappear into the drive.
        </p>
      </footer>
    </main>
  );
};

export default Contact;