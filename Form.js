class Form {
  constructor() {
    this.input = createInput("Username");
    this.password = createInput("Password")
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.gameMode1 = createButton("Coin Collection")
    this.gameMode2 = createButton("Race for the Diamond")
    this.CONTINUE = createButton("Continue")
    
    this.image = loadImage("money.png")
    
    this.image2 = loadImage("diamond.png")
    this.pick = createElement('h1')
  }
  hide() {
    //this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.password.hide()
    this.title.hide();
    this.greeting.hide()
    this.CONTINUE.hide()
  }
  display() {
    this.title.html("FUN PVP GAME!")
    this.title.position(displayWidth / 2 - 50, 0);

    this.input.position(displayWidth / 2 - 80, displayHeight / 2 - 140);
    this.password.position(displayWidth / 2 - 80, displayHeight / 2 - 80);
    this.button.position(displayWidth / 2 + 30, displayHeight / 2 + 30);

    this.button.mousePressed(() => {
      this.input.hide();
      this.password.hide();
      this.button.hide();
      player.username = this.input.value();
      player.password = this.password.value();
      playerCount += 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Welcome! " + player.username)

      this.greeting.position(displayWidth / 2 - 70, displayHeight / 4);
      this.CONTINUE.position(displayWidth / 2 + 70, displayHeight / 4 + 100)
    });
    this.CONTINUE.mousePressed(() => {
      game.update(1)
      form.hide()
    })
    if (gameState === 1) {
      background(background1)
      this.pick.html("Choose a gamemode")
      this.pick.position(displayWidth / 2 - 100, displayHeight / 4)
    }
  }

}