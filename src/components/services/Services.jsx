import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = (props) => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Servives</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Identify and resolve UX issues.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Make unique graphic designs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Make page navigation buttons and search fields.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Create UI mockups and prototypes that clearly show how sites
                work and look.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Menus, tabs, and widgets are examples of graphic user interface
                elements.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Make layout changes based on user feedback. Follow font, color,
                and image style guidelines.{" "}
              </p>
            </li>
          </ul>
        </article>
        {/* WEB Development */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Website and software application designing, building, or
                maintaining.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Using scripting or authoring languages, management tools,
                content creation tools, applications, and digital media.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Directing or performing Website updates.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing or validating test routines and schedules to ensure
                that test cases mimic external interfaces and address all
                browser and device types.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Editing, writing, or designing Website content, and directing
                team members who produce content.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>WEB app Maintance</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Maintaining an understanding of the latest Web applications and
                programming practices through education, study, and
                participation in conferences, workshops, and groups.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Back up files from Web sites to local directories for recovery.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Identifying problems uncovered by customer feedback and testing,
                and correcting or referring problems to appropriate personnel
                for correction.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Determining user needs by analyzing technical requirements.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
