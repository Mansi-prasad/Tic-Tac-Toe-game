let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let turnX = true;
let turnO;
let result = document.querySelector("#result");
let winning_pattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.innerHTML = "X";
      turnX = false;
    } else {
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const buttonsEnable = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const buttonsDisable = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (Winner) => {
  result.innerText = `Winner of the game is : ${Winner}`;
  buttonsDisable();
};
const checkWinner = () => {
  for (let pattern of winning_pattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos1Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
const resetGame = () => {
  turnX = true;
  buttonsEnable();
  result.innerText = "";
};
reset_btn.addEventListener("click", resetGame);
