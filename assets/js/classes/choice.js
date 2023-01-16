class Choice{
    
    #scene;
    #situation;
    #options;
    
    constructor(scene, situation, options){
        
        this.#scene = scene;
        this.#situation = situation;
        this.options = [];
    }
    
    get scene (){
        return this.#scene;
    }

    set scene (scene){
        this.#scene = scene;
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
    
    displayScene(){
        
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
        
        let choiceScene;
        let choiceSituation;
        let choiceOptions;
        
        this.#choice = new Choice(choiceScene, choiceSituation, choiceOptions);
        
        console.log(this.#choice.choiceScene);
        console.log(this.#choice.choiceSituation);
        console.log(this.#choice.choiceOptions);
    }
}