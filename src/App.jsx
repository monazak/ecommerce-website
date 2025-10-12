import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopHeader from './components/TopHeader'
import {useState} from 'react'
import React from "react";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col ">
        <TopHeader/>
        <Header cartCount={0} onToggleSidebar={toggleSidebar} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}
