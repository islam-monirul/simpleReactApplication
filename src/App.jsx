import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import "./assets/css/App.css";

const App = () => {
  return (
    <div>
      <Header title="Simple React Application" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
