import React from "react";
import "../css/BlackLine.css";
import PrimaryButton from "./PrimaryButton";

const BlackLine = () => {
  return (
    <section className="black_line">
      <div>
        <h2>Looking for</h2>
        <p>Quality Photography?</p>

        <PrimaryButton label={"Contact Us"} btnType={"outlined_btn_black"} />
      </div>
    </section>
  );
};

export default BlackLine;
