// data/fantasyDanceMoves.js - Mouvements de danse pour les modes fantastiques

const fantasyDanceMoves = {
    vampire: {
        part1: [
            "mouvements lents et hypnotiques, comme un prédateur nocturne",
            "grâces féline avec des glissements sensuels",
            "regards perçants, yeux rouges qui brillent dans l'ombre",
            "caresses sensuelles sur la cape noire",
            "découverte des crocs en souriant langoureusement",
            "mouvements de cape amples qui enveloppent le corps",
            "approches furtives vers la caméra"
        ],
        part2: [
            "danse avec la cape qui se transforme en ailes de chauve-souris",
            "attaques stylisées et morsures sensuelles vers la caméra",
            "cambrures spectaculaires de prédatrice",
            "transformation holographique en chauve-souris",
            "jeux avec les crocs et le sang virtuel",
            "final en explosion de chauves-souris"
        ]
    },
    
    werewolf: {
        part1: [
            "mouvements félins et sauvages, position de chasse",
            "griffes qui s'étendent et se rétractent",
            "regards perçants jaunes qui brillent",
            "mouvements de griffes devant le visage",
            "posture de domination, dos cambré",
            "reniflement sensuel vers la caméra"
        ],
        part2: [
            "danse de la meute sauvage et puissante",
            "hurlement silencieux face caméra, bouche ouverte",
            "course stylisée en cercle",
            "transformation holographique progressive",
            "pose de loup dominant, griffes sorties",
            "final en hurlement vers la lune"
        ]
    },
    
    demon: {
        part1: [
            "mouvements sensuels et dangereux de créature infernale",
            "jeux avec les flammes virtuelles qui sortent des mains",
            "regards brûlants, yeux rouges incandescents",
            "mouvements de cornes qui semblent pousser",
            "posture de domination absolue",
            "ailes qui se déploient partiellement"
        ],
        part2: [
            "danse infernale endiablée",
            "ailes démoniaques complètement déployées",
            "feu qui sort des mains et des yeux",
            "cambrures démoniaques spectaculaires",
            "queue qui s'enroule sensuellement",
            "final en explosion de flammes"
        ]
    },
    
    angel: {
        part1: [
            "mouvements aériens et légers comme une plume",
            "gestes de bénédiction vers la caméra",
            "regards doux et purs, yeux célestes",
            "battements d'ailes gracieux et lents",
            "poses célestes, bras ouverts",
            "plumes qui semblent tomber autour d'elle"
        ],
        part2: [
            "danse céleste majestueuse",
            "ailes complètement déployées en lumière",
            "pluie de plumes blanches qui l'entourent",
            "lueur divine qui émane de son corps",
            "halo qui brille intensément",
            "final en apothéose lumineuse"
        ]
    },
    
    ghost: {
        part1: [
            "mouvements flottants et éthérés, comme portée par le vent",
            "lévitation légère, pieds qui effleurent le sol",
            "regards mystérieux et vagues",
            "traversée d'objets (effet visuel)",
            "poses fantomatiques, bras étirés",
            "transparence qui augmente et diminue"
        ],
        part2: [
            "danse des âmes errantes",
            "transparence accentuée, on voit à travers",
            "vol à travers la scène en apesanteur",
            "apparitions et disparitions soudaines",
            "brume qui l'entoure et la cache",
            "final en disparition progressive"
        ]
    },
    
    dragon: {
        part1: [
            "mouvements puissants et majestueux de dragon",
            "déploiement progressif des ailes géantes",
            "regards perçants de prédateur légendaire",
            "griffes qui s'étendent et rétractent",
            "posture de dragon, dos cambré",
            "écailles qui brillent et changent de couleur"
        ],
        part2: [
            "danse du dragon ancestral",
            "vol stylisé avec les ailes déployées",
            "souffle de feu spectaculaire vers la caméra",
            "queue qui fouette l'air puissamment",
            "cambrures de dragon majestueux",
            "final en explosion de flammes et d'écailles"
        ]
    },
    
    wizard: {
        part1: [
            "gestes d'incantation gracieux et précis",
            "jeux avec la baguette magique qui trace des cercles",
            "regards mystiques, yeux qui brillent",
            "mouvements de cape fluides et enveloppants",
            "poses de sorcier, baguette levée",
            "étoiles qui flottent autour des mains"
        ],
        part2: [
            "danse arcanique mystérieuse",
            "sorts lumineux qui fusent de la baguette",
            "cercles magiques qui apparaissent au sol",
            "métamorphose holographique",
            "potions qui s'illuminent",
            "final en explosion d'étoiles et de magie"
        ]
    },
    
    darkfairy: {
        part1: [
            "mouvements gracieux et mystérieux de créature nocturne",
            "jeux avec la poudre noire qui scintille",
            "regards hypnotiques, yeux violets",
            "battements d'ailes sombres et légers",
            "poses de créature de la lune",
            "ombres qui dansent avec elle"
        ],
        part2: [
            "danse de la lune rouge envoûtante",
            "ailes qui brillent dans l'obscurité",
            "ombres qui dansent et l'entourent",
            "métamorphose holographique",
            "lune rouge qui apparaît derrière elle",
            "final en explosion d'étoiles sombres"
        ]
    },
    
    goddess: {
        part1: [
            "mouvements majestueux et puissants de déesse",
            "gestes de bénédiction royale",
            "regards de déesse bienveillante et puissante",
            "poses royales, bras ouverts",
            "aura dorée qui émane du corps",
            "étoiles qui flottent autour"
        ],
        part2: [
            "danse divine majestueuse",
            "lumière dorée qui émane du corps",
            "étoiles qui tombent du ciel",
            "cambrures de déesse spectaculaires",
            "couronne qui brille intensément",
            "final en apothéose céleste"
        ]
    }
};

// Intégration dans PromptGenerator
function enhanceWithFantasyModes() {
    if (window.PromptGenerator) {
        const originalGeneratePart2 = PromptGenerator.prototype.generatePart2;
        
        PromptGenerator.prototype.generatePart2 = function() {
            // Générer les transformations fantastiques
            this.generateFantasyTransformations = generateFantasyTransformations;
            
            // Appeler la méthode originale
            return originalGeneratePart2.call(this);
        };
        
        console.log("✨ Modes fantastiques intégrés au PromptGenerator");
    }
}

// Exposition globale
if (typeof window !== 'undefined') {
    window.fantasyDanceMoves = fantasyDanceMoves;
    window.generateFantasyTransformations = generateFantasyTransformations;
    window.enhanceWithFantasyModes = enhanceWithFantasyModes;
}

// Initialisation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceWithFantasyModes);
} else {
    enhanceWithFantasyModes();
}
