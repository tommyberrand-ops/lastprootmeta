// data/equilibriste.js - Personnage Équilibriste avec objet personnalisable

const equilibristeData = {
    name: "🎪 Équilibriste",
    dance: "Danse d'équilibre",
    type: "equilibriste",
    
    decors: [
        {
            nom: "🎪 Chapiteau de cirque",
            description: "sous un chapiteau de cirque, projecteurs colorés, piste aux étoiles, gradins avec public silencieux retenant son souffle"
        },
        {
            nom: "🏛️ Scène minimaliste",
            description: "sur une scène épurée, fond noir, éclairage spot central, ambiance intimiste et tendue"
        },
        {
            nom: "🌆 Toit de ville",
            description: "sur le toit d'un immeuble la nuit, lumières de la ville en contrebas, vent léger, ambiance urbaine et dangereuse"
        }
    ],

    actions: [
        {
            nom: "Équilibre parfait",
            description: "elle marche lentement, ses bras s'ouvrant comme des ailes pour maintenir l'équilibre, son corps ondulant avec grâce"
        },
        {
            nom: "Rotation lente",
            description: "elle tourne sur elle-même très lentement, l'objet restant parfaitement stable sur sa tête, ses mains effleurant son corps"
        },
        {
            nom: "Regard vers l'objet",
            description: "elle lève les yeux vers l'objet sans bouger la tête, sourire confiant, puis regarde la caméra complice"
        },
        {
            nom: "Défi sensuel",
            description: "elle exécute un léger cambré, l'objet suivant le mouvement sans tomber, prouesse d'équilibre et de sensualité"
        }
    ],

    danceMoves: {
        part1: [
            "pas lents et mesurés, chaque mouvement calculé pour préserver l'équilibre",
            "bras gracieux en balancier, doigts fins tendus",
            "rotations du bassin tout en gardant la tête immobile",
            "regards alternant entre l'objet et la caméra",
            "poses sur une jambe, l'objet défiant la gravité"
        ],
        part2: [
            "mouvements plus fluides et audacieux, l'équilibre devenant naturel",
            "déhanchés sensuels sans perturber l'objet",
            "jeux avec les bras et les mains autour du corps",
            "tours gracieux avec l'objet qui tourne avec elle",
            "cambrures profondes, l'objet toujours en place"
        ]
    },

    finalOutfit: {
        description: "tenue d'équilibriste chic et sensuelle",
        colors: ["rouge velours", "noir", "argent"],
        elements: ["justaucorps pailleté", "bas résille", "chaussons de danse", "cape légère"],
        accessories: ["bandeau dans les cheveux", "bracelets scintillants", "poudre dorée sur la peau"]
    },

    background: "chapiteau de cirque intimiste, projecteur unique éclairant la scène, public silencieux dans l'ombre",

    palmColors: { left: "#ff4500", right: "#ffd700" },
    hairFluo: ["rouge", "or", "argent"]
};

// Fonction pour générer la description de l'objet
function getObjetDescription(objetPersonnalise) {
    if (!objetPersonnalise || objetPersonnalise.trim() === '') {
        return "un élégant chapeau haut-de-forme";
    }
    return objetPersonnalise.trim();
}

// Exposition globale
if (typeof window !== 'undefined') {
    window.equilibristeData = equilibristeData;
    window.getObjetDescription = getObjetDescription;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { equilibristeData, getObjetDescription };
}
