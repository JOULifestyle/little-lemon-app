import React, { useState } from "react";
import Footer from "../component/Footer";


const menuItems = [
  { id: 1, name: "Greek Salad", price: 12.99, image: "greek salad.jpg" },
  { id: 2, name: "Bruschetta", price: 5.99, image: "bruchetta.svg" },
  { id: 3, name: "Lemon Dessert", price: 6.99, image: "lemon dessert.jpg" },
  { id: 4, name: "Grilled Fish", price: 18.99, image: "Grilled-Fish.jpg" },
  { id: 5, name: "Pasta Carbonara", price: 14.99, image: "Pasta-Carbonara-recetas.jpg" },
];

const OrderOnlinePage = () => {
  const [cart, setCart] = useState({});

  const handleQuantityChange = (id, quantity) => {
    setCart((prev) => ({
      ...prev,
      [id]: quantity,
    }));
  };

  const calculateTotal = () => {
    return menuItems.reduce((total, item) => {
      const qty = cart[item.id] || 0;
      return total + item.price * qty;
    }, 0);
  };

  return (
    <>
    <div className="order-page">
      <h1>Order Online</h1>
      <p>Select your favorite meals and checkout easily 🍋</p>

      <div className="menu-list">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-cards">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              min="0"
              value={cart[item.id] || 0}
              onChange={(e) =>
                handleQuantityChange(item.id, parseInt(e.target.value) || 0)
              }
            />
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${calculateTotal()}</h2>
        <a
          href="https://buy.stripe.com/test_8x27sL0tA8dUcoV1RsfEk02"
          target="_blank"
          rel="noopener noreferrer"
          className="checkout-btn"
        >
          Checkout
        </a>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default OrderOnlinePage;
