let data = [

    {
        id : 0,
        name: "Crisis",
        illustration : "https://speculativeidentities.com/public/assets/research/uscss-nostromo/_postFull/nostromo-05.jpg",
        situation : "\"L'équipe scientifique aurait jamais dû ramener cette merde à bord ! Les marines coloniaux qui devaient récupérer le colis arrivent à peine que ce dernier s'est reproduit et à transformé la totalité de l'équipage en steack haché, en dehors de moi et de notre médecin en chef Leandro Ide (sûrement un italien). Je pourrais l'accompagner vers l'unité de cryosommeil proche où nous nous mettrions à l'abri dans un caisson ou accompagner le colonel Lagachet qui souhaite partir à la chasse aux bestioles. Sinon, je pourrais tenter ma chance seule vers les capsules à l'autre bout du vaisseau.\"",
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
        illustration : "https://cdn.vox-cdn.com/thumbor/SREvcoXsiug7-0OKA00o5jfvhMc=/0x0:1020x565/1400x1400/filters:focal(510x282:511x283)/cdn.vox-cdn.com/uploads/chorus_asset/file/13948531/david-prometheus.1419967364.jpg",
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
        illustration : "https://veteransergeant.files.wordpress.com/2021/11/apone-colonial-marines-uniform.png?w=1024",
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
        illustration : "https://i.pinimg.com/736x/0c/c2/d4/0cc2d4746581b0b263a87c03f49c0aba--set-design-science-fiction.jpg",
        situation : "\"Tous ces recoins sombres, tous ces conduits obscurs ... Autant d'endroits d'où peut surgir la mort ! Peut-être devrais-je rejoindre le docteur Ide ou les marines. Un rugissement lugubre retentit depuis la soute d'où nous venons, le temps presse. Je peux foncer tout droit ou rejoindre soit le docteur, soit les marines par les conduits d'entretien.\"",
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
        illustration : "https://pyxis.nymag.com/v1/imgs/c1c/32b/63fdef23cb5a67c52dc6b6d70c66c7aa59-22-michael-fassbender-alien-1.rsquare.w700.jpg",
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
        illustration : "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/05/23/17/aliens-sigourney-weaver-.jpg?width=1200",
        situation : "\"Sur le sol du pont principal je trouve un lance-flamme, sûrement abandonné par un type de l'entretien sanitaire. C'est peut-être trop gros pour de simples rats, seulement la créature que j'entends approcher a les dents un peu plus longues. Je parviens à la repousser, mais mes réserves de gaz s'épuisant, je dois prendre une décision. Trois couloirs que je peux fermer derrière moi sont à portée de course si j'abandonne prestemment mon arme de fortune. Le premier me ramènera vers la salle de contrôle, avec Lagachet, le second continue vers le module d'urgence et le troisième vers les cryocaissons. Que faire ?\"",
        options : [
            {
                id : 0,
                text: "Quitte à se battre, autant rejoindre les types armés",
                destination : 6 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "Je dois suivre mon instinct",
                destination : 9 // ou null si c'est une fin
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
        illustration : "https://c8.alamy.com/zooms/9/55e20f8eb1af449b92f872efc7b9afed/t2ycfd.jpg",
        situation : "Les créatures surgissent de toute part et mes camarades sont fauchés les uns après les autres malgré leur équipement. Je dois agir vite, soit en les abandonnant à leur sort et profiter du chaos ambiant pour fuir, soit en ramassant un fusil et en me battant pour notre survie.",
        options : [
            {
                id : 0,
                text: "\"C'est pas ma guerre ...\", fuir les créatures occupées à boulotter vos compagnons de fortune",
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
        illustration : "https://www.syfy.com/sites/syfy/files/styles/blog-post-embedded--mobile/public/2020/04/gettyimages-607392368.jpg",
        situation : "\"Vous ne parvenez pas à vous mesurer à l'androïde qui vous oblige à embrasser la bête immonde et votre destin. Quand celle-ci vous aura fécondé, Leandro Ide ,que vous pensiez au dessus de tout soupçon, vous aura cryogénisé avant de vous envoyer à la compagnie Weyland pour étudier la chose qui vous tuera en passant à travers votre cage thoracique.\"",
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
        illustration : "https://cdn.mos.cms.futurecdn.net/iRz8VkJskiynG3eg36KheU.jpg",
        situation : "\"Malgré votre résistance héroique, les monstres finissent par déchiqueter votre pauvre carcasse\"",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },

    {
        id : 9,
        name: "Fat-bottomed Girl",
        illustration : "https://i.pinimg.com/originals/54/b4/10/54b41047aa32592967c620befe926871.jpg",
        situation : "\"Merde ... c'est la salle de stockage du matériel \"sensible\", précisemment là d'où est partie l'infestation. La saloperie de trois mètres de haut qui me fait face doit être la génitrice des autres et elle a bien grandi depuis que les \"blouses blanches\" l'on ramenée à bord. Si je repars vers la salle de contrôle pour aider les marines et qu'on s'en sort, on arrivera peut-être à venir à bout de cette chose ... Seulement les capsules de secours sont dans la pièce à côté, avec un exosquelette de manutention dont je pourrais me servir pour bloquer la créature le temps d'initier les protocoles de lancement. Que faire ?\"",
        options : [
            {
                id : 0,
                text: "\"On doit pouvoir s'en sortir tous ensemble\", rejoindre Lagachet et les marines",
                destination : 8 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "\"C'est le moment de sprinter ma grande !\", semer brièvement la monstrueuse matriarche et mettre en place le face-à-face",
                destination : 10 // ou null si c'est une fin
            },
        ]
    },

    {
        id : 10,
        name: "Ne me touche pas sale p***",
        illustration : "http://cyberneticzoo.com/wp-content/uploads/aliens-power-loader.jpg",
        situation : "\"Elle arrive ! J'ai à peine le temps de lancer les protocoles de lancement sur la console et de me glisser dans l'exosquelette que la bête me fait face. Grâce aux énormes pinces de mon armure de fortune, je parviens tant bien que mal à immobiliser mon adversaire contre une paroi du module. Ne me reste plus qu'à sauter et prendre mes jambes à mon cou jusqu'à la capsule. Cependant je suis en position de force, si je manipule assez rapidement ma bécane, je peux tordre le cou à cette saloperie avant qu'elle ne se dégage\"",
        options : [
            {
                id : 0,
                text: "En finir une bonne fois pour toute avant de fuir",
                destination : 11 // ou null si c'est une fin
            },
            {
                id : 1,
                text: "\"Le mieux est l'ennemi du bien, que tout ce merdier devienne le problème de quelqu'un d'autre !\"",
                destination : 12 // ou null si c'est une fin
            },
        ]
    },

    {
        id : 11,
        name: "Elle connaissait le kung-fu ...",
        illustration : "https://magazine50.com/f/11238/ATTI24.jpg",
        situation : "Vous avez sous-estimé l'agilité du monstre auquel vous faisiez face et à peine la pression de l'une des pinces relâchée, vous vous retrouvez transpercée par le dard mortel situé au bout de sa queue.",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },

    {
        id : 12,
        name: "Sleeping Beauty",
        illustration : "https://i0.wp.com/diacritik.com/wp-content/uploads/2020/01/alien1979Gb300512.jpg?fit=900%2C600&ssl=1",
        situation : "Le temps de sauter dans la capsule et d'en allumer les réacteurs, vous vous retrouvez projetée à travers le vide spatial. Désormais à l'abri de ces créatures venues d'un autre monde, vous pouvez tranquillement initialiser le système de stase temporaire de votre vaisseau de fortune, en espérant que quelqu'un, quelque part captera votre signal avant que vous ne vous transformiez en glaçon interstellaire itinérant. Au moins pour le moment êtes vous sauf.",
        options : [
            {
                id : 0,
                text: "",
                destination : null // ou null si c'est une fin
            },
        ]
    },


]

export { data };