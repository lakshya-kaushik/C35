class Game{
    constructor(){

    }
    //read gamestate from database 
getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
    
     })
}
//upadate the gamestate un the database 
update(state){
    //p/refers to the main database 
database.ref('/').update({
    gameState:state
})
}
start(){
    if(gameState===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}
}