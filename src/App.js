import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "ð": "Grinning Face",
  "ð": "Smiling Face With Heart-Eyes",
  "ð": "Smiling Face",
  "ð": "Winking Face With Tongue",
  "ð": "Neutral Face",
  "ð": "Unamused face",
  "ð": "Smiling Face with Horns",
  "ð": "Face with Tears of Joy",
  "ðĪĐ": "Star-Stuck",
  "ð": "Face blowing a kiss",
  "ð": "Face with  tongue",
  "ðĪŠ": "Zany Face"
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
