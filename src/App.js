import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';      // ✅ You must create this
import BookingPage from './pages/BookingPage'; // ✅ You must create this

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
}

export default App;
