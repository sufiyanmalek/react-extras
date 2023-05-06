import { useState } from "react";
import "./App.css";
import FormModal from "./components/FormModal";
import Table from "./components/Table";
import { data } from "./data";

function App() {
  const [array, setArray] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [inSlot, setInSlot] = useState({});
  const occupiedSlots = () => {
    let count = 0;
    array.map((item) => {
      if (item.occupied == true) {
        count++;
      }
    });
    return count;
  };
  const emptySlots = () => {
    let count = 0;
    array.map((item) => {
      if (item.occupied == false) {
        count++;
      }
    });
    return count;
  };
  console.log(emptySlots());

  //handler on slot click
  const bookSlot = (slot) => {
    setInSlot({ ...slot });
    setShowForm(true);
  };

  //for taking form input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInSlot((prev) => ({ ...prev, [name]: value }));
  };

  //function for in
  const onIn = () => {
    console.log("in");
    const index = array.findIndex((e) => e.slot == inSlot.slot);
    array[index] = inSlot;
    array[index].occupied = true;
    setArray((prev) => [...prev]);
    console.log(array);
    console.log(index);
    setShowForm(false);
  };

  //function for out
  const onOut = () => {
    console.log("out");
    let date = new Date().toString().substring(0, 16) + inSlot.inTime;
    if (inSlot.inTime.length > 1) {
      let parkingTime = 0;
      parkingTime = new Date() - new Date(date);
      parkingTime = parseInt(parkingTime / 3600000);

      {
        parkingTime <= 1
          ? alert("Your Parking Cost Was: 20")
          : parkingTime > 1 && parkingTime < 4
          ? alert("Your Parking Cost Was: 40")
          : parkingTime > 4 && parkingTime < 6
          ? alert("Your Parking Cost Was: 100")
          : parkingTime > 6 && parkingTime < 8
          ? alert("Your Parking Cost Was: 200")
          : alert(`Your Parking Cost Was: ${parkingTime * 25}`);
      }
      console.log(parkingTime);
    }
    const defaultData = {
      slot: inSlot.slot,
      carNumber: "",
      inTime: "",
      occupied: false,
    };
    const index = array.findIndex((e) => e.slot == inSlot.slot);
    array[index] = defaultData;
    setInSlot({});
    setShowForm(false);
  };
  console.log(inSlot);
  return (
    <>
      <h1 className="text-center">Mall Parking System</h1>
      <div className="w-50 mx-auto mt-5 mb-2">
        <span className="me-5">
          <b>Total Allocated: </b>
          {occupiedSlots() + "     "}
        </span>
        <span>
          <b> Empty: </b>
          {emptySlots()}
        </span>
      </div>
      <Table array={array} bookSlot={bookSlot} />
      {showForm && (
        <FormModal
          slot={inSlot}
          handleChange={handleChange}
          onIn={onIn}
          onOut={onOut}
        />
      )}
    </>
  );
}

export default App;
