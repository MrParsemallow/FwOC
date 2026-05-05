import { Fragment, useState } from "react";
import "./App.css";
import BusinessCard from "./components/BusinessCard";
import ToDo from "./components/ToDo";
import Clock from "./components/Clock";
import UserDirectory from "./components/UserDirectory";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
    {/* The Navbar is there on every page, since it's outside the Routes */}
      <Navbar />

      <Routes>
        <Route path="/" element={<BusinessCard name="John Doe" company="McDonald's" />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/users" element={<UserDirectory />} />
      </Routes>
    </>

      // <BusinessCard name="John Doe" job="Software Engineer" />
      // <ToDo />
      // <Clock />
      // <UserDirectory />
  
  );
}

export default App;
