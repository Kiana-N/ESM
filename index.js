let players = [];
let currentPlayer = 0;
let winner = "";

function getNumberOfPlayers() {
  const playerName = prompt("لطفاً نام خود را وارد کنید:");
  let numberOfPlayers = parseInt(prompt("تعداد بازیکنان را وارد کنید:"));

  while (isNaN(numberOfPlayers) || numberOfPlayers <= 0) {
    numberOfPlayers = parseInt(
      prompt(
        "تعداد بازیکنان باید عددی بزرگتر از صفر باشد. لطفاً مجدداً تعداد را وارد کنید:"
      )
    );
  }

  for (let i = 1; i <= numberOfPlayers; i++) {
    const playerName = prompt(`لطفاً نام بازیکن ${i} را وارد کنید:`);
    getPlayerInfo(playerName);
  }

  calculateWinner();
  displayWinner();
}

function getPlayerInfo(playerName) {
  const letter = prompt(`لطفاً یک حرف برای بازیکن ${playerName} وارد کنید:`);
  const name = prompt(`لطفاً نام ${playerName} را وارد کنید:`);
  const city = prompt(`لطفاً شهر ${playerName} را وارد کنید:`);
  const food = prompt(`لطفاً غذای مورد علاقه ${playerName} را وارد کنید:`);
  const color = prompt(`لطفاً رنگ مورد علاقه ${playerName} را وارد کنید:`);

  players.push({ playerName, letter, name, city, food, color });
}

function calculateWinner() {
  let maxScore = 0;
  let winners = [];

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const playerLetters = [
      player.letter,
      ...player.name,
      ...player.city,
      ...player.food,
      ...player.color,
    ];
    const uniqueLetters = new Set(playerLetters);
    const uniqueCount = uniqueLetters.size;
    const score = uniqueCount === 1 ? 10 : uniqueCount === 5 ? 5 : 0;

    if (score > maxScore) {
      maxScore = score;
      winners = [player.playerName];
    } else if (score === maxScore) {
      winners.push(player.playerName);
    }
  }

  if (winners.length === 1) {
    winner = `برنده بازی: ${winners[0]}`;
  } else {
    winner = `برندگان بازی: ${winners.join(", ")}`;
  }
}

function displayWinner() {
  console.log(winner);
}

getNumberOfPlayers();
