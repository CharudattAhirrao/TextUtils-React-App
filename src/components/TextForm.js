import React, { useState } from "react";

export default function TextForm(props) {
    
    document.title = props.pageTitle;
    
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
<<<<<<< HEAD
        props.showAlert("Converted to UpperCase...", "success");
=======
        props.showAlert("Converted to UpperCase...", "success")
>>>>>>> d483d23d5978b2cd89c7dca31d4d0c792753fa09
    };

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
<<<<<<< HEAD
        props.showAlert("Converted to LowerCase...", "success");
=======
        props.showAlert("Converted to LowerCase...", "success")

>>>>>>> d483d23d5978b2cd89c7dca31d4d0c792753fa09
    };

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
<<<<<<< HEAD
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces...", "success");
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard...", "success");
=======
        setText(newText.join(" "))
        props.showAlert("Revoved Extra Spaces...", "success")

    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Coppied to Clipboard...", "success")

>>>>>>> d483d23d5978b2cd89c7dca31d4d0c792753fa09
    };

    const clear = () => {
        setText("");
<<<<<<< HEAD
        props.showAlert("Textbox Cleared...", "success");
=======
        props.showAlert("Text Cleared...", "success")

>>>>>>> d483d23d5978b2cd89c7dca31d4d0c792753fa09
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="myBox"
                    rows="8"
                    value={text}
                    placeholder="Enter Your Text Here"
                    onChange={handleOnChange}
                ></textarea>

                <div className="d-flex flex-wrap justify-content-evenly my-2">
                    <button
                        className="btn btn-dark my-2"
                        onClick={handleUpperCase}
                    >
                        Convert to UpperCase
                    </button>

                    <button
                        className="btn btn-dark my-2"
                        onClick={handleLowerCase}
                    >
                        Convert to LowerCase
                    </button>

                    <button
                        className="btn btn-dark my-2"
                        onClick={removeExtraSpaces}
                    >
                        Remove Extra Spaces
                    </button>

                    <button className="btn btn-dark my-2" onClick={copyText}>
                        Copy Text
                    </button>

                    <button className="btn btn-dark my-2" onClick={clear}>
                        Clear
                    </button>
                </div>
<<<<<<< HEAD

                <div
                    className={`card mx-auto my-3 text-bg-${props.mode} text-center`}
                    style={{ width: "18rem" }}
                >
                    <div className="card-body">
                        <h5 className="card-title">Your Text Summery</h5>
                        <p className="card-text">
                            {
                                text.split(" ").filter((element) => {
                                    return element.length !== 0;
                                }).length
                            }{" "}
                            Words | {text.length} Characters
                        </p>
                        <p className="card-text">
                            {text.split(" ").filter((element) => {
                                return element.length !== 0;
                            }).length * 0.008}{" "}
                            Minutes to read{" "}
                        </p>
                    </div>
=======
                <div className="container text-center my-5 " >
                    <h3>Your Text Summery</h3>
                    <p>
                        {text.split(" ").filter((element) => { return element.length !== 0 }).length} Words | {text.length}{" "}
                        Characters
                    </p>
                    <p>{text.split(" ").length * 0.008} Minutes to read </p>
>>>>>>> d483d23d5978b2cd89c7dca31d4d0c792753fa09
                </div>

                <h3>Preview</h3>
                <p>
                    {text.length > 0
                        ? text
                        : "Enter something to Preview it here"}
                </p>
            </div>
        </>
    );
}
