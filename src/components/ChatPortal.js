import { useState, useRef, useEffect } from "react";

export default function ChatPortal({ id, name, setName }) {
  const [input, setInput] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [input]);

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-portal-wrapper">
      <div className="id-name-wrapper">
        <button className="show-id-btn">Room ID</button>
        <p className="display-name">Hi, {name}</p>
      </div>
      <div className="box-back-chat">
        <p className="receive-bubble receive-carrot">
          You know I have to tell her! She is going to blame me and I have plans
          tonight!
        </p>
        <p className="receive-name">Stacie</p>
        <p className="send-bubble send-carrot">
          I was teaching my friend how to twerk and we accidentally knocked over
          mom’s favorite lamp 😭😭😭
        </p>
        <p className="send-name">You</p>
        <p className="receive-bubble receive-carrot">
          What happened to the lamp?
        </p>
        <p className="receive-name">Stacie</p>
        <p className="send-bubble send-carrot">
          Ooookay. You can always ask me anything and I promise I won't get mad,
          but now I'm kind of worried.
        </p>
        <p className="send-name">You</p>
        <p className="receive-bubble receive-carrot">
          Before you get mad, I've got to ask you something, but promise you
          won't get mad at me!
        </p>
        <p className="receive-name">Stacie</p>
      </div>

      <form name="basic" className="message-form">
        <div className="message-wrapper">
          <textarea
            placeholder="Your message..."
            className="id-input"
            value={input}
            onChange={handleOnChange}
            ref={textareaRef}
            // value={currentValue}
          />
          <button className="send-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
