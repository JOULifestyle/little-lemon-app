import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { Link } from 'react-router-dom';

function BookingTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reservations') || '[]');
    setBookings(stored);
  }, []);

  return (
    <>
      <Header />
      <section className="booking-table-section" aria-label="Booking Table Section">
        {bookings.length === 0 ? (
          <div className="no-bookings-message">
            <p>No bookings yet.</p>
            <Link to="/booking">
              <button className="booking-button">Reserve a Table</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="booking-header">
              <h2>Your Reservations</h2>
              <Link to="/booking">
                <button className="booking-button">Reserve a Table</button>
              </Link>
            </div>

            {/* Table View for Desktop */}
            <div className="table-container">
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Guests</th>
                    <th>Occasion</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b, i) => (
                    <tr key={i}>
                      <td>{b.name}</td>
                      <td>{b.email}</td>
                      <td>{b.date}</td>
                      <td>{b.time}</td>
                      <td>{b.guests}</td>
                      <td>{b.occasion}</td>
                      <td>{b.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card View for Mobile */}
            <div className="booking-list">
              {bookings.map((b, i) => (
                <div className="booking-card" key={i}>
                  <p><strong>Name:</strong> {b.name}</p>
                  <p><strong>Email:</strong> {b.email}</p>
                  <p><strong>Date:</strong> {b.date}</p>
                  <p><strong>Time:</strong> {b.time}</p>
                  <p><strong>Guests:</strong> {b.guests}</p>
                  <p><strong>Occasion:</strong> {b.occasion}</p>
                  <p><strong>Note:</strong> {b.note}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
}

export default BookingTable;
