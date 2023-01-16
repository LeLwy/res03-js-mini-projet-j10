import { data } from './../data/data.js';
import { Scene } from './scene.js';

class Game{
    
    #character;
    #choices;
    
    constructor(){
        
        this.#character = character;
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
            
            let newScene = new Scene;
        }
    }
    
    start(){
        
    }
    
    redirect(choice){
        
    }
    
    save(){
        
    }
}

export { Game }