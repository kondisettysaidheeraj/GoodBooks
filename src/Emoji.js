import React from "react";
import { useState } from "react";
const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
  /** add some more to show how the app now expands when there's new data */
};
const eKeys = Object.keys(emojiDictionary);
function Emoji() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(e) {
    var a = e.target.value;
    console.log(a);
    setEmoji(a);

    if (a in emojiDictionary) {
      setMeaning(emojiDictionary[a]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }
  function emojiClickHandler(b) {
    setMeaning(emojiDictionary[b]);
  }
  return (
    <div>
      <h1>Emoji Detercor</h1>
      <input
        placeholder="Enter a emoji"
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
        onChange={changeHandler}
        value={emoji}
      />

      {/* </input> */}

      <h3> {meaning} </h3>
      <h3>{emoji}</h3>
      {eKeys.map((emoji, i) => (
        <span
          //   key={i}
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}

export default Emoji;
