import React from "react";

const FormModal = ({ slot, handleChange, onIn, onOut }) => {
  return (
    <div className="formModal">
      <div className="formContainer p-3 rounded rounded-2 text-center">
        <form action="#">
          <h5 className="text-center mt-0">Book Slot : {slot.slot} </h5>
          <label htmlFor="carNumber">Car Number:</label>
          <input
            className="ms-2 my-2 p-2"
            type="text"
            name="carNumber"
            id="carNumber"
            placeholder="GJ 05 AJ 1022"
            value={slot.carNumber || ""}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="inTime">In Time:</label>
          <input
            className="ms-2 p-2 my-2 w-75"
            type="time"
            name="inTime"
            id="inTime"
            value={slot.inTime || ""}
            onChange={handleChange}
          />
          <br />
          <div className="mt-3">
            <button
              type="button"
              onClick={onIn}
              className="btn btn-success p-2  w-25 mx-2"
            >
              In
            </button>
            <button
              type="button"
              onClick={onOut}
              className="btn btn-danger  p-2 w-25 mx-2"
            >
              Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
