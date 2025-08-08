import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Thêm sản phẩm vào giỏ
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Kiểm tra sản phẩm đã có trong giỏ chưa
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        // Nếu có thì tăng số lượng
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Nếu chưa có thì thêm mới với quantity = 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Xoá sản phẩm khỏi giỏ
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Giảm số lượng sản phẩm trong giỏ
  const decreaseQuantity = (productId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // loại bỏ nếu số lượng = 0
    );
  };

  // Tổng số lượng sản phẩm trong giỏ
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      decreaseQuantity,
      totalItems,
    }}>
      {children}
    </CartContext.Provider>
  );
};
