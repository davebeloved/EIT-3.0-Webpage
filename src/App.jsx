import React, { useState } from "react";
import Eit2025 from "./page/Eit2025";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const [navScroll, setNavScroll] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 20) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);
  return (
    <div>
      <NavBar navScroll={navScroll} />
      {/* <Routes>
        <Route path="/" element={<Eit2025 />} />
      </Routes> */}
      <Eit2025 />
      <Footer />
    </div>
  );
};

export default App;
