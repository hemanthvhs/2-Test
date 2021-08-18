import greeting, {
  calculateAreaOfSquare,
  calculatePerimeterOfRectangle,
} from "../modules/counter.js";

const output = greeting("Hemanth");
console.log(output);

let count = 0;

updateCountInDOM();

document
  .getElementById("button-increment")
  .addEventListener("click", function increment() {
    count += 1;
    updateCountInDOM();
  });

function updateCountInDOM() {
  const el = document.querySelector(".current-count");
  el.innerText = el.innerText.substring(0, 7) + " " + count;
  calculate();
}

function calculate() {
  const area = calculateAreaOfSquare(count, count + 1);
  const perimeter = calculatePerimeterOfRectangle(count, count + 1);
  console.log(`Square Area - ${area}, Reactangle Perimeter - ${perimeter}`);
}
