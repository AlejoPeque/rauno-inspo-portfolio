import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import Dock from "./components/Dock/Dock";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Projects from "./pages/Projects/Projects";
import Photos from "./pages/Photos/Photos";
import Post from "./pages/Post/Post";

function App() {
  const location = useLocation();
  return (
    <>
      <Dock />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
