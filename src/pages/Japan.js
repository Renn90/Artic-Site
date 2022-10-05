import "./Japan.css";

const Japan = () => {
  return (
    <div className="jpn">
      <h3 className="header-txt">
        Most booked ski resorts in Japan this month
      </h3>

      <div className="jphn">
        <div className="jpn-card">
          <img src="./images/swki-line.webp" alt="/"/>
          <h3>Sappora Ski Resort & Hotels</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in sappora</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Hokkaido
          </h4>
          <span className="rate">7.9</span>
        </div>

        <div className="jpn-card">
          <img src="./images/snow-hotel.webp" alt="/"/>
          <h3>T-mark city Niseco</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in sappora</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Hokkaido{" "}
          </h4>
          <span className="rate">7.0</span>
        </div>

        <div className="jpn-card">
          <img src="./images/sk-district.webp" alt="/"/>
          <h3>Asahkima Resort</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in Asahkima</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Hokkaido
          </h4>
          <span className="rate">8.4</span>
        </div>

        <div className="jpn-card">
          <img src="./images/ski.myn.webp" alt="/"/>
          <h3>Koko Hotel Ekimea</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </span>
          <p>Ski resort in sappora</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Hokkaido{" "}
          </h4>
          <span className="rate">8.1</span>
        </div>
      </div>
    </div>
  );
};

export default Japan;
