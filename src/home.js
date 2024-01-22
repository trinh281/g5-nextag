import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


function Home() {
  const brands = [
    { name: 'Louis Vuitton', image: 'images/LV1.jpg' },
    { name: 'Dior', image: 'images/Dior1.jpg' },
    { name: 'Gucci', image: 'images/Gucci1.jpg' },
    { name: 'Chanel', image: 'images/Chanel1.jpg' },
    { name: 'Prada', image: 'images/Prada1.jpg' },
  ];

  return (
    <div className="headerofhome">
      <div id="wrapper">
        <div id="header">
          <Link to="/" className="logo">
            <img className="biahome" src="./images/biahome.jpg" alt="" />
          </Link>
          

          <div id="menu">
            <div className="item">
              <Link to="/">Home</Link>
            </div>
            <div className="item">
              <Link to="/product">Product</Link>
            </div>
          </div>
          <div id="actions"></div>
        </div>
      </div>
      <div id="banner">
      
        <div className="box-left">
          <h2>
            <span>FASHION</span>
            <br />
            <span> High-Class</span>
          </h2>
          <blockquote>
Fashion is not simply a fashion trend but a distinctive expression, supported by the fashion industry that is often associated with seasons and collections.
</blockquote>

<Link to="/product"> {/* Chuyển hướng đến trang Product */}
            <button>BUY</button>
          </Link>
        </div>
      
      </div>
      <div id="wp-products">
        <h2>Brand</h2>
        <div id="list-products">
          {brands.map((brand, index) => (
            <div className="item" key={index}>
            <Link to={`/brand/${brand.name}`}>
          <img src={`images/${brand.name}.brand.jpg`} alt="" width="250" height="300" className="picsp" />
        </Link>
              <div className="name">{brand.name}</div>
              <div className="desc">NEW</div>
            </div>
          ))}
        </div>
      </div>
      <div id="saleoff">
        <div className="box-left">
          <h1>
            <span>UP TO</span>
            <span>45%</span>
          </h1>
        </div>
        <div className="box-right">
          <img src="images/nenhome2.jpg" alt="" />
        </div>
      </div>
      <footer>
        <div id="footer">
        {/*  eslint-disable-next-line */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.297446587927!2d106.65599726809879!3d10.786450243371844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f631cb7c4b7%3A0xd152d83450f68d15!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1705653560363!5m2!1svi!2s" className="location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <div className="box">
           
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

export default Home;
