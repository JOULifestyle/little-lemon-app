import Header from '../component/Header';
import Footer from '../component/Footer';
import BookingForm from '../component/BookingForm'; 
import MobileCarousel from '../component/MobileCarousel';
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../component/Main';

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Header />
      <section class="booking-section">
  <div class="booking-container">
    <div class="left-content">
      <h1>Reserve a Table</h1>
      <p>Make a reservation for your special event or just a night out. We’ll make it memorable!</p>

      <div class="image-group desktop-only">
        <img src="restaurant.jpg" alt="restaurant" />
        <img src="restaurant chef B.jpg" alt="restaurant chef" />
      </div>

      <div class="mobile-carousel mobile-only">
        <MobileCarousel />
      </div>
    </div>

    <div class="form-container">
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
          </div>
  </div>
</section>
      <Footer />
    </>
  );
}

export default BookingPage;
