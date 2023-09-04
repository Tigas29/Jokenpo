const score = (winner) => {
  let humanScore = document.getElementById("humanScore");
  let alexaScore = document.getElementById("alexaScore");

  if (winner === "Alexa") {
    console.log("Ponto para a Alexa");
    alexaScore.innerHTML = parseInt(alexaScore.innerHTML) + 1;
  } else if (winner === "Humano") {
    console.log("Ponto para o humano");
    humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
  } else if (winner === "Empate") {
    console.log("Deu empate");
  }
};

const decideWinner = (human, alexa) => {
  let winner = "";
  if (human === alexa) {
    winner = "Empate";
  } else if (
    (human === "pedra" && alexa === "tesoura") ||
    (human === "papel" && alexa === "pedra") ||
    (human === "tesoura" && alexa === "papel")
  ) {
    winner = "Humano";
  } else {
    winner = "Alexa";
  }

  score(winner);
};

const playhuman = (humanChoice) => {
  let alexaChoice = robotChoice();
  console.log("Humano: " + humanChoice + "  Alexa: " + alexaChoice);
  decideWinner(humanChoice, alexaChoice);
};

const robotChoice = () => {
  const choices = ["pedra", "papel", "tesoura"];
  const randomic = Math.floor(Math.random() * 3);
  return choices[randomic];
};
