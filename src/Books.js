import React from "react";
import { useState } from "react";
const bookData = {
  Javascript: ["Eloquent JavaScript ", " You Don't Know JS 5.5"],
  jsrateing: ["3.4/5", "4.5/5"],
  react: [" Shiva Trilogy ", " Harry Potter and the Sorcerer's Stone "],
  rerateing: ["4.5/5", "3.8/5"],
  nodejs: ["Never Split the Difference ", "Loonshots"],
  ndrateing: ["3.5/5", "3.8/5"]
};

function Book() {
  const [msg1, setMsg1] = useState(" Book names will be displayed here ");
  const [msg2, setMsg2] = useState(" ");

  function setting1() {
    setMsg1(bookData.Javascript[1]);
    setMsg2(bookData.jsrateing[1]);
  }
  function setting2() {
    setMsg1(bookData.react[0]);
    setMsg2(bookData.rerateing[0]);
  }
  function setting3() {
    setMsg1(bookData.nodejs[1]);
    setMsg2(bookData.ndrateing[1]);
  }

  return (
    <div>
      <div>
        <h1> Good books </h1>
        <p> Checkout my favorite books. Select a genre to get started</p>
        <button onClick={setting1}> Java script</button>&nbsp;&nbsp;&nbsp;
        <button onClick={setting2}> react </button>&nbsp;&nbsp;&nbsp;
        <button onClick={setting3}> Node Js </button>
        <br />
        <br />
        <br />
      </div>
      <div
        style={{
          border: "2px  solid grey",
          backgroundColor: " rgb(212,222,222)",
          borderRadius: "10px",
          paddingTop: "20px",
          paddingBottom: "20px"
        }}
      >
        {msg1}

        <br />
        {msg2}
      </div>
    </div>
  );
}

export default Book;
