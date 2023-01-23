import mbl_logo from "./images/mbl_screen_logo.png";

const ImageBg = () => {
  return (
    <div className="bg_image">
      <img className="mbl_logo" src={mbl_logo} alt="#" />

      <div className="card">
        <div className="content">
          <div className="text">
            Ready to join with us? Apply for in ternational programmes 4-18
            Jan,2023
          </div>
          <div className="icon">
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBg;
