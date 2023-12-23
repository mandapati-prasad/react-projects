import React from "react";
import { Aboutus, Header, Menu, Chef, Findus, Footer, Gallery, Intro, Laurels } from "./containers/index";
import { Navbar } from "./components/index";
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutus />
      <Menu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
