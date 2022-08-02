import { useState } from "./useState.js";

const Cat = () => {
  const [cat, setCat] = useState("야옹!");

  window.meow = () => setCat(cat + "야옹!");

  return `
      <div>
        <strong>고양이 : ${cat}</strong>
        <button onclick="meow()">야옹</button>
      </div>
    `;
};

export default Cat;
