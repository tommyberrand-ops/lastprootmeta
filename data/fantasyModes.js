// data/fantasyModes.js - MODES FANTASTIQUES
// Vampire, Loup-Garou, Démon, Ange, Fantôme, Dragon, Sorcier, Fée des Ténèbres, Déesse

if (typeof window.fantasyModesData === 'undefined') {
    window.fantasyModesData = {
        
        // ==================== MODE VAMPIRE ====================
        vampire: {
            name: "🧛 Vampire",
            type: "vampire",
            dance: "Danse Vampirique",
            palmColors: { left: "#8b0000", right: "#000000" },
            finalOutfit: {
                description: "tenue de vampire gothique ultra-sexy",
                colors: ["rouge sang", "noir profond", "argent"],
                elements: [
                    "robe longue en velours noir fendue",
                    "corset en cuir rouge sang",
                    "cape en satin noir doublée de rouge",
                    "collier à pendentif rubis",
                    "bottes à talons aiguilles"
                ],
                accessories: [
                    "crocs apparents",
                    "yeux rouges lumineux",
                    "médaillon ancien",
                    "gants en dentelle noire",
                    "chauves-souris holographiques"
                ]
            },
            transformations: {
                bat: "Peut se transformer en chauve-souris (effet holographique)",
                cape: "La cape se transforme en ailes de chauve-souris",
                fangs: "Crocs qui s'allongent quand elle sourit",
                eyes: "Yeux qui brillent en rouge dans l'obscurité"
            },
            hairFluo: ["rouge sang", "noir", "argent"],
            background: "château maudit, cimetière gothique, pleine lune rouge, brume épaisse, chauves-souris",
            danceMoves: {
                part1: [
                    "mouvements lents et hypnotiques",
                    "grâces féline avec des glissements",
                    "regards perçants, yeux rouges qui brillent",
                    "caresses sensuelles sur la cape",
                    "découverte des crocs en souriant"
                ],
                part2: [
                    "danse avec la cape qui se transforme",
                    "attaques stylisées et morsures sensuelles",
                    "cambrures de prédatrice",
                    "transformation holographique en chauve-souris",
                    "final en explosion de chauves-souris"
                ]
            }
        },

        // ==================== MODE LOUP-GAROU ====================
        werewolf: {
            name: "🐺 Loup-Garou",
            type: "werewolf",
            dance: "Danse de la Meute",
            palmColors: { left: "#4a2a1e", right: "#8b5a2b" },
            finalOutfit: {
                description: "tenue de louve-garou sauvage et sexy",
                colors: ["brun", "noir", "gris"],
                elements: [
                    "fourrure apparente sur les épaules",
                    "corset en cuir usé",
                    "jupe en lambeaux",
                    "bottes de combat",
                    "ceinture en peau de bête"
                ],
                accessories: [
                    "oreilles de loup",
                    "queue touffue",
                    "yeux jaunes perçants",
                    "griffes rétractiles",
                    "collier de dents"
                ]
            },
            transformations: {
                progressive: "Transformation progressive : yeux → oreilles → griffes → fourrure",
                eyes: "Yeux qui brillent en jaune dans l'obscurité",
                claws: "Griffes qui s'allongent pendant la danse",
                howl: "Hurlement silencieux (effet visuel)"
            },
            hairFluo: ["brun", "gris", "noir", "blanc"],
            background: "forêt la nuit, pleine lune, meute de loups, clairière",
            danceMoves: {
                part1: [
                    "mouvements félins et sauvages",
                    "positions de chasse",
                    "regards perçants jaunes",
                    "mouvements de griffes",
                    "posture de domination"
                ],
                part2: [
                    "danse de la meute sauvage",
                    "hurlement silencieux face caméra",
                    "course stylisée",
                    "transformation holographique",
                    "final en pose de loup dominant"
                ]
            }
        },

        // ==================== MODE DÉMON ====================
        demon: {
            name: "😈 Démon",
            type: "demon",
            dance: "Danse Infernal",
            palmColors: { left: "#ff4500", right: "#8b0000" },
            finalOutfit: {
                description: "tenue de démonesse enflammée",
                colors: ["rouge feu", "noir", "orange"],
                elements: [
                    "corset en cuir rouge",
                    "jupe en lambeaux de feu",
                    "ailes de démon noires",
                    "bottes à talons aiguilles",
                    "collier à pendentif flammes"
                ],
                accessories: [
                    "cornes courbées",
                    "queue en pointe",
                    "yeux rouges incandescents",
                    "tatouages de flammes",
                    "ailes démoniaques"
                ]
            },
            transformations: {
                horns: "Cornes qui grandissent en dansant",
                wings: "Ailes de démon qui se déploient",
                fire: "Feu dans les yeux et sur les mains",
                tail: "Queue qui s'enroule sensuellement"
            },
            hairFluo: ["rouge feu", "orange", "noir"],
            background: "enfers, lave, flammes, trône démoniaque, âmes en peine",
            danceMoves: {
                part1: [
                    "mouvements sensuels et dangereux",
                    "jeux avec les flammes virtuelles",
                    "regards brûlants",
                    "mouvements de cornes",
                    "posture de domination"
                ],
                part2: [
                    "danse infernale",
                    "ailes déployées",
                    "feu qui sort des mains",
                    "cambrures démoniaques",
                    "final en explosion de flammes"
                ]
            }
        },

        // ==================== MODE ANGE ====================
        angel: {
            name: "😇 Ange",
            type: "angel",
            dance: "Danse Céleste",
            palmColors: { left: "#ffffff", right: "#ffd700" },
            finalOutfit: {
                description: "tenue d'ange céleste",
                colors: ["blanc", "or", "argent"],
                elements: [
                    "robe longue en soie blanche",
                    "ailes blanches immaculées",
                    "corset en satin doré",
                    "sandales argentées",
                    "voiles transparents"
                ],
                accessories: [
                    "halo lumineux",
                    "plumes qui tombent",
                    "couronne de laurier",
                    "lyre décorative",
                    "poudre d'étoiles"
                ]
            },
            transformations: {
                wings: "Ailes qui se déploient en lumière",
                halo: "Halo qui brille intensément",
                feathers: "Plumes blanches qui tombent en dansant",
                light: "Lumière divine qui émane du corps"
            },
            hairFluo: ["blanc", "or", "argent", "blond"],
            background: "ciel, nuages, lumière divine, portes du paradis, anges",
            danceMoves: {
                part1: [
                    "mouvements aériens et légers",
                    "gestes de bénédiction",
                    "regards doux et purs",
                    "battements d'ailes gracieux",
                    "poses célestes"
                ],
                part2: [
                    "danse céleste",
                    "ailes déployées majestueusement",
                    "pluie de plumes blanches",
                    "lueur divine",
                    "final en apothéose lumineuse"
                ]
            }
        },

        // ==================== MODE FANTÔME ====================
        ghost: {
            name: "👻 Fantôme",
            type: "ghost",
            dance: "Danse Éthérée",
            palmColors: { left: "#c0c0c0", right: "#ffffff" },
            finalOutfit: {
                description: "tenue de fantôme vaporeuse",
                colors: ["blanc spectral", "argent", "transparent"],
                elements: [
                    "robe longue vaporeuse",
                    "voiles transparents",
                    "cape de brume",
                    "effet semi-transparent",
                    "lueur bleutée"
                ],
                accessories: [
                    "lueur fantomatique",
                    "brume qui l'entoure",
                    "chaînes légères",
                    "effet de lévitation",
                    "poudre d'argent"
                ]
            },
            transformations: {
                translucent: "Corps semi-transparent qui laisse voir à travers",
                levitation: "Lévitation permanente",
                mist: "Se transforme en brume",
                chains: "Chaînes qui apparaissent et disparaissent"
            },
            hairFluo: ["blanc", "argent", "bleu pâle"],
            background: "manoir hanté, cimetière, brume épaisse, pleine lune",
            danceMoves: {
                part1: [
                    "mouvements flottants et éthérés",
                    "lévitation légère",
                    "regards mystérieux",
                    "traversée des murs (effet visuel)",
                    "poses fantomatiques"
                ],
                part2: [
                    "danse des âmes errantes",
                    "transparence accentuée",
                    "vol à travers la scène",
                    "apparitions/disparitions",
                    "final en disparition progressive"
                ]
            }
        },

        // ==================== MODE DRAGON ====================
        dragon: {
            name: "🐉 Dragon",
            type: "dragon",
            dance: "Danse du Dragon",
            palmColors: { left: "#ff4500", right: "#228b22" },
            finalOutfit: {
                description: "tenue de dragonne légendaire",
                colors: ["rouge feu", "vert émeraude", "or"],
                elements: [
                    "armure en écailles de dragon",
                    "ailes géantes membraneuses",
                    "queue longue et puissante",
                    "corset en cuir d'écailles",
                    "bottes griffues"
                ],
                accessories: [
                    "cornes de dragon",
                    "yeux de dragon qui brillent",
                    "griffes acérées",
                    "flamme qui sort de la bouche",
                    "cristal magique"
                ]
            },
            transformations: {
                wings: "Ailes de dragon qui se déploient",
                fire: "Souffle de feu spectaculaire",
                scales: "Écailles qui brillent et changent de couleur",
                claws: "Griffes qui s'allongent"
            },
            hairFluo: ["rouge feu", "vert", "or", "bleu"],
            background: "volcan en éruption, montagnes de dragon, trésors, ciel de feu",
            danceMoves: {
                part1: [
                    "mouvements puissants et majestueux",
                    "déploiement des ailes",
                    "regards perçants de dragon",
                    "griffes qui s'étendent",
                    "posture de dragon"
                ],
                part2: [
                    "danse du dragon ancestral",
                    "vol stylisé avec les ailes",
                    "souffle de feu spectaculaire",
                    "queue qui fouette l'air",
                    "final en explosion de flammes"
                ]
            }
        },

        // ==================== MODE SORCIER ====================
        wizard: {
            name: "🧙 Sorcier",
            type: "wizard",
            dance: "Danse Arcanique",
            palmColors: { left: "#4b0082", right: "#ffd700" },
            finalOutfit: {
                description: "tenue de sorcier mystique",
                colors: ["violet", "or", "bleu nuit"],
                elements: [
                    "robe longue en velours violet",
                    "cape étoilée",
                    "chapeau pointu élégant",
                    "ceinture à fioles",
                    "bottes à poulaines"
                ],
                accessories: [
                    "baguette magique",
                    "grimoire ancien",
                    "étoiles flottantes",
                    "potion lumineuse",
                    "cristal magique"
                ]
            },
            transformations: {
                wand: "Baguette qui lance des sorts lumineux",
                stars: "Étoiles qui flottent autour",
                potions: "Fioles qui s'illuminent",
                spells: "Cercles magiques qui apparaissent au sol"
            },
            hairFluo: ["violet", "bleu", "or"],
            background: "tour de magie, bibliothèque ancienne, potions, étoiles",
            danceMoves: {
                part1: [
                    "gestes d'incantation gracieux",
                    "jeux avec la baguette magique",
                    "regards mystiques",
                    "mouvements de cape fluides",
                    "poses de sorcier"
                ],
                part2: [
                    "danse arcanique",
                    "sorts lumineux qui fusent",
                    "cercles magiques au sol",
                    "métamorphose holographique",
                    "final en explosion d'étoiles"
                ]
            }
        },

        // ==================== MODE FÉE DES TÉNÈBRES ====================
        darkfairy: {
            name: "🦋 Fée des Ténèbres",
            type: "darkfairy",
            dance: "Danse Nocturne",
            palmColors: { left: "#4b0082", right: "#ff00ff" },
            finalOutfit: {
                description: "tenue de fée des ténèbres",
                colors: ["violet sombre", "noir", "magenta"],
                elements: [
                    "ailes de papillon noires",
                    "robe en voiles sombres",
                    "corset en velours violet",
                    "sandales noires",
                    "cape de ténèbres"
                ],
                accessories: [
                    "poudre noire magique",
                    "lune rouge au-dessus",
                    "étoiles sombres",
                    "couronne de lune",
                    "tatouages lumineux"
                ]
            },
            transformations: {
                wings: "Ailes qui brillent dans l'obscurité",
                darkDust: "Poudre noire qui scintille",
                moon: "Lune rouge qui apparaît derrière elle",
                shadows: "Ombres qui dansent avec elle"
            },
            hairFluo: ["violet", "noir", "magenta"],
            background: "nuit de pleine lune rouge, forêt enchantée sombre, étoiles filantes",
            danceMoves: {
                part1: [
                    "mouvements gracieux et mystérieux",
                    "jeux avec la poudre noire",
                    "regards hypnotiques",
                    "battements d'ailes sombres",
                    "poses de créature nocturne"
                ],
                part2: [
                    "danse de la lune rouge",
                    "ailes qui brillent dans l'obscurité",
                    "ombres qui dansent autour",
                    "métamorphose holographique",
                    "final en explosion d'étoiles sombres"
                ]
            }
        },

        // ==================== MODE DÉESSE ====================
        goddess: {
            name: "👑 Déesse",
            type: "goddess",
            dance: "Danse Divine",
            palmColors: { left: "#ffd700", right: "#c0c0c0" },
            finalOutfit: {
                description: "tenue de déesse majestueuse",
                colors: ["or", "argent", "blanc"],
                elements: [
                    "robe longue drapée en soie",
                    "armure légère dorée",
                    "couronne de déesse",
                    "sandales argentées",
                    "cape de lumière"
                ],
                accessories: [
                    "halo de lumière",
                    "sceptre royal",
                    "bijoux divins",
                    "étoiles qui l'entourent",
                    "voiles de lumière"
                ]
            },
            transformations: {
                aura: "Aura dorée qui émane du corps",
                crown: "Couronne qui brille intensément",
                light: "Lumière divine qui l'illumine",
                stars: "Étoiles qui tombent du ciel"
            },
            hairFluo: ["or", "argent", "blanc"],
            background: "Olympe, temple antique, lumière céleste, colonnes dorées",
            danceMoves: {
                part1: [
                    "mouvements majestueux et puissants",
                    "gestes de bénédiction",
                    "regards de déesse bienveillante",
                    "poses royales",
                    "aura lumineuse"
                ],
                part2: [
                    "danse divine",
                    "lumière qui émane du corps",
                    "étoiles qui tombent autour",
                    "cambrures de déesse",
                    "final en apothéose céleste"
                ]
            }
        }
    };
    
    console.log("✅ fantasyModes.js chargé - 9 modes fantastiques ajoutés");
} else {
    console.log("⚠️ fantasyModesData déjà existant, chargement ignoré");
}
