import React from "react";
import Login from './components/login'
import Signup from './components/signup'
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
    {/* <Home /> */}
  </>
  );
}

export default App;
