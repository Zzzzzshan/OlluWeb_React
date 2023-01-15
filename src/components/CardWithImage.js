const CardWithImage = () => {
  return (
    <div class="wrapper_div_2">
      <div class="outer-card_4">
        <div class="inner-card_4">
          <img
            src={"/images/image_card.jpg"}
            alt="Description of image"
            class="card-image_4"
          />
        </div>
        <div class="inner-card_4">
          <div class="inner_card_text_4">
            <div class="heading_container">
              <div class="card-heading_4">
                <h4>
                  Welcome to work at the <br />
                  University of Oulu
                </h4>
              </div>
              <div class="angle-right_4">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
            <div class="card-paragraph_4">
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
