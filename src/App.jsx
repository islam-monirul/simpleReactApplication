import React from "react";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header title="My React App" />
      <Content />
      <Footer />
    </div>
  );
};

export default App;