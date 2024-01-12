import React from "react";
import "../css/BlogCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import SectionHeader from "./SectionHeader";

const BlogCard = () => {
  return (
    <section className="blogcard">
      <SectionHeader
        labelHeader={"Latest Blog Posts"}
        labelSub={
          "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sunt in culpa qui official."
        }
      />
      <div className="Container">
        <div className="card_wrapper">
          <div className="card_item">
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/01-06-2021/photogenic-liberty-demo_Free/812494057/web/assets/images/blog1.jpg"
              alt=""
            />
            <div className="card_content">
              <div className="card_header">
                <div>
                  <span>
                    <img
                      src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                      alt=""
                    />
                  </span>
                  <h2>Eetey Cruis</h2>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p>April 06, 2021</p>
                </div>
              </div>
              <div className="card_text">
                <h3>Photography</h3>
                <h4>You Should Fall In Love With Photography</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua, sunt inc officia deserunt.
                </p>
              </div>
            </div>
          </div>
          <div className="card_item">
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/01-06-2021/photogenic-liberty-demo_Free/812494057/web/assets/images/blog1.jpg"
              alt=""
            />
            <div className="card_content">
              <div className="card_header">
                <div>
                  <span>
                    <img
                      src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                      alt=""
                    />
                  </span>
                  <h2>Eetey Cruis</h2>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p>April 06, 2021</p>
                </div>
              </div>
              <div className="card_text">
                <h3>Photography</h3>
                <h4>You Should Fall In Love With Photography</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua, sunt inc officia deserunt.
                </p>
              </div>
            </div>
          </div>
          <div className="card_item">
            <img
              src="https://p.w3layouts.com/demos_new/template_demo/01-06-2021/photogenic-liberty-demo_Free/812494057/web/assets/images/blog1.jpg"
              alt=""
            />
            <div className="card_content">
              <div className="card_header">
                <div>
                  <span>
                    <img
                      src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                      alt=""
                    />
                  </span>
                  <h2>Eetey Cruis</h2>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p>April 06, 2021</p>
                </div>
              </div>
              <div className="card_text">
                <h3>Photography</h3>
                <h4>You Should Fall In Love With Photography</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua, sunt inc officia deserunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
