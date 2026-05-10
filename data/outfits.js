// outfits.js - Bibliothèque complète avec TENUES MULTIPLES

const outfitsLibrary = {
    spain: {
        starting: [
            {
                name: "Sexy décontracté",
                top: "Top en soie crème sans manches",
                bottom: "Jean slim noir taille basse",
                details: "Décolleté généreux, pieds nus"
            },
            {
                name: "Chic urbain",
                top: "Corset en dentelle noire",
                bottom: "Jupe courte en cuir",
                details: "Épaules dénudées, talons"
            },
            {
                name: "Bohème",
                top: "Chemisier blanc fluide dénoué",
                bottom: "Pantalon large en lin beige",
                details: "Épaules découvertes, pieds nus"
            },
            {
                name: "Sport sexy",
                top: "Débardeur noir moulant",
                bottom: "Legging taille haute",
                details: "Ventre dévoilé, pieds nus"
            },
            {
                name: "Minimaliste",
                top: "Bandeau blanc",
                bottom: "Short en jean très court",
                details: "Taille marquée, pieds nus"
            }
        ],
        final: [
            {
                name: "Traditionnelle glamour",
                description: "Robe longue à volants",
                colors: ["rouge passion", "noir profond"],
                elements: ["volants superposés", "décolleté plongeant", "dos nu", "fente latérale", "traîne"],
                accessories: ["peigne en argent", "rose rouge", "châle à franges", "castagnettes"]
            },
            {
                name: "Moderne sensuelle",
                description: "Robe courte flamenca",
                colors: ["rouge", "or"],
                elements: ["volants asymétriques", "décolleté vertigineux", "dos nu intégral", "fente haute"],
                accessories: ["boucles d'oreilles pendantes", "éventail", "mantille"]
            },
            {
                name: "Noir absolu",
                description: "Robe de flamenco noir intégral",
                colors: ["noir", "argent"],
                elements: ["volants", "transparences", "dentelle", "fente jusqu'en haut de cuisse"],
                accessories: ["peigne en argent", "rose rouge foncé", "résille"]
            },
            {
                name: "Royale andalouse",
                description: "Robe de flamenco luxueuse",
                colors: ["bordeaux", "or"],
                elements: ["velours brodé", "manches longues transparentes", "volants multiples", "traîne"],
                accessories: ["peigne en écaille", "éventail en dentelle", "châle de Manille"]
            },
            {
                name: "Gitane moderne",
                description: "Robe courte à pois",
                colors: ["rouge", "blanc"],
                elements: ["pois", "volants", "décolleté généreux", "fente haute"],
                accessories: ["fleur dans les cheveux", "boucles d'oreilles créoles", "castagnettes"]
            }
        ]
    },
    brazil: {
        starting: [
            {
                name: "Plage chic",
                top: "Top blanc crochet",
                bottom: "Short en jean ultra-court",
                details: "Ventre dévoilé, pieds nus"
            },
            {
                name: "Rio style",
                top: "Bandeau fluo",
                bottom: "Jupe courte en wax brésilien",
                details: "Décolleté, pieds nus"
            },
            {
                name: "Copacabana",
                top: "Débardeur vert",
                bottom: "Short blanc très court",
                details: "Taille marquée, pieds nus"
            },
            {
                name: "Samba urbain",
                top: "Crop top jaune",
                bottom: "Legging noir taille basse",
                details: "Ventre, pieds nus"
            },
            {
                name: "Tropical",
                top: "Haut à franges",
                bottom: "Short en jean déchiré",
                details: "Épaules nues, pieds nus"
            }
        ],
        final: [
            {
                name: "Reine du carnaval",
                description: "Body plumes spectaculaire",
                colors: ["vert émeraude", "jaune soleil"],
                elements: ["body moulant", "plumes XXL", "paillettes", "franges", "strass"],
                accessories: ["coiffe de plumes", "bottes à plateforme", "créoles dorées"]
            },
            {
                name: "Samba gold",
                description: "Costume doré scintillant",
                colors: ["or", "argent"],
                elements: ["body doré", "plumes", "strass", "franges"],
                accessories: ["ailes dorées", "bottes", "bijoux"]
            },
            {
                name: "Tropicale",
                description: "Costume vert et rose",
                colors: ["vert", "rose"],
                elements: ["plumes", "sequins", "franges", "découpes"],
                accessories: ["coiffe tropicale", "bottes"]
            },
            {
                name: "Fête à Rio",
                description: "Bikini de carnaval",
                colors: ["bleu", "jaune"],
                elements: ["bikini strassé", "jupe courte", "plumes", "paillettes"],
                accessories: ["couronne de plumes", "bracelets dorés"]
            },
            {
                name: "Samba night",
                description: "Robe courte à sequins",
                colors: ["argent", "rose"],
                elements: ["robe moulante", "sequins", "fente haute", "dos nu"],
                accessories: ["boucles d'oreilles scintillantes", "bottes argentées"]
            }
        ]
    },
    morocco: {
        starting: [
            {
                name: "Moderne chic",
                top: "Top en soie crème",
                bottom: "Pantalon large blanc",
                details: "Épaules nues, pieds nus"
            },
            {
                name: "Décontracté",
                top: "Débardeur bleu",
                bottom: "Jean taille haute",
                details: "Ventre, pieds nus"
            },
            {
                name: "Élégant",
                top: "Corset en dentelle",
                bottom: "Jupe longue fendue",
                details: "Dos nu, pieds nus"
            },
            {
                name: "Tendance",
                top: "Crop top or",
                bottom: "Pantalon noir slim",
                details: "Ventre, talons"
            },
            {
                name: "Bohème",
                top: "Blouse fluide",
                bottom: "Jupe longue imprimée",
                details: "Épaules dénudées, pieds nus"
            }
        ],
        final: [
            {
                name: "Caftan royal",
                description: "Caftan de cérémonie luxueux",
                colors: ["bleu Majorelle", "or"],
                elements: ["velours brodé", "décolleté plongeant", "dos nu", "fente latérale", "transparences"],
                accessories: ["ceinture dorée", "bijoux en or", "colliers superposés"]
            },
            {
                name: "Takchita moderne",
                description: "Robe orientale superposée",
                colors: ["rouge", "or"],
                elements: ["deux pièces", "broderies", "ceinture", "fente"],
                accessories: ["ceinture précieuse", "bijoux"]
            },
            {
                name: "Caftan blanc",
                description: "Caftan blanc immaculé",
                colors: ["blanc", "argent"],
                elements: ["dentelle", "perles", "transparences"],
                accessories: ["ceinture argent", "bijoux"]
            },
            {
                name: "Caftan pourpre",
                description: "Caftan en velours pourpre",
                colors: ["pourpre", "or"],
                elements: ["velours", "broderies dorées", "manches larges", "fente"],
                accessories: ["ceinture en or", "collier de perles"]
            },
            {
                name: "Takchita turquoise",
                description: "Robe turquoise brodée",
                colors: ["turquoise", "argent"],
                elements: ["soie", "broderies argentées", "transparences", "ceinture"],
                accessories: ["bijoux en argent", "voile assorti"]
            }
        ]
    },
    senegal: {
        starting: [
            {
                name: "Dakar style",
                top: "Top en wax",
                bottom: "Jean taille haute",
                details: "Ventre, pieds nus"
            },
            {
                name: "Décontracté",
                top: "Débardeur blanc",
                bottom: "Short en jean",
                details: "Épaules nues, pieds nus"
            },
            {
                name: "Chic africain",
                top: "Corset imprimé",
                bottom: "Jupe longue fendue",
                details: "Dos nu, pieds nus"
            },
            {
                name: "Moderne",
                top: "Crop top uni",
                bottom: "Pantalon large",
                details: "Ventre, talons"
            },
            {
                name: "Festif",
                top: "Haut à sequins",
                bottom: "Jupe courte",
                details: "Décolleté, pieds nus"
            }
        ],
        final: [
            {
                name: "Reine du Sabar",
                description: "Tenue traditionnelle luxueuse",
                colors: ["vert", "or"],
                elements: ["haut corset brodé", "jupe longue fendue", "tissu wax"],
                accessories: ["bijoux en or massif", "ceinture de perles", "tresses ornées"]
            },
            {
                name: "Ndeup",
                description: "Tenue de cérémonie",
                colors: ["rouge", "or"],
                elements: ["boubou moderne", "broderies", "fente"],
                accessories: ["bijoux", "perles"]
            },
            {
                name: "Wax attitude",
                description: "Ensemble wax",
                colors: ["multicolore"],
                elements: ["corset + jupe", "motifs wax"],
                accessories: ["bijoux dorés"]
            },
            {
                name: "Princesse africaine",
                description: "Robe longue en wax",
                colors: ["bleu", "jaune"],
                elements: ["robe longue", "manches bouffantes", "décolleté", "fente"],
                accessories: ["turbant assorti", "bijoux en or"]
            },
            {
                name: "Moderne Dakar",
                description: "Ensemble crop top + jupe",
                colors: ["orange", "vert"],
                elements: ["crop top wax", "jupe longue fendue", "ceinture"],
                accessories: ["bracelets dorés", "boucles d'oreilles"]
            }
        ]
    },
    japan: {
        starting: [
            {
                name: "Tokyo style",
                top: "Top en soie noir",
                bottom: "Pantalon large blanc",
                details: "Épaules nues, pieds nus"
            },
            {
                name: "Minimaliste",
                top: "Bandeau blanc",
                bottom: "Jupe crayon noire",
                details: "Ventre, pieds nus"
            },
            {
                name: "Moderne",
                top: "Body noir",
                bottom: "Jean taille haute",
                details: "Dos nu, pieds nus"
            },
            {
                name: "Élégant",
                top: "Chemisier soie",
                bottom: "Pantalon noir",
                details: "Décolleté, talons"
            },
            {
                name: "Décontracté",
                top: "Débardeur",
                bottom: "Short",
                details: "Épaules, pieds nus"
            }
        ],
        final: [
            {
                name: "Geisha moderne",
                description: "Kimono de cérémonie revisité",
                colors: ["rouge vermillon", "or"],
                elements: ["soie brodée", "décolleté élégant", "dos nu", "manches longues", "motifs grues"],
                accessories: ["obi en satin", "épingles à cheveux", "éventail"]
            },
            {
                name: "Samouraï girl",
                description: "Kimono guerrier",
                colors: ["noir", "or"],
                elements: ["armure légère", "broderies", "fente"],
                accessories: ["obi large", "épingles"]
            },
            {
                name: "Fleur de cerisier",
                description: "Kimono rose poudré",
                colors: ["rose", "argent"],
                elements: ["broderies fleurs", "transparences"],
                accessories: ["obi argent", "éventail"]
            },
            {
                name: "Princesse impériale",
                description: "Kimono de cour",
                colors: ["pourpre", "or"],
                elements: ["soie épaisse", "broderies phénix", "manches longues", "traîne"],
                accessories: ["couronne", "éventail impérial"]
            },
            {
                name: "Moderne Harajuku",
                description: "Tenue streetwear chic",
                colors: ["noir", "rose"],
                elements: ["corset", "jupe courte", "bas résille", "bottines"],
                accessories: ["accessoires floraux", "sac à main"]
            }
        ]
    },
    india: {
        starting: [
            {
                name: "Bollywood street",
                top: "Top à sequins",
                bottom: "Jean slim",
                details: "Ventre, pieds nus"
            },
            {
                name: "Moderne indienne",
                top: "Crop top brodé",
                bottom: "Pantalon large",
                details: "Décolleté, pieds nus"
            },
            {
                name: "Élégant",
                top: "Corset en soie",
                bottom: "Jupe longue fendue",
                details: "Dos nu, talons"
            },
            {
                name: "Décontracté",
                top: "Débardeur",
                bottom: "Jean taille haute",
                details: "Épaules, pieds nus"
            },
            {
                name: "Festif",
                top: "Haut pailleté",
                bottom: "Jupe courte",
                details: "Ventre, talons"
            }
        ],
        final: [
            {
                name: "Reine de Bollywood",
                description: "Lehenga de cérémonie luxueux",
                colors: ["orange brûlé", "rose fuchsia"],
                elements: ["soie brodée", "choli court", "volants", "broderies d'or"],
                accessories: ["bijoux en or", "bangles", "maang tikka"]
            },
            {
                name: "Princesse indienne",
                description: "Lehenga traditionnel",
                colors: ["rouge", "or"],
                elements: ["broderies", "voiles", "choli"],
                accessories: ["bijoux précieux"]
            },
            {
                name: "Nuit étoilée",
                description: "Lehenga moderne",
                colors: ["bleu nuit", "argent"],
                elements: ["paillettes", "transparences"],
                accessories: ["bijoux argent"]
            },
            {
                name: "Marriage royal",
                description: "Ensemble de mariée chic",
                colors: ["rouge", "or"],
                elements: ["lehenga volumineux", "choli brodé", "voile", "strass"],
                accessories: ["bijoux lourds", "maang tikka", "bangles"]
            },
            {
                name: "Bollywood diva",
                description: "Robe de star",
                colors: ["rose", "argent"],
                elements: ["robe moulante", "paillettes", "fente haute", "dos nu"],
                accessories: ["bijoux scintillants", "chaussures à talons"]
            }
        ]
    },
    china: {
        starting: [
            {
                name: "Shanghai chic",
                top: "Top en soie rouge",
                bottom: "Pantalon noir slim",
                details: "Épaules, pieds nus"
            },
            {
                name: "Moderne",
                top: "Crop top",
                bottom: "Jupe crayon",
                details: "Ventre, talons"
            },
            {
                name: "Élégant",
                top: "Chemisier soie",
                bottom: "Pantalon large",
                details: "Décolleté, pieds nus"
            },
            {
                name: "Décontracté",
                top: "Débardeur",
                bottom: "Jean taille haute",
                details: "Épaules, baskets"
            },
            {
                name: "Traditionnel moderne",
                top: "Haut mandarin",
                bottom: "Jean",
                details: "Col mandarin, pieds nus"
            }
        ],
        final: [
            {
                name: "Qipao moderne",
                description: "Robe traditionnelle revisité",
                colors: ["rouge impérial", "or"],
                elements: ["soie brodée", "col mandarin", "fentes latérales", "décolleté"],
                accessories: ["éventail", "épingles à cheveux", "bijoux en jade"]
            },
            {
                name: "Dragonne",
                description: "Qipao brodé dragon",
                colors: ["noir", "or"],
                elements: ["broderies dragon", "fentes hautes"],
                accessories: ["bijoux or"]
            },
            {
                name: "Princesse chinoise",
                description: "Robe longue",
                colors: ["rose", "or"],
                elements: ["broderies fleurs", "manches longues"],
                accessories: ["épingles précieuses"]
            },
            {
                name: "Phénix d'or",
                description: "Roche de cérémonie",
                colors: ["rouge", "or"],
                elements: ["soie", "broderies phénix", "manches larges", "traîne"],
                accessories: ["couronne", "bijoux en jade"]
            },
            {
                name: "Shanghai nights",
                description: "Robe courte moderne",
                colors: ["noir", "rouge"],
                elements: ["robe courte", "dentelle", "fente", "col mandarin"],
                accessories: ["éventail pliant", "épingles à cheveux"]
            }
        ]
    },

rapper: {
    starting: [
        {
            name: "Décontracté street",
            top: "t-shirt blanc basique",
            bottom: "jean slim noir",
            details: "baskets, chaîne simple"
        },
        {
            name: "Sportswear",
            top: "débardeur noir",
            bottom: "legging de sport",
            details: "baskets, bandeau"
        },
        {
            name: "Casual",
            top: "hoodie gris",
            bottom: "pantalon cargo",
            details: "baskets, casquette"
        }
    ],
    final: [
        {
            name: "Survêtement luxe",
            description: "Survêtement oversized",
            colors: ["noir", "or"],
            elements: ["veste de survêtement noire à bandes dorées", "pantalon assorti", "débardeur blanc", "baskets blanches"],
            accessories: ["chaînes en or", "casquette inclinée", "gourmette"]
        },
        {
            name: "Deux pièces sexy",
            description: "Ensemble crop top + taille haute",
            colors: ["noir", "argent"],
            elements: ["crop top noir moulant", "pantalon taille haute", "ventre dénudé", "baskets"],
            accessories: ["chaînes argentées", "bagues", "micro"]
        },
        {
            name: "Blanc immaculé",
            description: "Tenue blanche minimaliste",
            colors: ["blanc", "or"],
            elements: ["débardeur blanc", "pantalon blanc large", "baskets blanches"],
            accessories: ["chaînes dorées", "lunettes de soleil"]
        },
        {
            name: "Cuir urbain",
            description: "Ensemble en cuir",
            colors: ["noir", "rouge"],
            elements: ["bomber en cuir noir", "legging noir", "bottines"],
            accessories: ["chaînes", "gants sans doigts"]
        },
        {
            name: "Streetwear chic",
            description: "Hoodie oversize + short",
            colors: ["gris", "noir"],
            elements: ["hoodie oversize gris", "short noir", "baskets montantes"],
            accessories: ["casquette", "chaînes", "bagues"]
        }
    ]
},

    greece: {
        starting: [
            {
                name: "Méditerranéen",
                top: "Top blanc",
                bottom: "Jean bleu",
                details: "Épaules, pieds nus"
            },
            {
                name: "Île grecque",
                top: "Bandeau blanc",
                bottom: "Jupe longue",
                details: "Ventre, pieds nus"
            },
            {
                name: "Moderne",
                top: "Body",
                bottom: "Pantalon large",
                details: "Dos nu, sandales"
            },
            {
                name: "Élégant",
                top: "Drapé blanc",
                bottom: "Jupe crayon",
                details: "Décolleté, talons"
            },
            {
                name: "Décontracté",
                top: "Débardeur bleu",
                bottom: "Short blanc",
                details: "Épaules, pieds nus"
            }
        ],
        final: [
            {
                name: "Déesse grecque",
                description: "Tenue antique revisité",
                colors: ["bleu Égée", "blanc"],
                elements: ["robe fluide", "drapés", "ceinture dorée", "fente"],
                accessories: ["couronne de laurier", "bijoux en or", "feuilles d'olivier"]
            },
            {
                name: "Athéna",
                description: "Tenue guerrière chic",
                colors: ["blanc", "or"],
                elements: ["drapés", "armure légère", "fente"],
                accessories: ["casque or", "bijoux"]
            },
            {
                name: "Aphrodite",
                description: "Robe sensuelle",
                colors: ["rose", "or"],
                elements: ["drapés", "transparences", "fente haute"],
                accessories: ["couronne fleurs", "bijoux"]
            },
            {
                name: "Nymphe",
                description: "Robe fluide légère",
                colors: ["vert d'eau", "argent"],
                elements: ["voiles", "drapés", "fleurs", "pieds nus"],
                accessories: ["couronne de fleurs", "bijoux en perles"]
            },
            {
                name: "Prêtresse",
                description: "Tenue de cérémonie",
                colors: ["blanc", "or"],
                elements: ["tunique longue", "drapés", "ceinture", "sandales"],
                accessories: ["couronne de laurier", "bijoux dorés"]
            }
        ]
    },
    neptune: {
        starting: [
            {
                name: "Abysse chic",
                top: "Bikini coquillage",
                bottom: "Paréo bleu",
                details: "Pieds nus, bijoux de perles"
            },
            {
                name: "Créature marine",
                top: "Haut écailles",
                bottom: "Jupe courte voile",
                details: "Effet aqueux, pieds nus"
            }
        ],
        final: [
            {
                name: "Reine des mers",
                description: "Tenue de créature des profondeurs",
                colors: ["bleu abyssal", "argent", "turquoise"],
                elements: ["écailles holographiques", "voiles d'eau", "cristaux", "effet aqueux"],
                accessories: ["couronne de corail", "bijoux de perles"]
            },
            {
                name: "Sirène royale",
                description: "Robe queue de sirène",
                colors: ["turquoise", "violet"],
                elements: ["queue de sirène", "écailles", "voiles"],
                accessories: ["couronne de coquillages", "bijoux"]
            }
        ]
    }
};

// Fonction pour obtenir une tenue de départ ALEATOIRE
function getRandomStartingOutfit(country, styleIndex = null) {
    const countryOutfits = outfitsLibrary[country]?.starting;
    if (!countryOutfits) return null;
    
    // Si un index spécifique est demandé
    if (styleIndex !== null && styleIndex >= 0 && styleIndex < countryOutfits.length) {
        return countryOutfits[styleIndex];
    }
    
    // Sinon, choix ALÉATOIRE
    const randomIndex = Math.floor(Math.random() * countryOutfits.length);
    return countryOutfits[randomIndex];
}

// Fonction pour obtenir une tenue finale ALEATOIRE
function getRandomFinalOutfit(country, styleIndex = null) {
    const countryOutfits = outfitsLibrary[country]?.final;
    if (!countryOutfits) return null;
    
    // Si un index spécifique est demandé
    if (styleIndex !== null && styleIndex >= 0 && styleIndex < countryOutfits.length) {
        return countryOutfits[styleIndex];
    }
    
    // Sinon, choix ALÉATOIRE
    const randomIndex = Math.floor(Math.random() * countryOutfits.length);
    return countryOutfits[randomIndex];
}

// Fonction pour générer une description complète de tenue finale (ALÉATOIRE)
function generateFinalOutfitDescription(country, styleIndex = null) {
    const outfit = getRandomFinalOutfit(country, styleIndex);
    if (!outfit) return '';
    
    return `${outfit.description} aux couleurs ${outfit.colors.join(' et ')}. 
Éléments : ${outfit.elements.join(', ')}. 
Accessoires : ${outfit.accessories.join(', ')}. 
Style ultra-sexy et élégant, mettant en valeur la silhouette.`;
}

// Export pour utilisation dans l'application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        outfitsLibrary,
        getRandomStartingOutfit,
        getRandomFinalOutfit,
        generateFinalOutfitDescription
    };
}
