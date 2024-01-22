import React from 'react';
import './compare.css';

function Compare({ selectedProducts, clearComparison }) {
  // Ensure only the first 3 selected products are considered for comparison
  const productsToCompare = selectedProducts.slice(0, 3);

  const handleClearComparison = () => {
    clearComparison();
  };

  const rows = [];
  for (let i = 0; i < productsToCompare.length; i += 3) {
    const productsInRow = productsToCompare.slice(i, i + 3);

    const row = (
      <div className="compare-container" key={i}>
        <h2 className="brand-title">COMPARE PRODUCT</h2>

        <div className="row">
          {productsInRow.map((product) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
              <div className="card mb-4">
                <img
                  src={process.env.PUBLIC_URL + product.image}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title product-name">{product.name}</h5>

                  <table className="compare-item-table table-responsive">
                    <tbody>
                      <tr>
                        <th>Brand:</th>
                        <td>{product.brand}</td>
                      </tr>
                      <tr>
                        <th>Price:</th>
                        <td>{product.price}</td>
                      </tr>
                      <tr>
                        <th>Material:</th>
                        <td>{product.material}</td>
                      </tr>
                      <tr>
                        <th>Size:</th>
                        <td>{product.Size}</td>
                      </tr>
                      <tr>
                        <th>Weight:</th>
                        <td>{product.Weight}</td>
                      </tr>
                      <tr>
                        <th>Color:</th>
                        <td>{product.Color}</td>
                      </tr>
                      <tr>
                        <th>Style:</th>
                        <td>{product.Style}</td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    rows.push(row);
  }

  return (
    <div className="compare-container">
      <button className="btn btn-danger" onClick={handleClearComparison}>
        Clear Comparison
      </button>
      {rows}
    </div>
  );
}

export default Compare;
