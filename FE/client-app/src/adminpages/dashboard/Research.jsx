import React, { useState } from "react";

const Research = () => {
  const [biocount, setBioCount] = useState(0);
  const [healthcount, setHealthCount] = useState(0);
  const [clinicalcount, setClinicalCount] = useState(0);
  const [publiccount, setPublicCount] = useState(0);
  const [socialcount, setSocialCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl mt-[2rem] font-bold">Research Type</h1>
      <div className="ml-4 mt-[1rem]">
        <p className="text-left text-xl font-semibold">
          Biomedical Studies: {biocount}
        </p>
        <p className="text-left text-xl font-semibold">
          Health Operations Reasearch: {healthcount}
        </p>
        <p className="text-left text-xl font-semibold">
          Clinical Trials: {clinicalcount}
        </p>
        <p className="text-left text-xl font-semibold">
          Public Health Reasearch: {publiccount}
        </p>
        <p className="text-left text-xl font-semibold">
          Social Reasearch: {socialcount}
        </p>
      </div>
    </div>
  );
};

export default Research;
