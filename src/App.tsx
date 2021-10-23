import React, { useState } from "react";
import "./App.css";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Home from "./features/HomePage/Home";
import MyWork from "./features/MyWorks/MyWork";
import Service from "./features/Services/Service";
import ReactFullpage from "@fullpage/react-fullpage";
import SoundImg from "./images/sound.svg";
import Sound, { ReactSoundProps } from "react-sound";

const anchors = ["Home", "About", "Passion", "Works", "Skillset", "Contact"];
const App = () => {
  const [playing, setPlaying] =
    useState<ReactSoundProps["playStatus"]>("STOPPED");
  function togglePlayStatus() {
    setPlaying((status) => (status === "STOPPED" ? "PLAYING" : "STOPPED"));
  }
  function statusLabel(status: ReactSoundProps["playStatus"]): string {
    switch (status) {
      case "STOPPED":
        return "Sound PLAY";
      case "PLAYING":
        return "Sound STOP";
      default:
        return "STOP";
    }
  }
  return (
    <div className="App">
      <div onClick={(click) => togglePlayStatus()} className="Sound">
        <img src={SoundImg} alt="" />
        {statusLabel(playing)}
      </div>
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        onLeave={(origin, destination, direction) => {
          // console.log("onLeave event", { origin, destination, direction });
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div className="App__container">
              <Home />
              <About />
              <Service />
              <MyWork />
              {/* <SkillSet /> */}
              <Contact />
            </div>
          );
        }}
      />
      <Sound
        url="/videos/kiki.mp3"
        playStatus={playing}
        playFromPosition={300 /* in milliseconds */}
      />
    </div>
  );
};

export default App;
