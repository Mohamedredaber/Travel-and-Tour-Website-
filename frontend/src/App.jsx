import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
