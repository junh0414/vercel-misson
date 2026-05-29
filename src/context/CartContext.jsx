
import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [storeInfo, setStoreInfo] = useState(null);

  const addItem = (menu, store) => {
    // 다른 가게 메뉴 담으려고 할 때
    if (storeInfo && storeInfo.id !== store.id) {
      const ok = window.confirm('다른 가게 메뉴가 있어요. 초기화하고 담을까요?');
      if (!ok) return;
      setCartItems([]);
      setStoreInfo(null);
    }

    setStoreInfo(store);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === menu.id);
      if (existing) {
        return prev.map((item) =>
          item.id === menu.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...menu, quantity: 1 }];
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setStoreInfo(null);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, storeInfo, addItem, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}