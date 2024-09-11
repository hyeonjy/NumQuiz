const randomH1 = document.getElementById("random-number");
const startBtn = document.querySelector(".start-btn");
const numberForm = document.getElementById("number-form");
const numberInput = document.querySelector("#number-form input");
const answer = document.getElementById("answer");

const HIDDEN_CLASSNAME = "hidden";

function createRandomNumber() {
  numberInput.value = "";
  answer.innerText = "";

  const randomNum = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  randomH1.innerText = randomNum;
  randomH1.classList.remove(HIDDEN_CLASSNAME);

  // 3초 뒤에 숫자가 사라짐
  setTimeout(() => {
    randomH1.classList.add(HIDDEN_CLASSNAME);
  }, 3000);
}

function onSubmit(event) {
  event.preventDefault();
  const value = numberInput.value;
  const randomNum = randomH1.innerText;
  if (randomNum === value) {
    answer.innerText = "정답입니다!";
  } else {
    answer.innerText = `오답입니다. 정답은 ${randomNum}입니다.`;
  }
}

startBtn.addEventListener("click", createRandomNumber);
numberForm.addEventListener("submit", onSubmit);
