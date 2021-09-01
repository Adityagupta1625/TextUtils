import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
  };
  setTimeout(() => {
    showAlert(null, null);
  }, 4000);

  const toggleMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      showAlert("Dark Mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
      // Document.title="TextUtils-dark";
     
    } 
    else {
      setDarkMode("light");
      showAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor = "white";

      // just for reference: 
      // setInterval(() => {
      //   Document.title="it is amazing";
      // }, 2000);
      // setInterval(() => {
      //   Document.title="it is must install";
      // }, 2000);
      // Document.title="TextUtils-light";
    }
   
  };
  return (
    <>
    <Router>
      <Navbar
        title="Textutils"
        mode={darkMode}
        toggleMode={toggleMode}
      ></Navbar>
      <Alert alert={alert}></Alert>
      <Switch>
        <Route exact path="/">
        
        <TextForm
            heading="Enter the text to analyze"
            mode={darkMode}
            showAlert={showAlert}
          ></TextForm>
        </Route>
        <Route exact path="/about" >
        <About mode={darkMode}/>
          
        </Route>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
