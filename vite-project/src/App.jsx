import { Fragment, useState } from "react";
import "./App.css";
import BusinessCard from "./components/BusinessCard";
import ToDo from "./components/ToDo";


function App() {
  return (
    <>
      <BusinessCard name="John Doe" job="Software Engineer" />
      <ToDo />
    </>
  );
}

export default App;
