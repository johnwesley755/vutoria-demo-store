import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home component
import Cart from "./components/Cart"; // Cart component
import ProductPage from "./pages/Product"; // ProductPage component
import Header from "./components/Header"; // Header component
import Footer from "./components/Footer"; // Footer component
import WomensCollection from "./components/Layer"; // Women's Collection page (Layer component)
import Spotlight from "./components/Spotlight"; // Spotlight component
import CartDetail from "./components/CartDetail";
import { CartProvider } from "./components/CartContext"; // Import CartProvider

const App = () => {
  return (
    <CartProvider>
      {" "}
      {/* Wrapping the app with CartProvider */}
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header Component */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              {/* Home page */}
              <Route path="/" element={<Home />} />
              <Route path="/spotlight" element={<Spotlight />} />

              {/* Cart page */}
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart-detail" element={<CartDetail />} />

              {/* Product details page */}
              <Route path="/product/:id" element={<ProductPage />} />

              {/* Women's Collection page */}
              <Route path="/womens-collection" element={<WomensCollection />} />

              {/* 404 Fallback route */}
              <Route
                path="*"
                element={
                  <h1 className="text-center mt-12 text-2xl">
                    404: Page Not Found
                  </h1>
                }
              />
            </Routes>
          </main>

          {/* Footer Component */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
