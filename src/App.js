import About from "./component/About";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');   //Whether dark mode enabled or not.
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#193359";
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" About=" About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          <Switch>

            <Route exact path="/about">
              <About mode= {mode} />
            </Route>

            <Route exact path="/">
              <TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter , Character Counter , Remove extra spaces" mode={mode} />
            </Route>

          </Switch>

        </div>
      
      </Router>



    </>
  );
}

export default App;
