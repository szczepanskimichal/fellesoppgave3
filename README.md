"Driving Game" HTML/JavaScript Project

Description

This is a simple web-based driving game where the player's "coolness" is tested through random events while driving down the road. Each event presents the player with different choices that can either increase, decrease, or have no impact on their coolness level. The objective of the game is to maintain a high coolness meter and avoid getting too "uncool" to drive.

Features

Random Events: The game generates random events where the player must choose an action.
Cool Meter: The player has a "coolness" meter that increases or decreases based on their choices.
Event Choices: Each event has a series of choices that the player can make. Each choice has a corresponding point value that affects the coolness meter.
Game Over / Win Conditions: The game ends if the coolness meter drops to zero, or if the coolness meter reaches 100. If either of these conditions is met, the player can restart the game.
Background & Event Images: The game displays background images and event-specific images to enhance the experience.
Game Mechanics
Cool Meter: The player's coolness is represented by a meter, which can range from 0% to 100%. The meter is updated based on the player's choices.

If the coolness meter reaches 0%, the game ends.
If the coolness meter reaches 100%, the player wins.
The color of the coolness meter changes based on the current value:
Red (low coolness)
Blue (neutral coolness)
Green (high coolness)
Random Events: The game will randomly select an event that will influence the player's coolness. Each event has multiple choices, and the outcome of each choice impacts the coolness meter.

Choices and Responses:

The player is given 3 options for each event. Each option results in a different outcome.
Each response comes with a certain number of points that will increase or decrease the coolness meter.

Setup

To run this game, simply follow these steps:

Clone the Repository: If you are working with a Git repository, clone it using the following command:

bash
Kopier
Rediger
git clone https://github.com/szczepanskimichal/fellesoppgave3.git
Required Files:

The HTML file (index.html).
Event images (e.g., friend.png, monster.png, AngryFriend.jpg, etc.) should be stored in the ./imgs/ directory (as referenced in the code).
The images should be in PNG or JPG format.
Running the Game:

Open the index.html file in any web browser (Chrome, Firefox, Safari, etc.) to start playing the game.
Make sure the images are correctly linked to the HTML file for optimal functionality.
File Structure
bash
Kopier
Rediger
/index.html # Main game file containing HTML structure and JavaScript logic
/imgs/ # Folder containing images used in the game
├── Car.png # Background image
├── friend.png # Event image (Friend)
├── monster.png # Event image (Monster)
└── AngryFriend.jpg # Event image (Angry Friend)

Code Explanation

HTML
The HTML structure defines the layout of the game interface, including the coolness meter and buttons for choices.
An app container dynamically updates with game messages and choices based on JavaScript logic.

CSS
The game style is simple and minimalist.
The background image (Car.png) is used to give a driving feel.
The coolness meter changes its appearance depending on the player's current coolness.
Button styles and event images are also defined in the CSS for a better visual experience.

JavaScript
The main logic of the game is handled by JavaScript.
Events: The game uses an array of events, each with a description, event-specific image, and possible choices.
Game Flow: The game randomly selects an event after a 3-second delay, updates the message based on the player's choice, and updates the coolness meter.

Game Over and Winning Conditions: The game will either display a "Game Over" message if the coolness meter hits 0 or a "You won!" message when it reaches 100.
Choice Handling: The player's choice updates the game state and triggers the next event.

How to Play
You start by driving down the road, and random events will occur.
For each event, you must choose one of the available options.
Each choice will either improve, worsen, or maintain your "coolness" meter.

If your coolness meter drops to 0%, the game ends, and you'll have the option to restart.

If your coolness meter reaches 100%, you win and can also restart the game.

Dependencies

No external libraries are used for this game. It relies solely on HTML, CSS, and vanilla JavaScript.
License
This project is open-source and available under the MIT License.

Team Members:
[Michal]
[Sander]
[Waquar]
