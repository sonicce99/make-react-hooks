import Counter from "./Counter.js";
import Pizza from "./Pizza.js";

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

let renderCount = 1;
const render = () => {
  const $root = document.getElementById("root");

  // 아래와 같은 순서로 렌더링 되기 때문에 렌더링 되는 순서는 항상 같다.
  $root.innerHTML = `
    <div>
      <div>여러개의 useState 관리해보기</div>
      <br />
      <strong>총 렌더링 횟수 : ${renderCount}</strong>
      <br />
      ${Counter()}
      <br />
      ${Pizza()}
    </div>
  `;

  renderCount += 1;
  currentStateKey = 0;
};

render();
