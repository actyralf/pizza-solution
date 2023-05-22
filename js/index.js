console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');
const gainIndicator = document.querySelector('[data-js="gain-indicator"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = Number(pizzaInput1.value);
let pizzaSize2 = Number(pizzaInput2.value);

pizzaInput1.addEventListener("input", () => {
  pizzaSize1 = Number(pizzaInput1.value);
  const gain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  displayPizzaGain(gain);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize2 - pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  pizzaSize2 = Number(pizzaInput2.value);
  const gain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  displayPizzaGain(gain);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize2 - pizzaSize1);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * Math.pow(diameter1 / 2, 2);
  const area2 = Math.PI * Math.pow(diameter2 / 2, 2);
  const gain = ((area2 - area1) / area1) * 100;
  return gain;
}

function displayPizzaGain(gain) {
  output.textContent = Math.round(gain);
  gainIndicator.textContent = Math.round(gain);
}

// output.textContent = Math.round(gain);

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(gain) {
  outputSection.style.backgroundColor =
    gain < 0 ? "var(--red)" : "var(--green)";
}
