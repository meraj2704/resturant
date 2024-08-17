import React from "react";

import "./Laurels.css";
import SubHeading from "../../Components/SubHeading/SubHeading";
import data from "../../constants/data";
const  laurels = '/images/laurels.png';
const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info ">
      <SubHeading title="Awards & recognition"></SubHeading>
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title}></AwardCard>
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
