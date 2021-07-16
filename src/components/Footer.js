import React from "react";
import { FaAmazonPay } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3> Get to know us </h3>
              <ul>
                <li> About us </li>
                <li> Careers </li>
                <li> Press Releases </li>
                <li> Gift a Smile </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3> Connect with Us </h3>
              <ul>
                <li> Facebook </li>
                <li> Twitter </li>
                <li> Instagram </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3> Make Money with Us </h3>
              <ul>
                <li>Sell on Amazon </li>
                <li> Amazon Global Selling </li>
                <li> Fulfilment by Amazon</li>
                <li> Amazon Pay on Merchants </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3> Let Us Help You </h3>
              <ul>
                <li> COVID-19 and Amazon </li>
                <li> Your Account </li>
                <li> 100% Purchase Protection</li>
                <li> Amazon App Download </li>
                <li> Help </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <div className="footer_logo">
          <FaAmazonPay />
          <button> English </button>
        </div>
        <p>
          What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
          and typesetting industry Lorem Ipsum has been the industry.
        </p>
      </div>
    </>
  );
};

export default Footer;
