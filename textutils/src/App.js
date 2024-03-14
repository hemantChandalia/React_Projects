import { useState } from "react";
import "./App.css";
import About from "./components/About";
// import Navbar from "./components/Navbar.1";
import Navbar from "./components/Navbar.H";
import TextForm from "./components/TextForm.H";
// import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color = "white !important";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black !important";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        showAlert={showAlert}
        mode={mode}
        toggleMode={toggleMode}
      />
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
