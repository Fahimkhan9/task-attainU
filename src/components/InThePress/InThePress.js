import React from "react";
import InThePressCard from "./InThePressCard";

const inthepressdata = [
  {
    description:
      "60%+ engineering graduates are unemployed. Beyond engineering, this problem multiplies 10 times.",
    imglink: "https://attainu.com/images/businesstoday.jpg",
  },
  {
    description:
      "Why this ex-Uber and Google engineer decided to skill college graduates with his edtech startup?",
    imglink: "https://attainu.com/images/yourstory.jpg",
  },
  {
    description:
      "AttainU aims to ensure that India's demographic numbers convert into a dividend instead of a burden.",
    imglink: "https://attainu.com/images/inc42.jpg",
  },
  {
    description:
      "College education challenges are lack of counselling, obsolete faculty and outdated curriculum.",
    imglink: "https://attainu.com/images/bloomberg.jpg",
  },
];

const InThePress = () => {
  return (
    <div className="pt-5">
      <div className="container">
        <h4 className="text-center">In the Press</h4>
        <div className="row">
          {inthepressdata.map((inthepressdata) => (
            <InThePressCard inthepressdata={inthepressdata} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InThePress;
