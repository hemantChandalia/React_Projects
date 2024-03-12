import React, { useState } from "react";
// import { CopyToClipboard } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  // const [text, setTextToCopy] = useState(''); // The text you want to copy

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to lowercase!", "success");
  };

  function countSentences(text) {
    // Regular expression to match sentence endings (. ! ?) followed by a space or end of string
    var sentenceRegex = /[.!?]+[ ]|$/;
    // Use the regex to split the text into an array of sentences
    var sentences = text.split(sentenceRegex);
    // Remove any empty strings from the array
    sentences = sentences.filter(function (sentence) {
      return sentence.trim().length > 0;
    });
    // Return the number of sentences
    return sentences.length;
  }

  // const handleCopyToClipboard = () => {
  //   // console.log("Uppercase was clicked" + text);
  //   let newText = text.toLowerCase();
  //   setText(newText);
  // };
  const handleTitleCase = () => {
    // console.log("Uppercase was clicked" + text);
    let titleCase = "";
    let newText = text.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());

    titleCase += newText + "";
    console.log(setText(titleCase));
    props.showAlert(": Converted to titlecase!", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
    props.showAlert(": Audio has been started!", "success");
    // const toggle = document.getElementsById("toggle");
    // if (toggle.textContent === "Speak") {
    //   toggle.innerHTML = "Stop";
    // } else {
    //   toggle.innerHTML = "Speak";
    //   if ((toggle.innerHTML = "Speak")) {
    //     window.speechSynthesis.cancel();
    //   }
    // }
  };

  const stop = () => {
    speechSynthesis.cancel();
    props.showAlert(": Audio stopped successully!", "success");
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(": Text has been copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(": Extra spaces has been removed!", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert(": Text have been cleared!", "success");
  };

  // const paragraphRemove = () => {
  //   let newText = text.replace(/[\n\r]+/g, " ");
  //   setMyStyle(newText);
  // };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  // tex"new text"; // wrong way to change the state
  // setText("new text"); // Correct way to change the statet =

  // Enabling the theme mode===================

  // const [myStyle, setMyStyle] = useState({
  //   color: "#042743",
  //   backgroundColor: "white",
  // });

  // const [btnText, setBtnText] = useState("Enable Dark Mode");
  // let myStyle ={
  //     color:'white',
  //     backgroundColor:'#042743'
  // }

  // const toggleStyle = () => {
  //   if (myStyle.color === "#042743") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#042743",
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "#042743",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  function countingLines(text) {
    // text.split(/\r\n|\r|\n/).length

    // Split the file content by line breaks
    const lines = text.split("\n");

    // Filter out blank lines
    const nonBlankLines = lines.filter((line) => line.trim() !== "");

    // Count the number of non-blank lines
    const numberOfNonBlankLines = nonBlankLines.length;

    // console.log(`Lines: ${numberOfNonBlankLines}`);

    return numberOfNonBlankLines;
  }
  countingLines(text);

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control "
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.modeR === "dark"
                  ? "#ff3535"
                  : props.mode === "dark"
                  ? "grey"
                  : props.modeG === "dark"
                  ? "#03ab03"
                  : props.modeB === "dark"
                  ? "#2727ff"
                  : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            // style={{
            //   backgroundColor:
            //     props.mode === "dark"
            //       ? "grey"
            //       : "white",
            //   color: props.mode === "dark" ? "white" : "#042743",
            // }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>

        {/* <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard} >
          Copy To Clipboard
        </button>
       */}

        <button className="btn  mx-1" style={{background:"red"}} onClick={handleUpClick}>
          Covert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Covert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleTitleCase}>
          Title Case
        </button>

        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        {/* <button className="btn btn-primary mx-1" onClick={paragraphRemove}>
          Paragraph Remove
        </button> */}

        {/* <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary my-3"
        >
          {btnText}
        </button> */}

        <button
          type="submit"
          className="btn btn-warning mx-1"
          onClick={speak}
          id="toggle"
        >
          Speak Start
        </button>
        <button type="submit" className="btn btn-danger mx-1" onClick={stop}>
          Speak Stop
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your text summary</h1>
        <p>
          <strong>Words:</strong> {text.split(" ").length}
          <br />
          <strong>Characters:</strong>
          {text.length}
          <br />
          <strong>Lines:</strong>
          {countingLines(text)}
          {/* {text.split(/\r\n|\r|\n/).length} */}
          <br />
          <strong>Sentences:</strong>
          {/* someText = someText.replace(/(\r\n|\n|\r)/gm, "");
           */}
          {countSentences(text)} <br />
          <strong>Paragraph:</strong>
          {text.split(/\n\s*\n/).filter(Boolean).length};
          <br />
          <strong>Minutes Read:</strong>
          {0.008 * text.split(" ").length}
          <br />
        </p>
        <h3>Preview</h3>
        <p className="border border-secondary">
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
