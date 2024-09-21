import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <NavLink to="/" className="logo">
                  <h1>Villa</h1>
                </NavLink>
                {/* <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/properties">Properties</NavLink>
                  </li>
                  <li>
                    <NavLink to="/details">Property Details</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">
                      <i className="fa fa-calendar"></i> Schedule a visit
                    </a>
                  </li>
                </ul>
                <NavLink className="menu-trigger">
                  <span>Menu</span>
                </NavLink>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
