import React from 'react';

const Header = ({ searchTerm, setSearchTerm, cartCount, onCartClick }) => {
  return (
    <>
      <div className="navbar">
        <div className="logo border">
          <span className="logo-text">Kidz Zone</span>
        </div>
        <div className="nav_add border">
          <pre style={{fontSize: 'smaller'}}>     Deliver to</pre>
          <div className="add_icon">
            <i className="fa-solid fa-location-dot"></i>
            <pre style={{fontSize: 'larger'}}><b> India</b></pre>
          </div>
        </div>
        <div className="nav_search">
          <select className="search_select">
            <option>All</option>
          </select>
          <input 
            placeholder="Search Amazon" 
            className="search_pannel"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="profile border">
          <pre> Hello, Sign in</pre>
          <select id="para2">
            <option>Accounts & Lists</option>
          </select>
        </div>
        <div className="Returns border">
          <pre>Returns</pre>
          <pre id="para3">& Orders</pre>
        </div>
        <div className="cart border" onClick={onCartClick}>
          <i className="fa-solid fa-cart-shopping"></i>
          <pre id="para3"> Cart ({cartCount})</pre>
        </div>
      </div>
      <div className="panel2">
        <div className="panel_all border">
          <i className="fa-solid fa-bars"></i>
          All
        </div>
        <div className="opt">
          <p className="border">Today's Deal</p>
          <p className="border">Customer Service</p>
          <p className="border">Registry</p>
          <p className="border">Gift Cards</p>
          <p className="border">Sell</p>
        </div>
        <div className="panel_deals border">
          Great deals on kids' items
        </div>
      </div>
    </>
  );
};

export default Header;
