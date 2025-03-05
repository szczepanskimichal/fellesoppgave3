const events = [
  {
    description: "You met a friend along the way!",
    img: "./imgs/friend.png",
    choices: [
      {
        text: "Offer a ride",
        response: "Your friend says, 'Thanks!' and hops in.",
        points: +25,
      },
      {
        text: "Wave and drive on",
        response: "Your friend just stares at you.",
        img: "./imgs/AngryFriend.jpg",
        points: -15,
      },
      {
        text: "Stop to chat",
        response: "You talk for a bit, then keep driving.",
        points: 0,
      },
    ],
  },
  {
    description: "A monster appeared on the road!",
    img: "./imgs/monster.png",
    choices: [
      {
        text: "Swerve around it",
        response: "You barely miss the monster and speed away!",
        points: 0,
      },
      {
        text: "Fight it",
        response: "You stop and scare it off with your horn.",
        points: +25,
      },
      {
        text: "Scream and panic",
        response: "The monster laughs and runs off.",
        points: -15,
      },
    ],
  },
  {
    description: "The car behind you is mad, you got into a road rage!",
    choices: [
      { text: "Speed up",
       response: "You lose them in traffic!",
       points: +25,
     },
      { text: "Slow down",
       response: "They pass you, yelling out the window.",
       points: -15,
     },
      {
        text: "Honk back",
        response: "It turns into a honking war, but they eventually leave.",
        points: 0,
      },
    ],
  },
];

let currentMessage = "You are driving down the road.";
let currentChoices = [];
let currentImg = "";
let isEventActive = false;
let coolMeter = 20;
let lastEventIndex = -1;
const appElement = document.getElementById("app");

function updateView() {
  if(coolMeter <= 0) {
    appElement.innerHTML =/*HTML*/ `
      <h1 id="header">Game Over</h1>
      <div id="coolMeterContainer">You're not cool enough to drive anymore!</div>
      <button onclick="resetGame()">Try again?</button>
    `;
    return;
  }

  if(coolMeter >= 100) {
    appElement.innerHTML =/*HTML*/ `
    <h1 id="header">You won!</h1>
    <div id="coolMeterContainer">I guess you're cool enough</div>
    <button onclick="resetGame()">Wanna test your coolness again?</button>
    `; 
    return;
  }

  let coolMeterWidth = Math.min(100, Math.max(0, coolMeter));
  
  let meterColor = "blue";
  if (coolMeter > 50) {
    meterColor = "green";
  } else if (coolMeter < 20) {
    meterColor = "red";
  }

  let choicesHtml = "";
  for(let i = 0; i < currentChoices.length; i++) {
    choicesHtml +=/*HTML*/ `<button id="btns" onclick="handleChoice(${i})">${currentChoices[i].text}</button>`;
  }

  appElement.innerHTML =/*HTML*/ `
      <div id="message">${currentMessage}</div>
      <div id="choices">${choicesHtml}</div>
      <div id="coolMeterContainer">
        Cool Meter: <div class="meter" style="width: ${coolMeterWidth}%; background-color: ${meterColor};"></div>
      </div>
      ${currentImg ? `<img class="eventImg" src="${currentImg}" alt="Event Image">` : ''}
    `;
}

function randomEvent() {
  let eventIndex;
  do {
    eventIndex = Math.floor(Math.random() * events.length);
  } while (eventIndex === lastEventIndex);

  lastEventIndex = eventIndex;
  const event = events[eventIndex];
  currentMessage = event.description;
  currentChoices = event.choices;
  currentImg = event.img || "";
  isEventActive = true;
  updateView();
}

setTimeout(randomEvent, 3000);

function handleChoice(choiceIndex) {
  const choice = currentChoices[choiceIndex];
  currentMessage = choice.response;
  coolMeter += choice.points;
  currentChoices = [];
  currentImg = choice.img || "";
  isEventActive = false;
  updateView();
  setTimeout(randomEvent, 3000);
}

function resetGame() {
  coolMeter = 20;
  currentMessage = "You are driving down the road.";
  currentChoices = [];
  currentImg = "";
  isEventActive = false;
  updateView();
  setTimeout(randomEvent, 3000);
}

updateView();

document.getElementById("playButton").addEventListener("click", function() {
  const audioElement = document.getElementById("backgroundAudio");
  audioElement.play().then(() => {
    console.log("Audio is playing");
  }).catch((error) => {
    console.error("Error playing audio:", error);
  });
});