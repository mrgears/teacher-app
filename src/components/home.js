import React from "react";
import "./home.css";
import Cards from "./Cards";
import Nav from "./nav";
function home() {
  return (
    <>
      <Nav />
      <div class="container my-3">
        <div class="row">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default home;
