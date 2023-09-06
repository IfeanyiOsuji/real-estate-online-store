
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";

import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import AppContextProvider from "./context/AppContext";






export default function App() {

  return (
    <AppContextProvider>
      <div className="content">
        <Header />
        <main>
        <Routes>
        <Route path="/" element={<h1>Hi Welcome to Ifeanyi's Online store</h1>}/>
        <Route path="/:category" element={<Products />}/>
        <Route path="/:category/:id" element={<Detail/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        </Routes>
        </main>
      </div>
      <Footer />
    </AppContextProvider>
  );
}
