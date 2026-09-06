import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import "./Explore.css";

const vehicles = [
  {
    number: "01",
    name: "EV-01",
    type: "Urban Performance",
    range: "310 mi",
    acceleration: "4.2 sec",
    charging: "18 min",
  },
  {
    number: "02",
    name: "EV-X",
    type: "Long Range",
    range: "380 mi",
    acceleration: "3.8 sec",
    charging: "20 min",
  },
  {
    number: "03",
    name: "EV-R",
    type: "Performance",
    range: "295 mi",
    acceleration: "2.9 sec",
    charging: "16 min",
  },
];

const Explore = () => {
  return (
    <main className="explore-page">
      <Navbar />

      <section className="explore-hero">
        <div className="explore-label">01 / EXPLORE</div>

        <h1>
          Meet the machines
          <br />
          <span>shaping tomorrow.</span>
        </h1>

        <p>
          Electric performance without the noise.
          Explore the Power-Drive lineup built around
          range, intelligence and pure driving pleasure.
        </p>
      </section>

      <section className="vehicles-section">
        <div className="section-heading">
          <span>OUR LINEUP</span>
          <h2>Choose your way forward.</h2>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <article className="vehicle-card" key={vehicle.name}>
              <div className="vehicle-number">
                {vehicle.number}
              </div>

              <div className="vehicle-visual">
                <div className="vehicle-glow"></div>

                <div className="vehicle-shape">
                  EV
                </div>
              </div>

              <div className="vehicle-info">
                <span>{vehicle.type}</span>

                <h3>{vehicle.name}</h3>

                <div className="vehicle-specs">
                  <div>
                    <strong>{vehicle.range}</strong>
                    <small>Range</small>
                  </div>

                  <div>
                    <strong>{vehicle.acceleration}</strong>
                    <small>0–60 mph</small>
                  </div>

                  <div>
                    <strong>{vehicle.charging}</strong>
                    <small>Fast charge</small>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="explore-cta">
        <div>
          <span>THE NEXT MILE STARTS HERE</span>

          <h2>
            Drive less like
            <br />
            everyone else.
          </h2>
        </div>

        <Link to="/contact" className="explore-button">
          Get in touch →
        </Link>
      </section>

      <footer className="explore-footer">
        <span>Power-Drive</span>
        <p>Designed to disappear into the drive.</p>
      </footer>
    </main>
  );
};

export default Explore;