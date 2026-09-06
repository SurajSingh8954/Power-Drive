import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";

import Explore from "./Pages/Explore/Explore";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

import "./App.css";

const heroData = [
  {
    text1: "The engine is gone.",
    text2: "What's left is just the road.",
  },
  {
    text1: "Built to outsmart traffic,",
    text2: "not just outrun it.",
  },
  {
    text1: "Wherever the road bends,",
    text2: "the range keeps up.",
  },
];

const features = [
  {
    stat: "310 mi",
    title: "Range",
    body: "Rated on real roads, hills and all — not just a closed test track.",
  },
  {
    stat: "18 min",
    title: "Charging",
    body: "10% to 80% at any 150kW+ fast charger, about as long as a coffee stop.",
  },
  {
    stat: "0.21 Cd",
    title: "Design",
    body: "One silhouette, shaped in a wind tunnel until the air stopped noticing it.",
  },
];

const Home = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    if (playStatus) return undefined;

    const interval = setInterval(() => {
      setHeroCount((prev) => (prev + 1) % heroData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [playStatus]);

  return (
    <>
      <div className="viewport">
        <Background playStatus={playStatus} heroCount={heroCount} />

        <Navbar />

        <Hero
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
          setPlayStatus={setPlayStatus}
        />
      </div>

      <section id="why" className="why">
        <h2>Three numbers that matter more than horsepower.</h2>

        <div className="why-grid">
          {features.map((feature) => (
            <div className="why-item" key={feature.title}>
              <span className="why-stat">{feature.stat}</span>

              <h3>{feature.title}</h3>

              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">EV-olution</div>

        <p>Designed to disappear into the drive.</p>

        <a
          className="footer-contact"
          href="mailto:hello@Power-Drive.example"
        >
          hello@Power-Drive.example
        </a>

        <p className="footer-meta">
          &copy; {new Date().getFullYear()} Power-Drive. All rights reserved.
        </p>
      </footer>
    </>
  );
};

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;