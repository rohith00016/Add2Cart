// ProductList.js
import React from 'react';
import ProductCard from './Productcard';

const ProductList = ({ products, onAddToCart, onRemoveFromCart }) => {


  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} 
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
