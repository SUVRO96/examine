import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Header from "./components/shared/Header";
import Dashboard from "./components/student/Dashboard";
import Examprogress from "./components/student/Examprogress";
import Examresults from "./components/student/Examresults";
import Examstart from "./components/student/Examstart";
import QsAdd from "./components/teacher/QsAdd";
import QsEdit from "./components/teacher/QsEdit";
import QsList from "./components/teacher/QsList";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/examstart" element={<Examstart />} />
          <Route path="/examprogress" element={<Examprogress />} />
          <Route path="/examresult" element={<Examresults />} />
          <Route path="/qslist" element={<QsList />} />
          <Route path="/qsadd" element={<QsAdd />} />
          <Route path="/qsedit/:id" element={<QsEdit />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
