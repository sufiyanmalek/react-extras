import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExamStartPage from "./pages/ExamStartPage";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    let data = await axios.get("/data.json");
    setData(data.data);
  };
  console.log(data);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExamStartPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
