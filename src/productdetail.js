import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './productdetail.css';

function ProductDetail({ data, onCompare }) {
  const { productId } = useParams();
  const selectedProduct = data.find((product) => product.id === productId);

  const [showMore, setShowMore] = useState(false);

  const handleCompareClick = () => {
    onCompare(selectedProduct);
  };

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={process.env.PUBLIC_URL + selectedProduct.image} alt={selectedProduct.name} className="product-image" />
      <div className='product-info'>
      <h2 className="product-name">{selectedProduct.name}</h2>
      <p className="product-price">Price: {selectedProduct.price}</p>

      {showMore && (
        <div className="product-attributes">
          <p>Material: {selectedProduct.material}</p>
          <p>Size: {selectedProduct.Size}</p>
          <p>Weight: {selectedProduct.Weight}</p>
          <p>Color: {selectedProduct.Color}</p>
          <p>Style: {selectedProduct.Style}</p>
        </div>
      )}
      <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}>
  {showMore ? 'Hide Details' : 'Show More Details'}
</button>
<Link to="/compare">
  <button className="btn btn-success" onClick={handleCompareClick}>
    Compare
  </button>
</Link>
    </div>
    </div>
  );
}

export default ProductDetail;
