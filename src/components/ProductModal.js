import React from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fa-solid fa-times"></i>
        </button>
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="modal-info">
            <h2>{product.name}</h2>
            <p className="modal-price">Starting from ₹{product.price}</p>
            <p className="modal-description">{product.description}</p>
            <div className="modal-features">
              <h3>Features:</h3>
              <ul>
                <li>High quality materials</li>
                <li>Safe for children</li>
                <li>Easy to clean</li>
                <li>Durable construction</li>
              </ul>
            </div>
            <div className="modal-actions">
              <button className="add-to-cart-modal-btn" onClick={handleAddToCart}>
                Add to Cart - ₹{product.price}
              </button>
              <a 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="amazon-link-btn"
              >
                View on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
