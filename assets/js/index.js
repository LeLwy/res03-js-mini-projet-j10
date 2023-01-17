import { Game } from './classes/game.js'

window.addEventListener("DOMContentLoaded", function(){
    
    
    let mySession = new Game;
    
    mySession.init();
    
    let form = document.getElementById("choices");
    
    form.addEventListener("submit", function(e){
        
        e.preventDefault();
        
        mySession.redirection();
        
    });
});