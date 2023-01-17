let data = [
    
    {
        id : 0,
        name: "Crisis",
        illustration : "",
        situation : "\"L'équipe scientifique aurait jamais dû ramener cette merde à bord ! Les marines coloniaux qui devaient récupérer le colis arrivent à peine que ce dernier s'est reproduit et à transformé la totalité de l'équipage en steack haché, en dehors de moi et de notre médecin en chef Leandro Ide (sûrement un italien). Je pourrais l'accompagner vers l'unité de cryosommeil où nous nous mettrions à l'abri dans un caisson ou accompagner le colonel Lagachet qui souhaite partir à la chasse aux bestioles. Sinon, je pourrais tenter ma chance seule vers les capsules à l'autre bout du vaisseau.\"",
        options : [
            {
                id : 0,
                text: "Accompagner ce bon Dr Ide, il m'inspire confiance.",
                destination : 1 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "Rester avec les gros flingues, ils ont peut-être une chance après tout...",
                destination : 2 // ou null si c'est une fin
            },
            {
                id : 2,
                text: "Je suis la technicienne en chef, je peux me débrouiller seule !",
                destination : 3 // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 1,
        name: "Quoi de neuf Docteur ?",
        illustration : "",
        situation : "\"Le docteur Ide est quelqu'un de généralement agréable malgré sa fascination pour les créatures, il s'est même proposé pour configurer personnellement mon caisson une fois que nous serions à l'unité de cryosommeil. Cependant il se montre parfois froid et distant, un peu comme ces synthétiques de chez Weyland et il a ce je-ne-sais-quoi qui provoque chez moi un sentiment mitigé. Je peux toujours repartir vers le pont principal, mais toutes ces choses qui nous traquent ...\"",
        options : [
            {
                id : 0,
                text: "Rester avec le docteur Leandro Ide",
                destination :  4// ou null si c'est une fin
            },
            {
                id : 1,
                text: "Planter ce type louche sur place et repartir vers le pont",
                destination : 5 // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 2,
        name: "Les tontons flingueurs",
        illustration : "",
        situation : "\"Le colonel Lagachet et ses marines ont l'air de braves types, ils m'ont tous montré des photos de leur famille ! Ces dernières doivent les attendre avec impatience. Leur détecteur nous signale une biomasse importante qui se déplace en direction de la salle de contrôle et nous aurons besoin des instruments qui s'y trouvent afin de cloisonner les parties du vaisseau infestées. Ainsi, il nous faudra défendre la place coûte que coûte. Cela dit, les capsules de sauvetage ne sont pas si éloignées, si je cours vite ...\"",
        options : [
            {
                id : 0,
                text: "Vers la bataille",
                destination : 6 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "Les héros finissent rarement bien, je devrais tenter ma chance vers les capsules",
                destination : 5 // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 3,
        name: "Alone in the dark",
        illustration : "",
        situation : "\"Tous ces recoins sombres, toutes ces conduites obscures ... Autant d'endroits d'où peut surgir la mort ! Peut-être devrais-je rejoindre le docteur Ide ou les marines. Un rugissement lugubre retentit depuis la soute d'où nous venons, le temps presse. Je peux foncer tout droit ou rejoindre soit le docteur, soit les marines par les conduites d'entretien.\"",
        options : [
            {
                id : 0,
                text: "Retourner vers les gros bras",
                destination : 2 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "Rejoindre Leandro Ide",
                destination : 1 // ou null si c'est une fin
            },
            {
                id : 2,
                text: "Foncer tout droit !",
                destination : 5 // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 4,
        name: "Le soulèvement des machines",
        illustration : "",
        situation : "\"En arrivant dans l'unité de cryosommeil, une chose attire mon attention. Un énorme oeuf, le même que ceux pondus par le \"colis\", gît au sol ouvert. Le docteur Ide, m'attrape soudainement par la taille et me maintiens impuissante face à une créature rampante surgissant de derrière un caisson. Je sais ce que cette chose me fera si elle me saute au visage et attrapant la clé à molette accrochée à mon ceinturon, je frappe violemment le docteur pour qu'il me lâche. En me dégageant, j'aperçoit son visage balafré dégoulinant d'une substance blanche et visqueuse ... Un synthétique ! \"",
        options : [
            {
                id : 0,
                text: "Se battre de toute ses forces contre le fourbe androïde tout en tentant d'échapper à la créature",
                destination : 7 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "La paroi d'un conduit d'aération est démontée. Se jeter à travers l'ouverture et fuir loin d'ici.",
                destination : 9 // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 5,
        name: "Heat",
        illustration : "",
        situation : "\"Sur le sol du pont principal je trouve un lance-flamme, sûrement abandonné par un type de l'entretien sanitaire. C'est peut-être tros gros pour de simples rats, mais la créature que j'entends approcher a les dents un peu plus longues. Je parviens à la repousser, mais mes réserves de gaz s'épuisant, je dois prendre une décision. Trois couloirs que je peux fermer derrière moi sont à portée de course si j'abandonne prestemment mon arme de fortune. Le premier me ramènera vers la salle de contrôle, avec Lagachet, le second continu vers le module d'urgence et le troisième vers les cryocaissons. Que faire ?\"",
        options : [
            {
                id : 0,
                text: "Quitte à se battre, autant rejoindre les types armés",
                destination : 6 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "Je dois suivre mon instinct",
                destination : 10 // ou null si c'est une fin
            },
            {
                id : 2,
                text: "Si je retrouve Leandro, il saura peut-être quoi faire",
                destination : 4 // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 6,
        name: "Crowd Control",
        illustration : "",
        situation : "Les créatures surgissent de toute part et mes camarades sont fauchés les uns après les autres malgré leur équipement. Je dois agir vite, soit en les abandonnant à leur sort et profiter du chaos ambiant pour fuir, soit en ramassant un fusil et en me battant pour notre survie.",
        options : [
            {
                id : 0,
                text: "C'est pas ma guerre ... Fuir les créatures occupées à boulotter vos compagnons de fortune",
                destination : 9 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "Autant se battre, ces créatures ne me lâcheront jamais",
                destination : 8 // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 7,
        name: "Maman malgré moi",
        illustration : "",
        situation : "Vous ne parvenez pas à vous mesurer à l'androïde qui vous oblige à embrasser votre destin, ainsi que l'immonde bête rampante qui aura tôt fait de faire de vous la peu fière génitrice d'un nouveau monstre. Avant cela, Leandro Ide que vous pensiez au dessus de tout soupçon vous aura cryogénisé avant de vous envoyer à la compagnie Weyland, pour étudier la chose qui vous tuera en passant à travers votre cage thoracique.",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 8,
        name: "Je suis une légende",
        illustration : "",
        situation : "",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
            {
                id : 1,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 9,
        name: "Scène 10",
        illustration : "",
        situation : "",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
            {
                id : 1,
                text: "",
                destination : null// ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 10,
        name: "Scène 11",
        illustration : "",
        situation : "",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
            {
                id : 1,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 11,
        name: "Scène 12",
        illustration : "",
        situation : "",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
            {
                id : 1,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 12,
        name: "Scène 13",
        illustration : "",
        situation : "",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
            {
                id : 1,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },
    
    {
        id : 13,
        name: "Scène 14",
        illustration : "",
        situation : "",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
            {
                id : 1,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },
]

export { data };