import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';      
import BookingPage from './pages/BookingPage';
import Confirmation from './pages/Confirmation';
import BookingTable from './pages/BookingTable';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
       <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/booking-table" element={<BookingTable />} />
    </Routes>
  );
}

export default App;
