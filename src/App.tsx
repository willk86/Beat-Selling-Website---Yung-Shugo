import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Beats from "./pages/Beats";
import Socials from "./pages/Socials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beats" element={<Beats />} />
          <Route path="socials" element={<Socials />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
