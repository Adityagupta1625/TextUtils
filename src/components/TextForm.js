import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState("");
  // text="new text" wrong way to change state
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handledownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleclearText = () => {
    if (window.confirm("Do you want to Clear Text!")) {
      let newText = "";
      setText(newText);
      props.showAlert("Cleared Text", "success");
    }
  };
  const handlePunc = () => {
    let punctuation = '!"#$%&()*+,:[;<=>?@^_`{|}~]/';
    let rawLetters = text.split("");
    var cleanLetters = rawLetters.filter(function (letter) {
      return punctuation.indexOf(letter) === -1;
    });
    let newText = cleanLetters.join("");
    setText(newText);
    props.showAlert("Removed Punctutations", "success");
  };
  const handleCopy = () => {
    var t = document.getElementById("myBox");
    navigator.clipboard.writeText(t.value);
    props.showAlert("Copied Text", "success");
  };
  const handleRemoveExtraSpaces = () => {
    let rawLetters = text.split("  ");
    let newText = rawLetters.join("");
    setText(newText);
    props.showAlert("Removed ExtraSpaces", "success");
  };
  // const capitalize = (word)=>{
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // }
  const handleCaptlizetext=()=>{
    let t=text;
    let words=t.split(" ");
    let finalText=" ";
    for(let i=0;i<words.length;i++){

      let lower=words[i].toLowerCase();
      lower=lower.charAt(0).toUpperCase()+lower.slice(1);
      finalText=finalText+" "+lower;
    }
    
    setText(finalText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handledownClick}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>

        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handlePunc}
          disabled={text.length === 0}
        >
          Remove Punctution
        </button>
        <button
          className="btn btn-primary mx-1  my-1"
          onClick={handleRemoveExtraSpaces}
          disabled={text.length === 0}
        >
          RemoveExtraSpaces
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCaptlizetext}
          disabled={text.length === 0}
        >
          Captalized First
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
          disabled={text.length === 0}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleclearText}
          disabled={text.length === 0}
        >
          ClearText
        </button>
        
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text Summary</h1>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes it will take to read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
