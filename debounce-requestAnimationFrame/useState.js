import Counter from "./Counter.js";
import Pizza from "./Pizza.js";

let currentStateKey = 0; // useState가 실행 된 횟수
const states = []; // state를 보관할 배열

export const useState = (initState) => {
  const key = currentStateKey;

  // initState로 초기값 설정
  if (!states[key]) {
    states[key] = initState;
  }

  // state 할당
  const state = states[key];

  const setState = (newState) => {
    // 값이 똑같은 경우
    if (newState === state) return;

    // 배열/객체일 때는 JSON.stringify를 통해 간단하게 비교할 수 있다.
    if (JSON.stringify(newState) === JSON.stringify(state)) return;

    // state를 직접 수정하는 것이 아닌, states 내부의 값을 수정
    states[key] = newState;
    render();
  };
  currentStateKey += 1;
  return [state, setState];
};

const debounce = (callback) => {
  let timer = null;

  return () => {
    if (timer) {
      cancelAnimationFrame(timer);
    }

    timer = requestAnimationFrame(callback);
  };
};

let renderCount = 1;
const render = debounce(() => {
  const $root = document.getElementById("root");

  // 아래와 같은 순서로 렌더링 되기 때문에 렌더링 되는 순서는 항상 같다.
  $root.innerHTML = `
    <div>
      <div>useState 렌더링 최적화 해보기</div>
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
});

render();
