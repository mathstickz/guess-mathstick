// console.log("Hello World");
// alert("hello world");
// console.log("Hello World 2");
// let a = prompt("Enter a number");
// console.log(a);

// A GUESS GAME : collects a users guess;
// //generate a random number b/wa spec. limit
// compares users guess with the random number
// all of this within 6 trials
// // if the user guesses correctly, the game ends
//if user guesses wrong , it should say if very bhigh or very low
// if usrr guesses wrong after 6 trials, game ends

//BONUS: There should bea try again
//There should aklso be a UI

// const MAX_TRIES = 6;
// let hasUserWon = false;

// function gameStart() {
//   //generate a random number b/wa spec. limit
//   const RANDOM_GUESS = Math.round(Math.random() * 100);
//   console.log(RANDOM_GUESS);
//   let user_trial = 0;

//   while (user_trial < MAX_TRIES) {
//     //collects a users guess
//     const userGuess = prompt("Enter a number between 1 and 100");
//     console.log("CURrent trial: ", user_trial + 1);
//     //compares
//     if (userGuess == RANDOM_GUESS) {
//       alert("CONGRATULATIONS!! , YOu WIN");
//       hasUserWon = true;
//       break;
//     } else if (userGuess < RANDOM_GUESS) {
//       alert("TOO LOW, Please Try Again");
//     } else if (userGuess > RANDOM_GUESS) {
//       alert("TOO HIGH, Please Try Again");
//     }
//     user_trial += 1;
//   }
//   if (user_trial == MAX_TRIES) {
//     alert("SORRY, You have exhausted your trials");
//     alert("The number was " + RANDOM_GUESS);
//   }
// }

// gameStart();
// const MAX_TRIES = 6;
// let hasUserWon = false;
// let RANDOM_GUESS = 0;
// let user_trial = 0;

// let gameStarted = false;

// const startButton = document.getElementById("startButton");
// const container = document.getElementById("container");

// container.addEventListener("click", () => {
//   if (!gameStarted) {
//     console.warn("Game hasn't started yet!");
//     return;
//   }

//   // Actual game logic
//   console.log("Game logic running...");
//   // You can start animations, movement, etc. here
// });

// // Start button logic
// startButton.addEventListener("click", () => {
//   gameStarted = true;
//   console.log("Game started!");
//   // Initialize game here if needed
// });

// // Optional: block any interval/game loop from starting early
// //   let gameLoop = setInterval(() => {
// //     if (!gameStarted) return; // Exit early if not started

// //     // Game loop code goes here
// //     console.log("Game running in loop...");
// //   }, 1000);

// function gameStart() {
//   //     //generate a random number b/wa spec. limit
//   const _randomGuess = Math.round(Math.random() * 100);
//   console.log(_randomGuess);
//   alert(" game has started");
//   RANDOM_GUESS = _randomGuess;
// }

// function takeUserGuess() {
//   const userGuess = document.getElementById("guess").value;
//   console.log("user guess is ", userGuess);
//   if (user_trial < MAX_TRIES) {
//     //collects a users guess
//     // const userGuess = prompt("Enter a number between 1 and 100");
//     console.log("CURrent trial: ", user_trial + 1);
//     //compares
//     if (userGuess == RANDOM_GUESS) {
//       alert("CONGRATULATIONS!! , YOu WIN");
//       hasUserWon = true;
//       return;
//     } else if (userGuess < RANDOM_GUESS) {
//       alert("TOO LOW, Please Try Again");
//     } else if (userGuess > RANDOM_GUESS) {
//       alert("TOO HIGH, Please Try Again");
//     }
//     user_trial += 1;
//     document.getElementById("guess").value = "";
//   }
//   if (user_trial == MAX_TRIES) {
//     alert("SORRY, You have exhausted your trials");
//     alert("The number was " + RANDOM_GUESS);
//   }
// }

const MAX_TRIES = 6;
let hasUserWon = false;
let RANDOM_GUESS = 0;
let user_trial = 0;

function gameStart() {
  const _randomGuess = Math.round(Math.random() * 100);
  RANDOM_GUESS = _randomGuess;
  console.log("New random number is:", _randomGuess);

  user_trial = 0;
  hasUserWon = false;
  document.getElementById("guess").value = "";
  document.getElementById("message").value = "Game has started! Good luck!";
}

function takeUserGuess() {
  if (hasUserWon || user_trial >= MAX_TRIES) {
    document.getElementById("message").value =
      "Game over! Please start a new game.";
    return;
  }

  const userGuess = document.getElementById("guess").value;

  if (userGuess === "") {
    document.getElementById("message").value = "Please enter a number.";
    return;
  }

  if (userGuess == RANDOM_GUESS) {
    document.getElementById("message").value =
      "🎉 CONGRATULATIONS! You guessed it right.";
    hasUserWon = true;

    setTimeout(() => {
      if (confirm("Do you want to play again?")) {
        gameStart();
      }
    }, 100);
    return;
  } else if (userGuess < RANDOM_GUESS) {
    document.getElementById("message").value = "Too low. Try again.";
  } else if (userGuess > RANDOM_GUESS) {
    document.getElementById("message").value = "Too high. Try again.";
  }

  user_trial += 1;
  document.getElementById("guess").value = "";

  if (user_trial === MAX_TRIES && !hasUserWon) {
    document.getElementById("message").value =
      "❌ You’ve used all your tries. Number was " + RANDOM_GUESS;

    setTimeout(() => {
      if (confirm("Do you want to play again?")) {
        gameStart();
      }
    }, 100);
  }
}
