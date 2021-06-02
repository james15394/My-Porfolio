import React from "react";
import { data } from "./data";
import { SkillSetKit } from "./SkillSet.styles";

const SkillSet = () => {
  return (
    <SkillSetKit id="skill" className="section">
      <div className="skill__wrapper">
        {data.map(({ skillName, img, percent }) => (
          <div className="skill__card">
            <div className="skill__img">
              <img src={img} alt="" />
              <h3>{skillName}</h3>
            </div>
            <div className="skill__content">
              <svg>
                <circle cx="50" cy="50" r="30"></circle>
                <circle cx="50" cy="50" r="30"></circle>
              </svg>
              <div className="skill__number">
                <h3>
                  {percent}
                  <span>%</span>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SkillSetKit>
  );
};

export default SkillSet;
