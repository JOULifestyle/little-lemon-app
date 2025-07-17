import { useEffect, useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

function BookingTable() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reservations') || '[]');
    setBookings(stored);
  }, []);

  if (bookings.length === 0) return <p>No bookings yet.</p>;

  return (
    <>
    <Header />
    <section className="booking-table-section" aria-label="Booking Table Section">
    <table className="booking-table">
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Date</th><th>Time</th>
          <th>Guests</th><th>Occasion</th><th>Note</th>
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
    </section>
    </>
  );

}

export default BookingTable;
