import React from "react";
import Navbar from "./components/Navbar";
import Img from "./components/Img";
import Why from "./components/Why";
import Box from "./components/pointers";
import What from "./components/What";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <Img />
      <Why />
      <Box />
      <What />
      <Dashboard />
    </div>
  );
}

export default App;
