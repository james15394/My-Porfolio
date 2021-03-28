import React from "react";
import { MyWorkContainer } from "./MyWork.styles";
import { Button, Link } from "@material-ui/core";
import Gym from "../../assets/images/works/gymlove.jpeg";
import Instagram from "../../assets/images/works/instagram.jpeg";
import Shoppee from "../../assets/images/works/shoppee.jpeg";
import Website from "../../assets/images/works/website.jpeg";

const data = [
  {
    img: Gym,
    name: "gym lover",
    des: "React-scroll",
    href: "https://mystifying-saha-4137d3.netlify.app/",
  },
  {
    img: Instagram,
    name: "instagram",
    des: "Firebase auth, Redux, Reactjs, Firebase Firestore",
    href: "https://instagrame-clone-f053d.firebaseapp.com/login",
  },
  {
    img: Shoppee,
    name: "shoppee",
    des: "Firebase auth, Redux ToolKits, Reactjs, Stripe",
    href: "https://relaxed-fermi-0b14fb.netlify.app/",
  },
  {
    img: Website,
    name: "website",
    des: "Vanilla Javascript",
    href: "https://responsive-website-94022.firebaseapp.com/",
  },
];

const MyWork = () => {
  return (
    <MyWorkContainer id="works" className="section">
      <div className="intro">
        <h2> my works</h2>
        <p>View source code in contact section</p>
      </div>
      <div className="myWork__inner">
        <div className="myWork__slide">
          {data.map(({ img, name, des, href }) => (
            <div className="myWork__item">
              <div className="myWork__img">
                <img src={img} alt="" />
              </div>
              <div className="myWork__content">
                <h3>{name}</h3>
                <div className="myWork__des">{des}</div>
                <Button>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    View
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MyWorkContainer>
  );
};

export default MyWork;
