import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="header-image">
        <div className="background_opacity"></div>
        <section className="header-info">
          <span>Bienvenue</span>
          <h1>Pizza Forever</h1>
          <p>Passer un bon moment en commandant la pizza de votre choix</p>
          <div className="header-btn">
            <Link className="btn-link" to="/product">
              Voir Menu
            </Link>
          </div>
        </section>
      </div>
      <>
        <article className="services">
          <h2>Nos Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consequat nibh qua. Pellentesque ac leo at elit consequat aliquet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            consequat nibh qua.
          </p>
          <section className="services-flex">
            <div className="service-list">
              <img
                className="service-img"
                src="https://img.icons8.com/ios/50/000000/natural-food.png"
                alt=""
              />
              <div>
                <h3>Ingrédient de Qualité</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus consequat nibh qua. Pellentesque ac leo at elit
                  consequat aliquet. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus consequat nibh qua.
                </p>
              </div>
            </div>
            <div className="service-list">
              <img
                className="service-img"
                src="https://img.icons8.com/external-outline-wichaiwi/64/000000/external-deliver-services-business-outline-wichaiwi.png"
                alt=""
              />
              <div>
                <h3>Livraison Express</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus consequat nibh qua. Pellentesque ac leo at elit
                  consequat aliquet. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vivamus consequat nibh qua.
                </p>
              </div>
            </div>
          </section>
        </article>
      </>
    </>
  );
};

export default Home;
