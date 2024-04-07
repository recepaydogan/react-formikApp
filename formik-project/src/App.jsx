import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainForm from "./components/MainForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainForm />} />
        {/* <Route path="" element={} /> */}
      </Routes>
    </>
  );
}

export default App;
