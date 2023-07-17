import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>


            </BrowserRouter>
        </div>
    );
};

const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
