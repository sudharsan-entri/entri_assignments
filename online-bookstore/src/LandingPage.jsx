import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>BookWorld</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Your Favorite Books, All in One Place</h2>
        <p>Discover thousands of titles across all genres. Buy, read, and enjoy.</p>
        <button>Shop Now</button>
      </section>

      <section className="features" id="features">
        <div className="feature">
          <h3>Wide Selection</h3>
          <p>Over 10,000 titles including bestsellers, classics, and indie books.</p>
        </div>
        <div className="feature">
          <h3>Instant Delivery</h3>
          <p>Get eBooks instantly or fast shipping on paperbacks and hardcovers.</p>
        </div>
        <div className="feature">
          <h3>Member Discounts</h3>
          <p>Join our loyalty program and save up to 25% on every order.</p>
        </div>
      </section>

      <footer className="footer" id="contact">
        <p>&copy; 2025 BookWorld. All rights reserved.</p>
        <p>Contact: support@BookWorld.com</p>
      </footer>
    </div>
  );
}

export default LandingPage;
