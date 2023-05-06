import React from "react";

const Slot = ({ data, bookSlot }) => {
  return (
    <div
      className="slot p-4"
      onClick={() => bookSlot(data)}
      style={{ backgroundColor: `${data.occupied ? "green" : "white"}` }}
    >
      <p>
        {" "}
        {data.slot} {data.carNumber.length > 0 && `(${data.carNumber})`}
      </p>
      <p>{data.occupied && data.inTime}</p>
    </div>
  );
};

export default Slot;
