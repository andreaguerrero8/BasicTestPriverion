import React, { useEffect, useState } from "react";
import axios from "axios";
import FormCreate from "./components/FormCreate";
import List from "./components/List";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbars from "./components/Navbars";
import "./styles/style.css"
import Editar from "./components/Editar";

const App = () => {
  return (
    <Router>
      <Navbars></Navbars>
      <div
        className="container row"
        style={{
          width: "90%",
          display: "flex",
          justifyContent: "space-between",
          margin: "0 auto",
          marginTop: "3%",
        }}
      >
        <Routes>
          <Route path="/create" element={<FormCreate />} />
          <Route path="/" element={<List />} />
          <Route path="/edit" element={<Editar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
