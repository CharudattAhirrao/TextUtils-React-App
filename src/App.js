import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState} from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({ message: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#222831";
            document.body.style.color = "#fff";
            let mybox = document.getElementById("myBox");
            mybox.style.backgroundColor = "#222831";
            mybox.style.color = "#ffffff";
            showAlert("Dark Mode has been enabled...", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "#000";
            let mybox = document.getElementById("myBox");
            mybox.style.backgroundColor = "#fff";
            mybox.style.color = "#000";
            showAlert("Light Mode has been enabled...", "success");
        }
    };

    

    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

                <Alert alert={alert} mode={mode} />
                <div className="container p-5 my-3">
                    <Routes>
                        <Route
                            exact
                            path="/TextUtils-React-App"
                            element={
                                <div className="container my-3">
                                    <TextForm
                                        heading="Enter the text to analyze"
                                        showAlert={showAlert}
                                        mode={mode}
                                        pageTitle = "TextUtils - Home"
                                    />
                                </div>
                            }
                        />
                        <Route exact path="/about" element={<About pageTitle = {"TextUtils - About"}/>} />
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
