import image_card from "./images/image_card.jpg";
const CardWithImage = () => {
  return (
    <div className="wrapper_div_2">
      <div className="outer-card_4">
        <div className="inner-card_4">
          <img
            src={image_card}
            alt="Description of image"
            className="card-image_4"
          />
        </div>
        <div className="inner-card_4">
          <div className="inner_card_text_4">
            <div className="heading_container">
              <div className="card-heading_4">
                <h4>Welcome to work at the University of Oulu</h4>
              </div>
              <div className="angle-right_4">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div className="card-paragraph_4">
              <p>
                We offer you an international and inspiring working environment
                where you are given resposibility and can use your
                skills,develop yourself and do work that matters. See what kind
                of possibilities there are for you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
