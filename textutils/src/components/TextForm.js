import React, { useState } from "react";

const TextForm = (props) => {
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
  };

  const stop = () => {
    speechSynthesis.cancel();
    props.showAlert(": Audio stopped successully!", "success");
  };

  const handleCopyText = () => {
    let text = document.getElementById("text-area-bg");
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

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
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

  // HeadingFirstLine(props);
  countingLines(text);

  // const [textAreaBG, setTextAreaBG] = useState("white");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            className="form-control "
            onChange={handleOnChange}
            style={{
              backgroundColor: "white",
              color: "black",
            }}
            id="text-area-bg"
            rows="10"
          ></textarea>
        </div>

        <button
          className="btn  mx-1"
          style={{ background: "red" }}
          onClick={handleUpClick}
        >
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
        <p className="border border-secondary">
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
};
export default TextForm;
