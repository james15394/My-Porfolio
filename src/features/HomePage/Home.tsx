import React, { useEffect, useRef, useState } from "react";
import { HomeContainer } from "./Home.styles";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";

const introVariants = {
  hidden: { x: "-100vh" },
  visible: { x: 0 },
};
const portfolioVariants = {
  hidden: { x: "100vh" },
  visible: { x: 0 },
};
const scrollVariants = {
  hidden: { y: "300px" },
  visible: { y: 0 },
};

const Home = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ initialInView: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  console.log(inView);
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    setScrollValue(scrollTop);
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(
    y,
    [0, 100, 200, 300, 400],
    [45, 35, 25, 15, -45]
  );
  const rotateY = useTransform(x, [0, 100, 200, 300, 400], [45, 35, 25, 15, 0]);

  const areaRef = useRef<HTMLDivElement>(null!);

  function handleMouse(e: any) {
    var rect = areaRef.current.getBoundingClientRect();

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }
  return (
    <HomeContainer
      scroll={scrollValue}
      id="home"
      ref={areaRef}
      onMouseMove={handleMouse}
      className="section"
    >
      <div className="intro">
        <div className="intro__wrap">
          <div className="name">
            <motion.div
              ref={ref}
              animate="visible"
              variants={introVariants}
              initial="hidden"
              exit="hidden"
              transition={{ duration: 0.5 }}
              className="infoName"
            >
              Duong
              <br />
              Doan
            </motion.div>
            <motion.div
              variants={introVariants}
              initial="hidden"
              exit="hidden"
              ref={ref}
              animate="visible"
              transition={{ duration: 0.5 }}
              className="line"
            ></motion.div>
            <motion.div
              variants={introVariants}
              initial="hidden"
              exit="hidden"
              ref={ref}
              animate="visible"
              transition={{ duration: 0.5 }}
              className="job"
            >
              Frontend developer
            </motion.div>
            <motion.div
              variants={scrollVariants}
              initial="hidden"
              exit="hidden"
              ref={ref}
              animate={controls}
              transition={{ duration: 0.5 }}
              className="scroll"
            >
              Scroll down
            </motion.div>
          </div>
          <div className="jobDes">
            <motion.h2
              variants={portfolioVariants}
              initial="hidden"
              exit="hidden"
              ref={ref}
              animate="visible"
              transition={{ duration: 0.5 }}
              style={{
                translateX: rotateX,
                translateY: rotateY,
              }}
            >
              Portfolio
            </motion.h2>
            <motion.div
              variants={portfolioVariants}
              initial="hidden"
              exit="hidden"
              ref={ref}
              animate="visible"
              transition={{ duration: 0.5 }}
              className="circle"
              style={{
                translateX: rotateX,
                translateY: rotateY,
              }}
            ></motion.div>
            <motion.div
              className="circle1"
              style={{
                translateX: rotateX,
                translateY: rotateY,
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
