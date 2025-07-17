import { Link } from 'react-router-dom';

import Header from '../component/Header';
import Footer from '../component/Footer';
function Confirmation() {
  return (
    <>
        <Header />
        <section className="confirmation-section" aria-label="Confirmation Section">
    <div className="confirmation-page">
      <h1>Reservation Confirmed ✅</h1>
      <p>Thank you for your reservation. We look forward to seeing you!</p>
      <Link to="/">Go back to homepage</Link>
    </div>
    </section>
    </>
  );
}

export default Confirmation;
