import React, { useState } from "react";
import "../css/Faq.css";
import TestData from "./TestData"; // testing data
import SectionHeader from "./SectionHeader";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  const [questions, setQuestions] = useState(TestData);

  return (
    <section>
      <SectionHeader
        labelHeader={"Frequently Asked Questions"}
        labelSub={
          "Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat sunt in culpa qui official."
        }
      />

      <div className="Container">
        {questions.map((item) => {
          return <SingleFaq key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Faq;
