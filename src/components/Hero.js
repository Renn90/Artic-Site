import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-img"
      id="hero"
      style={{
        backgroundImage: `url("./images/ski-img.webp")`,
      }}
    >
      <div className="hero">
        <h1>Plan the perfect winter trip</h1>
        <p>
          Easily plan your ideal ski trip from home with the help of
          professionals
        </p>
        <div className="form">
          <span className="span">
            <input type="text" placeholder="&#xf3c5;&nbsp;Destination"></input>
          </span>

          <span className="span">
            <input required="" type="date" placeholder="Depature Date:" />
          </span>

          <span className="span">
            <input
              required=""
              type="text"
              placeholder="&#xf017;&nbsp;Duration"
            />
          </span>

          <span className="span">
            <input
              required=""
              type="text"
              placeholder="&#xf007;&nbsp;Traveler"
            />
          </span>

          <button className="call-to-action">BOOK NOW</button>
        </div>
        <Link to="/form">
          <button className="callto-action">Book Now</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
