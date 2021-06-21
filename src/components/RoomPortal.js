import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function RoomPortal({ onIdSubmit }) {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(input);
  };

  const createRoomID = () => {
    onIdSubmit(uuidv4());
  };

  return (
    <div className="portal-wrapper">
      <div className="box-back">
        <h3 className="rooms-title">Rooms</h3>
      </div>

      <div className="box-front">
        <button type="primary" className="create-btn" onClick={createRoomID}>
          Create
        </button>
        <p className="or-text">OR</p>

        <form name="basic" className="id-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              placeholder="Enter ID"
              className="id-input"
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
