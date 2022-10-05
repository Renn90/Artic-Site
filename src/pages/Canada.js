import React from "react";
import "./Japan.css";

const Canada = () => {
  return (
    <div className="jpn">
      <h3 className="header-txt">
        Most booked ski resorts in Canada this month
      </h3>

      <div className="jphn">
        <div className="jpn-card">
          <img src="./images/fairmont-chateau-whistler.webp" alt="/"/>
          <h3>Fairmout Chatua Whistler</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in Canada</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Canada
          </h4>
          <span className="rate">8.9</span>
        </div>

        <div className="jpn-card">
          <img src="./images/the-sutton-place-hotel.webp" alt="/"/>
          <h3>The Suston Mountain Resort</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </span>
          <p>Ski resort in Canada</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Canada{" "}
          </h4>
          <span className="rate">8.4</span>
        </div>

        <div className="jpn-card">
          <img src="./images/ski.myn.webp" alt="/"/>
          <h3>Saun Peak Grand Park</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort Canada</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Canada
          </h4>
          <span className="rate">7.9</span>
        </div>

        <div className="jpn-card">
          <img src="./images/swki-line.webp" alt="/"/>
          <h3>Hidden Vally Resort</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in Canada</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Canada{" "}
          </h4>
          <span className="rate">7.9</span>
        </div>
      </div>
    </div>
  );
};

export default Canada;
