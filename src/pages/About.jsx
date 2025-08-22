import React from "react";
import Footer from "../component/Footer";

function AboutPage() {
  return (
    <>
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          At <strong>Little Lemon</strong>, we believe in serving fresh,
          delicious, and authentic meals that bring people together.  
          Our mission is simple: quality ingredients, warm hospitality, and
          unforgettable flavors.
        </p>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-texts">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, Little Lemon started as a small family-owned
            restaurant with a passion for homemade recipes. Over the years, we
            have grown into a community favorite, known for our fresh
            ingredients and welcoming atmosphere.
          </p>
        </div>
        <div className="about-image">
          <img
            src="Mario and Adrian b.jpg"
            alt="Our restaurant"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Chefs</h2>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="Mario and Adrian A.jpg"
              alt="Chef 1"
            />
            <h3>Chef Mario</h3>
            <p> Chef specializing in Mediterranean cuisine.</p>
          </div>
          <div className="team-member">
            <img
              src="restaurant chef B.jpg"
              alt="Chef 2"
            />
            <h3>Chef Adrian</h3>
            <p>Chef known for creative desserts and pastries.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default AboutPage;
