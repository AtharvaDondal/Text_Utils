import { React, useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter your text here!");

  const handleUpClick = () => {
    // console.log(setText("handleclick was clicked"))
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase", "sucess");
  };

  const handleLoClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase", "sucess");
  };

  const handleClearText = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("text cleared!", "sucess");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("speaker has been enabled", "sucess");
  };
  //it is make using rejex in javascript, logic- if one or more than one space is there split that text, basically new array will create
  const RemoveSpace = () => {
    let updatedText = text.split(/[ ]+/);
    setText(updatedText.join(" "));
    props.showAlert("space has been removed!", "sucess");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    // document.getSelection.removeAllRange();
    props.showAlert("text copied to clipboard!", "sucess");
  };

  const handleOnChange = (e) => {
    console.log(setText("On Change"));
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466E" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
      </div>
      <button
        className="btn btn-primary mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleUpClick}
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleLoClick}
      >
        Convert to Lowercase
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleClearText}
      >
        Clear Text
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        disabled={text.length === 0}
        onClick={speak}
      >
        Speak
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        disabled={text.length === 0}
        onClick={RemoveSpace}
      >
        Remove space
      </button>
      <button
        className="btn btn-primary mx-1 my-1"
        disabled={text.length === 0}
        onClick={handleCopy}
      >
        Copy Text
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <b>
          {0.08 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read
        </b>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something to Preview it here"}</p>
      </div>
    </>
  );
}
