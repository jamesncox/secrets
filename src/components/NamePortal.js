import { useState } from "react";

export default function NamePortal({ id, setName }) {
  const [input, setInput] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
  };

  return (
    <div className="room-portal-wrapper">
      <div className="box-back-room">
        <h3 className="rooms-title">Welcome</h3>
      </div>

      <div className="box-front-room">
        <h4 className="teal-id-header">Room ID</h4>
        <p className="id-text">{id}</p>

        <form name="basic" className="id-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="teal-name-header">
            Your Name
          </label>
          <div className="name-input-wrapper">
            <input
              placeholder="i.e. Billie Jean"
              id="name"
              className="name-input"
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
