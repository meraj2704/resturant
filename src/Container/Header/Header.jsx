import React from "react";

import "./Header.css";
import SubHeading from "../../Components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavour"></SubHeading>
      <h1 className="app__header-h1">The key to Fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus{" "}
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src="https://i.ibb.co/5s0jf7N/welcome.png" alt="" />
    </div>
  </div>
);

export default Header;
