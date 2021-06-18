import { Button, Input } from "antd";
import { RightOutlined } from "@ant-design/icons";

export default function RoomPortal() {
  return (
    <div className="portal-wrapper">
      <div className="box-back">
        <h3 className="rooms-title">Rooms</h3>
      </div>

      <div className="box-front">
        {/* <div className="front-content-wrapper"> */}
        <Button type="primary" className="create-btn">
          Create
        </Button>
        <p className="or-text">OR</p>

        <form name="basic" className="id-form">
          <div className="form-wrapper">
            <Input placeholder="Enter ID" className="id-input" />

            <Button type="primary" htmlType="submit" className="id-btn">
              <RightOutlined />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
