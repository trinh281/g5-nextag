import React from "react";
import "./about.css";

function About(props) {
  return (
    <div className="nenaboutus">
      <div className="container">
        <div className="heading">
          <h1>About Us</h1>
          <p>Elegance in Every Bag, Style in Every Step</p>
        </div>
        <section className="about row custom-about">
          <div className="col-md-6 about-image">
            <img src="./images/anhbia_aboutus.jpg" alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-6 about-content">
            <h2>Welcome to [NEXTAG]</h2>
            <p>
              Confidence and elegance - that's what a beautiful handbag gives
              you. Explore our amazing handbag collection today
            </p>
            <p>
              Our commitment is to offer a diverse range of products,
              including [product categories], that meet the needs and
              preferences of our valued customers. Whether you're looking for
              the latest trends or timeless classics, we've got you covered
            </p>
            <p>
              At [NEXTAG], customer satisfaction is our top priority. Our
              dedicated team is here to assist you with any inquiries or
              concerns you may have. We strive to build lasting relationships
              with our customers by delivering exceptional service and
              top-notch products.
            </p>
            <a href="product" className="read-more">
              Read More
            </a>
          </div>
          <div className="row">
            <div className="heading col-md-12">
              <h2>Our Design Team</h2>
              <p>
                Meet our talented design team who brings creativity and
                innovation to every project....
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src="./images/tv1.png" alt="Team Member 1" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="./images/tv2.png" alt="Team Member 2" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="./images/tv3.png" alt="Team Member 3" className="img-fluid" />
            </div>
            <div className="col-md-3">
              <img src="./images/tv4.png" alt="Team Member 4" className="img-fluid" />
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div id="footer" className="about-footer">
          {/* eslint-disable-next-line */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.297446587927!2d106.65599726809879!3d10.786450243371844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f631cb7c4b7%3A0xd152d83450f68d15!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1705653560363!5m2!1svi!2s"
            className="location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="box">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <p>Quality products to customers</p>
          </div>
          <div className="box">
            <h3>CONTENT</h3>
            <ul className="quick-menu">
              <div className="item">
                <a href="home">Home page</a>
              </div>
              <div className="item">
                <a href="product">Product</a>
              </div>
              <div className="item">
                <a href="blog">Blog</a>
              </div>
              <div className="item">
                <a href="contact">Contact</a>
              </div>
            </ul>
          </div>
          <div className="box">
            <h3>Contact</h3>
            <form action="">
              <input type="text" placeholder="Email address" />
              <button>Receive news</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
