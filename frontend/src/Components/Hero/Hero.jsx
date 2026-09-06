import "./Hero.css";

import arrow_btn from "../../assets/Arrow Right.jpg";
import play_icon from "../../assets/Play-icon.jpg";
import pause_icon from "../../assets/Pause-icon.jpg";

const Hero = ({
  setPlayStatus,
  heroData,
  heroCount,
  setHeroCount,
  playStatus,
}) => {
  if (!heroData) {
    return null;
  }

  return (
    <div className="hero">
      <div className="hero-text" key={heroCount}>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <a className="hero-explore" href="#why">
        <p>Explore the lineup</p>
        <img src={arrow_btn} alt="" />
      </a>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? "hero-dot active" : "hero-dot"}
              role="button"
              aria-label={`Show slide ${index + 1}`}
              aria-current={heroCount === index}
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setHeroCount(index);
                }
              }}
            />
          ))}
        </ul>

        <button
          type="button"
          className="hero-play"
          onClick={() => setPlayStatus(!playStatus)}
          aria-label={playStatus ? "Pause driving footage" : "Play driving footage"}
        >
          <img src={playStatus ? pause_icon : play_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
