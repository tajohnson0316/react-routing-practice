import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Input from "./components/Input";
import InputsAndColors from "./components/InputsAndColors";

function App() {
  return (
    <fieldset>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:input" element={<Input />} />
        <Route
          path="/:message/:textColor/:background"
          element={<InputsAndColors />}
        />
      </Routes>
    </fieldset>
  );
}

export default App;
