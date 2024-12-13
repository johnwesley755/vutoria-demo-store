import React, { useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import ProductPage from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WomensCollection from "./components/Layer";
import Spotlight from "./components/Spotlight";
import CartDetail from "./components/CartDetail";
import { CartProvider } from "./components/CartContext";
import Mens from "./pages/Mens";
import ProductGrid from "./components/ProductGrid";
import TryOnModal from "./components/TryOnModel";
import { products } from "./data/products";
import Womens from "./pages/Womens";
import Kids from "./pages/Kids";
import Login from "./components/Login";
import Signup from "./components/Signup";

// Authentication Context
const AuthContext = createContext();

// Custom hook to use AuthContext
const useAuth = () => useContext(AuthContext);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App = () => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  // State for Try-On functionality
  const [tryOnState, setTryOnState] = useState({
    isActive: false,
    selectedProduct: null,
  });

  const handleTryOn = (product) => {
    setTryOnState({ isActive: true, selectedProduct: product });
  };

  const handleCloseTryOn = () => {
    setTryOnState({ isActive: false, selectedProduct: null });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow">
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login onLogin={login} />} />
                <Route path="/signup" element={<Signup />} />

                {/* Protected Routes */}
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                      <ProductGrid products={products} onTryOn={handleTryOn} />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/spotlight"
                  element={
                    <ProtectedRoute>
                      <Spotlight />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart-detail"
                  element={
                    <ProtectedRoute>
                      <CartDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <ProtectedRoute>
                      <ProductPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/womens-collection"
                  element={
                    <ProtectedRoute>
                      <WomensCollection />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/mens"
                  element={
                    <ProtectedRoute>
                      <Mens />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/womens"
                  element={
                    <ProtectedRoute>
                      <Womens />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/kids"
                  element={
                    <ProtectedRoute>
                      <Kids />
                    </ProtectedRoute>
                  }
                />

                {/* 404 Fallback */}
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

            {/* Footer */}
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
    </AuthContext.Provider>
  );
};

export default App;
