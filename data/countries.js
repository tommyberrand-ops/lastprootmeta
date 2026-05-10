// data/countries.js
// VERSION CORRIGÉE - 73 PERSONNAGES

const countries = {
    // ==================== ESPAGNE - FLAMENCO ====================
    spain: {
        type: "flamenco",
        name: "🇪🇸 Espagne",
        dance: "Flamenco",
        palmColors: { left: "#ff0000", right: "#000000" },
        finalOutfit: {
            description: "robe de flamenco traditionnelle revisitée avec luxe",
            colors: ["rouge passion profond", "noir de jais", "or"],
            elements: [
                "corset en velours rouge qui sculpte la silhouette",
                "jupe longue à volants superposés, cascade de tissu",
                "décolleté plongeant maintenu par des bretelles en dentelle noire",
                "dos nu intégral descendant jusqu'au bas du dos",
                "fente latérale jusqu'en haut de la cuisse dévoilant la jambe",
                "traîne légère qui suit ses mouvements",
                "bas résille fine et bottines à talons aiguilles"
            ],
            accessories: [
                "peigne en argent dans les cheveux avec fleur rouge",
                "rose rouge à la tempe ou dans le décolleté",
                "châle à franges noires qui accentue les mouvements",
                "castagnettes en ébène aux doigts",
                "boucles d'oreilles pendantes en or",
                "bracelet de grelots à la cheville"
            ]
        },
        hairFluo: ["rouge fluo", "rose fluo", "violet fluo"],
        background: "tablao flamenco avec rideaux rouges, ambiance andalouse",
        danceMoves: {
            part1: ["zapateados légers", "braceos amples", "floreo", "jeux de doigts"],
            part2: ["zapateados puissants", "braceos majestueux", "jeux avec les volants", "tours complets"]
        }
    },
    
    turkey: {
        type: "oriental",
        name: "🇹🇷 Turquie",
        dance: "Danse du Ventre / Oriental",
        palmColors: { left: "#e11d48", right: "#f59e0b" },
        finalOutfit: {
            description: "tenue de danseuse orientale turque",
            colors: ["rouge profond", "or ottoman"],
            elements: ["corset brodé", "jupe longue fendue", "voiles légers", "ceinture à sequins", "transparences"],
            accessories: ["pièces d'or", "bracelets de cheville", "voile de tête", "doigts de zills"]
        },
        hairFluo: ["rouge feu", "or", "ambre"],
        background: "palais ottoman, hamam traditionnel, rues d'Istanbul la nuit",
        danceMoves: {
            part1: ["ondulations lentes du ventre", "vibrations d'épaules", "rotations de hanches", "jeux de voile"],
            part2: ["shimmies", "mouvements de serpent", "jeux avec les pièces d'or", "tours gracieux"]
        }
    },
    
    mexico: {
        type: "mexicain",
        name: "🇲🇽 Mexique",
        dance: "Jarabe Tapatío / Folklorique",
        palmColors: { left: "#ef4444", right: "#22c55e" },
        finalOutfit: {
            description: "robe de danseuse folklorique mexicaine",
            colors: ["rouge mexicain", "vert émeraude", "blanc"],
            elements: ["jupe longue à volants", "broderies colorées", "rubans dans les cheveux", "décolleté élégant"],
            accessories: ["fleurs dans les cheveux", "bracelets en argent", "châle brodé", "castagnettes"]
        },
        hairFluo: ["rouge", "rose", "vert"],
        background: "place de village mexicain, soirée de fête, lumières colorées",
        danceMoves: {
            part1: ["jeux de pieds rythmés", "mouvements de jupe amples", "tours gracieux", "poses de fierté"],
            part2: ["frappes de pieds marquées", "la jupe tourbillonne", "jeux avec les rubans", "cambrures"]
        }
    },
    
    cuba: {
        type: "cubain",
        name: "🇨🇺 Cuba",
        dance: "Salsa / Casino Cubain",
        palmColors: { left: "#f97316", right: "#3b82f6" },
        finalOutfit: {
            description: "tenue de danseuse de salsa cubaine",
            colors: ["orange tropical", "bleu caraïbe"],
            elements: ["robe courte volantée", "strass", "franges", "dos nu", "jambes galbées"],
            accessories: ["fleurs tropicales", "boucles d'oreilles créoles", "chaussures à talons"]
        },
        hairFluo: ["orange", "rose", "turquoise"],
        background: "rue de La Havane, vieilles voitures, coucher de soleil sur la mer",
        danceMoves: {
            part1: ["mouvements de hanches latéraux", "jeux de pieds rapides", "bras gracieux", "regards charmeurs"],
            part2: ["tours stylés", "déhanchés marqués", "jeux avec la robe", "poses de reine"]
        }
    },
    
    brazil: {
        type: "samba",
        name: "🇧🇷 Brésil",
        dance: "Samba",
        palmColors: { left: "#00ff00", right: "#ffff00" },
        finalOutfit: {
            description: "costume de danseuse de samba",
            colors: ["vert émeraude", "jaune soleil"],
            elements: ["body moulant", "plumes spectaculaires", "paillettes", "franges"],
            accessories: ["coiffe de plumes", "bottes à plateforme", "créoles dorées"]
        },
        hairFluo: ["vert fluo", "jaune fluo", "rose fluo"],
        background: "carnaval brésilien, plumes, confettis, lumières colorées",
        danceMoves: {
            part1: ["roulements de hanches lents", "vibrations d'épaules", "jeux de pieds rapides"],
            part2: ["roulements de hanches", "vibrations de fessiers", "jeux avec les plumes"]
        }
    },
    
    morocco: {
        type: "oriental",
        name: "🇲🇦 Maroc",
        dance: "Danse Orientale",
        palmColors: { left: "#0000ff", right: "#ffd700" },
        finalOutfit: {
            description: "caftan de cérémonie marocain",
            colors: ["bleu Majorelle", "or"],
            elements: ["velours brodé", "décolleté plongeant", "dos nu", "fente latérale"],
            accessories: ["ceinture dorée", "bijoux en or", "colliers superposés"]
        },
        hairFluo: ["bleu électrique", "fuchsia", "violet"],
        background: "palais marocain, zelliges, lampes en cuivre",
        danceMoves: {
            part1: ["ondulations lentes du bassin", "vibrations d'épaules", "vagues du ventre"],
            part2: ["ondulations profondes", "shimmies", "jeux avec les fentes du caftan"]
        }
    },
    
    senegal: {
        type: "default",
        name: "🇸🇳 Sénégal",
        dance: "Sabar",
        palmColors: { left: "#00ff00", right: "#ffd700" },
        finalOutfit: {
            description: "tenue traditionnelle sénégalaise",
            colors: ["vert", "or"],
            elements: ["haut corset brodé", "jupe longue fendue", "tissu wax"],
            accessories: ["bijoux en or massif", "ceinture de perles", "tresses ornées"]
        },
        hairFluo: ["vert fluo", "or fluo", "jaune fluo"],
        background: "savane africaine, tissus wax, tambours",
        danceMoves: {
            part1: ["vibrations d'épaules", "secousses de hanches", "mouvements de tête fiers"],
            part2: ["vibrations d'épaules marquées", "secousses de fessiers", "jeux avec les tresses"]
        }
    },
    
    japan: {
        type: "geisha",
        name: "🇯🇵 Japon",
        dance: "Geisha Moderne",
        palmColors: { left: "#ff0000", right: "#ffd700" },
        finalOutfit: {
            description: "kimono de cérémonie moderne",
            colors: ["rouge vermillon", "or"],
            elements: ["soie brodée", "décolleté élégant", "dos nu", "manches longues"],
            accessories: ["obi en satin", "épingles à cheveux", "éventail"]
        },
        hairFluo: ["rouge fluo", "rose fluo", "bleu électrique"],
        background: "jardin japonais, paravents shoji, fleurs de cerisier",
        danceMoves: {
            part1: ["gestes lents et contrôlés", "angles de mains parfaits", "pas glissés", "jeux de nuque"],
            part2: ["mouvements d'éventail", "découverte de la nuque", "jeux avec le kimono"]
        }
    },
    
    india: {
        type: "bollywood",
        name: "🇮🇳 Inde",
        dance: "Bollywood",
        palmColors: { left: "#ff6600", right: "#ff00ff" },
        finalOutfit: {
            description: "lehenga de cérémonie bollywoodien",
            colors: ["orange brûlé", "rose fuchsia"],
            elements: ["soie brodée", "choli court", "volants", "broderies d'or"],
            accessories: ["bijoux en or", "bangles", "maang tikka"]
        },
        hairFluo: ["rose fluo", "orange fluo", "violet"],
        background: "palais indien, tentures chamarrées, lumières chaudes",
        danceMoves: {
            part1: ["rotations des poignets", "ondulations de la taille", "inclinaisons de tête"],
            part2: ["rotations complètes", "jeux avec les volants", "expressions faciales expressives"]
        }
    },
    
    china: {
        type: "default",
        name: "🇨🇳 Chine",
        dance: "Danse Traditionnelle",
        palmColors: { left: "#ff0000", right: "#ffd700" },
        finalOutfit: {
            description: "qipao moderne revisité",
            colors: ["rouge impérial", "or"],
            elements: ["soie brodée", "col mandarin", "fentes latérales", "décolleté"],
            accessories: ["éventail", "épingles à cheveux", "bijoux en jade"]
        },
        hairFluo: ["rouge fluo", "or fluo", "rose"],
        background: "jardin chinois, lampions, soie rouge",
        danceMoves: {
            part1: ["gestes gracieux des mains", "pas glissés", "postures élégantes"],
            part2: ["jeux d'éventail", "mouvements de manches longues", "tours gracieux"]
        }
    },
    
    greece: {
        type: "grec",
        name: "🇬🇷 Grèce",
        dance: "Danse Antique",
        palmColors: { left: "#0000ff", right: "#ffffff" },
        finalOutfit: {
            description: "tenue grecque moderne",
            colors: ["bleu Égée", "blanc"],
            elements: ["robe fluide", "drapés", "ceinture dorée", "fente"],
            accessories: ["couronne de laurier", "bijoux en or", "feuilles d'olivier"]
        },
        hairFluo: ["bleu électrique", "blanc perlé", "or"],
        background: "colonnes grecques, mer Égée, lumière méditerranéenne",
        danceMoves: {
            part1: ["pas lents et solennels", "bras levés au ciel", "poses de statue"],
            part2: ["cercles gracieux", "cambrures de déesse", "drapés flottants"]
        }
    },

    // ==================== PLANÈTES (5) ====================
    neptune: {
        type: "siren",
        name: "🌊 Neptune",
        dance: "Danse des Abysses",
        palmColors: { left: "#1e3c72", right: "#2a5298" },
        finalOutfit: {
            description: "tenue de créature des profondeurs de Neptune",
            colors: ["bleu abyssal", "argent lunaire", "turquoise"],
            elements: ["écailles holographiques", "voiles d'eau", "cristaux de glace", "effet aqueux"],
            accessories: ["couronne de corail", "bijoux de perles", "voiles flottants"]
        },
        hairFluo: ["bleu électrique", "argent", "turquoise"],
        background: "profondeurs de l'océan de Neptune, bulles, créatures bioluminescentes",
        danceMoves: {
            part1: ["mouvements flottants comme dans l'eau", "ondulations lentes", "gestes de sirène"],
            part2: ["danse sous-marine", "jeux avec les bulles lumineuses", "mouvements de tentacules"]
        }
    },
    
    sun: {
        type: "superman",
        name: "☀️ Soleil",
        dance: "Danse Stellaire",
        palmColors: { left: "#ff0", right: "#ff8c00" },
        finalOutfit: {
            description: "tenue de déesse solaire",
            colors: ["jaune éclatant", "orange brûlé", "or pur"],
            elements: ["rayons de lumière", "paillettes dorées", "effet feu", "transparences chaudes"],
            accessories: ["couronne solaire", "bracelets de lumière", "sandales dorées"]
        },
        hairFluo: ["jaune fluo", "orange", "or"],
        background: "surface du soleil, éruptions solaires, lumière aveuglante",
        danceMoves: {
            part1: ["mouvements de flamme", "ondulations de chaleur", "poses rayonnantes"],
            part2: ["danse explosive", "mouvements de rayons", "éruptions d'énergie"]
        }
    },
    
    alien: {
        type: "spaceship",
        name: "👽 Extraterrestre",
        dance: "Danse Galactique",
        palmColors: { left: "#00ffff", right: "#ff00ff" },
        finalOutfit: {
            description: "tenue extra-terrestre futuriste",
            colors: ["cyan extraterrestre", "magenta cosmique"],
            elements: ["body moulant irisée", "effet métal liquide", "paillettes cosmiques", "écailles holographiques"],
            accessories: ["antennes lumineuses", "bijoux en cristal lunaire", "bottes argentées"]
        },
        hairFluo: ["bleu électrique", "violet néon", "rose cosmique", "argent métallique"],
        background: "vaisseau spatial, galaxie lointaine, nébuleuses colorées",
        danceMoves: {
            part1: ["mouvements robotiques lents", "ondulations extraterrestres", "gestes hypnotiques"],
            part2: ["mouvements fluides comme l'apesanteur", "vibrations cosmiques", "jeux avec la lumière"]
        }
    },
    
    uranus: {
        type: "siren",
        name: "💙 Uranus",
        dance: "Danse Glacée",
        palmColors: { left: "#7fffd4", right: "#b0e0e6" },
        finalOutfit: {
            description: "tenue de créature des glaces d'Uranus",
            colors: ["vert pâle", "bleu glacier", "argent"],
            elements: ["combinaison irisée effet glace", "cristaux de glace intégrés", "cape de givre", "bottes glacées"],
            accessories: ["couronne de glace", "bijoux en cristal gelé", "maquillage bleuté givré", "paillettes holographiques"]
        },
        hairFluo: ["vert pâle", "bleu", "argent"],
        background: "planète Uranus, anneaux glacés, tempêtes de glace, lointaines étoiles",
        danceMoves: {
            part1: ["mouvements lents et cristallins", "poses gelées"],
            part2: ["danse de glace", "éclats de cristal"]
        }
    },
    
    mercury: {
        type: "superman",
        name: "☄️ Mercure",
        dance: "Danse du Soleil",
        palmColors: { left: "#ff8c00", right: "#ff4500" },
        finalOutfit: {
            description: "tenue de créature de Mercure",
            colors: ["orange brûlé", "rouge feu", "or"],
            elements: ["combinaison effet lave", "paillettes incandescentes", "cape de feu", "bottes de feu"],
            accessories: ["couronne solaire", "bijoux de flammes", "maquillage chaud et brillant", "effets de chaleur"]
        },
        hairFluo: ["orange", "rouge", "or"],
        background: "planète Mercure, surface brûlante, soleil géant, rivières de lave",
        danceMoves: {
            part1: ["mouvements de flamme", "poses brûlantes"],
            part2: ["danse de feu", "éruptions d'énergie"]
        }
    },

    // ==================== CRÉATURES FANTASTIQUES (4) ====================
    fairy: {
        type: "fairy",
        name: "🧚 Fée",
        dance: "Danse Féerique",
        palmColors: { left: "#f0f", right: "#ffd700" },
        finalOutfit: {
            description: "tenue de fée enchantée",
            colors: ["rose féerique", "or magique", "blanc lunaire"],
            elements: ["voiles transparents irisés", "corset brodé de fleurs lumineuses", "jupe en pétales magiques", "ailes de libellule géantes"],
            accessories: ["couronne de fleurs lumineuses", "baguette magique à étoile", "poudre de fée scintillante", "bijoux en cristal de lune"]
        },
        hairFluo: ["rose fluo", "or", "violet"],
        background: "forêt enchantée la nuit, arbres lumineux, champignons phosphorescents, château de princesse",
        danceMoves: {
            part1: ["battements d'ailes gracieux", "vols planés", "gestes aériens"],
            part2: ["danse avec les ailes", "tournoiements élégants", "jeux avec la poudre de fée"]
        }
    },
    
    vampire: {
        type: "vampire",
        name: "🧛 Vampire",
        dance: "Danse Vampirique",
        palmColors: { left: "#8b0000", right: "#000" },
        finalOutfit: {
            description: "tenue de vampire gothique",
            colors: ["rouge sang", "noir profond", "argent"],
            elements: ["robe longue en velours noir", "décolleté plongeant", "cape de vampire doublée de rouge", "dentelle noire"],
            accessories: ["crocs", "yeux rouges", "médaillon ancien", "gants en dentelle"]
        },
        hairFluo: ["rouge", "noir", "argent"],
        background: "château maudit, cimetière gothique, pleine lune rouge, brume épaisse",
        danceMoves: {
            part1: ["mouvements lents et hypnotiques", "grâces féline", "regards perçants"],
            part2: ["danse avec la cape", "attaques stylisées", "cambrures de prédatrice"]
        }
    },
    
    elf: {
        type: "elf",
        name: "🧝 Elfe",
        dance: "Danse Enchantée",
        palmColors: { left: "#7cfc00", right: "#daa520" },
        finalOutfit: {
            description: "tenue d'elfe féérique",
            colors: ["vert forêt", "or", "argent"],
            elements: ["robe légère en feuilles et voiles verts", "corset en cuir végétal", "jambières en lianes dorées"],
            accessories: ["oreilles pointues", "couronne de feuilles", "arc et flèches décoratifs", "bijoux en cristaux de lune"]
        },
        hairFluo: ["vert", "or", "argent"],
        background: "forêt enchantée, arbres centenaires, rivière magique, champignons géants",
        danceMoves: {
            part1: ["mouvements gracieux et légers", "poses féeriques élégantes"],
            part2: ["danse enchantée", "jeux avec la magie des bois", "cambrures gracieuses"]
        }
    },
    
    darkelf: {
        type: "elf",
        name: "⚡ Elfe Noir",
        dance: "Danse des Ombres",
        palmColors: { left: "#4a0e4e", right: "#000000" },
        finalOutfit: {
            description: "tenue d'elfe noir ténébreux",
            colors: ["violet sombre", "noir", "argent"],
            elements: ["robe en voiles noirs irisés", "corset en cuir violet", "jambières en écailles sombres"],
            accessories: ["oreilles pointues", "diadème de cornes", "bijoux en obsidienne", "cape d'ombre"]
        },
        hairFluo: ["violet", "noir", "argent"],
        background: "forêt ténébreuse, brume épaisse, ruines anciennes, lune rouge",
        danceMoves: {
            part1: ["mouvements félins et mystérieux", "poses d'ombre envoûtantes"],
            part2: ["danse des ténèbres", "jeux avec l'obscurité", "rotations gracieuses"]
        }
    },

    // ==================== ZORRO SEXY ====================
    zorro: {
        type: "zorro",
        name: "⚔️ Zorro",
        dance: "Danse de l'Épée",
        palmColors: { left: "#000000", right: "#ff0000" },
        finalOutfit: {
            description: "costume de Zorro ultra-sexy revisité",
            colors: ["noir profond", "rouge passion", "argent"],
            elements: ["cape noire fluide", "corset en cuir noir", "shorty en cuir noir", "cuissardes à talons", "gants longs", "chemisier transparent"],
            accessories: ["masque noir", "chapeau incliné", "épée fine", "fouet en cuir", "ceinturon argenté"]
        },
        hairFluo: ["noir", "rouge", "argent"],
        background: "pueblo californien la nuit, clair de lune, ambiance mystérieuse",
        danceMoves: {
            part1: ["mouvements d'escrime sensuels", "jeux de cape suggestifs", "poses de justicière"],
            part2: ["combat chorégraphié", "signature Z avec l'épée", "cambrures spectaculaires"]
        }
    },

    // ==================== SORCIÈRES (2) ====================
    witchreal: {
        type: "witch",
        name: "🧙 Sorcière",
        dance: "Danse Ensorcelante",
        palmColors: { left: "#4b0082", right: "#000000" },
        finalOutfit: {
            description: "costume de sorcière chic",
            colors: ["violet profond", "noir", "argent"],
            elements: ["robe longue en velours violet", "corset lacé noir", "bas résille noirs", "bottines à talons"],
            accessories: ["chapeau de sorcière élégant", "balai décoratif", "bijoux en argent", "petite citrouille"]
        },
        hairFluo: ["violet", "noir", "argent"],
        background: "soirée Halloween chic, manoir ancien, citrouilles, bougies",
        danceMoves: {
            part1: ["mouvements mystérieux", "poses envoûtantes"],
            part2: ["danse ensorcelante", "jeux avec la cape"]
        }
    },
    
    witchenchant: {
        type: "witch",
        name: "🧙 Sorcière Envoûteuse",
        dance: "Danse de Sortilège",
        palmColors: { left: "#663399", right: "#228b22" },
        finalOutfit: {
            description: "tenue de sorcière envoûtante",
            colors: ["violet sombre", "vert émeraude", "noir"],
            elements: ["robe longue en velours vert émeraude", "cape doublée de violet", "corset en cuir noir"],
            accessories: ["chapeau pointu élégant", "médaillon ancien", "baguette magique", "fioles décoratives"]
        },
        hairFluo: ["vert", "violet", "noir"],
        background: "forêt mystique, clair de lune, potions qui bouillonnent",
        danceMoves: {
            part1: ["gestes d'incantation", "poses mystérieuses"],
            part2: ["danse rituelle", "jeux avec la baguette"]
        }
    },

    // ==================== SUPER-HÉROS (4) ====================
    marvelreal: {
        type: "superman",
        name: "🦸 Marvel",
        dance: "Danse Super-Héroïque",
        palmColors: { left: "#ed1d24", right: "#02458c" },
        finalOutfit: {
            description: "costume de super-héroïne Marvel",
            colors: ["rouge Marvel", "bleu nuit", "or"],
            elements: ["combinaison moulante en latex rouge et bleu", "découpes stratégiques", "ceinture utilitaire", "bottes de combat"],
            accessories: ["masque de justicière", "armure légère", "emblème stylisé", "bracelets de combat"]
        },
        hairFluo: ["rouge", "bleu", "or"],
        background: "toit de gratte-ciel la nuit, ville vue du ciel, éclairs",
        danceMoves: {
            part1: ["poses de super-héroïne", "mouvements de combat stylisés"],
            part2: ["danse guerrière", "enchaînements dynamiques"]
        }
    },
    
    dcreal: {
        type: "superman",
        name: "⚡ DC",
        dance: "Danse DC",
        palmColors: { left: "#000000", right: "#ffdf00" },
        finalOutfit: {
            description: "costume de super-héroïne DC",
            colors: ["noir", "or", "argent"],
            elements: ["combinaison moulante en cuir noir", "ceinture dorée", "bottes de combat", "gants longs"],
            accessories: ["tiare métallique", "lasso décoratif", "cape noire", "bracelets de force"]
        },
        hairFluo: ["noir", "or", "argent"],
        background: "ville gothique la nuit, éclairs, toits d'immeubles, pleine lune",
        danceMoves: {
            part1: ["poses puissantes", "mouvements de combat"],
            part2: ["danse de guerrière", "enchaînements dynamiques"]
        }
    },
    
    cosmicreal: {
        type: "superman",
        name: "🌌 Cosmique",
        dance: "Danse Galactique",
        palmColors: { left: "#4b0082", right: "#00ffff" },
        finalOutfit: {
            description: "tenue de gardienne cosmique",
            colors: ["violet profond", "cyan", "argent"],
            elements: ["combinaison irisée effet galaxies", "cristaux lumineux", "armure légère chromée", "cape d'énergie"],
            accessories: ["diadème cosmique", "bijoux en cristal lunaire", "gants énergétiques", "tatouages lumineux"]
        },
        hairFluo: ["violet", "bleu", "argent"],
        background: "nébuleuse galactique, étoiles, planètes lointaines, aurores cosmiques",
        danceMoves: {
            part1: ["mouvements flottants", "gestes de création d'énergie"],
            part2: ["danse d'énergie cosmique", "poses de gardienne de l'univers"]
        }
    },
    
    warriorcosmic: {
        type: "superman",
        name: "⚔️ Guerrière Cosmique",
        dance: "Danse de Combat Stellaire",
        palmColors: { left: "#ff4500", right: "#00ced1" },
        finalOutfit: {
            description: "armure de guerrière cosmique",
            colors: ["orange cosmique", "turquoise", "or"],
            elements: ["armure légère en métal chromé", "justaucorps effet énergie", "jambières stylisées", "bottes renforcées"],
            accessories: ["casque de combat ouvert", "épée énergétique", "bouclier énergétique", "tatouages de guerre"]
        },
        hairFluo: ["orange", "turquoise", "or"],
        background: "champ de bataille cosmique, explosion d'étoiles, vaisseaux",
        danceMoves: {
            part1: ["mouvements de combat", "poses guerrières"],
            part2: ["danse de victoire", "enchaînements martiaux"]
        }
    },

    // ==================== SUPERMAN CLASSIQUE ====================
    supermanclassic: {
        type: "superman",
        name: "🦸 Superman Classique",
        dance: "Danse Héroïque",
        palmColors: { left: "#ff0000", right: "#0000ff" },
        finalOutfit: {
            description: "costume de Superman iconique revisité",
            colors: ["rouge", "bleu", "jaune"],
            elements: ["justaucorps moulant rouge et bleu", "cape rouge flottante", "bottes rouges", "ceinture jaune"],
            accessories: ["logo S sur la poitrine", "cape de super-héros", "bracelets rouges"]
        },
        hairFluo: ["noir", "bleu", "rouge"],
        background: "toit de gratte-ciel la nuit, ville illuminée, éclairs, lune pleine",
        danceMoves: {
            part1: ["poses de super-héros", "mouvements puissants", "regards déterminés"],
            part2: ["vol stylisé", "combat chorégraphié", "atterrissage de super-héros"]
        }
    },

    // ==================== MYTHOLOGIE (2) ====================
    athena: {
        type: "athena",
        name: "🦸 Athéna",
        dance: "Danse de la Sagesse",
        palmColors: { left: "#c0c0c0", right: "#ffd700" },
        finalOutfit: {
            description: "tenue de déesse Athéna",
            colors: ["argent", "or", "blanc"],
            elements: ["robe longue en soie blanche drapée", "armure légère en métal argenté", "sandales dorées"],
            accessories: ["casque corinthien", "lance décorative", "bouclier orné", "couronne de laurier"]
        },
        hairFluo: ["or", "argent", "blanc"],
        background: "temple grec antique, colonnes de marbre, ciel bleu, mont Olympe",
        danceMoves: {
            part1: ["poses de déesse majestueuses", "mouvements solennels"],
            part2: ["danse guerrière sacrée", "jeux avec la lance"]
        }
    },
    
    valkyrie: {
        type: "default",
        name: "⚔️ Valkyrie",
        dance: "Danse du Valhalla",
        palmColors: { left: "#cd7f32", right: "#c0c0c0" },
        finalOutfit: {
            description: "tenue de guerrière Valkyrie",
            colors: ["bronze", "argent", "rouge"],
            elements: ["armure légère en métal bronze", "cuirasse ornée de runes", "jupe en cuir", "bottes nordiques"],
            accessories: ["casque ailé", "épée viking", "bouclier runique", "cape rouge", "tresses avec perles"]
        },
        hairFluo: ["roux", "blond", "argent"],
        background: "champ de bataille nordique, fjords, aurores boréales, Valhalla",
        danceMoves: {
            part1: ["poses guerrières puissantes", "mouvements de combat"],
            part2: ["danse de victoire", "célébration guerrière"]
        }
    },

    // ==================== DESSINS ANIMÉS (4) ====================
    animemanga: {
        type: "default",
        name: "🎌 Manga",
        dance: "Danse Anime",
        palmColors: { left: "#ff99cc", right: "#99ccff" },
        finalOutfit: {
            description: "tenue de personnage d'anime",
            colors: ["rose sakura", "bleu ciel", "blanc"],
            elements: ["robe de magical girl à volants", "nœud géant", "gants longs blancs", "bottes hautes"],
            accessories: ["baguette magique", "rubans dans les cheveux", "oreilles de chat", "yeux immenses"]
        },
        hairFluo: ["rose", "bleu", "violet"],
        background: "monde fantastique d'anime, ciel étoilé, cerisiers en fleurs",
        danceMoves: {
            part1: ["mouvements gracieux d'animé", "poses de magical girl"],
            part2: ["danse dynamique d'anime", "transformations stylisées"]
        }
    },
    
    cartoonclassic: {
        type: "default",
        name: "🎬 Cartoon",
        dance: "Danse Cartoon",
        palmColors: { left: "#ffff00", right: "#ff0000" },
        finalOutfit: {
            description: "tenue de princesse Disney",
            colors: ["jaune canari", "rouge", "bleu royal"],
            elements: ["robe de princesse bouffante", "corset ajusté", "gants longs", "chaussures à talons"],
            accessories: ["tiare scintillante", "gants blancs", "sourire ultra-bright", "grands yeux expressifs"]
        },
        hairFluo: ["blond", "roux", "noir"],
        background: "château de conte de fées, arc-en-ciel, nuages mignons",
        danceMoves: {
            part1: ["mouvements exagérés de cartoon", "poses de princesse"],
            part2: ["danse joyeuse", "sauts légers"]
        }
    },
    
    comicshero: {
        type: "superman",
        name: "💥 Comics",
        dance: "Danse Super-Héroïne",
        palmColors: { left: "#0000ff", right: "#ff0000" },
        finalOutfit: {
            description: "tenue de super-héroïne de comics",
            colors: ["bleu", "rouge", "jaune"],
            elements: ["justaucorps moulant", "cape flottante", "bottes de combat", "ceinture utilitaire"],
            accessories: ["masque", "emblème", "bracelets de force", "armure légère"]
        },
        hairFluo: ["bleu", "rouge", "argent"],
        background: "ville futuriste, gratte-ciels, éclairs, explosion façon comics",
        danceMoves: {
            part1: ["poses de super-héros", "mouvements puissants"],
            part2: ["combat chorégraphié", "vols stylisés"]
        }
    },
    
    sketchstyle: {
        type: "default",
        name: "✏️ Esquisse",
        dance: "Danse Croquis",
        palmColors: { left: "#000000", right: "#888888" },
        finalOutfit: {
            description: "personnage sorti d'un carnet de croquis",
            colors: ["noir", "blanc", "gris"],
            elements: ["tenue effet crayonné", "traits de crayon apparents", "texture papier", "ombres hachurées"],
            accessories: ["effet gomme", "traits de construction", "crayon magique flottant"]
        },
        hairFluo: ["noir", "blanc", "argent"],
        background: "feuille de papier, carnet de croquis, taches d'encre",
        danceMoves: {
            part1: ["mouvements saccadés", "poses de modèle vivant"],
            part2: ["danse dessinée", "effets de gommage"]
        }
    },

    // ==================== FÊTES & COSTUMES (7) ====================
    santasexy: {
        type: "christmas",
        name: "🎅 Père Noël",
        dance: "Danse de Noël",
        palmColors: { left: "#ff0000", right: "#ffffff" },
        finalOutfit: {
            description: "tenue de père noël ultra-sexy deux pièces",
            colors: ["rouge de Noël", "blanc neige", "or"],
            elements: ["haut bustier rouge à fourrure", "shorty très court rouge", "bottes hautes rouges", "ceinture noire"],
            accessories: ["bonnet de père noël", "fausse barbe", "lunettes rouges", "petit sac de cadeaux"]
        },
        hairFluo: ["rouge", "blanc", "or"],
        background: "soirée de Noël chic, sapin décoré, cheminée, neige",
        danceMoves: {
            part1: ["mouvements sensuels de Noël", "jeux avec le bonnet"],
            part2: ["danse festive", "jeux avec les cadeaux"]
        }
    },
    
    elfsexy: {
        type: "christmas",
        name: "🧝 Lutin",
        dance: "Danse des Lutins",
        palmColors: { left: "#00ff00", right: "#ff0000" },
        finalOutfit: {
            description: "tenue de lutin de Noël sexy",
            colors: ["vert sapin", "rouge", "or"],
            elements: ["haut corset vert", "micro-short vert", "collants résille", "bottines à grelots"],
            accessories: ["chapeau de lutin pointu", "oreilles de lutin", "ceinture à grelots", "canne en sucre"]
        },
        hairFluo: ["vert", "rouge", "or"],
        background: "atelier du père noël, jouets, cadeaux, lumières de Noël",
        danceMoves: {
            part1: ["mouvements espiègles", "jeux avec la canne"],
            part2: ["danse malicieuse", "jeux avec les grelots"]
        }
    },
    
    cowgirl: {
        type: "cowgirl",
        name: "🤠 Cowgirl",
        dance: "Danse Country",
        palmColors: { left: "#8b4513", right: "#d2691e" },
        finalOutfit: {
            description: "tenue de cowgirl sexy",
            colors: ["marron", "beige", "turquoise"],
            elements: ["haut en daim frangé", "short très court en jean", "bottes de cowboy", "ceinturon"],
            accessories: ["chapeau de cowboy", "foulard", "étoile de shérif", "lasso", "pistolet factice"]
        },
        hairFluo: ["blond", "roux", "marron"],
        background: "saloon du Far West, désert, cactus, chevaux",
        danceMoves: {
            part1: ["mouvements de rodéo", "poses de cowgirl"],
            part2: ["danse country", "jeux avec le lasso"]
        }
    },
    
    pirate: {
        type: "pirate",
        name: "🏴‍☠️ Pirate",
        dance: "Danse des Pirates",
        palmColors: { left: "#000000", right: "#b8860b" },
        finalOutfit: {
            description: "tenue de pirate sexy",
            colors: ["noir", "or", "rouge"],
            elements: ["haut corset noir", "jupe longue fendue", "bottes de pirate", "ceinture large"],
            accessories: ["chapeau de pirate", "cache-œil", "sabre", "bijoux en or", "carte au trésor"]
        },
        hairFluo: ["noir", "rouge", "or"],
        background: "bateau pirate, île déserte, coucher de soleil sur l'océan",
        danceMoves: {
            part1: ["mouvements de marin", "poses de flibustière"],
            part2: ["danse de taverne", "jeux avec le sabre"]
        }
    },
    
    princess: {
        type: "princess",
        name: "👸 Princesse",
        dance: "Danse de Cour",
        palmColors: { left: "#ff69b4", right: "#ffd700" },
        finalOutfit: {
            description: "robe de princesse digne d'un conte de fées",
            colors: ["rose royal", "or", "blanc perle"],
            elements: ["robe longue en tulle", "corset brodé de perles", "jupe volumineuse", "gants longs"],
            accessories: ["tiare étincelante", "collier de perles", "éventail", "petit sceptre"]
        },
        hairFluo: ["blond", "rose", "argent"],
        background: "château royal, salle de bal, lustres en cristal",
        danceMoves: {
            part1: ["révérences gracieuses", "poses royales élégantes"],
            part2: ["valse élégante", "tours de princesse"]
        }
    },
    
    siren: {
        type: "siren",
        name: "🧜 Sirène",
        dance: "Danse Aquatique",
        palmColors: { left: "#00ced1", right: "#7fffd4" },
        finalOutfit: {
            description: "tenue de sirène féérique",
            colors: ["turquoise", "vert d'eau", "argent"],
            elements: ["haut coquillage", "queue de sirène", "voiles irisés", "bijoux de perles"],
            accessories: ["couronne de coquillages", "bijoux en nacre", "fleurs aquatiques", "paillettes holographiques"]
        },
        hairFluo: ["turquoise", "vert", "bleu"],
        background: "océan profond, récif de corail, bulles, lumière sous-marine",
        danceMoves: {
            part1: ["mouvements flottants", "ondulations de sirène", "gestes de nage gracieux"],
            part2: ["danse sous-marine", "jeux avec les vagues", "mouvements de queue amples"]
        }
    },
    
    venetian: {
        type: "default",
        name: "🎭 Masqué",
        dance: "Danse de Carnaval",
        palmColors: { left: "#800080", right: "#daa520" },
        finalOutfit: {
            description: "tenue de carnaval vénitien luxueuse",
            colors: ["pourpre", "or", "noir"],
            elements: ["robe longue en velours pourpre", "corset brodé d'or", "manches bouffantes", "jupons"],
            accessories: ["MASQUE VÉNITIEN", "éventail en dentelle", "gants longs", "plumes"]
        },
        hairFluo: ["violet", "or", "rouge"],
        background: "Venise la nuit, canaux, gondoles, palais illuminés",
        danceMoves: {
            part1: ["démarche mystérieuse", "jeux avec le masque"],
            part2: ["danse de bal masqué", "tours gracieux"]
        }
    },

    // ==================== MILITAIRE ====================
    specialforces: {
        type: "military",
        name: "🔫 Forces Spéciales",
        dance: "Danse Commando",
        palmColors: { left: "#2d5a27", right: "#8b4513" },
        finalOutfit: {
            description: "tenue de forces spéciales tactique",
            colors: ["vert camouflage", "noir tactique", "kaki"],
            elements: ["haut sport ultra-moulant", "short tactique très court", "bottes de combat", "gants tactiques"],
            accessories: ["casque tactique", "lunettes de vision nocturne", "fusil factice", "talkie-walkie", "camouflage de guerre"]
        },
        hairFluo: ["vert", "orange", "rouge"],
        background: "zone de combat urbaine, hélicoptère, fumée, projecteurs",
        danceMoves: {
            part1: ["mouvements de combat stylisés", "poses de tireur d'élite"],
            part2: ["danse guerrière", "enchaînements commando"]
        }
    },

    // ==================== POMPIER ====================
    firefighter: {
        type: "firefighter",
        name: "🚒 Pompier",
        dance: "Danse du Feu",
        palmColors: { left: "#ff0000", right: "#ffff00" },
        finalOutfit: {
            description: "tenue de pompier ultra-sexy",
            colors: ["rouge pompier", "jaune fluo", "noir"],
            elements: ["débardeur rouge moulant", "pantalon de pompier très court", "bottes de sécurité", "ceinturon"],
            accessories: ["casque de pompier", "masque à gaz", "hache décorative", "extincteur factice", "gants de protection"]
        },
        hairFluo: ["rouge", "jaune", "orange"],
        background: "caserne de pompiers, camion rouge, incendie maîtrisé, échelle",
        danceMoves: {
            part1: ["mouvements de sauvetage", "poses héroïques"],
            part2: ["danse de l'intervention", "jeux avec la lance à incendie"]
        }
    },

    // ==================== POLICIER ====================
    police: {
        type: "police",
        name: "👮 Police",
        dance: "Danse de l'Intervention",
        palmColors: { left: "#0000ff", right: "#ffffff" },
        finalOutfit: {
            description: "tenue de policière ultra-sexy",
            colors: ["bleu nuit", "blanc", "argent"],
            elements: ["haut moulant bleu", "short réglementaire très court", "bottes d'intervention", "ceinturon tactique"],
            accessories: ["casquette de police", "menottes", "pistolet factice", "talkie-walkie", "badge", "gilet pare-balles léger"]
        },
        hairFluo: ["bleu", "blanc", "argent"],
        background: "commissariat, voiture de police, ville la nuit, gyrophares",
        danceMoves: {
            part1: ["mouvements d'intervention", "poses d'autorité"],
            part2: ["danse de l'arrestation", "jeux avec les menottes"]
        }
    },

    // ==================== PRÉHISTORIQUE ====================
    cavewoman: {
        type: "cavewoman",
        name: "🦴 Femme des Cavernes",
        dance: "Danse Primitive",
        palmColors: { left: "#8b5a2b", right: "#d2691e" },
        finalOutfit: {
            description: "tenue de femme des cavernes",
            colors: ["marron terre", "beige", "orange"],
            elements: ["haut en fourrure", "micro-short en peau", "bottes en fourrure", "bandeaux en cuir"],
            accessories: ["collier de dents", "plumes et os", "tatouages tribaux", "hache de pierre"]
        },
        hairFluo: ["roux", "brun", "orange"],
        background: "caverne préhistorique, feu de camp, peintures rupestres, mammouths",
        danceMoves: {
            part1: ["mouvements de chasse", "poses guerrières"],
            part2: ["danse rituelle", "célébration de chasse"]
        }
    },

    // ==================== APOCALYPSE ====================
    zombie: {
        type: "zombie",
        name: "🧟 Zombie",
        dance: "Danse Macabre",
        palmColors: { left: "#228b22", right: "#8b0000" },
        finalOutfit: {
            description: "tenue de survivante apocalyptique",
            colors: ["vert cimetière", "rouge sang", "noir"],
            elements: ["vêtements déchirés", "haut en lambeaux", "short en jean usé", "bottes de combat"],
            accessories: ["maquillage de zombie", "lentilles blanches", "fausses blessures", "armes de survie"]
        },
        hairFluo: ["vert", "rouge", "gris"],
        background: "ville en ruines, voitures brûlées, barbelés, feu de camp",
        danceMoves: {
            part1: ["démarche chancelante", "mouvements de zombie"],
            part2: ["danse de survie", "combats contre les infectés"]
        }
    },

    // ==================== RAPPEUR URBAIN (5 TENUES) ====================
    rapper: {
        type: "default",
        name: "🎤 Rappeur Urbain",
        dance: "Chorégraphie Rap / RnB",
        palmColors: { left: "#ffd700", right: "#c0c0c0" },
        tenues: {
            tenue1: {
                description: "tenue de rappeur(se) urbaine - style jogging",
                colors: ["noir", "or", "argent"],
                elements: ["survêtement oversized noir avec bandes dorées", "débardeur blanc moulant", "baskets blanches", "gourmette dorée", "ceinture argentée"],
                accessories: ["casquette inclinée", "chaînes en or", "bagues", "micro sans fil", "lunettes de soleil"]
            },
            tenue2: {
                description: "tenue de rappeur(se) urbaine - style hoodie",
                colors: ["gris chiné", "noir", "blanc"],
                elements: ["hoodie oversized gris", "pantalon cargo noir", "baskets Air Force 1", "banane", "béret"],
                accessories: ["chaîne argentée", "bagues", "écouteurs", "lunettes", "sacoche"]
            },
            tenue3: {
                description: "tenue de rappeur(se) urbaine - style streetwear",
                colors: ["beige", "marron", "blanc cassé"],
                elements: ["veste de survêtement beige", "pantalon large", "baskets New Balance", "tie-dye", "casquette trucker"],
                accessories: ["colliers superposés", "montre digitale", "chaîne de ceinture", "tattoos", "sac à dos"]
            },
            tenue4: {
                description: "tenue de rappeur(se) urbaine - style denim",
                colors: ["bleu denim", "blanc", "noir"],
                elements: ["veste en jean oversize", "jeans baggy déchirés", "baskets Air Jordan", "t-shirt blanc", "ceinture à grosse boucle"],
                accessories: ["bandana", "lunettes rondes", "chaîne en argent", "bracelets en cuir", "bonnet noir"]
            },
            tenue5: {
                description: "tenue de rappeur(se) urbaine - style sportswear",
                colors: ["rouge", "blanc", "bleu marine"],
                elements: ["ensemble survêtement vintage rouge", "baskets Adidas Superstar", "t-shirt blanc logo", "casquette de baseball", "sac de sport"],
                accessories: ["montre de sport", "bracelets en silicone", "petite chaîne dorée", "écouteurs", "gourde"]
            }
        },
        finalOutfit: "tenue de rappeur(se) urbaine (choisir parmi 5 styles)",
        hairFluo: ["blond", "brun", "noir", "rouge", "bleu"],
        background: "rue urbaine la nuit, graffitis, lampadaires, ambiance hip-hop",
        danceMoves: {
            part1: ["bounce léger", "isolations d'épaules", "chest pops", "body rolls", "extensions des bras"],
            part2: ["mouvements des bras", "jeux de doigts", "hits", "déhanchements", "pas courts"]
        }
    },

    // ==================== RAPPEUR AMÉRICAIN LUXE (5 TENUES) ====================
    rapperluxe: {
        type: "default",
        name: "🇺🇸 Rappeur Américain",
        dance: "Chorégraphie Rap US",
        palmColors: { left: "#00ff00", right: "#ff0000" },
        tenues: {
            tenue1: {
                description: "tenue de rappeur(se) américaine - style Miami bling",
                colors: ["vert émeraude", "or", "rouge"],
                elements: ["manteau en fourrure verte", "ensemble en soie rouge", "baskets personnalisées diamants", "ceinture en or", "lunettes vertes", "jeans baggy"],
                accessories: ["chaîne en or avec pendentif diamants", "montre Richard Mille", "bagues", "grillz", "champagne", "liasses de billets"]
            },
            tenue2: {
                description: "tenue de rappeur(se) américaine - style Hollywood",
                colors: ["argent", "blanc", "bleu glacier"],
                elements: ["veste en cuir argenté", "t-shirt Versace", "pantalon en cuir blanc", "baskets Louis Vuitton", "lunettes futuristes", "ceinture LV"],
                accessories: ["chaîne en platine", "montre Audemars Piguet", "bagues diamants", "écharpe soie", "Dom Pérignon", "téléphone en or"]
            },
            tenue3: {
                description: "tenue de rappeur(se) américaine - style New York",
                colors: ["noir", "or", "diamant"],
                elements: ["manteau long en cuir", "hoodie Balenciaga", "jeans noirs slim", "bottes de motard", "lunettes noires", "ceinture à chaîne"],
                accessories: ["chaîne cubaine en or", "montre Patek Philippe", "bagues diamants noirs", "gants en cuir", "cigare cubain", "whisky"]
            },
            tenue4: {
                description: "tenue de rappeur(se) américaine - style Atlanta",
                colors: ["violet", "or", "blanc"],
                elements: ["costume violet Versace", "chemise en soie", "chaussures python", "lunettes violettes", "ceinture crocodile", "chapeau fedora"],
                accessories: ["chaîne en or diamants violets", "montre Jacob & Co", "bagues", "canne décorative", "Cristal Rosé", "éventail"]
            },
            tenue5: {
                description: "tenue de rappeur(se) américaine - style Las Vegas",
                colors: ["rouge", "or", "diamant"],
                elements: ["veste en velours rouge", "chemise en soie dorée", "pantalon en velours", "baskets rouges", "lunettes rouges", "ceinture en or"],
                accessories: ["chaîne avec pendentif carte de crédit", "montre Hublot", "bagues diamants rouges", "jetons casino", "Ace of Spades", "dés en diamant"]
            }
        },
        finalOutfit: "tenue de rappeur(se) américaine luxueuse (choisir parmi 5 styles)",
        hairFluo: ["blond platine", "rouge", "bleu", "argent", "violet"],
        background: "soirée privée luxueuse à Miami, piscine, voitures de sport, jets privés, billets qui tombent",
        danceMoves: {
            part1: ["démarche swag", "jeux avec les billets", "poses de célébrité", "regards charmeurs"],
            part2: ["danse du million de dollars", "jeux avec les chaînes", "mouvements de show-off", "poses de vainqueur"]
        }
    },

    // ==================== AUTRES PERSONNAGES (suite) ====================
    spacecowgirl: {
        type: "cowgirl",
        name: "🤠 Cowgirl Galactique",
        dance: "Danse Western Cosmique",
        palmColors: { left: "#c0c0c0", right: "#ff00ff" },
        finalOutfit: {
            description: "tenue de cowgirl futuriste",
            colors: ["argent métallique", "rose néon", "noir"],
            elements: ["body en latex", "short en cuir cosmique", "bottes laser", "ceinturon à rayons"],
            accessories: ["chapeau de cowboy avec hologrammes", "pistolet laser", "lasso lumineux", "étoile de shérif numérique"]
        },
        hairFluo: ["rose", "argent", "bleu"],
        background: "saloon sur une autre planète, désert martien, vaisseaux amarrés",
        danceMoves: {
            part1: ["mouvements de rodéo cosmique", "poses de cowgirl futuriste"],
            part2: ["danse western 2.0", "jeux avec le lasso laser"]
        }
    },
    
    snowelf: {
        type: "elf",
        name: "❄️ Elfe des Neiges",
        dance: "Danse Hivernale",
        palmColors: { left: "#a0d2ff", right: "#c0d6ff" },
        finalOutfit: {
            description: "tenue d'elfe des glaces",
            colors: ["bleu glacier", "blanc", "argent"],
            elements: ["robe en voiles givrés", "corset orné de cristaux", "cape de neige", "bottines fourrées"],
            accessories: ["couronne de glace", "bijoux en cristal", "foulard en fourrure", "flocons magiques"]
        },
        hairFluo: ["bleu glacier", "argent", "blanc"],
        background: "forêt enneigée, aurores boréales, montagnes gelées",
        danceMoves: {
            part1: ["mouvements légers comme la neige", "poses glacées"],
            part2: ["danse des flocons", "tourbillon hivernal"]
        }
    },
    
    djinn: {
        type: "default",
        name: "🧞 Djinn",
        dance: "Danse du Génie",
        palmColors: { left: "#ffd700", right: "#4b0082" },
        finalOutfit: {
            description: "tenue de génie mystique",
            colors: ["or", "violet", "turquoise"],
            elements: ["pantalon bouffant", "haut brodé", "voiles transparents", "bijoux en or"],
            accessories: ["lampe magique", "fumée parfumée", "bracelets qui tintent", "poudre d'étoiles"]
        },
        hairFluo: ["or", "violet", "turquoise"],
        background: "palais des mille et une nuits, tapis volant, ciel étoilé",
        danceMoves: {
            part1: ["mouvements mystiques", "ondulations de génie"],
            part2: ["danse d'exaucement", "jeux avec la fumée magique"]
        }
    },
    
    villainess: {
        type: "default",
        name: "🦹 Vilaine",
        dance: "Danse du Mal",
        palmColors: { left: "#8b0000", right: "#000000" },
        finalOutfit: {
            description: "tenue de méchante sexy",
            colors: ["rouge sang", "noir", "violet"],
            elements: ["body en cuir", "cape de vilaine", "bottes à talons aiguilles", "gants longs"],
            accessories: ["masque de méchante", "fouet décoratif", "maquillage sombre", "trône de vilaine"]
        },
        hairFluo: ["noir", "rouge", "violet"],
        background: "repaire secret, éclairs, trône au milieu des flammes",
        danceMoves: {
            part1: ["démarche arrogante", "poses dominatrices"],
            part2: ["danse de la tentation", "jeux avec le fouet"]
        }
    },
    
    hawaiian: {
        type: "default",
        name: "🌺 Tahitienne",
        dance: "Ori Tahiti",
        palmColors: { left: "#ff69b4", right: "#ffa500" },
        finalOutfit: {
            description: "tenue de danseuse tahitienne",
            colors: ["rose", "orange", "vert"],
            elements: ["top en fibres naturelles", "jupe en raphia coloré", "couronne de fleurs", "bracelets de coquillages"],
            accessories: ["fleurs de tiaré", "collier de coquillages", "tattoos tahitiens", "percussions"]
        },
        hairFluo: ["rose", "orange", "vert"],
        background: "plage paradisiaque, coucher de soleil, cocotiers, mer turquoise",
        danceMoves: {
            part1: ["mouvements de hanches tahitiens", "ondulations des vagues"],
            part2: ["danse du paradis", "jeux avec les fleurs"]
        }
    },
    
    scientist: {
        type: "default",
        name: "🧪 Scientifique",
        dance: "Danse du Labo",
        palmColors: { left: "#00ff00", right: "#ffffff" },
        finalOutfit: {
            description: "tenue de scientifique sexy",
            colors: ["blanc", "vert fluo", "argent"],
            elements: ["blouse de laboratoire ouverte", "body moulant dessous", "baskets", "lunettes de protection"],
            accessories: ["éprouvettes", "microscope", "tableau de formules", "gants en latex"]
        },
        hairFluo: ["vert", "bleu", "rose"],
        background: "laboratoire high-tech, lumières néon, fioles qui bouillonnent",
        danceMoves: {
            part1: ["gestes de manipulation", "poses de chercheuse"],
            part2: ["danse de la découverte", "jeux avec les éprouvettes"]
        }
    },
    
    painter: {
        type: "default",
        name: "🎨 Peintre",
        dance: "Danse des Couleurs",
        palmColors: { left: "#ff0000", right: "#0000ff" },
        finalOutfit: {
            description: "tenue d'artiste bohème",
            colors: ["taches de peinture", "beige", "arc-en-ciel"],
            elements: ["salopette tachée", "bustier coloré", "baskets", "tablier"],
            accessories: ["pinceaux", "palette", "toile", "béret", "taches de peinture sur la peau"]
        },
        hairFluo: ["rose", "bleu", "jaune"],
        background: "atelier d'artiste, toiles partout, lumières chaudes, chevalets",
        danceMoves: {
            part1: ["gestes de peintre", "poses artistiques"],
            part2: ["danse des couleurs", "jeux avec les pinceaux"]
        }
    },
    
    archer: {
        type: "default",
        name: "🏹 Archère",
        dance: "Danse de la Chasse",
        palmColors: { left: "#228b22", right: "#8b4513" },
        finalOutfit: {
            description: "tenue d'archère",
            colors: ["vert forêt", "marron", "beige"],
            elements: ["haut en cuir", "short tactique", "bottes de randonnée", "cape de chasse"],
            accessories: ["arc et flèches", "carquois dans le dos", "gants de tir", "cible"]
        },
        hairFluo: ["vert", "marron", "or"],
        background: "forêt, clairière, cibles au loin, campement",
        danceMoves: {
            part1: ["postures de tir", "mouvements de chasse"],
            part2: ["danse de la chasseresse", "jeux avec l'arc"]
        }
    },
    
    steampunk: {
        type: "default",
        name: "⚙️ Steampunk",
        dance: "Danse Victorienne",
        palmColors: { left: "#cd7f32", right: "#8b4513" },
        finalOutfit: {
            description: "tenue steampunk élégante",
            colors: ["bronze", "cuivre", "marron"],
            elements: ["corset victorien", "jupe longue à volants", "bottes à lacets", "gants résille"],
            accessories: ["lunettes de protection", "montre à gousset", "engrenages décoratifs", "chapeau haut-de-forme"]
        },
        hairFluo: ["bronze", "cuivre", "roux"],
        background: "usine victorienne, machines à vapeur, rouages géants",
        danceMoves: {
            part1: ["mouvements mécaniques", "poses victoriennes"],
            part2: ["danse des engrenages", "jeux avec les montres"]
        }
    },
    
    avatar: {
        type: "avatar",
        name: "🔵 AVATAR NA'VI",
        dance: "Danse de Pandora",
        palmColors: { left: "#2a6f8f", right: "#5b9ab3" },
        finalOutfit: {
            description: "tenue de Na'vi inspirée d'Avatar",
            colors: ["bleu nuit", "turquoise", "argent"],
            elements: ["peau BLEUE caractéristique", "corps élancé", "oreilles pointues", "queue fine"],
            accessories: ["tresses avec perles", "bijoux tribaux", "peintures corporelles", "collier de dents"]
        },
        hairFluo: ["bleu nuit", "turquoise", "argent", "blanc"],
        background: "forêt luxuriante de Pandora, plantes bioluminescentes, arbres géants",
        danceMoves: {
            part1: ["mouvements gracieux et félins", "postures de chasseur", "gestes tribaux"],
            part2: ["danse rituelle Na'vi", "mouvements fluides", "connexion avec la nature"]
        }
    },
    
    avatarwarrior: {
        type: "avatarwarrior",
        name: "⚔️ AVATAR GUERRIER",
        dance: "Danse de Combat",
        palmColors: { left: "#1e4a6b", right: "#8b5a2b" },
        finalOutfit: {
            description: "tenue de guerrier Na'vi",
            colors: ["bleu profond", "terre cuite", "or"],
            elements: ["peau bleue avec peintures de guerre", "corps athlétique", "oreilles pointues", "queue expressive"],
            accessories: ["arc géant", "carquois", "peintures faciales", "plumes", "bracelets en cuir"]
        },
        hairFluo: ["bleu", "rouge", "or"],
        background: "forêt de Pandora de nuit, créatures bioluminescentes",
        danceMoves: {
            part1: ["postures de combat", "mouvements de chasse"],
            part2: ["danse guerrière", "enchaînements avec l'arc"]
        }
    },
    
    avatarchief: {
        type: "avatarchief",
        name: "👑 AVATAR CHEF",
        dance: "Danse du Chef",
        palmColors: { left: "#2a6f8f", right: "#d4af37" },
        finalOutfit: {
            description: "tenue de chef Na'vi",
            colors: ["bleu royal", "or", "turquoise"],
            elements: ["peau bleue majestueuse", "posture fière", "oreilles pointues", "queue longue"],
            accessories: ["couronne de plumes", "cape en fibres", "peintures cérémonielles", "bâton de chef"]
        },
        hairFluo: ["bleu", "or", "turquoise"],
        background: "Arbre-Maison, rassemblement du clan, feux de camp",
        danceMoves: {
            part1: ["gestes autoritaires", "poses majestueuses"],
            part2: ["danse cérémonielle", "bénédiction du clan"]
        }
    },

    equilibriste: {
        type: "equilibriste",
        name: "🎪 Équilibriste",
        dance: "Danse d'équilibre",
        palmColors: { left: "#ff4500", right: "#ffd700" },
        finalOutfit: {
            description: "tenue d'équilibriste chic et sensuelle",
            colors: ["rouge velours", "noir", "argent"],
            elements: ["justaucorps pailleté", "bas résille", "chaussons de danse", "cape légère"],
            accessories: ["bandeau dans les cheveux", "bracelets scintillants", "poudre dorée sur la peau"]
        },
        hairFluo: ["rouge", "or", "argent"],
        background: "chapiteau de cirque intimiste, spot unique, public silencieux",
        danceMoves: {
            part1: ["pas lents et mesurés", "bras gracieux en balancier", "rotations du bassin"],
            part2: ["mouvements plus fluides", "déhanchés sensuels", "tours gracieux"]
        }
    },

    butterfly_fairy: {
        type: "fairy",
        name: "🦋 Fée des Papillons",
        dance: "Danse des Ailes",
        palmColors: { left: "#ff69b4", right: "#87ceeb" },
        finalOutfit: {
            description: "tenue de fée papillon",
            colors: ["rose", "bleu ciel", "violet"],
            elements: ["robe en pétales", "ailes de papillon géantes", "voiles irisés", "corset fleuri"],
            accessories: ["antennes lumineuses", "poudre magique", "fleurs volantes", "bijoux en cristal"]
        },
        hairFluo: ["rose", "bleu", "violet"],
        background: "jardin enchanté, fleurs géantes, papillons multicolores",
        danceMoves: {
            part1: ["battements d'ailes gracieux", "vols planés légers", "poses sur les fleurs"],
            part2: ["danse des papillons", "métamorphose colorée", "envol gracieux"]
        }
    },

    cabaret: {
        type: "default",
        name: "🎤 Chanteuse de Cabaret",
        dance: "Danse de Cabaret",
        palmColors: { left: "#ff69b4", right: "#000000" },
        finalOutfit: {
            description: "tenue de cabaret glamour",
            colors: ["rose", "noir", "argent"],
            elements: ["robe longue à franges", "bas résille", "gants longs", "chaussures à talons"],
            accessories: ["microphone", "chapeau claque", "boa en plumes", "gants en dentelle"]
        },
        hairFluo: ["rose", "argent", "noir"],
        background: "scène de cabaret parisien, projecteurs, rideaux rouges, piano",
        danceMoves: {
            part1: ["poses de chanteuse", "jeux avec le micro", "regards langoureux"],
            part2: ["danse endiablée", "lancer de chapeau", "final en apothéose"]
        }
    },

    supervillain: {
        type: "default",
        name: "🦹‍♀️ Super-Vilaine",
        dance: "Danse du Mal",
        palmColors: { left: "#8b0000", right: "#000000" },
        finalOutfit: {
            description: "tenue de super-vilaine chic",
            colors: ["rouge sang", "noir", "violet"],
            elements: ["combinaison en cuir moulante", "cape de velours noir", "bottes à talons aiguilles", "gants longs"],
            accessories: ["masque de méchante", "sceptre maléfique", "fouet décoratif", "trône sombre"]
        },
        hairFluo: ["noir", "rouge", "violet"],
        background: "repaire secret, éclairs, flammes, ville en contrebas",
        danceMoves: {
            part1: ["démarche arrogante", "poses dominatrices", "regards cruels"],
            part2: ["danse de la tentation", "jeux avec le fouet", "rire diabolique final"]
        }
    },

    geisha_tradi: {
        type: "geisha",
        name: "🎎 Geisha Traditionnelle",
        dance: "Danse Cérémoniale",
        palmColors: { left: "#ffffff", right: "#ff69b4" },
        finalOutfit: {
            description: "kimono traditionnel de geisha",
            colors: ["rouge", "blanc", "or"],
            elements: ["kimono en soie", "obi large", "manches longues", "chaussures traditionnelles"],
            accessories: ["épingles à cheveux en fleurs", "éventail pliant", "ombrelle", "maquillage blanc"]
        },
        hairFluo: ["noir", "rouge", "or"],
        background: "maison de thé japonaise, jardin zen, lanternes",
        danceMoves: {
            part1: ["gestes lents et précis", "pas glissés", "jeux d'éventail subtils"],
            part2: ["danse cérémoniale", "dévoilement de la nuque", "poses gracieuses"]
        }
    },

    clown: {
        type: "default",
        name: "🤡 Clowne",
        dance: "Danse Burlesque",
        palmColors: { left: "#ff0000", right: "#0000ff" },
        finalOutfit: {
            description: "tenue de clown chic et sensuelle",
            colors: ["rouge", "bleu", "jaune"],
            elements: ["justaucorps à pois", "froufrous", "col clowne", "bretelles"],
            accessories: ["nez rouge (optionnel)", "chapeau pointu", "gants blancs", "fleurs qui arrosent"]
        },
        hairFluo: ["rouge", "bleu", "vert"],
        background: "chapiteau de cirque coloré, projecteurs, public hilare",
        danceMoves: {
            part1: ["mouvements exagérés", "clins d'œil comiques", "poses burlesques"],
            part2: ["cascade de blagues visuelles", "jeux avec des accessoires", "final explosif"]
        }
    },

    chinese_tradi: {
        type: "default",
        name: "🏮 Danseuse Chinoise",
        dance: "Danse Traditionnelle",
        palmColors: { left: "#ff0000", right: "#ffd700" },
        finalOutfit: {
            description: "tenue traditionnelle chinoise",
            colors: ["rouge", "or", "vert"],
            elements: ["qipao moderne", "manches longues", "broderies de dragons", "ceinture en soie"],
            accessories: ["éventail rond", "épingles à cheveux", "ombrelle en papier", "bijoux en jade"]
        },
        hairFluo: ["noir", "rouge", "or"],
        background: "jardin chinois, pont rouge, lanternes, cerisiers en fleurs",
        danceMoves: {
            part1: ["gestes gracieux", "pas glissés", "jeux d'éventail"],
            part2: ["danse des dragons", "tours gracieux", "final en apothéose"]
        }
    },

    halloween_witch: {
        type: "witch",
        name: "🎃 Sorcière Halloween",
        dance: "Danse Ensorcelante",
        palmColors: { left: "#ff6b00", right: "#800080" },
        finalOutfit: {
            description: "tenue de sorcière festive et sexy pour Halloween",
            colors: ["orange citrouille", "violet mystique", "noir profond"],
            elements: ["robe courte en tulle noir", "corset en velours orange", "bas résille violet", "bottines à talons", "chapeau pointu", "cape courte"],
            accessories: ["balai magique", "citrouille lumineuse", "boucles d'oreilles chauve-souris", "collier citrouille", "baguette magique", "maquillage noir et orange"]
        },
        hairFluo: ["orange fluo", "violet fluo", "noir", "vert fluo"],
        background: "forêt hantée la nuit, citrouilles lumineuses, pleine lune, château hanté",
        danceMoves: {
            part1: ["mouvements mystérieux", "jeux avec la cape", "regards perçants", "caresses sur le balai"],
            part2: ["danse ensorcelante", "tours avec le chapeau", "jeux avec la citrouille", "final en confettis"]
        }
    },

    santa_muerte: {
        type: "default",
        name: "💀 Santa Muerte",
        dance: "Danse Sacrée",
        palmColors: { left: "#c0c0c0", right: "#000000" },
        finalOutfit: {
            description: "tenue de Santa Muerte, sainte de la mort",
            colors: ["argent métallique", "noir profond", "blanc spectral"],
            elements: ["robe longue fluide", "corset argenté", "voile de dentelle", "cape longue", "gants en dentelle"],
            accessories: ["maquillage de crâne", "couronne de fleurs", "faux squelettes", "roses noires", "encens", "bougies", "bijoux en argent"]
        },
        hairFluo: ["argent", "blanc", "noir", "violet sombre"],
        background: "autel mexicain la nuit, bougies allumées, fleurs de cempasúchil, crânes en sucre",
        danceMoves: {
            part1: ["mouvements lents et solennels", "bras levés en prière", "gestes de bénédiction", "marche majestueuse"],
            part2: ["danse rituelle", "tours avec la cape", "jeux avec les roses", "final en pose de bénédiction"]
        }
    },

    courtisane: {
        type: "default",
        name: "👑 Courtisane",
        dance: "Danse de Séduction",
        palmColors: { left: "#8b4513", right: "#d4af37" },
        finalOutfit: {
            description: "tenue de courtisane luxueuse et sensuelle",
            colors: ["velours pourpre", "or", "ivoire"],
            elements: ["robe longue en velours pourpre", "corset en soie ivoire", "jupons en dentelle", "manches transparentes", "décolleté vertigineux", "fente latérale"],
            accessories: ["éventail en dentelle", "collier de perles", "pendentif en or", "gants en résille", "broche antique", "chaussures en satin"]
        },
        hairFluo: ["brun", "auburn", "noir", "blond vénitien"],
        background: "boudoir luxueux du 18ème siècle, tentures de velours, bougies parfumées, miroirs dorés",
        danceMoves: {
            part1: ["démarche féline", "jeux avec l'éventail", "regards par-dessus l'épaule", "poses alanguies"],
            part2: ["danse de séduction", "jeux avec les voiles", "cambrures spectaculaires", "poses de tentatrice"]
        }
    },

    cleopatre: {
        type: "default",
        name: "👑 Cléopâtre",
        dance: "Danse du Nil",
        palmColors: { left: "#ffd700", right: "#0000ff" },
        finalOutfit: {
            description: "tenue de reine égyptienne Cléopâtre ultra-sexy et majestueuse",
            colors: ["or royal", "bleu nuit", "noir profond"],
            elements: ["corset en or", "jupe longue fendue", "cape transparente", "collier pectoral", "brasards en or", "sandales dorées"],
            accessories: ["couronne de Cléopâtre", "maquillage charbonneux", "bijoux en or", "bandeaux dans les cheveux", "sceptre royal", "éventail en plumes"]
        },
        hairFluo: ["or", "bleu électrique", "noir de jais"],
        background: "palais royal de Cléopâtre à Alexandrie, colonnes égyptiennes, vue sur le Nil",
        danceMoves: {
            part1: ["pas lents et majestueux", "ondulations de bras serpentines", "rotations de hanches", "jeux avec les voiles", "poses de statue égyptienne"],
            part2: ["mouvements royaux", "cambrures de reine", "jeux avec les bijoux", "danse avec le sceptre", "poses de déesse"]
        }
    },

    circus: {
        type: "circus",
        name: "🎪 Acrobate",
        dance: "Danse du Cirque",
        palmColors: { left: "#ff1493", right: "#ffd700" },
        finalOutfit: {
            description: "tenue d'acrobate de cirque",
            colors: ["rose fuchsia", "or", "rouge"],
            elements: ["justaucorps pailleté", "collants résille", "chaussons de danse", "cape légère"],
            accessories: ["cerceau aérien", "pompons", "maquillage de scène", "confettis"]
        },
        hairFluo: ["rose", "or", "rouge"],
        background: "chapiteau de cirque, projecteurs, trapèzes, public",
        danceMoves: {
            part1: ["mouvements acrobatiques", "poses de trapéziste"],
            part2: ["danse aérienne", "jeux avec le cerceau"]
        }
    }
};

// Vérification du nombre de personnages
console.log(`✅ countries.js chargé avec ${Object.keys(countries).length} personnages`);
