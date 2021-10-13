import { Button, Link } from "@material-ui/core";
import React, { useEffect } from "react";
import { ContactContainer } from "./Contact.styles";
import HomeIcon from "@material-ui/icons/Home";
import Contact1 from "../../assets/images/contact.jpg";
import Contact2 from "../../assets/images/a.jpeg";
import anime from "animejs";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Contact = () => {
  let arr: any[] = [];
  Array(100)
    .fill(1)
    .map((_, i) => {
      return arr.push(i);
    });
  function animation() {
    anime({
      targets: ".el",

      translateX: () => {
        return anime.random(-200, 200) + "vh";
      },
      translateY: () => {
        return anime.random(-100, 100) + "vh";
      },
      scale: () => {
        return anime.random(0.5, 2);
      },
      rotate: 45,
      easing: "easeInOutBack",
      duration: 3000,
      delay: anime.stagger(10),
      complete: animation,
    });
  }
  useEffect(() => {
    animation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ContactContainer className="section" id="contact">
      <div className="container">
        {arr.map((i) => (
          <div className="el"></div>
        ))}
      </div>
      <div className="contact">
        <div className="contact__img">
          <img src={Contact2} alt="" />
          <img src={Contact1} alt="" />
        </div>
        <div className="contact__content">
          <div className="contact__wrapper">
            <h2>Stay contact</h2>
            <div className="contact__info">
              <Button startIcon={<HomeIcon />}>Danang, Vietnam</Button>
              <Button startIcon={<GitHubIcon />}>
                <Link
                  href="https://github.com/james15394"
                  underline="none"
                  rel="noopener"
                  target="_blank"
                >
                  Github
                </Link>
              </Button>
              <Button startIcon={<LinkedInIcon />}>
                <Link
                  href="https://www.linkedin.com/in/doan-duong-4a7a81145/"
                  underline="none"
                  rel="noopener"
                  target="_blank"
                >
                  Linkedin
                </Link>
              </Button>
              <Button startIcon={<MailOutlineIcon />}>
                d1230310024@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
