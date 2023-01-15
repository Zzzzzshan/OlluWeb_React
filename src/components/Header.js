const Header = () => {
  return (
    <div className="container">
      <div className="wrapper_div">
        <div className="logo_main">UNIVERSITY OF OULU</div>
        <div className="nav">
          <a href="#">Admissions</a>
          <a href="#">Research</a>
          <a href="#">Cooperation</a>
          <a href="#">University</a>
          <a href="#">For Students</a>
          <a href="#">
            Search<i className="fa fa-search"></i>{" "}
          </a>
          <a href="#">
            EN<i className="fa fa-globe"></i>{" "}
          </a>
          <a href="#">
            Menu<i className="fa fa-bars"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
