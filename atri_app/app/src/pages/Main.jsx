import React from "react";
import Nav from "./Navbar";
import Maincard from "./Maincard";
import Menucard from "./Menucard";
import About from "./About";
import "../page-css/main.css";
export default function Main() {
  return (
    <>
      <Nav />
      <Maincard />
      <Menucard />
      <About />
    </>
  );
}
