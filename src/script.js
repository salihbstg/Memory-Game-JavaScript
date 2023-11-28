const divs = document.querySelectorAll(".game-box");
let gameArray = [];
let userArray = [];
let temp = true;
let play = false;
const sounds = [
  new Audio("./sounds/mixkit-arcade-game-jump-coin-216.wav"),
  new Audio("./sounds/mixkit-camera-shutter-click-1133.wav"),
  new Audio("./sounds/mixkit-classic-click-1117.wav"),
  new Audio("./sounds/mixkit-cool-interface-click-tone-2568.wav"),
];
for (i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", (event) => {
    event.target.classList.add("box-click");
    setTimeout(() => {
      event.target.classList.remove("box-click");
    }, 150);
    if (event.target.id === "div-1") {
      userArray.push(0);
      control();
      sounds[0].currentTime = 0;
      sounds[0].play();
    } else if (event.target.id === "div-2") {
      userArray.push(1);
      control();
      sounds[3].currentTime = 0;
      sounds[3].play();
    } else if (event.target.id === "div-3") {
      userArray.push(2);
      control();
      sounds[2].currentTime = 0;
      sounds[2].play();
    } else if (event.target.id === "div-4") {
      userArray.push(3);
      control();
      sounds[1].currentTime = 0;
      sounds[1].play();
    }
  });
}
newNumber = () => {
  return Math.floor(Math.random() * 4);
};
document.addEventListener("keydown", () => {
  if (!play) {
    setTimeout(() => {
      gamePlay();
    }, 100);

    document.querySelector("h1").innerHTML = "";
    play = true;
  }
});
const gamePlay = () => {
  let a = newNumber();
  gameArray.push(a);
  if (a === 0) {
    divs[0].classList.add("box-click");
    sounds[0].currentTime = 0;
    sounds[0].play();
    setTimeout(() => {
      divs[0].classList.remove("box-click");
    }, 150);
  } else if (a === 1) {
    divs[1].classList.add("box-click");
    sounds[1].currentTime = 0;
    sounds[1].play();
    setTimeout(() => {
      divs[1].classList.remove("box-click");
    }, 150);
  } else if (a === 2) {
    divs[2].classList.add("box-click");
    sounds[2].currentTime = 0;
    sounds[2].play();
    setTimeout(() => {
      divs[2].classList.remove("box-click");
    }, 150);
  } else {
    divs[3].classList.add("box-click");
    sounds[3].currentTime = 0;
    sounds[3].play();
    setTimeout(() => {
      divs[3].classList.remove("box-click");
    }, 150);
  }
};
const control = () => {
  console.log(userArray);
  console.log(gameArray);

  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i] !== gameArray[i]) {
      gameArray=[];
      userArray=[];
      play = false;
      setTimeout(() => {
        document.querySelector("h1").innerHTML = "You Lose!!";
      }, 200);
      setTimeout(() => {
        document.querySelector("h1").innerHTML = "Press keyboard for play game";
      }, 1500);

      return;
    }
  }

  if (userArray.length === gameArray.length) {
    userArray = [];

    setTimeout(() => {
      if (play) {
        gamePlay();
      }
    }, 400);
  }
};
