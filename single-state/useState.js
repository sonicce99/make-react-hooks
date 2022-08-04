import Counter from "./Counter.js";

// 처음엔 아무값도 할당하지 않음.
let state = null;
export const useState = (initState) => {
  // state에 값이 없을 때만 초기화.
  if (state === null) {
    state = initState;
  }

  const setState = (newState) => {
    state = newState;
    // setState가 진행되면 렌더링을 다시 진행한다. (중요.)
    render();
  };
  return [state, setState];
};

let renderCount = 1;
const render = () => {
  const $root = document.getElementById("root");
  $root.innerHTML = `
    <div>
      <div>하나의 useState 관리해보기</div>
      <br />
      <strong>총 렌더링 횟수 : ${renderCount}</strong>
      <br />
      ${Counter()}
    </div>
  `;

  renderCount += 1;
};

render();
