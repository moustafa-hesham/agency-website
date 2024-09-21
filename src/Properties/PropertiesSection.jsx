import React from 'react';
import PropertyItem from '../Components/PropertyItem';

export default function PropertiesSection() {
  return (
    <div>
      <div className="section properties">
        <div className="container">
          <ul className="properties-filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">
                Show All
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".adv">
                Apartment
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".str">
                Villa House
              </a>
            </li>
            <li>
              <a href="#!" data-filter=".rac">
                Penthouse
              </a>
            </li>
          </ul>
          <div className="row properties-box">
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-01.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-02.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv rac">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-03.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 str">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-04.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-05.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-06.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac str">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-01.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-02.jpg'}
              />
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 rac adv">
              <PropertyItem
                title={'18 New Street Miami, OR 97219'}
                price={'$2,264,000'}
                img={'assets/images/property-03.jpg'}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="pagination">
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a className="is_active" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">{'>>'}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
