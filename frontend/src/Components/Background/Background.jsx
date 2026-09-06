import "./Background.css";
import video1 from "../../assets/moving-car.mp4";
import image1 from "../../assets/car-1.jpg";
import image2 from "../../assets/car-2.jpg";
import image3 from "../../assets/car-3.jpg";

const slides = [image1, image2, image3];

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video
        className="background"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={video1} type="video/mp4" />
      </video>
    );
  }

  return (
    <img
      src={slides[heroCount] ?? slides[0]}
      alt=""
      className="background"
    />
  );
};

export default Background;
