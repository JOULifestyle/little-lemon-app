import Header from '../component/Header';
import Footer from '../component/Footer';
import BookingForm from '../component/BookingForm'; 
import { useReducer } from 'react';
import { initializeTimes, updateTimes } from '../component/Main';

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
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
          <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default BookingPage;
