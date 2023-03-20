import React, { useState } from "react";

const Protocolscount = () => {
  const [exemptedcount, setExemptedCount] = useState(0);
  const [expeditecount, setExpediteCount] = useState(0);
  const [fullboardcount, setFullboardCount] = useState(0);
  return (
    <div>
      <h1 className="text-xl items-center justify-center flex text-center font-bold">
        Protocols Reviewed
      </h1>
      <div className="flex items-center justify-center text-center mt-5 space-x-10">
        <div className="text-5xl text-maroon">
          {exemptedcount}
          <h1 className="text-xl text-black">Exempted</h1>
        </div>
        <div className="text-5xl text-maroon">
          {expeditecount}
          <h1 className="text-xl text-black">Expedite</h1>
        </div>
        <div className="text-5xl text-maroon">
          {fullboardcount}
          <h1 className="text-xl text-black">Full Board</h1>
        </div>
      </div>
    </div>
  );
};

export default Protocolscount;
