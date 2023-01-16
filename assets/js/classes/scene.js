class Scene{
    
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
    
    getOptions(){
        
        
    }
    
    displayScene(){
        
    }
    
    displayIllustration(){
        
    }
    
    displaySituation(){
        
    }
    
    displayOptions(){
        
    }
}

class SceneTest{
    
    #scene;
    
    constructor(){
        
        this.#scene = null;
    }
    
    test(){
        
        let sceneId;
        let sceneIdIllustration;
        let sceneIllustrationSituation;
        let sceneOptions;
        
        this.#scene = new Scene(sceneId, sceneIllustration, sceneSituation, sceneOptions);
        
        console.log(this.#scene.sceneId);
        console.log(this.#scene.sceneIllustration);
        console.log(this.#scene.sceneSituation);
        console.log(this.#scene.sceneOptions);
    }
}

export { Scene };