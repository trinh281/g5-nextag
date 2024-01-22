import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Product({ data }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState(data);

  function handleSearchKeywordChange(event) {
    setSearchKeyword(event.target.value);
  }

  function performSearch() {
    const filteredResults = data.filter((product) => {
      const brandMatch = product.brand.toLowerCase().includes(searchKeyword.toLowerCase());
      const keywordMatch = product.name.toLowerCase().includes(searchKeyword.toLowerCase());
      return brandMatch || keywordMatch;
    });

    setSearchResults(filteredResults);
  }

  function handleSearchKeyPress(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      performSearch();
    }
  }

  const rows = [];
  for (let i = 0; i < searchResults.length; i += 3) {
    const productsInRow = searchResults.slice(i, i + 3);
    const row = (
      <div className="row row-cols-1 row-cols-md-3 g-4" key={i}>
        {productsInRow.map((x) => (
          <div className="col" key={x.id}>
            <div className="card mb-4">
              <Link to={`/product/${x.id}`}>
                <img src={x.image} alt={x.name} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title product-name">{x.name}</h5>
                  <p className="card-text">{x.price}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
    rows.push(row);
  }

  return (
    <div className="nenofproduct">
      <div>
        <div className="nen">
          <img src="logont.png" alt=" " />
        </div>
        <header id="header" className="row">
          <div className="wrapper clearfix">
            <div className="top-bar clearfix">
              <div id="nav" role="main">
                <form
                  action="res.php3"
                  method="get"
                  id="topsearch"
                >
                  <div className="search-box">
                    <input
                      type="text"
                      className="search-input"
                      placeholder="Search"
                      value={searchKeyword}
                      onChange={handleSearchKeywordChange}
                      onKeyPress={handleSearchKeyPress}
                    />
                    <i className=""></i>
                  </div>
                  <span id="quick-search-button">
                    <input
                      type="submit"
                      value="🔍"
                      onClick={(e) => {
                        e.preventDefault();
                        performSearch();
                      }}
                    />
                    <i className="head-icon icomoon-liga icon-search-left"></i>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </header>
        <div className="container">{rows}</div>
      </div>
      <footer>
        <div id="footer">
          {/* eslint-disable-next-line */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.297446587927!2d106.65599726809879!3d10.786450243371844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f631cb7c4b7%3A0xd152d83450f68d15!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1705653560363!5m2!1svi!2s"
            width="300"
            height="250"
            style={{ border: '0' }}
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

export default Product;
