import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Home from "./features/HomePage/Home";
import MyWork from "./features/MyWorks/MyWork";
import Service from "./features/Services/Service";
import SoundImg from "./images/sound.svg";
import { Howl, Howler } from "howler";
import { Loading } from "./features/Loading";
import ReactPageScroller from "react-page-scroller";
import { motion } from "framer-motion";

const anchors = [
  { id: 0, label: "Home" },
  { id: 1, label: "About" },
  { id: 2, label: "Passion" },
  { id: 3, label: "Works" },
  { id: 4, label: "Contact" },
];
const App = () => {
  const [playing, setPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handlePageChange = (number: number) => {
    setCurrentSlide(number);
  };
  const handleBeforePageChange = (number: number) => {
    console.log(number);
  };
  const variants = {
    initial: { width: 30 },
    animate: {
      width: 50,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };
  const sound = new Howl({
    src: ["/videos/kiki.mp3"],
    loop: true,
    volume: 0.2,
  });
  useEffect(() => {
    if (playing) {
      sound.play();
    } else {
      Howler.stop();
    }
    // eslint-disable-next-line
  }, [playing]);
  return (
    <div className="App">
      <div onClick={() => setPlaying((prev) => !prev)} className="Sound">
        <img src={SoundImg} alt="" />
        {playing ? "Sound STOP" : "Sound PLAY"}
        {playing && (
          <div className="loading">
            <Loading />
          </div>
        )}
      </div>

      <div className="App__container">
        <ReactPageScroller
          pageOnChange={handlePageChange}
          onBeforePageScroll={handleBeforePageChange}
          customPageNumber={currentSlide}
          animationTimerBuffer={100}
        >
          <Home />
          <About />
          <Service />
          <MyWork />
          <Contact />
        </ReactPageScroller>
      </div>

      <div className="navigation">
        {anchors.map((item) => {
          return (
            <div className="navItem">
              <motion.div
                className="nav"
                variants={variants}
                initial="initial"
                animate={currentSlide === item.id ? "animate" : "initial"}
                key={item.id}
                onClick={() => setCurrentSlide(item.id)}
              ></motion.div>
              <h2>{item.label}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
