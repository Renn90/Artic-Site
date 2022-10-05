import React from "react";

const Alps = () => {
  return (
    <div className="jpn">
      <h3 className="header-txt">Most booked ski resorts in Alps this month</h3>

      <div className="jphn">
        <div className="jpn-card">
          <img src="./images/lodging.webp" alt="/"/>
          <h3>KitzSki – Kitzbühel/​Kirchberg</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in Europe</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Europe
          </h4>
          <span className="rate">9.1</span>
        </div>

        <div className="jpn-card">
          <img src="./images/sk-district.webp" alt="/"/>
          <h3>Ischgl/​Samnaun – Silvretta Arena</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half-o"></i>
          </span>
          <p>Ski resort in Europe</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Europe
          </h4>
          <span className="rate">8.4</span>
        </div>

        <div className="jpn-card">
          <img src="./images/alps.webp" alt="/"/>
          <h3> SkiWelt Wilder</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in Alps</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Europe
          </h4>
          <span className="rate">7.9</span>
        </div>

        <div className="jpn-card">
          <img src="./images/bgA.webp" alt="/"/>
          <h3>St Anthon Schröcken</h3>
          <span className="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </span>
          <p>Ski resort in Europe</p>
          <h4 className="check">
            {" "}
            <i class="fa fa-check"></i> Popular with guests booking ski resorts
            in Europe
          </h4>
          <span className="rate">8.0</span>
        </div>
      </div>
    </div>
  );
};

export default Alps;
