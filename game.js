document.addEventListener("DOMContentLoaded", () => {

  if (document.body.classList.contains("part2")) {
      
      const chack = document.querySelector("#Guess");
      const inputfeild = document.querySelector("input");
      
      
      let secerateNumber = Math.floor(Math.random() * 10) + 1; // select num 1 to 10
    alert("secret number = " + secerateNumber);

    //   setTimeout(chackGuess, 1000);

    function chackGuess() {
      let input = inputfeild.value;

      if (input === "" || isNaN(input)) {
        localStorage.setItem(
          "result",
          "you fill number between 1 to 10 and don't quit empty",
        );
        window.location.href = "part3.html";
        return;
      }

      let guess = Number(input);
      let message = " ";

      if (guess < 1 || guess > 10) {
        message = "Enter number between 1 to 10";
        return;
      } else if (guess === secerateNumber) {
        message = "Congrates you guessed the right number";
      } else if (guess > secerateNumber) {
        message = "your num is greater then the guess num";
      } else {
        message = "your num is less then the guess the num";
      }

      localStorage.setItem("result", message);
      window.location.href = "part3.html";
    }

    chack.addEventListener("click", chackGuess);
}


if (document.body.classList.contains("part3")){
    const result = document.querySelector("#result");
    const resetBtn = document.querySelector("#reset");
    
    let resulText = localStorage.getItem("result");
    if (resulText) {
      document.getElementById("result").innerText = resulText;
    }
    reset.addEventListener("click", resetGame);
}
});

function resetGame() {
  localStorage.clear();
  window.location.href = "part2.html";
}

function startGame() {
  window.location.href = "part2.html";
}

function homepage() {
  window.location.href = "index.html";
}
