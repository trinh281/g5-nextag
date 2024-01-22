import React from 'react';
import productsData from "./products.json";
import { Link } from 'react-router-dom';
import './App.css';

function Listbrand() {
  const productsByBrand = {};
  productsData.forEach(product => {
    if (!productsByBrand[product.brand]) {
      productsByBrand[product.brand] = [];
    }
    productsByBrand[product.brand].push(product);
  });

  return (
    <div className="brand-container">
      {Object.keys(productsByBrand).map(brandName => (
        <div key={brandName} className="mb-5"> {/* Thaydoi */}
          <h2 className="brand-title">{brandName} Products</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> {/* Thaydoi */}
            {productsByBrand[brandName].map(product => (
              <div key={product.id} className="col">
                <div className="card h-100"> {/* Thaydoi */}
                  <Link to={`/product/${product.id}`} className="text-decoration-none">

                    <img src={product.image} alt={product.name} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title product-name">{product.name}</h5>
                      <p className="card-text">{product.price}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listbrand;
