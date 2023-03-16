import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="text-5xl mt-[7rem] text-maroon">{count}</div>
      <h1 className="text-xl">Ongoing Protocols</h1>
      {/*  <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
};

export default Count;
