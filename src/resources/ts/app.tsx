import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
    return (
        <h1>Laravel × React</h1>
    );
};

const container = document.getElementById("app") as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);
