import "./App.css";
import Tree from "./components/Tree";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Tree data={data} />
    </>
  );
}

export default App;
