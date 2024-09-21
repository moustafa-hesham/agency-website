import React from 'react';

export default function Heading({ title }) {
  return (
    <div>
      <div class="page-heading header-text">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <span class="breadcrumb">
                <a href="#">Home</a> / {title}
              </span>
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
