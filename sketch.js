var gameState = 0;
var playerCount;
var allPlayers;
var database;
var player1, player2, player3, player4
var form, player, game
var playersCoinCollect = []
var cars = []
var winner
function preload() {
  background1 = loadImage("BACKGROUND.jpg")
  background2 = loadImage("openfieldgrass.jpg")
  track = loadImage("track.png")
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.Login();
  coinGroup = createGroup()
  image3 = loadImage("money.png")
}

function draw() {
  background(background1)

  if (gameState === 1) {
    clear();
    game.Select();
  }

  if (gameState === 2) {
    background(background2)
    game.coinCollect()
  }
  if (gameState === 4) {
    game.endCoinCollect()
  }



  if (gameState === 3 && playerCount === 2) {

    game.Race()
  }
  drawSprites();
}