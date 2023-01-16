class Option{
    
    #text;
    #destination;
    
    constructor(text, destination){
        
        this.#text = text;
        this.#destination = destination;
    }
    
    get text (){
        return this.#text;
    }

    set text (text){
        this.#text = text;
    }
    
    get destination (){
        return this.#destination;
    }

    set destination (destination){
        this.#destination = destination;
    }
    
    
}