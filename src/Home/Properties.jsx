import React from 'react';
import PropertyItem from '../Components/PropertyItem';

export default function Properties() {
  return (
    <div>
      <div className="properties section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Properties</h6>
                <h2>We Provide The Best Property You Like</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-01.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PropertyItem
                title={'54 Mid Street Florida, OR 27001'}
                price={'$1,321,000'}
                img={'assets/images/property-02.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PropertyItem
                title={'26 Old Street Miami, OR 38540'}
                price={'$5,229,000'}
                img={'assets/images/property-03.jpg'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
