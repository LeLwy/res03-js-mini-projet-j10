import { data } from './../data/data.js';

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
        
        
    }
    
    start(){
        
    }
    
    redirect(choice){
        
    }
    
    save(){
        
    }
}

export { Game }