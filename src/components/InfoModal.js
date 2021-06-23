import { useRef, useState, useEffect } from "react";
import Popup from "reactjs-popup";

export default function InfoModal({ id, name }) {
  const idRef = useRef(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  const copyToClipBoard = (e) => {
    let r = document.createRange();
    r.selectNode(idRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  const Modal = () => (
    <Popup
      trigger={
        <button className="info-btn">
          <div className="info-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="users-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </button>
      }
      modal
    >
      <div>
        <div className="copy-id-wrapper">
          <h3 className="room-id">Room ID</h3>
          <button
            className="copy-btn"
            type="button"
            aria-label={!copySuccess ? "To Copy" : "Copied Success"}
            onClick={copyToClipBoard}
          >
            {!copySuccess ? (
              <>
                Copy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="copy-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </>
            ) : (
              <>
                <span className="copied-span">Copied!</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="copied-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
        <p className="id-text" ref={idRef}>
          {id}
        </p>
      </div>
    </Popup>
  );
  return Modal();
}
