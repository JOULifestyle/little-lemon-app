function Footer() {
  return (
    <footer className="footer">
      <section className="footer-col logo-col">
        <img src="Little lemon darkmode.png" alt="Little Lemon Logo" className="footer-logo" />
      </section>

      <section className="footer-col">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </section>

      <section className="footer-col">
        <h3>Contact</h3>
        <ul>
          <li>Address: 123 Main Street, Chicago</li>
          <li>Phone: +1 234 567 890</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </section>

      <section className="footer-col">
        <h3>Social Media</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </section>

      {/* 👇 Add this copyright line */}
      <div className="footer-copyright">
        © {new Date().getFullYear()} Jou Lifestyle Inc.
      </div>
    </footer>
  );
}

export default Footer;
