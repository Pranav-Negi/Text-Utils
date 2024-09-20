import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import About from "./Components/About";
import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggledark = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#343a40";
      showalert("Dark mode has already been enabled", "warning");
    }
  };

  const togglelight = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#ffffff";
      showalert("Light mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#ffffff";
      showalert("Light mode has already been enabled", "warning");
    }
  };

  // const togglegreen = () => {
  //   if (mode === "light" || mode === "dark"){
  //     setmode("success")
  //     document.body.style.backgroundColor = "#54d4ae"
  //   }

  //   else{
  //       setmode("success")
  //       document.body.style.backgroundColor = "#54d4ae"
  //   }

  // }

  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar
        mode={mode}
        toggledark={toggledark}
        togglelight={togglelight}
        home="Home"
        title="Text-utils"
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform mode={mode} />
        {/* <Routes> */}
        {/* <Route path="/" element={<Textform mode={mode} />}></Route> */}
        {/* <Route path="/About" element={<About mode={mode} />}></Route> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
