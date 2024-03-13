import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  // const redMode = () => {
  //   handleMultipleThemeState("red");
  //   if (modeR === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "red";
  //     showAlert(": Red mode has been enabled.", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert(": Light mode has been enabled.", "success");
  //   }
  // };

  // const greenMode = () => {
  //   handleMultipleThemeState("green");
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "green";
  //     showAlert(": Green mode has been enabled.", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert(": Light mode has been enabled.", "success");
  //   }
  // };

  // const blueMode = () => {
  //   handleMultipleThemeState("blue");
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "blue";
  //     showAlert(": Blue mode has been enabled.", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert(": Light mode has been enabled.", "success");
  //   }
  // };

  return (
    <>
      <Navbar title="TextUtils" showAlert={showAlert} />
      <Alert alert={alert} />

      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            index
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
