import React from "react";
import "./portfolio.css";
import GITHUB from "../../assets/github.png";
import SALON from "../../assets/salon.png";
import OGRNA from "../../assets/Organizations.png";
import Regiteration from '../../assets/registration.png'
import template from '../../assets/template.png'
import PhoneBill from '../../assets/PhoneBill.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={GITHUB} alt="github" />
          </div>
          <h3>My GitHub Profile</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Vasco21" className="btn">
            Github
          </a>
          <a
            href="https://github.com/Vasco21"
            className="btn btn-primary"
            target="=_blank"
          >
            Live Demo
          </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={SALON} alt="github" />
          </div>
          <h3>BeautyMarket Appllication</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vasco21/beautymarket-app" className="btn">
              Github
            </a>
            <a
              href="https://breakemarket-app.netlify.app"
              className="btn btn-primary"
              target="=_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={OGRNA} alt="github" />
          </div>
          <h3>MY Group Organization Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vasco21/CreativePower.Org" className="btn">
              Github
            </a>
            <a
              href="https://creative-power-org.netlify.app"
              className="btn btn-primary"
              target="=_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={Regiteration} alt="github" />
          </div>
          <h3>Registration Number Plate Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vasco21/registration_numbers" className="btn">
              Github
            </a>
            <a
              href="https://vasco21.github.io/registration_numbers"
              className="btn btn-primary"
              target="=_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={template} alt="github" />
          </div>
          <h3>Registration Number! Template</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vasco21/registratioin-template" className="btn">
              Github
            </a>
            <a
              href="https://vasco21.github.io/registratioin-template"
              className="btn btn-primary"
              target="=_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={PhoneBill} alt="github" />
          </div>
          <h3>TotalPhoneBill App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vasco21/DOM-widgets-test" className="btn">
              Github
            </a>
            <a
              href="https://vasco21.github.io/DOM-widgets-test/index/index.html"
              className="btn btn-primary"
              target="=_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
