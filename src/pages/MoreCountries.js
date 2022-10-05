import "./MoreCountries.css";

const MoreCountries = () => {
  return (
    <div className="more">
      <span className="content">
        <img src="./images/bad-review.png" className="bad-reviews" alt="/" />
        <h2>Sorry no other available countries now!</h2>
      </span>
    </div>
  );
};

export default MoreCountries;
