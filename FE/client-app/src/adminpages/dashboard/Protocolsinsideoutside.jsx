import React, { useState } from "react";

const Protocolsinsideoutside = () => {
  const [insidecount, setInsideCount] = useState(0);
  const [outsidecount, setOutsideCount] = useState(0);
  return (
    <div className="space-y-4 mt-[2.5rem]">
      <div className="text-5xl text-maroon">{insidecount}</div>
      <h1 className="text-xl font-semibold">Protocols Inside HAU</h1>
      <div className="text-5xl text-maroon">{outsidecount}</div>
      <h1 className="text-xl font-semibold">Protocols Outside HAU</h1>
    </div>
  );
};

export default Protocolsinsideoutside;
