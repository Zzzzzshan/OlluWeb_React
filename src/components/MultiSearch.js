import cold from "./images/cold.png";
const MultiSearch = () => {
  return (
    <div className="card_6">
      <div className="wrapper_div_3">
        <div className="card-left_6">
          <div className="mbl-img-div">
            <h4>Responsible multidisiplinary research</h4>
            <img className="mbl_img_h4" src={cold} alt="#" />
          </div>
          <p>
            At the University of Oulu, we participate in solving global problems
            with our cutting-edge research. The openness and responsibility of
            research is an integral part of all research actions at the
            University of Oulu.
          </p>
          <ul>
            <li>
              <div className="angle_icon_6">
                <a href="#">High-level impactful research</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_6">
                <a href="#">Responsible research</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_6">
                <a href="#">Donate to science</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="card_right_6">
          <img src={cold} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default MultiSearch;
