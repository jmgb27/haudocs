import React, { useState } from "react";

const Completed = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="text-5xl mt-[7rem] text-maroon">{count}</div>
      <h1 className="text-xl font-semibold">Number of Completed Reviews</h1>
      {/*  <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
};

export default Completed;
