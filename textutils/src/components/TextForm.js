import React, { useState } from "react";
// import { CopyToClipboard } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  // const [text, setTextToCopy] = useState(''); // The text you want to copy

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
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
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
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
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
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

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");
  // let myStyle ={
  //     color:'white',
  //     backgroundColor:'black'
  // }

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

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
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control "
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={myStyle}
          ></textarea>
        </div>

        {/* <button className="btn btn-primary mx-1" onClick={handleCopyToClipboard} >
          Copy To Clipboard
        </button>
       */}

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
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

        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary my-3"
        >
          {btnText}
        </button>

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

      <div className="container my-3">
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
        <p className="border border-secondary">{text}</p>
      </div>
    </>
  );
}
