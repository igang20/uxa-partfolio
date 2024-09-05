import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router";
import HomePage from "./components/Sections/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
