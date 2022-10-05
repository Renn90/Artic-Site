import "./Lodging.css";
import { Link } from "react-router-dom";

const Lodging = () => {
  return (
    <div className="container" id="lodging">
      <h2>
        We offer comfortable lodging options to compliment your experience
      </h2>
      <p>
        Here, we pattner with a huge variety of hotels to offer everything from
        a budget room to a luxery suite
      </p>
      <span className="img">
        <img src="./images/Lodging.webp" className="lodge-img" alt="/"/>
        <img src="./images/hotel.webp" className="lodge-img" alt="/"/>
      </span>
      <Link to="/moreLodging">
        <button className="btnh">View Offers</button>
      </Link>
    </div>
  );
};

export default Lodging;
