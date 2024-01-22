import React from 'react';
import { Link } from 'react-router-dom';

function BrandPage({ products }) {
  const uniqueBrands = Array.from(new Set(products.map(product => product.brand)));

  return (
    <div>
      <h1>List of Brands</h1>
      <ul>
        {uniqueBrands.map(brand => (
          <li key={brand}>
            <Link to={`/brand/${brand}`}>
              <img src={`images/${brand}.jpg`} alt={brand} />
              <p>{brand}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrandPage;
