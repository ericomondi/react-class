// import React from "react";
// import ReactDOM from "react-dom/client";
// import TodoApp from "./components/TodoApp.tsx";
// import Home from "./components/Home.tsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Navbar from "./components/Navbar.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/todo",
//     element: <TodoApp />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <Navbar />
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./components/TodoApp.tsx";
import Home from "./components/Home.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ContacUS from "./components/ContactUS.tsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/contact-us" element={<ContacUS />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

