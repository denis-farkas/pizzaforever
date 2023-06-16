import Visa from "../assets/logo/visa.png";
import MasterCard from "../assets/logo/maestro.png";
import ApplePay from "../assets/logo/apple-pay.png";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-contact">
        <h3>Une Question ?</h3>
        <div>
          <p>06 02 03 04 05</p>
        </div>
        <div>
          <h2>39 Rue des Abeilles</h2>
          <p>Reims, 34051</p>
        </div>
        <div>
          <p>10:00 - 22:00</p>
        </div>
        <section className="footer-paiement">
          <img src={Visa} alt="visa icon" />
          <img src={MasterCard} alt="mastro icon" />
          <img src={ApplePay} alt="applepay icon" />
        </section>
      </section>
    </footer>
  );
};

export default Footer;
