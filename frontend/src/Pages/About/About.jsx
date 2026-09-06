import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <main className="about-page">
      <Navbar />

      <section className="about-hero">
        <div className="about-label">02 / ABOUT Power-Drive</div>

        <h1>
          We don't build
          <br />
          <span>electric cars.</span>
          <br />
          We build movement.
        </h1>

        <p>
          Power-Drive exists for one simple reason:
          the future of driving should feel exciting,
          intelligent and completely human.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-title">
          <span>OUR PHILOSOPHY</span>
          <h2>Different by design.</h2>
        </div>

        <div className="about-story-content">
          <p>
            The automotive world spent more than a century
            perfecting the engine. We believe the next chapter
            should focus on everything around it.
          </p>

          <p>
            Every Power-Drive vehicle is imagined around the
            experience first — how it moves, how it responds,
            how quietly it becomes part of your everyday life.
          </p>

          <p>
            No unnecessary noise. No outdated thinking.
            Just technology, design and performance working
            together.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="value">
          <span>01</span>
          <h3>Intelligent</h3>
          <p>
            Technology that works with you instead of
            getting in your way.
          </p>
        </div>

        <div className="value">
          <span>02</span>
          <h3>Efficient</h3>
          <p>
            Every line, battery cell and system has a
            purpose.
          </p>
        </div>

        <div className="value">
          <span>03</span>
          <h3>Human</h3>
          <p>
            Because numbers are impressive, but the drive
            is what you remember.
          </p>
        </div>
      </section>

      <section className="about-vision">
        <div className="vision-content">
          <span>OUR VISION</span>

          <h2>
            Make electric
            <br />
            feel inevitable.
          </h2>

          <p>
            We're creating a future where choosing electric
            isn't about compromise. It's simply the better
            way to move.
          </p>

          <Link to="/explore" className="vision-link">
            Explore our vehicles →
          </Link>
        </div>
      </section>

      <footer className="about-footer">
        <span>Power-Drive</span>
        <p>Designed to disappear into the drive.</p>
      </footer>
    </main>
  );
};

export default About;