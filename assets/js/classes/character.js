class Character{
    
    #name;
    
    constructor(name){
        
        this.#name = name;
    }
    
    get name (){
        return this.#name;
    }

    set name (name){
        this.#name = name;
    }
}

class CharacterTest{
    
    #character;
    
    constructor(){
        
        this.character = null;
    }
    
    test(){
        
        let characterName = "Ellen Ripley";
        
        this.#character = new Character(characterName);
        console.log(this.#character.name);
    }
}