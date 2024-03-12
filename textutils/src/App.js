import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [modeR, setRmode] = useState("light"); //whether dark mode is enabled or not
  const [modeG, setGmode] = useState("light"); //whether dark mode is enabled or not
  const [modeB, setBmode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    // setTimeout(() => {
    //   setAlert(null);
    // }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(": Dark mode has been enabled.", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has been enabled.", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const redMode = () => {
    if (modeR === "light") {
      setRmode("dark");
      document.body.style.backgroundColor = "red";
      showAlert(": Red mode has been enabled.", "success");
    } else {
      setRmode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has been enabled.", "success");
    }
  };
  const greenMode = () => {
    if (modeG === "light") {
      setGmode("dark");
      document.body.style.backgroundColor = "green";
      showAlert(": Green mode has been enabled.", "success");
    } else {
      setGmode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has been enabled.", "success");
    }
  };
  const blueMode = () => {
    if (modeB === "light") {
      setBmode("dark");
      document.body.style.backgroundColor = "blue";
      showAlert(": Blue mode has been enabled.", "success");
    } else {
      setBmode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has been enabled.", "success");
    }
  };

  return (
    <>
      {/* <Navbar title = "Textutils" aboutText = "About Textutils"/> */}
      {/* <Navbar/> */}
      <Navbar
        title="TextUtils"
        mode={mode}
        modeR={modeR}
        modeG={modeG}
        modeB={modeB}
        toggleMode={toggleMode}
        redMode={redMode}
        greenMode={greenMode}
        blueMode={blueMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
          modeR={modeR}
          modeG={modeG}
          modeB={modeB}
        />

        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
