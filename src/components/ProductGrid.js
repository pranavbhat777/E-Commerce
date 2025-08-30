import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductClick, onAddToCart }) => {
  return (
    <div className="shopping">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={onProductClick}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
