import { useState } from "./useState.js";

const Pizza = () => {
  const [pizza, setPizza] = useState("도미노?");

  window.meow = () => setPizza(pizza + "파파존스!");

  return `
      <div>
        <strong>피자는 어디? : ${pizza}</strong>
        <button onclick="meow()">피자</button>
      </div>
    `;
};

export default Pizza;
