import React, { useEffect } from "react";
import { ServiceContainer } from "./Service.styles";
import Design from "../../assets/images/design.svg";
import Story from "../../assets/images/story.svg";
import Tech from "../../assets/images/technology.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Service = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <ServiceContainer id="services" className="section">
      <div className="service">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.3 }}
          exit="hidden"
          variants={{
            visible: { x: 0 },
            hidden: { x: "-100vh" },
          }}
          className="service__container"
        >
          <div className="service__item">
            <div className="service__img">
              <img src={Design} alt="" />
            </div>
            <div className="service__content">
              I think web design is like a "magic wand". If a service or product
              is magic to solve a problem, it is the role of design to act as an
              intermediary for users to master it. We strive every day to create
              a "magic wand" that matches the user.
            </div>
          </div>

          <div className="service__item">
            <div className="service__img">
              <img src={Story} alt="" />
            </div>
            <div className="service__content">
              I love story-like content such as novels, movies, and manga.
              Stories can get people's attention and make things easier to
              understand and remember. I believe that if you can study every
              story pattern and give your output a story, you will get a big
              return.
            </div>
          </div>
          <div className="service__item">
            <div className="service__img">
              <img src={Tech} alt="" />
            </div>
            <div className="service__content">
              "Well-developed science and technology is indistinguishable from
              magic." I want to be a person who can always catch up with the
              latest technology and respond to changes. It's never too late to
              find love in a certain field.
            </div>
          </div>
        </motion.div>
      </div>
    </ServiceContainer>
  );
};

export default Service;
