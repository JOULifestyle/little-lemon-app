import Header from '../component/Header';
import Footer from '../component/Footer';
import { Icon } from '@iconify/react';

function BookingPage() {
  return (
    <>
      <Header />
    <section className="booking-section" aria-label="Booking Section">
      <div className="booking-overlay">
        <div className="booking-content">
          <div className="booking-text">
            <h2>Reserve a Table</h2>
            <p>
              Make a reservation for your special event or just a night out. We’ll make it memorable!
            </p>
          </div>
          <form className="booking-form">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="example@email.com" required />

            <label htmlFor="date">Reservation Date</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="time">Time</label>
            <input type="time" id="time" name="time" required />

            <label htmlFor="guests">Number of Guests</label>
            <input type="number" id="guests" name="guests" min="1" max="20" required />

            <label htmlFor="occasion">
              <Icon icon="la:glass-cheers" style={{ color: '#008000', marginLeft: '0.5rem' }} />  
              Select Occasion
            </label>
            <select
              id="occasion"
              name="occasion"
              onChange={(e) => {
                const el = e.target;
                if (el.value !== 'none') {
                  el.style.backgroundColor = '#495E57';
                  el.style.color = '#fff';
                } else {
                  el.style.backgroundColor = '';
                  el.style.color = '';
                }
              }}
            >
              <option value="none">
                Occasion
              </option>
              <option value="birthday">Birthday</option>
              <option value="engagement">Engagement</option>
              <option value="anniversary">Anniversary</option>
              <option value="other">Other</option>
            </select>

            <label for="note">Short Message</label>
<textarea id="note" name="note" placeholder="Add a short note..."></textarea>
            <button type="submit">Book Table</button>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default BookingPage;
