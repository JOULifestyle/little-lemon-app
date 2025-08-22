import React from "react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";


const Menu = () => {
  const dishes = [
    { name: "Greek Salad", price: "$12.99", img: "greek salad.jpg" },
    { name: "Bruschetta", price: "$5.99", img: "bruchetta.svg" },
    { name: "Grilled Fish", price: "$18.99", img: "Grilled-Fish.jpg" },
    { name: "Pasta Carbonara", price: "$14.99", img: "Pasta-Carbonara-recetas.jpg" },
    { name: "Lemon Dessert", price: "$6.99", img: "lemon dessert.jpg" },
  ];

  return (
    <>
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1>
      <h3>Experience the taste of our exquisite delicacies.</h3>
      <div className="order-now">
      <p>Would you like your order delivered to your doorstep?</p> 
      <div className="highlights-buttons">
        <Link to="/order">
        <button>Order Now</button>
        </Link>
      </div>
        </div>
      <div className="menu-grid">
        {dishes.map((dish, index) => (
          <div className="menu-card" key={index}>
            <img src={dish.img} alt={dish.name} className="menu-img" />
            <h3 className="menu-name">{dish.name}</h3>
            <p className="menu-price">{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Menu;
