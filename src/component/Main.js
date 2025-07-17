import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../api';



// 1. Initialize available times using the API

export const initializeTimes = () => {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  return getFilteredTimes(today);
};


// 2. Reducer to update times based on selected date

export const updateTimes = (state, action) => {
  if (action.type === 'update') {
    return getFilteredTimes(action.date);
  }
  return state;
};

// 🔁 Helper function
function getFilteredTimes(dateString) {
  const dateObj = new Date(dateString); // 👈 Convert string to Date object
  const allTimes = fetchAPI(dateObj); // now fetchAPI gets a real Date

  const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");
  const reservedTimes = reservations
    .filter((res) => res.date === dateString)
    .map((res) => res.time);

  return allTimes.filter((t) => !reservedTimes.includes(t));
}

function Main() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return <main>
            {/* Hero Section */}
    <section aria-label="Hero Section">
    <div className="hero-left">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>We are family owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.</p>
      <Link to="/booking">
  <button>Reserve a Table</button>
</Link>
    </div>
     <div className="hero-right">
      <img src="restauranfood.jpg" alt="Chef holding Mediterranean food" />
    </div>
    </section>

    {/* Highlights Section */}
    <section aria-label="Weekly Specials">
      <div className="highlights-header">
      <h2>This weeks Specials!</h2>
      </div>
      <div className="highlights-buttons">
      <button>Online Menu</button>
      </div>
        <div className="highlights-wrapper">
      <div className="highlights">
        <article>
          <img src="greek salad.jpg" alt="Greek Salad" />
          <div className="dish-header">
  <h3>Greek Salad</h3>
  <span className="price">$12.99</span>
</div>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
         <a href="#" className="order-link">
  Order a delivery
  <span className="iconify delivery-icon" data-icon="ic:baseline-delivery-dining"></span>
</a>

        </article>
        <article>
          <img src="bruchetta.svg" alt="Bruschetta" />
          <div className="dish-header">
  <h3>Bruschetta</h3>
  <span className="price">$10.99</span>
</div>
          <p>Our Bruschetta is made from grilled bread, rubbed with garlic, then seasoned with salt and olive oil—simple, flavorful, and perfect as a light appetizer.</p>
          <a href="#" className="order-link">
  Order a delivery
  <span className="iconify delivery-icon" data-icon="ic:baseline-delivery-dining"></span>
</a>
        </article>
        <article>
          <img src="lemon dessert.jpg" alt="Lemon Dessert" />
           <div className="dish-header">
  <h3>Lemon Dessert </h3>
  <span className="price">$8.99</span>
</div>
          <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
         <a href="#" className="order-link">
  Order a delivery
  <span className="iconify delivery-icon" data-icon="ic:baseline-delivery-dining"></span>
</a>
        </article>
        <article>
          <img src="greek salad.jpg" alt="Greek Salad" />
          <div className="dish-header">
  <h3>Greek Salad</h3>
  <span className="price">$12.99</span>
</div>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <a href="#" className="order-link">
  Order a delivery
  <span className="iconify delivery-icon" data-icon="ic:baseline-delivery-dining"></span>
</a>
        </article>
      </div>
      </div>
    </section>
<section>
     <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
</section>
    {/* Testimonials Section  */}
    <section aria-label="Testimonials Section" className="testimonials-section">
  <h2>Testimonials</h2>
  <div className="testimonials-grid">
    <article className="testimonial">
      <div className="rating">⭐⭐⭐⭐⭐</div>
      <div className="user-info">
        <img src="happy customer 1.webp" alt="Customer 1" />
        <h4>David</h4>
      </div>
      <p>"Absolutely loved the food and the service!"</p>
    </article>

    <article className="testimonial">
      <div className="rating">⭐⭐⭐⭐</div>
      <div className="user-info">
        <img src="happy customer 2.jpg" alt="Customer 2" />
        <h4>Sarah</h4>
      </div>
      <p>"Great ambience and authentic Mediterranean flavors."</p>
    </article>

    <article className="testimonial">
      <div className="rating">⭐⭐⭐⭐⭐</div>
      <div className="user-info">
        <img src="happy customer 3.jpg" alt="Customer 3" />
        <h4>Emily</h4>
      </div>
      <p>"A delightful experience. Would definitely return!"</p>
    </article>
  </div>
</section>

    {/* About Section */}
    <section aria-label="About Section">
      <div className="about-text">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>Serving fresh Mediterranean dishes with a modern twist.</p>
      </div>
      <div className="about-images">
      <img src="Mario and Adrian A.jpg" alt="Photo of Adrian" className="img-back" />
      <img src="Mario and Adrian b.jpg" alt="Photo of Mario" className="img-front" />
      </div>
    </section>
    </main>
}

export default Main;