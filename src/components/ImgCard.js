import "./ImgCard.css";
import { Link } from "react-router-dom";

const ImgCard = () => {
  return (
    <section className="regions" id="regions">
      <div className="text">
        <h2>Explore Regions</h2>
        <p>
          You can explore the available regions and get ready for your adventure
        </p>
        <p>
          Finding a great ski resort is easy with Artic.com. More choices, more
          destinations.
        </p>
      </div>
      <div className="region-card">
        <Link to="/japan">
          <h3
            className="card"
            style={{
              backgroundImage: `url("./images/ski.webp")`,
            }}
          >
            Japan
          </h3>
        </Link>
        <Link to="/canada">
          <h3
            className="card"
            style={{
              backgroundImage: `url("./images/snow.webp")`,
            }}
          >
            Canada
          </h3>
        </Link>
        <Link to="/alps">
          <h3
            className="card"
            style={{
              backgroundImage: `url("./images/sunset-bg.webp")`,
              backgroundSize: "cover",
            }}
          >
            Alps
          </h3>
        </Link>
      </div>
      <Link to="/more">
        <button>Explore more</button>
      </Link>
    </section>
  );
};

export default ImgCard;
