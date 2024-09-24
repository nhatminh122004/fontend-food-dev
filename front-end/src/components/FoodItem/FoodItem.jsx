import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'; // Import đúng đường dẫn đến StoreContext

const FoodItem = ({ id, name, price, description, image }) => {
  
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

 
  const handleAddItem = () => {
    setItemCount((prev) => prev + 1);
    addToCart(id);  
  };

  const handleRemoveItem = () => {
    if (itemCount > 0) {
      setItemCount((prev) => Math.max(0, prev - 1));
      removeFromCart(id);  
    }
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />

        {!cartItems[id] ? (
          <img
            className='add'
            onClick={()=>addToCart(id)}
            src={assets.add_icon_white}
            alt="Add item"
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={()=>removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove item"
            />
            <p>{cartItems[id]}</p>
            <img
             onClick={()=>addToCart(id)}
              src={assets.add_icon_green}
              alt="Add item"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">
          {description}
        </p>
        <p className="food-item-price">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
