import { Divider } from "@material-ui/core";
import React, { useEffect } from "react";
import { AboutContainer } from "./About.styles";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const About = () => {
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
    <AboutContainer id="about" className="section">
      <div className="wrapper">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.3 }}
          exit="hidden"
          variants={{
            visible: { x: 0, scale: 1.1 },
            hidden: { x: -300, scale: 0 },
          }}
          className="item left"
        >
          WHO I AM
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          exit="hidden"
          variants={{
            visible: {
              scale: 1.1,
              origin: "right",
              transition: {
                duration: 0.3,
              },
            },
            hidden: { scale: 0.8 },
          }}
          className="item right"
        >
          <motion.div
            ref={ref}
            animate={controls}
            variants={{
              hidden: { x: "-50vh" },
              visible: {
                x: "100vh",
                transition: { duration: 1.25 },
              },
            }}
            initial="hidden"
            className="banner"
          ></motion.div>
          <motion.h3>Duong Doan</motion.h3>
          <div className="description">
            <p>
              <span>Qualification: </span>Hue university of medicine and
              pharmacy
            </p>
            <p>
              <span>Experience: </span> QA deputy Head of Pharmaceutical Company
            </p>
            <p>
              <span>Other: </span> IELTS tutor
            </p>
            <Divider />
            <p>
              From 2020, I have been interested in Website development and
              self-learned Frontend path ever since
            </p>
          </div>
        </motion.div>
      </div>
    </AboutContainer>
  );
};

export default About;
