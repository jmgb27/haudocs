import React, { useState } from "react";

const Completed = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="items-center justify-center text-center">
      <div className="text-5xl mb-5 text-center items-center justify-center text-maroon">
        {count}
      </div>
      <div>
        <h1 className="text-xl flex items-center text-center justify-center font-semibold">
          Number of Completed Reviews
        </h1>
      </div>
      {/*  <button onClick={() => setCount(count + 1)}>Increment</button> */}
    </div>
  );
};

export default Completed;
