// CLASS OBJECT VARIABLES
let stars;
let game_score_display;
let score;

// POSITION VARIABLES
let is_left;
let is_right;
let is_down;
let is_up;

// ARRAYS
let bubbles;

function startGame() {
  // Set up canvas
  createCanvas(windowWidth, windowHeight);

  // Game score set to 0 so that player can start the game with a carte blanche
  score = 0;

  // POSITION / BOOLEAN VARIABLES
  is_left = false;
  is_right = false;
  is_up = false;
  is_down = false;

  // Set frame rate
  frameRate(10);

  // Set up stars
  stars = new Stars();
  stars.setUpStars();

  // Set up bubbles
  bubbles = [];

  for (let i = 0; i < 80; i++) {
    bubbles.push(new Bubble(random(0, windowWidth), random(0, windowHeight)));
  }

  // Set up game score display
  game_score_display = new GameScore();
}
