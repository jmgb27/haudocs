import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="text-5xl flex items-center justify-center text-maroon">
        {count}
      </div>
      <div className="flex">
        <h1 className="text-xl">Ongoing Protocols</h1>
        {/*  <button onClick={() => setCount(count + 1)}>Increment</button> */}
      </div>
    </div>
  );
};

export default Count;
