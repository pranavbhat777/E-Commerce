import React from 'react';

const ProductCard = ({ product, onProductClick, onAddToCart }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div className="box" onClick={() => onProductClick(product)}>
      <div className="box-content">
        <h2>{product.name}</h2>
        <div 
          className="product-image"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <div className="product-info">
          <p className="price">Starting from ₹{product.price}</p>
          <p className="description">{product.description}</p>
        </div>
        <div className="product-actions">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <a 
            href={product.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="see-more-link"
            onClick={(e) => e.stopPropagation()}
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
