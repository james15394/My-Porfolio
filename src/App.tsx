import React from "react";
import "./App.css";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Home from "./features/HomePage/Home";
import MyWork from "./features/MyWorks/MyWork";
import Service from "./features/Services/Service";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["Home", "About", "Passion", "Works", "Skillset", "Contact"];
const App = () => (
  <div className="App">
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
            <Contact />
          </div>
        );
      }}
    />
  </div>
);

export default App;
