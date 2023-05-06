import React from "react";
import Slot from "./Slot";

const Table = ({ array, bookSlot }) => {
  return (
    <div className="w-50 mx-auto  row">
      {array.map((item) => {
        return <Slot key={item.slot} data={item} bookSlot={bookSlot} />;
      })}
    </div>
  );
};

export default Table;
