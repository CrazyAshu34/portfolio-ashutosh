import React from 'react';
import "./AboutUs.css"
const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>Welcome to Our Company</h1>
      <p>
        We are a passionate team dedicated to delivering high-quality products and services.
        Our mission is to make a positive impact on the world through innovation and excellence.
      </p>

      <h2>Our Story</h2>
      <p>
        Founded in [year], our company has been on a journey to [describe your company's history and values].
      </p>

      <h2>Meet the Team</h2>
      <div className="team-members">
        <div className="member">
          <img src="john.jpg" alt="John Doe" />
          <h3>John Doe</h3>
          <p>Co-Founder & CEO</p>
        </div>

        <div className="member">
          <img src="jane.jpg" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Co-Founder & CTO</p>
        </div>

        {/* Add more team members as needed */}
      </div>

      <h2>Contact Us</h2>
      <p>
        Have questions or want to get in touch? Feel free to contact us at <a href="mailto:info@example.com">info@example.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
