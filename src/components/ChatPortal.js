import { useState } from "react";

export default function ChatPortal() {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-portal-wrapper">
      <button className="show-id-btn">Room ID</button>
      <div className="box-back-chat"></div>
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
