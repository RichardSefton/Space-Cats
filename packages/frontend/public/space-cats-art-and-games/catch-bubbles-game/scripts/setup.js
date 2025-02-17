// POSITION VARIABLES
let is_left;
let is_right;
let is_down;
let is_up;

// GAME SCORE
let score;

// ARRAYS
let bubbles;

// CLASS OBJECTs
let cat;
let stars;
let game_score_display;

function setUpGame() {
  createCanvas(windowWidth, windowHeight);

  // Game score is set to 0 so that the player can start the game with a carte blanche
  score = 0;

  // Set frame rate
  frameRate(10);

  // POSITION / BOOLEAN VARIABLES
  is_left = false;
  is_right = false;
  is_up = false;
  is_down = false;

  // Set up bubbles
  bubbles = [];

  for (let i = 0; i < 80; i++) {
    bubbles.push(new Bubble(random(0, windowWidth), random(0, windowHeight)));
  }

  // Set up stars
  stars = new Stars();

  // Set up a new cat instance
  cat = new Cat();

  // Set up game score display
  game_score_display = new GameScore();
}
