import Counter from "./Counter.js";
import Cat from "./Cat.js";

let currentStateKey = 0; // useState가 실행 된 횟수
const states = []; // state를 보관할 배열

export const useState = (initState) => {
  const key = currentStateKey;

  // initState로 초기값 설정
  if (!states[currentStateKey]) {
    states[currentStateKey] = initState;
  }

  // state 할당
  const state = states[currentStateKey];

  const setState = (newState) => {
    // state를 직접 수정하는 것이 아닌, states 내부의 값을 수정
    states[key] = newState;
    render();
  };
  currentStateKey += 1;
  return [state, setState];
};

const render = () => {
  const $root = document.getElementById("root");

  // 아래와 같은 순서로 렌더링 되기 때문에 렌더링 되는 순서는 항상 같다.
  $root.innerHTML = `
    <div>
      ${Counter()}
      ${Cat()}
    </div>
  `;

  currentStateKey = 0;
};

render();
