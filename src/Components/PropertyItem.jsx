import React from 'react';

export default function PropertyItem({ title, price, img }) {
  return (
    <div>
      <div className="item">
        <a href="property-details.html">
          <img src={img} alt="" />
        </a>
        <span className="category">Luxury Villa</span>
        <h6>{price}</h6>
        <h4>
          <a href="property-details.html">{title}</a>
        </h4>
        <ul>
          <li>
            Bedrooms: <span>8</span>
          </li>
          <li>
            Bathrooms: <span>8</span>
          </li>
          <li>
            Area: <span>545m²</span>
          </li>
          <li>
            Floor: <span>3</span>
          </li>
          <li>
            Parking: <span>6 spots</span>
          </li>
        </ul>
        <div className="main-button">
          <a href="property-details.html">Schedule a visit</a>
        </div>
      </div>
    </div>
  );
}
