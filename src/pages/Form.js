import "./Form.css";

const Form = () => {
  return (
    <div
      className="form-pg"
      style={{
        backgroundImage: `url("./images/ski-img.jpg")`,
      }}
    >
      <div className="form-bg-pg">
        <h2 className="txt">Make Reservations</h2>
        <span className="span">
          <input type="text" placeholder="&#xf3c5;&nbsp;Destination"></input>
        </span>

        <span className="span">
          <input required="" type="date" placeholder="Depature Date:" />
        </span>

        <span className="span">
          <input required="" type="text" placeholder="&#xf017;&nbsp;Duration" />
        </span>

        <span className="span">
          <input required="" type="text" placeholder="&#xf007;&nbsp;Traveler" />
        </span>
        <button className="call-to-action-pg">BOOK NOW</button>
      </div>
    </div>
  );
};

export default Form;
