import React, { useState } from "react";

function Textform(props) {
  const [text, settext] = useState("");

  const handlechange = (e) => {
    settext(e.target.value);
  };

  const handleupper = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };

  const handlelower = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };

  const handlespaces = () => {
    let newtext = text.split(/[ ]+/);
    newtext = newtext.join(" ");
    settext(newtext);
  };

  const handlespeach = () => {
    let newtext = new SpeechSynthesisUtterance();
    newtext.text = text;
    window.speechSynthesis.speak(newtext);
  };

  const handleclear = () => {
    let newtext = "";
    settext(newtext);
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(text);
  };

  // const handlecapitalized = () => {
  //   let newtext = text.split(/[.]+/);
  //   newtext = newtext.join(" ");
  //   settext(newtext);
  // };

  return (
    <>
      <div className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
        <h1 className="my-2">Enter your text here</h1>

        <textarea
          className={`form-control 
          text-${props.mode === "dark" ? "light" : "dark"}`}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#343a40",
            Color: props.mode === "light" ? "#343a40" : "white",
          }}
          id="mybox"
          value={text}
          onChange={handlechange}
          rows="8"
          placeholder="Enter your text here"
        ></textarea>

        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={handleupper}
        >
          concert to Uppercase
        </button>

        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={handlelower}
        >
          concert to Lowercase
        </button>

        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={handlespaces}
        >
          clear extra Spaces
        </button>

        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={handlespeach}
        >
          Speak Text
        </button>

        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={handlecopy}
        >
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={handleclear}
        >
          Clear Text
        </button>

        {/* <button
          type="button"
          className="btn btn-primary m-3"
          onClick={handlecapitalized}
        >
          Capitalized Text
        </button> */}
      </div>

      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Your text summary
        </h2>

        <p>
          {
            text.split(/[\s+]/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words {text === undefined ? text.length - 1 : text.length} character
        </p>

        <p>
          {text[0] === undefined
            ? 0
            : text.split(/[.]+/).length + 1 === undefined || " "
            ? text.split(/[.]+/).length - 1
            : text.split(/[.]+/).length}{" "}
          sentence
        </p>

        <p>
          {text[0] === undefined
            ? 0
            : text.split(/[ ]+/).length * (0.8123).toFixed(2)}{" "}
          Time to read
        </p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;
