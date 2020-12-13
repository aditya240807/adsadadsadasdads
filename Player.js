class Player {
    constructor(){
      this.index = null;
      this.username = null;
      this.rank=null;
      this.distance=0
      this.score=0
      this.winner=null
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
    getWinner(){
      var winnerofgame=database.ref('winner');
      winnerofgame.on("value",(data)=>{
         winner=data.val()
      })
    }
    updatewinner(Winner){
      database.ref('/').update({
        winner:Winner
      })
    }
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        username:this.username,
        score:this.score
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  
    
     
  }
  