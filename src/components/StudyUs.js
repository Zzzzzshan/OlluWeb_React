import idea from "./images/idea.png";
const StudyUs = () => {
  return (
    <div className="card_5">
      <div className="wrapper_div_3">
        <div className="card-left_5">
          <h4>Welcome to study with us</h4>
          <p>
            Our educational purpose is to train future pioneers who build a more
            sustainable, intelligent, and humane world.Every year,over 3 000 new
            students start their studies at the bachelor's, master's or doctoral
            level to pursue a degree. Take a closer look at our offering
            according to your need.
          </p>
          <ul>
            <li>
              <div className="angle_icon_5">
                <a href="#">
                  International programmes - study options and student life
                </a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_5">
                <a href="#">Doctoral training</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
            <li>
              <div className="angle_icon_5">
                <a href="#">Continuous learning</a>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </li>
          </ul>
        </div>
        <div className="card_right_5">
          <img src={idea} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default StudyUs;
