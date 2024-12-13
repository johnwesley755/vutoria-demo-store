import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart"; // Cart component
import ProductPage from "./pages/Product"; // ProductPage component
import Header from "./components/Header"; // Header component
import Footer from "./components/Footer"; // Footer component
import WomensCollection from "./components/Layer"; // Women's Collection page (Layer component)
import Spotlight from "./components/Spotlight"; // Spotlight component
import CartDetail from "./components/CartDetail";
import { CartProvider } from "./components/CartContext"; // Import CartProvider
import Mens from "./pages/Mens";
import  ProductGrid  from "./components/ProductGrid";
import  TryOnModal  from "./components/TryOnModel";
import { products }  from "./data/products";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
const App = () => {
  // State for Try-On functionality
  const [tryOnState, setTryOnState] = useState({
    isActive: false,
    selectedProduct: null,
  });

  const handleTryOn = (product) => {
    setTryOnState({
      isActive: true,
      selectedProduct: product,
    });
  };

  const handleCloseTryOn = () => {
    setTryOnState({
      isActive: false,
      selectedProduct: null,
    });
  };

  return (
    <CartProvider>
      {/* Wrapping the app with CartProvider */}
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Header Component */}
          <Header
            onTryOnClick={() =>
              setTryOnState({ ...tryOnState, isActive: true })
            }
          />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              {/* Home page */}
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <ProductGrid products={products} onTryOn={handleTryOn} />
                  </>
                }
              />
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
              <Route path="/mens" element={<Mens />} />
              <Route path="/womens" element={<Womens />} />
              <Route path="/kids" element={<Kids />} />
            </Routes>
          </main>

          {/* Footer Component */}
          <Footer />
        </div>
      </Router>

      {/* Try-On Modal */}
      <TryOnModal
        isOpen={tryOnState.isActive}
        onClose={handleCloseTryOn}
        selectedProduct={tryOnState.selectedProduct}
      />
    </CartProvider>
  );
};

export default App;
