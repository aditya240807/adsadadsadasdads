class Game {
  constructor() {

  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async Login() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    player1 = createSprite(800, 400, 50, 50)
    player2 = createSprite(800, 450, 50, 50)
    playersCoinCollect.push(player1)
    playersCoinCollect.push(player2)

  }
  Select() {

    background(background1)
    image(form.image, displayWidth / 2 - 500, displayHeight / 2 - 350, 300, 400)
    image(form.image2, displayWidth / 2 + 200, displayHeight / 2 - 350, 300, 400)
    form.hide()
    form.gameMode1.position(displayWidth / 2 - 400, displayHeight / 2 + 70)
    form.gameMode2.position(displayWidth / 2 + 300, displayHeight / 2 + 70)
    form.gameMode1.mousePressed(() => {
      game.update(2)
      form.gameMode1.hide()
      form.gameMode2.hide()
      form.greeting.hide()
      form.CONTINUE.hide()
      background(background2)
      form.pick.hide()
    })
    form.gameMode2.mousePressed(() => {
      game.update(3)
      form.gameMode1.hide()
      form.gameMode2.hide()
      form.greeting.hide()
      form.CONTINUE.hide()

    })

  }
  coinCollect() {
    background(background2)
    if (World.frameCount % 60 === 0) {
      var coin = createSprite(random(100, 500), random(10, 600), 100, 100)
      coin.addImage(image3)
      coin.scale = 0.1
      coin.velocityX = random(-10, 10)
      coin.velocityY = random(-10, 10)
      coinGroup.add(coin)
      //console.log(coin.x)

    }

    if (playersCoinCollect !== undefined) {
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for (var plr in playersCoinCollect) {
        //add 1 to the index for every loop
        index = index + 1;

        //position the cars a little away from each other in x direction
        //x = x + 200;
        //use data form the database to display the cars in y direction


        // console.log(index, player.index)


        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
          if (coinGroup.isTouching(playersCoinCollect[index - 1])) {
            coinGroup.destroyEach()
            //playersCoinCollect[index-1].score++
            player.score++
            player.update()
          }

          playersCoinCollect[index - 1].x = mouseX;
          playersCoinCollect[index - 1].y = mouseY;
          playersCoinCollect[index - 1].shapeColor = "red";
          camera.position.x = playersCoinCollect[index - 1].x;
          camera.position.y = playersCoinCollect[index - 1].y;
        }

        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)

      }
      if (keyIsDown(UP_ARROW) && player.index !== null) {

        player.update();
        console.log(player.index)
      }
      if (player.score === 10) {
        if(index===player.index){
          player.winner=player.username
          player.updatewinner(player.winner)
        }
        game.update(4)
        gameState = 4
    }

  }



  }
  endCoinCollect() {
    
      console.log("COIN COLLECTION HAS ENDED")
      textSize(40)
      
      
      text ("YOU WON!: "+player.getWinner(),500,200)
  }
  /*Race (){
   background(rgb(198,135,103));
   image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
   var playerRunner = createSprite(400,400,50,50)
   var playerRunner2 = createSprite(400,400,50,50)
   cars.push(playerRunner)
   cars.push(playerRunner2)
   if(allPlayers !== undefined){
       background(rgb(198,135,103));
       image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
       
       //var display_position = 100;
       
       //index of the array
       var index = 0;
 
       //x and y position of the cars
       var x = 175 ;
       var y;
 
       for(var plr in allPlayers){
         //add 1 to the index for every loop
         index = index + 1 ;
 
         //position the cars a little away from each other in x direction
         x = x + 200;
         //use data form the database to display the cars in y direction
         y = displayHeight - allPlayers[plr].distance;
         cars[index-1].x = x;
         cars[index-1].y = y;
        // console.log(index, player.index)
 
        
         if (index === player.index){
           stroke(10);
           fill("red");
           ellipse(x,y,60,60);
           cars[index - 1].shapeColor = "red";
           camera.position.x = displayWidth/2;
           camera.position.y = cars[index-1].y;
         }
        
         //textSize(15);
         //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
       }
 
     }
 
     if(keyIsDown(UP_ARROW) && player.index !== null){
       player.distance +=10
       player.update();
     }
 
     if(player.distance > 3860){
       gameState = 4;
       //player.rank+=1
       //Player.updateCarsAtEnd(player.rank)
     }
    
     drawSprites();
   }*/
}





