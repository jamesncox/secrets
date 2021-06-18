import { Button, Input } from "antd";

export default function RoomPortal() {
  return (
    <div className="portal-wrapper">
      <div className="box-back">
        <h3 className="rooms-title">Rooms</h3>
      </div>

      <div className="box-front">
        <Button type="primary" className="create-btn">
          Create
        </Button>
        <p className="or-text">OR</p>

        <form name="basic" className="id-form">
          <div className="input-wrapper">
            <Input placeholder="Enter ID" className="id-input" />

            <Button type="primary" htmlType="submit" className="id-btn">
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
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
