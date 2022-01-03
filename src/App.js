import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😀": "Grinning Face",
  "😍": "Smiling Face With Heart-Eyes",
  "😊": "Smiling Face",
  "😜": "Winking Face With Tongue",
  "😐": "Neutral Face",
  "😒": "Unamused face",
  "😈": "Smiling Face with Horns",
  "😂": "Face with Tears of Joy",
  "🤩": "Star-Stuck",
  "😘": "Face blowing a kiss",
  "😛": "Face with  tongue",
  "🤪": "Zany Face"
};
const emojiDictionaryArr = Object.keys(emojiDictionary);
export default function App() {
  const [emoji, setEmoji] = useState("");
  //const [a, upEmoji] = useState("jszhx");

  function onChangeHandler(event) {
    var gettingEmoji = event.target.value;
    //console.log(emojiDictionary.hasOwnProperty(gettingEmoji));
    if (emojiDictionary.hasOwnProperty(gettingEmoji)) {
      //   console.log(Object.hasOwnProperty(gettingEmoji));
      //console.log(emojiDictionary[gettingEmoji]);
      setEmoji(emojiDictionary[gettingEmoji]);
    }
  }
  function mouseEnterHandler(emoji) {
    setEmoji(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>
        Emoji <span style={{ color: "blue" }}>Interpreter</span>
      </h1>
      <input
        placeholder="Enter the emoji to get name"
        onChange={onChangeHandler}
      />
      <br />
      <br />
      <div> {emoji}</div>
      <h2>Emoji We know</h2>
      <div>
        {emojiDictionaryArr.map((emoji) => {
          return (
            <span
              className="emoji"
              onMouseMove={() => {
                mouseEnterHandler(emoji);
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
