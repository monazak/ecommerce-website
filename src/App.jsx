import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopHeader from './components/TopHeader'
import {useState} from 'react'
import Checkout from "./pages/Checkout";
import ProductDetailes from "./pages/ProductDetailes";
import { CartProvider } from "./context/CartContext";


export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <CartProvider>  
      <div className="min-h-screen flex flex-col ">
        <TopHeader/>
        <Header cartCount={0} onToggleSidebar={toggleSidebar} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/productDetailes" element={<ProductDetailes />} />
          </Routes>
        </main>
        <Footer/>
      </div>
      </CartProvider>
    </Router>
  );
}
