window.addEventListener("load", initApp);

// import { countingSort } from "./countingSort.js";

function initApp() {
  document.querySelector("form").addEventListener("submit", submitInput);
  document.querySelector("#refresh").addEventListener("click", refresh);

  displayChart(inputArray);
}

// ****** CONTROLLER ******

function submitInput(event) {
  event.preventDefault();
  const form = event.target;

  const input = form.array.value;

  inputArray = input.split(",").map((item) => Number(item));
  console.log(inputArray);

  displayInput(inputArray);
  countingSort(inputArray);

  form.array.value = "";
}

function refresh() {
  location.reload();
}
// ****** MODEL ******

let inputArray = [2, 5, 7, 9, 0, 4, 3, 8, 4];

async function countingSort(input) {
  const max = Math.max(...input);

  const count = new Array(max + 1).fill(0);
  const output = new Array(input.length).fill(0);

  for (let i = 0; i <= input.length - 1; i++) {
    const j = input[i];
    count[j] = count[j] + 1;
  }

  for (let i = 1; i <= max; i++) {
    count[i] = count[i] + count[i - 1];
  }

  for (let i = input.length - 1; i >= 0; i--) {
    const current = input[i];
    count[current]--;
    output[count[current]] = current;
    console.log(output);

    await sleep(1000);
    displayChart(output);
  }
  return output;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

countingSort(inputArray);

// ****** VIEW ******

function displayInput(inputArray) {
  document.querySelector(".input-line").innerHTML = "";
  for (let i = 0; i < inputArray.length; i++) {
    const item = inputArray[i];
    document.querySelector(".input-line").insertAdjacentHTML(
      "beforeend",
      /*HTML*/
      `
       <li class="number">${item}</li>
    `
    );
  }
}
function displayChart(inputArray) {
  document.querySelector(".chart").innerHTML = "";
  for (let i = 0; i < inputArray.length; i++) {
    const item = inputArray[i];
    document.querySelector(".chart").insertAdjacentHTML(
      "beforeend",
      /*HTML*/
      `
        <li class="bar bar-${item}-${i}">${item}</li>

    `
    );
    document.querySelector(`.bar-${item}-${i}`).style.height = `${item * 4}rem`;
  }
}

// 4,7,2,9,8,7,3,1,8,8,8
