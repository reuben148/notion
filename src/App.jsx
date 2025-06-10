import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import { Header, Navbar, Blog } from "./Contents";
import { Button, Footer } from "./Containers";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Button />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
