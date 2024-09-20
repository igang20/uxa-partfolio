import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router";
import HomePage from "./components/Sections/HomePage/HomePage";
import AboutPage from "./components/Sections/AboutPage/AboutPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
