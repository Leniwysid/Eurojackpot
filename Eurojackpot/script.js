init();
let oneBetNumbers = [];
let allYourNumbers = [];
let chosenLottoNumbers = [];
let chosenEuroNumbers = [];
let chosenExtraNumbers = [];
let oneEurobetNumbers = [];
let oneExtraNumbers = [];
let allYourEuroNumber = [];
let allYourEuroNumbers;

yourEuroBets();

function init() {
  const btn = document.getElementById("roll");

  btn["disabled"] = true;

  btn.addEventListener("click", function () {
    roll();
    rollSystem();
  });

  document.getElementById("inputTimes").addEventListener(
    "change",
    function (event) {
      if (event.target.value) {
        btn["disabled"] = false;
      } else {
        btn["disabled"] = true;
      }
    },
    false
  );

  const buttonResult = document.getElementById("resultButton");
  buttonResult.addEventListener("click", compare);
}
function roll() {
  const howManyTimes = document.getElementById("inputTimes").value;

  allYourNumbers = [];
  for (let j = 0; j < howManyTimes; j++) {
    oneBetNumbers = [];
    while (oneBetNumbers.length < 6) {
      const number = Math.floor(Math.random() * 49 + 1);
      if (!oneBetNumbers.includes(number)) {
        oneBetNumbers.push(number);
      }
    }
    sortArr(oneBetNumbers);
    allYourNumbers.push(oneBetNumbers);
  }
  render();
  console.log(allYourNumbers);
}

function sortArr(arr) {
  arr.sort((a, b) => a - b);
}

function render() {
  let draws = "";

  const scoreContainer = document.getElementById("scoreContainer");
  for (let i = 0; i < allYourNumbers.length; i++) {
    draws += "<div>";
    for (let j = 0; j < allYourNumbers[i].length; j++) {
      draws += "<span class='bubble'>" + allYourNumbers[i][j] + "</span>";
    }
    draws += "</div>";
  }
  scoreContainer.innerHTML = draws;
}

function rollSystem() {
  chosenLottoNumbers = [];
  while (chosenLottoNumbers.length < 6) {
    const numbers = Math.floor(Math.random() * 49 + 1);
    if (!chosenLottoNumbers.includes(numbers)) {
      chosenLottoNumbers.push(numbers);
    }
  }
  sortArr(chosenLottoNumbers);

  renderSystem();
}

function renderSystem() {
  let draw = "";

  const containerLotto = document.getElementById("containerLotto");
  for (let k = 0; k < chosenLottoNumbers.length; k++) {
    draw += "<span class='bubble'>" + chosenLottoNumbers[k] + "</span>";
  }
  containerLotto.innerHTML = draw;
}

function compare() {
  let draws = "";
  let draw = "";
  let count = 0;
  const compareContainer = document.getElementById("compareContainer");
  for (let i = 0; i < allYourNumbers.length; i++) {
    draw = "";
    count = 0;
    const current = allYourNumbers[i];
    draws += "<div class='compare'>";
    for (let j = 0; j < current.length; j++) {
      const currentNumber = current[j];
      const wasHit = chosenLottoNumbers.includes(currentNumber);

      draw +=
        `<span class='bubble ${wasHit ? "bubbleWin" : "bubbleLose"}'>` +
        allYourNumbers[i][j] +
        "</span>";

      if (wasHit) {
        count++;
      }
    }
    if (count >= 3) {
      draws += draw;
    }
    draws += "</div>";
  }

  compareContainer.innerHTML = draws;
}

//change game button
const gameChangeBtn = document.querySelector("#changeGameBtn");
const lottoEl = document.querySelector(".lotto");
const euroEl = document.querySelector(".euro");

gameChangeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  lottoEl.classList.toggle("display");
  euroEl.classList.toggle("display");
});

const euroBtn = document.getElementById("rollEuro");
const resultBtnEuro = document.querySelector(".resultButton");
const homManyRolls = document.getElementById("inputTimes");

euroBtn.addEventListener("click", function () {
  yourEuroBets();
  euroBetNumbers();
});

//moje numery eurojackpot
function yourEuroBets() {
  const howManyBets = document.getElementById("inputTimesEuro").value;
  allYourEuroNumbers = [];

  for (let i = 0; i < howManyBets; i++) {
    oneEurobetNumbers = [];
    while (oneEurobetNumbers.length < 5) {
      const euroNumber = Math.floor(Math.random() * 49 + 1);
      if (!oneEurobetNumbers.includes(euroNumber)) {
        oneEurobetNumbers.push(euroNumber);
      }
    }
    sortArr(oneEurobetNumbers);
    allYourEuroNumbers.push(oneEurobetNumbers);
  }
  for (let j = 0; j < howManyBets; j++) {
    oneExtraNumbers = [];
    while (oneExtraNumbers.length < 2) {
      const euro2Number = Math.floor(Math.random() * 9 + 1);
      if (!oneExtraNumbers.includes(euro2Number)) {
        oneExtraNumbers.push(euro2Number);
      }
    }
    sortArr(oneExtraNumbers);
    allYourEuroNumbers.push(oneExtraNumbers);
  }
  console.log(allYourEuroNumbers);

  /* allYourEuroNumber = allYourEuroNumbers.reduce(
    (oneEurobetNumbers, euro2Number) => oneEurobetNumbers.concat(euro2Number),
    []
  );
  console.log(allYourEuroNumber); */
  renderYourBalls();
}

//zaklad bukmachera eurojackpot
function euroBetNumbers() {
  chosenEuroNumbers = [];
  chosenExtraNumbers = [];

  while (chosenEuroNumbers.length < 5) {
    const numbers = Math.floor(Math.random() * 49 + 1);
    if (!chosenEuroNumbers.includes(numbers)) {
      chosenEuroNumbers.push(numbers);
    }
  }
  sortArr(chosenEuroNumbers);

  while (chosenExtraNumbers.length < 2) {
    const numbers = Math.floor(Math.random() * 9 + 1);
    if (!chosenExtraNumbers.includes(numbers)) {
      chosenExtraNumbers.push(numbers);
    }
  }
  sortArr(chosenExtraNumbers);
  renderEuroBalls();
}

// malujemy kulki
function renderYourBalls() {
  let draws = "";

  const scoreEuroContainer = document.getElementById("scoreEuroContainer");
  for (let i = 0; i < allYourEuroNumbers.length; i++) {
    draws += "<div>";
    for (let j = 0; j < allYourEuroNumbers[i].length; j++) {
      draws += "<span class='bubble'>" + allYourEuroNumbers[i][j] + "</span>";
    }
    draws += "</div>";
  }
  scoreEuroContainer.innerHTML = draws;
}

function renderEuroBalls() {
  let draw = "";

  const containerEuro = document.getElementById("containerEuro");

  for (let k = 0; k < chosenEuroNumbers.length; k++) {
    draw += "<span class='bubbleEuro'>" + chosenEuroNumbers[k] + "</span>";
  }
  for (let l = 0; l < chosenExtraNumbers.length; l++) {
    draw +=
      "<span class='bubbleEuroYellow'>" + chosenExtraNumbers[l] + "</span>";
  }
  containerEuro.innerHTML = draw;
}
