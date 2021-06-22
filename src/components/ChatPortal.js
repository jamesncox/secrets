import { useState } from "react";

export default function ChatPortal() {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-portal-wrapper">
      <button className="show-id-btn">Room ID</button>
      <div className="box-back-chat">
        <p className="receive-bubble">
          You know I have to tell her! She is going to blame me and I have plans
          tonight!
        </p>
        <p className="send-bubble">
          I was teaching my friend how to twerk and we accidentally knocked over
          mom’s favorite lamp 😭😭😭
        </p>

        <p className="receive-bubble">Hey what happened to the lamp?</p>
      </div>
      <form name="basic" className="message-form">
        <div className="input-wrapper">
          <input
            placeholder="Your message..."
            className="id-input"
            value={input}
            onChange={handleOnChange}
          />

          <button className="send-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
