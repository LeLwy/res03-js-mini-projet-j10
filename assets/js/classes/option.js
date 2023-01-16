class Option{
    
    #id;
    #text;
    #destination;
    
    constructor(id, text, destination){
        
        this.id = id;
        this.#text = text;
        this.#destination = destination;
    }
    
    get id (){
        return this.#id;
    }

    set id (id){
        this.#id = id;
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