import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [Data, setData] = useState({ Rows: [{ AlreadyBooked: [] }] });
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get("http://localhost:5173/data.json");
    setData(data.data);
    console.log(data.data);
  };

  const ArraySet = (start, end) => {
    let RowArray = [];
    for (let index = start; index <= end; index++) {
      RowArray.push(index);
    }
    console.log(RowArray);
    return RowArray;
  };

  let BookedArray = [];

  const ManageBooking = (row, index) => {
    setSelected([...selected, index]);
    if (row == 1 || row == 2 || row == 3) {
      setPrice(price + 300);
    } else if (row == 4) {
      setPrice(price + 350);
    } else if (row == 5) {
      setPrice(price + 400);
    } else if (row == 6) {
      setPrice(price + 450);
    }
    console.log("Ypur Total Amount Is : ", price);
  };

  return (
    <>
      <table>
        <tbody>
          {Data.Rows.map((e) => {
            const Data = ArraySet(e.Start, e.End);
            BookedArray = [...BookedArray, ...e.AlreadyBooked];
            return (
              <tr>
                {Data.map((w) => {
                  return (
                    <td
                      className={`slot ${
                        e.AlreadyBooked.includes(w) ? `Booked` : null
                      } ${selected.includes(w) ? `selected` : null}`}
                      onClick={() =>
                        BookedArray.includes(w)
                          ? alert("Seat Already Booked..")
                          : selected.includes(w)
                          ? alert(
                              "Seat Already Selected, Please Choose Other Seat"
                            )
                          : ManageBooking(e.row, w)
                      }
                    >
                      {w}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="Summary">
        <tbody>
          <tr>
            <td>
              <strong>MovieName</strong>
            </td>
            <td>Dhamaka</td>
          </tr>
          <tr>
            <td>
              <strong>NoofBookedSeat</strong>
            </td>
            <td>{selected.length}</td>
          </tr>
          <tr>
            <td>
              <strong>Total Amount</strong>
            </td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>
              <strong>Tax&nbsp;</strong>
            </td>
            <td>{price * 0.2} (20% of the movie price)</td>
          </tr>
          <tr>
            <td>
              <strong>Total Payable Amount</strong>
            </td>
            <td>{price + price * 0.2}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
