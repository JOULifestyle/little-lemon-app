import { useState } from 'react';
import { Icon } from '@iconify/react';
import { submitAPI } from '../api'; // Ensure path is correct
import { useNavigate } from 'react-router-dom';

function BookingForm({ availableTimes = [], dispatch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('none');
  const [note, setNote] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, date, time, guests, occasion, note };

    const success = submitAPI(formData); // Simulated API

    if (success) {
      alert("Reservation submitted successfully!");
      const prev = JSON.parse(localStorage.getItem("reservations") || "[]");
      localStorage.setItem("reservations", JSON.stringify([...prev, formData]));


      // Optionally redirect or refresh table
       navigate('/confirmation'); // Redirect to confirmation page
    } else {
      alert("Submission failed. Try again.");
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
        onChange={(e) => {
          const selected = e.target.value;
          setDate(selected);
          dispatch({ type: 'update', date: selected }); // Calls fetchAPI in reducer
        }}
        required
      />

      <label htmlFor="time">Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          const el = e.target;
          if (el.value !== 'None') {
            el.style.backgroundColor = '#495E57';
            el.style.color = '#fff';
          } else {
            el.style.backgroundColor = '';
            el.style.color = '';
          }
        }}
        required
      >
        <option value="None">Select time</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
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
        onChange={(e) => {
          setOccasion(e.target.value);
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

      <button type="submit">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;
