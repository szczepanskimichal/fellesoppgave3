const events = [
  {
    description: "You met a friend along the way!",
    choices: [
      {
        text: "Offer a ride",
        response: "Your friend says, 'Thanks!' and hops in.",
        points: +10,
      },
      {
        text: "Wave and drive on",
        response: "Your friend waves back but looks a bit angry.",
        points: -10,
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
    choices: [
      {
        text: "Swerve around it",
        response: "You barely miss the monster and speed away!",
        points: 0,
      },
      {
        text: "Fight it",
        response: "You stop and scare it off with your horn.",
        points: +10,
      },
      {
        text: "Scream and panic",
        response: "The monster laughs and runs off.",
        points: -10,
      },
    ],
  },
  {
    description: "The car behind you is mad, you got into a road rage!",
    choices: [
      { text: "Speed up",
       response: "You lose them in traffic!",
       points: 0,
     },
      { text: "Slow down",
       response: "They pass you, yelling out the window.",
       points: -10,
     },
      {
        text: "Honk back",
        response: "It turns into a honking war, but they eventually leave.",
        points: +10,
      },
    ],
  },
];

let currentMessage = "You are driving down the road.";
let currentChoices = [];
let isEventActive = false;
let coolMeter = 20;
const appElement = document.getElementById("app");


function updateView() {
  if(coolMeter <= 0) {
    appElement.innerHTML = /*HTML*/ `
      <h1>Game Over</h1>
      <div id="coolMeter">You're not cool enought to drive anymore!</div>
      <button onclick="resetGame()">Try again?</button>
    `;
    return;
  }

  let choicesHtml = "";
  for(let i = 0; i < currentChoices.length; i++) {
    choicesHtml += /*HTML*/
     `<button onclick="handleChoice(${i})">${currentChoices[i].text}</button>
     `;
  }


  appElement.innerHTML = /*HTML*/ `
      <h1>Random Event Test</h1>  
      <div id="message">${currentMessage}</div>
      <div id="choices">${choicesHtml}</div>
      <div id="coolMeter">Cool Meter: ${coolMeter}</div>
    `;
}

function randomEvent() {
  const event = events[Math.floor(Math.random() * events.length)];
  currentMessage = event.description;
  currentChoices = event.choices;
  isEventActive = true;
  updateView();
}

setTimeout(randomEvent, 3000);

function handleChoice(choiceIndex) {
  const choice = currentChoices[choiceIndex];
  currentMessage = choice.response;
  coolMeter += choice.points;
  currentChoices = [];
  isEventActive = false;
  updateView();
  setTimeout(randomEvent, 3000);
  
}

function resetGame() {
  coolMeter = 20;
  currentMessage = "You are driving down the road.";
  currentChoices = [];
  isEventActive = false;
  updateView();
  setTimeout(randomEvent, 3000);
}

updateView();
//aahahahhaah