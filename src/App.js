import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [addedProductName, setAddedProductName] = useState('');

  const products = [
    {
      id: 1,
      name: 'Toys & Games',
      image: '/images/toy.png',
      category: 'toys',
      price: 499,
      description: 'Fun and educational toys for kids of all ages',
      link: 'https://www.amazon.com/s?k=toys&crid=2E4VGG0Q7M5F8&sprefix=toys+%2Caps%2C487&ref=nb_sb_noss_2'
    },
    {
      id: 2,
      name: 'Food',
      image: '/images/food.png',
      category: 'food',
      price: 299,
      description: 'Nutritious and delicious baby food options',
      link: 'https://www.amazon.com/s?k=baby+food&crid=HCLSBZZ8G5XN&sprefix=baby+foo%2Caps%2C517&ref=nb_sb_noss_2'
    },
    {
      id: 3,
      name: 'Clothes',
      image: '/images/cloth.png',
      category: 'clothes',
      price: 799,
      description: 'Comfortable and stylish clothing for babies',
      link: 'https://www.amazon.com/s?k=baby+clothes&crid=2OO4SFJP52TSZ&sprefix=baby+clothes%2Caps%2C395&ref=nb_sb_noss_1'
    },
    {
      id: 4,
      name: 'Bath & Body Care',
      image: '/images/bath.png',
      category: 'bath',
      price: 299,
      description: 'Gentle bath and body care for babies',
      link: 'https://www.amazon.com/s?k=baby+bath+and+body+care&crid=367UNGUL0PVX&sprefix=baby+bath+and+body+care%2Caps%2C436&ref=nb_sb_noss_2'
    },
    {
      id: 5,
      name: 'Diapers & Hygiene',
      image: '/images/diper.jpg',
      category: 'hygiene',
      price: 199,
      description: 'Essential diapers and hygiene products',
      link: 'https://www.amazon.com/s?k=baby+dipers+and+hygiene&crid=2TGNAUP4Y078G&sprefix=baby+dipers+and+hygiene%2Caps%2C440&ref=nb_sb_noss'
    },
    {
      id: 6,
      name: 'Baby Essentials',
      image: '/images/essentials.png',
      category: 'essentials',
      price: 399,
      description: 'Must-have essentials for your baby',
      link: 'https://www.amazon.com/s?k=feeding+bottles&crid=2XFGIVMLH2LA7&sprefix=feeding+bottle%2Caps%2C364&ref=nb_sb_noss_1'
    },
    {
      id: 7,
      name: 'Health & Wellness',
      image: '/images/health.png',
      category: 'health',
      price: 199,
      description: 'Health and wellness products for babies',
      link: 'https://www.amazon.com/s?k=health+and+wellness+for+babies&crid=3PTA6P5I0R8PO&sprefix=health+and+wellness+for+babies%2Caps%2C656&ref=nb_sb_noss_2'
    },
    {
      id: 8,
      name: 'Furniture',
      image: '/images/furniture.png',
      category: 'furniture',
      price: 4999,
      description: 'Safe and comfortable furniture for babies',
      link: 'https://www.amazon.com/s?k=furnitures+for+babies&crid=31SFUKLGL3V6S&sprefix=furniture+for+babies%2Caps%2C544&ref=nb_sb_noss_1'
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    // Show popup message
    setAddedProductName(product.name);
    setShowAddedMessage(true);
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 2000);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  useEffect(() => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  }, [cartItems]);

  return (
    <div className="App">
      <Header 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        cartCount={cartCount}
        onCartClick={() => setShowCart(true)}
      />
      <Hero />
      <ProductGrid 
        products={filteredProducts}
        onProductClick={setSelectedProduct}
        onAddToCart={addToCart}
      />
      <Footer />
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
      
      {showCart && (
        <Cart
          items={cartItems}
          onClose={() => setShowCart(false)}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      )}
      
      {showAddedMessage && (
        <div className="popup-message">
          <div className="popup-content">
            <i className="fa-solid fa-check-circle"></i>
            <span>{addedProductName} added to cart!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
