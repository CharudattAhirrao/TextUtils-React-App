import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
    };

    const clear = () => {
        setText("");
    };

    const handleOnChange = (event) => {
        console.log("OnChange");
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

                <div className="d-flex justify-content-evenly my-2">
                    <button className="btn btn-dark" onClick={handleUpperCase}>
                        Convert to UpperCase
                    </button>

                    <button className="btn btn-dark" onClick={handleLowerCase}>
                        Convert to LowerCase
                    </button>

                    <button className="btn btn-dark" onClick={removeExtraSpaces}>
                        Remove Extra Spaces
                    </button>

                    <button className="btn btn-dark" onClick={copyText}>
                        Copy Text
                    </button>

                    <button className="btn btn-dark" onClick={clear}>
                        Clear
                    </button>
                </div>
                <div className="container text-center my-5 " >
                    <h3>Your Text Summery</h3>
                    <p>
                        {text.split(" ").filter((element)=>{return element.length!==0}).length} Words | {text.length}{" "}
                        Characters
                    </p>
                    <p>{text.split(" ").length * 0.008} Minutes to read </p>
                </div>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to Preview it here"}</p>
            </div>
        </>
    );
}
