class Player{
      constructor(){

      }
      getCount(){
          var playerref=database.ref('playerCount')
          playerref.on("value",function (data){
              playerCount=data.val()
          })
      }
      updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
      }
      update(name){
         var playerindex="player"+playerCount
         database.ref(playerindex).set({
             Name:name
         })
      }
}