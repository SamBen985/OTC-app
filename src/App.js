import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Crypto from "./pages/Crypto";
import CryptoDetails from "./components/CryptoDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/crypto" element={<Crypto />}>
          <Route path=":coinId" element={<CryptoDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
