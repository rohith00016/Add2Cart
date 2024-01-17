// ProductCard.js
import React, { useState } from 'react';
import { BsStarFill } from 'react-icons/bs';

const ProductCard = ({
  imageSrc,
  name,
  price,
  sale,
  rating,
  addToCartLink,
  viewOptionsLink,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
    onAddToCart();
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    onRemoveFromCart();
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<BsStarFill key={i} className="text-warning" />);
    }
    return stars;
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={imageSrc} alt="Product" />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{name}</h5>
            <span>{price}</span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {sale && <div className="badge bg-dark text-white position-absolute top-0 start-0">Sale</div>}
            {rating && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                {renderStars()}
              </div>
            )}
            {isInCart ? (
              <button className="btn btn-outline-dark mt-auto" onClick={handleRemoveFromCart}>
                Remove from cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
