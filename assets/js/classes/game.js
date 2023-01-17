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
        
        for(let i=0; i<data.length; i++){
            
            let newScene = new Scene();
            
            newScene.id = data[i].id;
            newScene.illustration = data[i].illustration;
            newScene.situation = data[i].situation;
            newScene.options = data[i].options;
            
            console.log(newScene);
            
            if(newScene.id === 0){
                
                newScene.displayScene();
            }
        }
    }
    
    start(){
        
    }
    
    save(){
        
    }
}

export { Game }