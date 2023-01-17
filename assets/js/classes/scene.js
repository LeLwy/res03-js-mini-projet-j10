class Scene{
    
    #id;
    #name;
    #illustration;
    #situation;
    #options;
    
    constructor(){
        
        this.#id;
        this.#name = "";
        this.#illustration = "";
        this.#situation = "";
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
    
    get name (){
        return this.#name;
    }

    set name (name){
        this.#name = name;
    }
    
    displayNameSituation(){
        
        /*Display sur la section name avec le nom de la scene et la situation*/
        
        let sceneNameSituationSection = document.getElementById("scene-name");
        
        let sceneName = document.createElement("h2");
        let sceneNameText = createTextNode(this.#name);
        sceneNameTitle.appenChild(sceneNameText);
        
        let sceneSituation = document.createElement("p");
        let sceneSituationText = createTextNode(this.#situation);
        sceneSituation.appenChild(sceneSituationText);
        
        sceneNameSituationSection.appenChild(sceneName);
        sceneNameSituationSection.appenChild(sceneSituation);
        
    }
    
    displayOptions(){
        
        let sceneOptionsSection = document.getElementById("scene-options");
        
        for(let i=0, i<this.#options.length, i++){
            
            
        }
    }
    
    displayIllustration(){
        
        
    }
    
    displayScene(){
        
        
    }
    
    redirection(scene){
        
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