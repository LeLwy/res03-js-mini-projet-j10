class Scene{
    
    #id;
    #name;
    #illustration;
    #situation;
    #options;
    
    constructor(){
        
        this.#id;
        this.#name;
        this.#illustration;
        this.#situation;
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
        let sceneNameText = document.createTextNode(this.#name);
        sceneName.appendChild(sceneNameText);
        
        let sceneSituation = document.createElement("p");
        let sceneSituationText = document.createTextNode(this.#situation);
        sceneSituation.appendChild(sceneSituationText);
        
        sceneNameSituationSection.appendChild(sceneName);
        sceneNameSituationSection.appendChild(sceneSituation);
        
    }
    
    displayOptions(){
        
        let sceneOptionsSection = document.getElementById("scene-options");
        let optionsForm = document.getElementById("choices");
        
        for(let i=0; i<this.#options.length; i++){
            
            let optionInput = document.createElement("input");
            let optionLabel = document.createElement("label");
            let optionFieldset = document.createElement("fieldset");
            
            optionInput.setAttribute("type", "radio");
            optionInput.setAttribute("name", "choice");
            optionInput.setAttribute("destination", this.#options[i].destination);
            
            optionLabel.setAttribute("for", "choice");
            let optionLabelText = document.createTextNode(this.#options[i].text)
            optionLabel.appendChild(optionLabelText);
            
            optionFieldset.appendChild(optionLabel);
            optionFieldset.appendChild(optionInput);
            
            optionsForm.appendChild(optionFieldset);
        }
        
        let subBtnFieldset = document.createElement("fieldset");
        let subBtn = document.createElement("input");
        
        let subBtnId = "subBtn";
        subBtn.id = subBtnId;
        subBtn.setAttribute("type", "submit");
        subBtn.setAttribute("value", "J'y vais");
        
        subBtnFieldset.appendChild(subBtn);
        optionsForm.appendChild(subBtnFieldset);
        
    }
    
    displayIllustration(){
        
        let sceneIllustrationImg = document.querySelector("#img > figure > img");
        let illustrationSrc = document.createTextNode(this.#illustration);
        console.log(illustrationSrc);
        sceneIllustrationImg.setAttribute("src", illustrationSrc);
        
    }
    
    displayScene(){
        
        this.removeScene();
        this.displayNameSituation();
        this.displayOptions();
        this.displayIllustration();
        
    }
    
    removeScene(){
        
        let sceneNameSituationSection = document.getElementById("scene-name");
        let optionsForm = document.getElementById("choices");
        let sceneIllustrationImg = document.querySelector("#img > figure > img");
        
        sceneNameSituationSection.innerHTML = "";
        optionsForm.innerHTML = "";
        sceneIllustrationImg.innerHTML = "";
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