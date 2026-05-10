// data/animalMode.js - Mode transformation animale

const animalData = {
    chatte: {
        name: "🐱 CHATTE",
        type: "animal",
        traits: {
            oreilles: "oreilles de chat pointues et mobiles",
            queue: "queue de chat longue et expressive",
            yeux: "pupilles fendues verticalement comme un félin, iris doré/vert",
            fourrure: "fourrure douce et soyeuse visible sur les oreilles et la queue",
            nez: "nez rose humain mais avec texture légèrement féline",
            griffes: "griffes rétractiles aux doigts et orteils",
            motif: "robe unie ou tachetée selon choix",
            comportement: "mouvements félins gracieux, étirements, ronronnements"
        },
        couleursDisponibles: ["rousse", "noire", "blanche", "grise", "tricolore", "tigrée"],
        background: "toits de Paris la nuit, canapé confortable, panier en osier",
        danceMoves: {
            part1: ["étirements gracieux", "toilette féline", "regards perçants", "roulés au sol"],
            part2: ["bondissements légers", "jeux avec une pelote", "poses de sphinx", "cambrures félines"]
        }
    },
    
    lapine: {
        name: "🐰 LAPINE",
        type: "animal",
        traits: {
            oreilles: "longues oreilles de lapin tombantes ou dressées",
            queue: "petite queue blanche toute ronde",
            yeux: "grands yeux doux, pupilles rondes",
            fourrure: "fourrure dense et duveteuse",
            nez: "petit nez rose qui frémit",
            dents: "incisives légèrement apparentes quand elle sourit",
            comportement: "mouvements sautillants, frétillement du nez"
        },
        couleursDisponibles: ["blanche", "grise", "brune", "noire", "tachetée"],
        background: "pré verdoyant, jardin potager, clairière ensoleillée",
        danceMoves: {
            part1: ["petits bonds", "frémissements du nez", "oreilles qui bougent"],
            part2: ["sauts gracieux", "jeux avec une carotte", "roulés dans l'herbe"]
        }
    },
    
    tigresse: {
        name: "🐅 TIGRESSE",
        type: "animal",
        traits: {
            oreilles: "oreilles de tigre arrondies avec touffe de poils",
            queue: "longue queue rayée puissante",
            yeux: "yeux perçants jaune/or, pupilles fendues",
            fourrure: "fourrure dense avec motif rayé caractéristique",
            museau: "museau félin prononcé",
            moustaches: "longues moustaches sensorielles",
            canines: "canines légèrement visibles",
            griffes: "griffes acérées",
            comportement: "démarche féline puissante, regards de prédateur"
        },
        couleursDisponibles: ["orange et noir", "blanc et noir", "doré"],
        background: "jungle dense, ruines anciennes, rivière sauvage",
        danceMoves: {
            part1: ["marche féline puissante", "regards perçants", "étirements de prédateur"],
            part2: ["bond de tigre", "combat chorégraphié", "rugissement silencieux"]
        }
    },
    
    panthere: {
        name: "🐆 PANTHÈRE",
        type: "animal",
        traits: {
            oreilles: "oreilles de panthère noires et mobiles",
            queue: "longue queue noire musclée",
            yeux: "yeux perçants vert/jaune, pupilles fendues",
            fourrure: "fourrure noire lustrée, presque irisée",
            museau: "museau félin élégant",
            moustaches: "moustaches blanches contrastées",
            griffes: "griffes rétractiles acérées",
            comportement: "grâce féline dangereuse, souplesse de prédateur nocturne"
        },
        couleursDisponibles: ["noire profonde", "noire avec reflets bleutés"],
        background: "nuit de pleine lune, toits de la ville, jungle sombre",
        danceMoves: {
            part1: ["mouvements furtifs", "regards lumineux dans l'ombre", "étirements féline"],
            part2: ["bond de panthère", "danse nocturne", "yeux qui brillent"]
        }
    },
    
    lionne: {
        name: "🦁 LIONNE",
        type: "animal",
        traits: {
            oreilles: "oreilles de lion rondes",
            queue: "queue avec touffe de poils au bout",
            yeux: "yeux perçants jaune/or",
            fourrure: "fourrure fauve courte et dense",
            crinière: "légère crinière autour du visage (optionnel)",
            museau: "museau félin puissant",
            comportement: "démarche majestueuse, regards de reine des animaux"
        },
        couleursDisponibles: ["fauve", "dorée", "sable"],
        background: "savane africaine, coucher de soleil, rochers",
        danceMoves: {
            part1: ["marche majestueuse", "regards de reine", "étirements royaux"],
            part2: ["danse de la savane", "bond gracieux", "pose de souveraine"]
        }
    }
};

// Exposition globale
if (typeof window !== 'undefined') {
    window.animalData = animalData;
}
