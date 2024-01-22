import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from './products.json';

function Brand() {
  const { brandName } = useParams();
  const brandProducts = productsData.filter((product) => product.brand === brandName);

  return (
    <div className="brand-contain">
      <h2 className="brand-title">{brandName} Products</h2>
      <div className="brand-body">
        <div className="brand-grid">
          {brandProducts.map((product) => (
            <div key={product.id} className="brand-card">
              <img className="brand-image" src={product.image} alt={product.name} />
              <div className="brand-details">
                <p className="brand-name">Tên: {product.name}</p>
                <p className="brand-price">Giá: {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Brand;
