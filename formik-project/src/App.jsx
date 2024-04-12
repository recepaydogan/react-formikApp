import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainForm from "./components/MainForm";
import PortalForm from "./components/PortalForm";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </>
  );
}

export default App;
