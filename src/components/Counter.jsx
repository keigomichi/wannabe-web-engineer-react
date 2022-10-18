import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>カウンター</h1>
      <div>回数: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>クリック！</button>
    </div>
  );
};

export default Counter