
import { useEffect, useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { submitAPI } from '../api';
import { useNavigate, useLocation } from 'react-router-dom';

function BookingForm({ availableTimes = [], dispatch }) {
  const location = useLocation();
  const { bookingIndex, bookingData } = location.state || {};

  const [name, setName] = useState(bookingData?.name || '');
  const [email, setEmail] = useState(bookingData?.email || '');
  const [date, setDate] = useState(bookingData?.date || '');
  const [time, setTime] = useState(bookingData?.time || '');
  const [guests, setGuests] = useState(bookingData?.guests || 1);
  const [occasion, setOccasion] = useState(bookingData?.occasion || 'none');
  const [note, setNote] = useState(bookingData?.note || '');

  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];

  // If editing, load times for booking’s date on mount
  useEffect(() => {
    if (bookingData?.date) {
      dispatch?.({ type: 'update', date: bookingData.date });
    }
  }, [bookingData?.date, dispatch]);

  // Filtered times with all rules
  const filteredTimes = useMemo(() => {
    if (!date) return availableTimes;

    const now = new Date();
    const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');

    return (availableTimes || []).filter((t) => {
      // Always allow current booking’s own time if editing
      if (bookingIndex !== undefined && bookingData?.time === t) return true;

      // Exclude already reserved by others for same date
      const isBooked = reservations.some(
        (r, i) => r.date === date && r.time === t && i !== bookingIndex
      );
      if (isBooked) return false;

      // Exclude past times if booking for today
      if (date === today) {
        const [h, m] = t.split(':').map(Number);
        const slot = new Date();
        slot.setHours(h, m, 0, 0);
        if (slot <= now) return false;
      }

      return true;
    });
  }, [availableTimes, date, bookingIndex, bookingData?.time, today]);

 useEffect(() => {
  if (bookingIndex !== undefined) {
    // Don’t clear the time when editing
    return;
  }
  if (time && !filteredTimes.includes(time)) {
    setTime('');
  }
}, [date, filteredTimes, time, bookingIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, date, time, guests, occasion, note };

    const success = submitAPI(formData); // simulated API
    if (!success) {
      alert('Submission failed. Try again.');
      return;
    }

    const prev = JSON.parse(localStorage.getItem('reservations') || '[]');
    if (bookingIndex !== undefined) {
      prev[bookingIndex] = formData; // update existing
      localStorage.setItem('reservations', JSON.stringify(prev));
      navigate('/booking-table');
    } else {
      prev.push(formData); 
      localStorage.setItem('reservations', JSON.stringify(prev));
      navigate('/confirmation');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />

      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@email.com"
        required
      />

      <label htmlFor="date">Reservation Date</label>
      <input
        type="date"
        id="date"
        value={date}
        min={today}
        onChange={(e) => {
          const selected = e.target.value;
          setDate(selected);
          dispatch?.({ type: 'update', date: selected });
        }}
        required
      />

      <label htmlFor="time">Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select time</option>
        {filteredTimes.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of Guests</label>
      <input
        type="number"
        id="guests"
        value={guests}
        min="1"
        max="20"
        onChange={(e) => setGuests(e.target.value)}
        required
      />

      <label htmlFor="occasion">
        <Icon icon="la:glass-cheers" style={{ color: '#008000', marginLeft: '0.5rem' }} />
        Select Occasion
      </label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="none">Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="engagement">Engagement</option>
        <option value="anniversary">Anniversary</option>
        <option value="other">Other</option>
      </select>

      <label htmlFor="note">Short Message</label>
      <textarea
        id="note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a short note..."
      />

      <button type="submit">{bookingIndex !== undefined ? 'Update Reservation' : 'Make Your Reservation'}
      </button>
    </form>
  );
}

export default BookingForm;
