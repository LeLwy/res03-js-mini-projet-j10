class Choice{
    
    #id;
    #illustration;
    #situation;
    #options;
    
    constructor(id){
        
        this.#id = id
        this.#illustration = illustration;
        this.#situation = situation;
        this.#options = [];
    }
    
    get id (){
        return this.#id;
    }

    set id (id){
        this.#id = id;
    }
    
    get illustration (){
        return this.#illustration;
    }

    set illustration (illustration){
        this.#illustration = illustration;
    }
    
    get situation (){
        return this.#situation;
    }

    set situation (situation){
        this.#situation = situation;
    }
    
    get options (){
        return this.#options;
    }

    set options (options){
        this.#options = options;
    }
    
    displayChoice(){
        
    }
    
    displayIllustration(){
        
    }
    
    displaySituation(){
        
    }
    
    displayOptions(){
        
    }
}

class choiceTest{
    
    #choice;
    
    constructor(){
        
        this.#choice = null;
    }
    
    test(){
        
        let choiceId;
        let choiceIllustration;
        let choiceSituation;
        let choiceOptions;
        
        this.#choice = new Choice(choiceId, choiceIllustration, choiceSituation, choiceOptions);
        
        console.log(this.#choice.choiceId);
        console.log(this.#choice.choiceIllustration);
        console.log(this.#choice.choiceSituation);
        console.log(this.#choice.choiceOptions);
    }
}