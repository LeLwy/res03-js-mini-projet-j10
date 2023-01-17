import { data } from './../data/data.js';
import { Scene } from './scene.js';

class Game{
    
    #character;
    #choices;
    
    constructor(){
        
        this.#character;
        this.#choices = [];
    }
    
    get choices (){
        return this.#choices;
    }

    set choices (choices){
        this.#choices = choices;
    }
    
    get character (){
        return this.#character;
    }

    set character (character){
        this.#character = character;
    }
    
    init(){
        
            
        let startScene = new Scene();
        
        startScene.id = data[0].id;
        startScene.name = data[0].name;
        startScene.illustration = data[0].illustration;
        startScene.situation = data[0].situation;
        startScene.options = data[0].options;
       
        startScene.displayScene();
        
        this.redirection();

    }
    
    redirection(){
        
        let sceneSubBtn = document.getElementById("subBtn");
        
        sceneSubBtn.addEventListener("click", function(e){
            
            e.preventDefault();
            
            let radioInputs = document.querySelectorAll("#choices > fieldset > input");
            let inputValue; 
            
            for(let i=0; i<radioInputs.length; i++){
                
                if(radioInputs[i].checked){
                    
                    inputValue = radioInputs[i].getAttribute("destination");
                }
            }
            
            let newScene = new Scene();
            
            for(let i=0; i<data.length; i++){
                
                if(inputValue === data[i].id){
                    
            
                    newScene.id = data[i].id;
                    newScene.name = data[i].name;
                    newScene.illustration = data[i].illustration;
                    newScene.situation = data[i].situation;
                    newScene.options = data[i].options;
                    
                }
            }
            
            newScene.displayScene();
        });
    }
    
    start(){
        
    }
    
    save(){
        
    }
}

export { Game }