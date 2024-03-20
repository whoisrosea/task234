import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import LogoComponent from "./components/LogoComponent/LogoComponent";
import RestarauntCardScroll from "./components/RestarauntCardScroll/RestarauntCardScroll";
import Footer from "./components/Footer/Footer";
import ShareComponent from "./components/ShareComponent/ShareComponent";

function App() {
  return (
    <>
      <Header />
      <LogoComponent />
      <ShareComponent/>
      <RestarauntCardScroll/>
      <Footer/>
    </>
  );
}

export default App;
