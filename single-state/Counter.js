import { useState } from "./useState.js";

const Counter = () => {
  const [count, setCount] = useState(1);

  window.increase = () => setCount(count + 1);

  return `
    <div>
      <strong>count : ${count}</strong>
      <button onclick="increase()">증가</button>
    </div>`;
};

export default Counter;
