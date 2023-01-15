import eye from "./images/eye.png";

const Diverse = () => {
  return (
    <div className="card_7">
      <div className="wrapper_div_3">
        <div className="card-left_7">
          <h4>Diverse collaboration and services</h4>
          <p>
            The University of Oulu works with the diverse partners lo- cally,
            nationally and internationally.Our services help you find the
            information you need annd benefit from the know-how of our
            specialists.
          </p>
          <ul>
            <li>
              <div className="angle_icon_7">
                <a href="#">Services for companies and organizations</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_7">
                <a href="#">International affairs</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_7">
                <a href="#">
                  Education from Finland - learn from the <br />
                  best!
                </a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_7">
                <a href="#">Alumni community - Your strong network</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_7">
                <a href="#">Library</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="card_right_7">
          <img src={eye} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Diverse;
