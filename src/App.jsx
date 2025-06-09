import React from "react";

import { Header, Navbar, Blog } from "./Contents";
import { Button, Footer } from "./Containers";

function App() {
  return (
    <div className="bg-blue-200">
      <Navbar />
      <Header />
      <Button />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
