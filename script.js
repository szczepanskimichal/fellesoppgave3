const events = [
  {
    description: "You met a friend along the way!",
    choices: [
      {
        text: "Offer a ride",
        response: "Your friend says, 'Thanks!' and hops in.",
      },
      {
        text: "Wave and drive on",
        response: "Your friend waves back but looks a bit angry.",
      },
      {
        text: "Stop to chat",
        response: "You talk for a bit, then keep driving.",
      },
    ],
  },
  {
    description: "A monster appeared on the road!",
    choices: [
      {
        text: "Swerve around it",
        response: "You barely miss the monster and speed away!",
      },
      {
        text: "Fight it",
        response: "You stop and scare it off with your horn.",
      },
      {
        text: "Scream and panic",
        response: "The monster laughs and runs off.",
      },
    ],
  },
  {
    description: "The car behind you is mad, you got into a road rage!",
    choices: [
      { text: "Speed up", response: "You lose them in traffic!" },
      { text: "Slow down", response: "They pass you, yelling out the window." },
      {
        text: "Honk back",
        response: "It turns into a honking war, but they eventually leave.",
      },
    ],
  },
];

let currentMessage = "You are driving down the road.";
let currentChoices = [];
let isEventActive = false;

updateView();
setTimeout(randomEvent, 1000);

function updateView() {
  const choicesHtml = currentChoices
    .map(
      (choice, index) => `
      <button onclick="handleChoice(${index})">${choice.text}</button>
    `
    )
    .join("");

  document.getElementById("app").innerHTML = /*HTML*/ `
      <h1>Random Event Test</h1>  
      <div id="message">${currentMessage}</div>
      <div id="choices">${choicesHtml}</div>
    `;
}

function randomEvent() {
  const event = events[Math.floor(Math.random() * events.length)];
  currentMessage = event.description;
  currentChoices = event.choices;
  isEventActive = true;
  updateView();
}

function handleChoice(choiceIndex) {
  const choice = currentChoices[choiceIndex];
  currentMessage = choice.response;
  currentChoices = [];
  isEventActive = false;
  updateView();
}

// HTML structure
document.body.innerHTML = `
    <div id="app"></div>
  `;

// Initial view update
updateView();
