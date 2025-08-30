import React from 'react';

const Cart = ({ items, onClose, onRemoveItem, onUpdateQuantity }) => {
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="cart-close" onClick={onClose}>
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty-cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <h3>{item.name}</h3>
                      <p className="cart-item-price">₹{item.price}</p>
                    </div>
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemoveItem(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-footer">
                <div className="cart-total">
                  <h3>Total: ₹{totalPrice.toFixed(0)}</h3>
                </div>
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
