import reactiveStore from "../build/index";

const store = reactiveStore<number>(0);

document.body.innerHTML = `
<button id="increment">Increment</button>
<div id="counter">
`;

document
  .querySelector("button#increment")
  ?.addEventListener("click", () => store.update((value) => ++value));

const unsub = store.subscribe((value) => {
  (document.querySelector("div#counter") as HTMLElement).innerHTML = `${value}`;
});

window.addEventListener("beforeunload", unsub);
