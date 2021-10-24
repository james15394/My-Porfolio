import React, { useEffect } from "react";
import { ServiceContainer } from "./Service.styles";
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
            hidden: { x: "-50vh" },
          }}
          className="service__container"
        >
          <div className="service__item">
            <div className="service__img">
              <div className="bar">PERSISTENCE</div>
              <div className="small" />
            </div>
            <div className="service__content">
              Learning to code is the very arduous journey, especially for the
              novice, self-taught person who have never touched this field. So,
              PERSISTENCE and PATIENCE is very crucial for me to start the hard
              journey.
            </div>
          </div>

          <div className="service__item">
            <div className="service__img">
              <div className="bar">CONFIDENCE</div>
              <div className="small" />
            </div>
            <div className="service__content">
              Now, I feel at a point that I can build some Websites, using some
              technology to create, design them. But I still spend time learning
              and practising all skills learnt via Internet and friends.
            </div>
          </div>
          <div className="service__item">
            <div className="service__img">
              <div className="bar">AMBITION</div>
              <div className="small" />
            </div>
            <div className="service__content">
              I want to be a person who can always catch up with the latest
              technology and respond to changes. My goal is to be better than I
              was yesterday.I compete with no one but myself to be improved.
            </div>
          </div>
        </motion.div>
      </div>
    </ServiceContainer>
  );
};

export default Service;
