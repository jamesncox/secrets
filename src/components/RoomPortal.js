import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function RoomPortal({ setId }) {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length === 36) {
      setId(input);
      setInput("");
    }
  };

  const createRoomID = () => {
    setId(uuidv4());
  };

  return (
    <div className="room-portal-wrapper">
      <div className="box-back-room">
        <h3 className="rooms-title">Rooms</h3>
      </div>

      <div className="box-front-room">
        <button type="primary" className="create-btn" onClick={createRoomID}>
          Create
        </button>
        <p className="or-text">OR</p>

        <form name="basic" className="id-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              placeholder="Enter ID"
              className="id-input"
              value={input}
              onChange={handleOnChange}
            />

            <button className="id-btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
