import React, { useState } from "react";

const Research = () => {
  const [biocount, setBioCount] = useState(0);
  const [healthcount, setHealthCount] = useState(0);
  const [clinicalcount, setClinicalCount] = useState(0);
  const [publiccount, setPublicCount] = useState(0);
  const [socialcount, setSocialCount] = useState(0);
  return (
    <div>
      <h1 className="text-2xl font-bold">Research Type</h1>
      <div className="space-y-4 ml-4 mt-[1rem] mr-4">
        <p className="text-left text-xl  border-t-2 border-black pb-1 ">
          Biomedical Studies:{" "}
          <span className="float-right text-maroon mr-5">{biocount}</span>
        </p>
        <p className="text-left text-xl border-t-2 border-black pb-1 ">
          Health Operations Reasearch:{" "}
          <span className="float-right text-maroon mr-5">{healthcount}</span>
        </p>
        <p className="text-left text-xl border-t-2 border-black pb-1 ">
          Clinical Trials:{" "}
          <span className="float-right text-maroon mr-5">{clinicalcount}</span>
        </p>
        <p className="text-left text-xl border-t-2 border-black pb-1 ">
          Public Health Reasearch:{" "}
          <span className="float-right text-maroon mr-5">{publiccount}</span>
        </p>
        <p className="text-left text-xl border-t-2 border-black pb-1 ">
          Social Reasearch:{" "}
          <span className="float-right text-maroon mr-5">{socialcount}</span>
        </p>
      </div>
    </div>
  );
};

export default Research;
