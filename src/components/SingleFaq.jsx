import React, { useState } from "react";

import { FaAngleUp } from "react-icons/fa6";

const SingleFaq = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="faq_wrapper">
      <div className="faq_single">
        <div className="faq_question">
          <h2>{title}</h2>
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`${showInfo && "faq_down"}`}
          >
            <FaAngleUp />
          </button>
        </div>
        {showInfo && <p className="faq_answer">{info}</p>}
      </div>
    </div>
  );
};

export default SingleFaq;
