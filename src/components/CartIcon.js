// src/components/CartIcon.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <div
      onClick={() => navigate('/cart')}
      style={{
        position: 'fixed',
        top: 100,
        right: 20,
        cursor: 'pointer',
        zIndex: 1000,
        color: '#007bff',
      }}
      title="Xem giỏ hàng"
    >
      <FaShoppingCart size={30} />
      {totalItems > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -5,
            right: -5,
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 7px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
