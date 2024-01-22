import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Product from "./product";
import About from "./about";
import db from "./products.json";
import ProductDetail from "./productdetail";
import Compare from "./compare";
import Home from "./home";
import Brand from "./brand";
import Listbrand from "./listbrand";
import BrandPage from "./brandpage";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCompare = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  const clearComparison = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="nen">
            <img src="/images/logont.png" alt="logo" />
          </div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-toggler-wrapper">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="vertical-menu">
                <Link to="/">Home</Link>
                <Link to="/product">Product</Link>
                <Link to="/listbrand">Brand</Link>
                <Link to="/compare">Compare</Link>
                <Link to="/about">About us</Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-9">
          <div className="content">
            <Routes>
            <Route path="/" element={<Home db={db} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element={<Home db={db} />} />
                    <Route path="/product/:productId" element={<ProductDetail data={db} onCompare={handleCompare} />} />
                    <Route
          path="/compare"
          element={<Compare selectedProducts={selectedProducts} clearComparison={clearComparison} />}
        />
                    <Route path="/product" element={<Product data={db} />} />
                    <Route path="/brand/:brandName" element={<Brand data={db} />} />
                    <Route path="/brandpage" exact element={<BrandPage />} />
                    <Route path="/listbrand" element={<Listbrand data={db} />} />

            </Routes>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer"></div>
      </footer>
    </div>
  );
}

export default App;
