import { Button } from "antd";

export default function RoomPortal() {
  return (
    <>
      <div className="box-back">
        <h3 className="rooms-title">Rooms</h3>
      </div>
      <div className="box-front">
        <Button type="primary" className="create-btn">
          Create
        </Button>
      </div>
    </>
  );
}
