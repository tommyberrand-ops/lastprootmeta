// data/actions.js - Actions et décors par personnage
// CORRIGÉ - Exposition globale des fonctions

const personnageActions = {
    // ==================== PIRATE ====================
    pirate: {
        decors: [
            {
                nom: "🏴‍☠️ Pont du navire",
                description: "sur le pont d'un majestueux navire pirate, voiles gonflées par le vent, drapeau noir flottant, océan déchaîné autour, ambiance authentique de bateau"
            },
            {
                nom: "🍺 Taverne enfumée",
                description: "dans une taverne pirate enfumée, tonneaux de rhum, lanternes suspendues, marins qui rient en arrière-plan, ambiance chaleureuse et brute"
            },
            {
                nom: "🏝️ Île au trésor",
                description: "sur une île paradisiaque, palmiers, sable blanc, un coffre au trésor entrouvert rempli de pièces d'or, ambiance aventureuse"
            }
        ],
        actions: [
            {
                nom: "À la barre",
                description: "elle tient la barre du navire d'une main, une épée dans l'autre, dansant sensuellement au rythme des vagues"
            },
            {
                nom: "À la taverne",
                description: "accoudée au comptoir, elle boit une bière à la gourde tout en ondulant des hanches, un sourire coquin aux lèvres"
            },
            {
                nom: "Chercheuse de trésor",
                description: "agenouillée près du coffre, elle fait ruisseler des pièces d'or entre ses doigts, se relevant dans une danse de victoire"
            }
        ]
    },

    // ==================== SPACESHIP (VAISSEAU SPATIAL) ====================
    spaceship: {
        decors: [
            {
                nom: "🚀 Cockpit futuriste",
                description: "dans le cockpit high-tech d'un vaisseau spatial, lumières clignotantes, écrans holographiques, étoiles défiler par le hublot"
            },
            {
                nom: "🌌 Nébuleuse galactique",
                description: "flottant dans l'espace, une nébuleuse colorée en arrière-plan, planètes lointaines, aurores cosmiques"
            },
            {
                nom: "🪐 Base lunaire",
                description: "sur une base lunaire futuriste, dômes argentés, drapeaux, la Terre visible dans le ciel"
            }
        ],
        actions: [
            {
                nom: "Aux commandes",
                description: "assise sensuellement dans le siège du pilote, ses doigts glissent sur les commandes holographiques"
            },
            {
                nom: "En apesanteur",
                description: "flottant en apesanteur, elle tournoie gracieusement, ses cheveux flottant autour d'elle"
            },
            {
                nom: "Observation stellaire",
                description: "collée au hublot, elle regarde les étoiles, son corps épousant la courbe du vaisseau"
            }
        ]
    },

    // ==================== SUPERMAN / SUPER-HÉROS ====================
    superman: {
        decors: [
            {
                nom: "🏙️ Ville de nuit",
                description: "surplombant une ville illuminée la nuit, gratte-ciels, lumières urbaines, lune pleine"
            },
            {
                nom: "🏢 Toit d'immeuble",
                description: "debout au bord d'un toit d'immeuble, antennes paraboliques, vue imprenable sur la métropole"
            },
            {
                nom: "⚡ Bataille épique",
                description: "dans une zone de combat, éclairs, explosions au loin, fumée dramatique"
            }
        ],
        actions: [
            {
                nom: "En vol",
                description: "volant dans les airs, un poing en avant, l'autre main sur la hanche, cheveux au vent"
            },
            {
                nom: "Pose héroïque",
                description: "posant fièrement sur un gratte-ciel, cape flottante, mains sur les hanches, regard déterminé"
            },
            {
                nom: "Sauvetage sensuel",
                description: "tenant un (invisible) bébé dans ses bras, elle protège la ville tout en dansant"
            }
        ]
    },

    // ==================== TAPIS VOLANT ====================
    carpet: {
        decors: [
            {
                nom: "🏜️ Désert d'Arabie",
                description: "survolant un désert doré, dunes à perte de vue, soleil couchant orangé"
            },
            {
                nom: "🌃 Cité des mille et une nuits",
                description: "au-dessus d'une cité orientale la nuit, minarets, lumières chaudes, musique au loin"
            },
            {
                nom: "☁️ Dans les nuages",
                description: "parmi les nuages, ciel bleu éclatant, oiseaux exotiques volant à côté"
            }
        ],
        actions: [
            {
                nom: "Conduite sensuelle",
                description: "assise en tailleur sur le tapis, elle guide d'une main tout en ondulant du bassin"
            },
            {
                nom: "Allongée",
                description: "allongée sensuellement sur le tapis, une jambe relevée, elle caresse le tissu magique"
            },
            {
                nom: "Acrobatie aérienne",
                description: "debout sur le tapis, elle fait des figures acrobatiques, les bras en l'air"
            }
        ]
    },

    // ==================== MISSILE ====================
    missile: {
        decors: [
            {
                nom: "💥 Ciel de bataille",
                description: "traversant un ciel de bataille, avions de chasse, traînées de fumée, explosions"
            },
            {
                nom: "🌅 Coucher de soleil",
                description: "fendant le ciel au coucher du soleil, nuages roses et orange, lumière dorée"
            },
            {
                nom: "🏞️ Canyon",
                description: "rase-mottes dans un canyon rocheux, falaises abruptes, rivière en contrebas"
            }
        ],
        actions: [
            {
                nom: "Chevauchée sauvage",
                description: "à califourchon sur le missile, elle tient les ailerons, cheveux fouettés par le vent"
            },
            {
                nom: "Danse sur la bombe",
                description: "debout sur le missile, elle danse en équilibre, bras écartés comme sur un surf"
            },
            {
                nom: "Pose glamour",
                description: "allongée sur le missile, pose de mannequin, regard langoureux vers la caméra"
            }
        ]
    },

    // ==================== DRAGON ====================
    dragon: {
        decors: [
            {
                nom: "🏔️ Montagnes volcaniques",
                description: "survolant des montagnes volcaniques, lave en fusion, ciel de cendres"
            },
            {
                nom: "🌲 Forêt enchantée",
                description: "au-dessus d'une forêt magique, arbres géants, créatures mythiques en contrebas"
            },
            {
                nom: "🏰 Château médiéval",
                description: "tournant autour d'un château médiéval, tours, pont-levis, douves"
            }
        ],
        actions: [
            {
                nom: "Guide du dragon",
                description: "agenouillée sur le dos du dragon, elle guide la créature par ses écailles"
            },
            {
                nom: "Caresse sauvage",
                description: "allongée contre le cou du dragon, elle le caresse sensuellement tout en dansant"
            },
            {
                nom: "Acrobatie",
                description: "debout sur la tête du dragon, elle fait des figures pendant le vol"
            }
        ]
    },

    // ==================== SIRÈNE ====================
    siren: {
        decors: [
            {
                nom: "🌊 Fonds marins",
                description: "dans les profondeurs océaniques, récifs coralliens, poissons colorés, épaves englouties"
            },
            {
                nom: "🏝️ Lagune paradisiaque",
                description: "dans une lagune turquoise, eau cristalline, plage de sable blanc"
            },
            {
                nom: "🪸 Palais sous-marin",
                description: "dans un palais sous-marin, colonnes de corail, perles géantes, lumière filtrée"
            }
        ],
        actions: [
            {
                nom: "Nage sensuelle",
                description: "nageant gracieusement, sa queue de sirène ondulant, elle tournoie dans l'eau"
            },
            {
                nom: "Sur un rocher",
                description: "assise sur un rocher, elle se coiffe sensuellement, chantant pour les marins"
            },
            {
                nom: "Danse aquatique",
                description: "dansant sous l'eau, ses mouvements créant des bulles, jouant avec les poissons"
            }
        ]
    },

    // ==================== COWGIRL ====================
    cowgirl: {
        decors: [
            {
                nom: "🤠 Saloon",
                description: "dans un saloon enfumé, tables de poker, serveuses, musique country"
            },
            {
                nom: "🏜️ Désert",
                description: "au milieu du désert, cactus, rochers rouges, soleil de plomb"
            },
            {
                nom: "🐎 Ranch",
                description: "dans un ranch, écuries, chevaux, montagnes au loin"
            }
        ],
        actions: [
            {
                nom: "Au saloon",
                description: "accoudée au bar, elle boit un whisky tout en dansant, chapeau incliné"
            },
            {
                nom: "Lasso",
                description: "faisant tournoyer son lasso au-dessus d'elle, elle attire un cow-boy imaginaire"
            },
            {
                nom: "Sur son cheval",
                description: "à califourchon sur un cheval, elle danse au rythme du galop"
            }
        ]
    },

    // ==================== ZORRO SEXY ====================
    zorro: {
        decors: [
            {
                nom: "🏛️ Mission espagnole sensuelle",
                description: "devant une mission espagnole sous la lune, arches blanches, ambiance mystérieuse et sensuelle, lumière tamisée"
            },
            {
                nom: "🏘️ Toits du pueblo la nuit",
                description: "sur les toits du pueblo la nuit, tuiles rouges, clair de lune, ambiance romantique et dangereuse"
            },
            {
                nom: "🌵 Canyon solitaire au clair de lune",
                description: "dans un canyon rocheux au clair de lune, cactus, ombres allongées, silence sensuel"
            }
        ],
        actions: [
            {
                nom: "Signature Z sensuelle",
                description: "traçant un Z en l'air avec son épée, mouvements lents et sensuels, cape flottante, regard langoureux"
            },
            {
                nom: "Jeu de cape suggestif",
                description: "enroulant et déroulant sa cape sensuellement, cachant et révélant son corps, dévoilant ses jambes"
            },
            {
                nom: "Combat d'escrime érotique",
                description: "combat d'escrime chorégraphié sensuel, passes d'armes suggestives, corps à corps torride avec un partenaire imaginaire"
            }
        ]
    },
    
    // ==================== PRINCESSE ====================
    princess: {
        decors: [
            {
                nom: "🏰 Château",
                description: "dans la salle de bal d'un château, lustres en cristal, miroirs dorés"
            },
            {
                nom: "🌹 Jardin royal",
                description: "dans un jardin à la française, fontaines, haies taillées, roses"
            },
            {
                nom: "🛏️ Sa chambre",
                description: "dans sa chambre royale, baldaquin, tentures de velours, bougies"
            }
        ],
        actions: [
            {
                nom: "Valse",
                description: "valsant seule, sa robe tournoyant, main tendue vers un partenaire imaginaire"
            },
            {
                nom: "Sur son trône",
                description: "assise sensuellement sur son trône, une jambe relevée, sceptre à la main"
            },
            {
                nom: "Couronnement",
                description: "se couronnant elle-même, geste théâtral, sourire malicieux"
            }
        ]
    },

    // ==================== FEMME DES CAVERNES ====================
    cavewoman: {
        decors: [
            {
                nom: "🪨 Grotte préhistorique",
                description: "dans une grotte, peintures rupestres, feu de camp, fourrures au sol"
            },
            {
                nom: "🌋 Volcan",
                description: "au pied d'un volcan actif, coulées de lave, ciel rouge"
            },
            {
                nom: "🌿 Jungle primitive",
                description: "dans une jungle luxuriante, fougères géantes, animaux préhistoriques"
            }
        ],
        actions: [
            {
                nom: "Autour du feu",
                description: "dansant autour du feu de camp, ombres projetées sur les parois"
            },
            {
                nom: "Chasse",
                description: "bandeaux en cuir, elle tient une lance, prête à chasser, pose guerrière"
            },
            {
                nom: "Découverte du feu",
                description: "émerveillée par le feu, elle tend les mains vers les flammes en dansant"
            }
        ]
    },

    // ==================== ATHÉNA ====================
    athena: {
        decors: [
            {
                nom: "🏛️ Temple grec",
                description: "dans un temple grec, colonnes de marbre, statues de dieux, ciel bleu"
            },
            {
                nom: "⚔️ Champ de bataille",
                description: "sur un champ de bataille antique, guerriers, boucliers, oliviers"
            },
            {
                nom: "📜 Bibliothèque antique",
                description: "dans une bibliothèque antique, rouleaux de papyrus, lampes à huile"
            }
        ],
        actions: [
            {
                nom: "Sagesse",
                description: "lisant un parchemin tout en dansant, expression savante et sensuelle"
            },
            {
                nom: "Guerrière",
                description: "brandissant une lance, bouclier à l'autre bras, danse guerrière"
            },
            {
                nom: "Déesse",
                description: "posant majestueusement, drapés flottants, regard divin"
            }
        ]
    },

    // ==================== AVATAR ====================
    avatar: {
        decors: [
            {
                nom: "🌳 Forêt de Pandora",
                description: "dans la forêt luxuriante de Pandora, arbres géants bioluminescents, plantes qui brillent dans la nuit, couleurs violettes et bleues"
            },
            {
                nom: "🏔️ Montagnes flottantes",
                description: "sur les montagnes flottantes de Pandora (Hallelujah Mountains), cascades tombant dans le vide, vue sur les îles célestes"
            },
            {
                nom: "🦅 Sur un Ikran",
                description: "sur le dos d'un Ikran (oiseau géant), volant au-dessus de la forêt de Pandora, vent dans les cheveux, paysage époustouflant"
            }
        ],
        actions: [
            {
                nom: "Connexion",
                description: "connectée à la nature, elle touche les plantes bioluminescentes qui réagissent en s'illuminant"
            },
            {
                nom: "Chasseur",
                description: "en position de chasse, arc tendu, prête à bondir, regard perçant"
            },
            {
                nom: "Rituel",
                description: "dansant un rituel Na'vi, mouvements lents et majestueux, en harmonie avec la forêt"
            }
        ]
    },

    // ==================== AVATAR GUERRIER ====================
    avatarwarrior: {
        decors: [
            {
                nom: "🌋 Volcan de Pandora",
                description: "près d'un volcan actif de Pandora, lueurs rouges, roches sombres, atmosphère de combat"
            },
            {
                nom: "⚔️ Champ de bataille",
                description: "sur un champ de bataille contre les humains, destruction, feux, machines de guerre"
            },
            {
                nom: "🦅 En vol de combat",
                description: "sur son Ikran de guerre, piqué vers le sol, prête à attaquer"
            }
        ],
        actions: [
            {
                nom: "Combat",
                description: "en position de combat, lance prête, regard déterminé"
            },
            {
                nom: "Cri de guerre",
                description: "poussant un cri de guerre Na'vi, posture victorieuse"
            },
            {
                nom: "Domptage",
                description: "domptant un Ikran sauvage, mouvements puissants et gracieux"
            }
        ]
    },

    // ==================== AVATAR CHEF ====================
    avatarchief: {
        decors: [
            {
                nom: "🏠 Arbre-Maison",
                description: "dans l'Arbre-Maison du clan, structure géante, lumières organiques, ponts suspendus"
            },
            {
                nom: "🔥 Rassemblement",
                description: "lors d'un rassemblement du clan, feux de camp, danses rituelles, tambours"
            },
            {
                nom: "🌙 Nuit sacrée",
                description: "pendant une nuit sacrée, plantes lumineuses, cérémonie, ancêtres présents"
            }
        ],
        actions: [
            {
                nom: "Discours",
                description: "haranguant son clan, gestes majestueux, autorité naturelle"
            },
            {
                nom: "Bénédiction",
                description: "bénissant son peuple, mains levées vers le ciel, expression sage"
            },
            {
                nom: "Conseil",
                description: "en conseil avec les anciens, posture de leader, regard perçant"
            }
        ]
    },
    
    // ==================== NOËL / PÈRE NOËL ====================
    christmas: {
        decors: [
            {
                nom: "🎄 Atelier du Père Noël",
                description: "dans l'atelier du Père Noël, jouets partout, lutins qui travaillent, cadeaux emballés, ambiance magique de Noël"
            },
            {
                nom: "🛷 Traîneau dans le ciel",
                description: "sur le traîneau du Père Noël volant dans le ciel étoilé, rennes qui tirent, aurores boréales, ville illuminée en contrebas"
            },
            {
                nom: "🔥 Cheminée décorée",
                description: "devant une grande cheminée décorée de guirlandes, sapin de Noël illuminé, chaussettes suspendues, feu qui crépite"
            },
            {
                nom: "❄️ Paysage enneigé",
                description: "dans un paysage enneigé, sapins blancs, neige qui tombe, chalet traditionnel au loin, ambiance hivernale"
            }
        ],
        actions: [
            {
                nom: "Distribution de cadeaux",
                description: "elle distribue sensuellement des cadeaux autour d'elle, les offrant à la caméra avec un sourire coquin"
            },
            {
                nom: "Jeu avec le bonnet",
                description: "elle joue avec son bonnet de Père Noël, le mettant et l'enlevant de façon suggestive"
            },
            {
                nom: "Danse près du sapin",
                description: "elle danse sensuellement près du sapin décoré, jouant avec les guirlandes et les décorations"
            },
            {
                nom: "Dégustation de pain d'épices",
                description: "elle mord sensuellement dans un pain d'épices en forme de bonhomme, léchant ses doigts avec gourmandise"
            }
        ]
    },

    // ==================== SORCIÈRES ====================
    witch: {
        decors: [
            {
                nom: "🔮 Repaire de sorcière",
                description: "dans un repaire de sorcière, bougies, potions qui bouillonnent, livres de sorts anciens, ambiance mystique"
            },
            {
                nom: "🌕 Clairière enchantée",
                description: "dans une clairière au clair de lune, cercle de champignons, lucioles, brume légère, ambiance magique"
            },
            {
                nom: "🏚️ Cabane dans les bois",
                description: "dans une cabane isolée dans les bois, plantes séchées au plafond, chaudron, ambiance ensorcelante"
            }
        ],
        actions: [
            {
                nom: "Sortilège d'amour",
                description: "elle prépare une potion d'amour, gestes lents et sensuels, ingrédients qui brillent"
            },
            {
                nom: "Incantation",
                description: "elle récite une incantation, mains qui tracent des symboles dans l'air, énergie magique qui l'entoure"
            },
            {
                nom: "Danse des ombres",
                description: "elle danse avec les ombres projetées, silhouettes mouvantes, jeu de lumière sensuel"
            }
        ]
    },

    // ==================== MILITAIRE ====================
    military: {
        decors: [
            {
                nom: "🎖️ Base militaire",
                description: "dans une base militaire, véhicules tactiques, projecteurs, ambiance opérationnelle"
            },
            {
                nom: "🌃 Zone de combat urbain",
                description: "dans une zone de combat urbaine, bâtiments détruits, fumée, éclairs de tirs au loin"
            },
            {
                nom: "🚁 Héliport",
                description: "sur un héliport, hélicoptère en arrière-plan, vents puissants, ambiance d'intervention"
            }
        ],
        actions: [
            {
                nom: "Opération séduction",
                description: "en tenue tactique, elle effectue des mouvements de combat stylisés, arme factice sensuellement tenue"
            },
            {
                nom: "Planque",
                description: "cachée derrière un mur, elle guette, puis se révèle dans un mouvement sensuel"
            },
            {
                nom: "Danse commando",
                description: "chorégraphie inspirée des mouvements tactiques, roulades sensuelles, poses de tireur d'élite"
            }
        ]
    },

    // ==================== POMPIER ====================
    firefighter: {
        decors: [
            {
                nom: "🚒 Caserne de pompiers",
                description: "dans une caserne de pompiers, camion rouge, tenues accrochées, ambiance professionnelle"
            },
            {
                nom: "🔥 Incendie maîtrisé",
                description: "sur les lieux d'un incendie maîtrisé, fumée résiduelle, lueurs des flammes, ambiance héroïque"
            },
            {
                nom: "🧯 Poste de secours",
                description: "dans un poste de secours, matériel d'intervention, lumières d'urgence, ambiance de sauvetage"
            }
        ],
        actions: [
            {
                nom: "Sauvetage sensuel",
                description: "elle porte une victime imaginaire, gestes protecteurs et sensuels, regard déterminé"
            },
            {
                nom: "Danse de la lance",
                description: "elle manie la lance à incendie comme accessoire de danse, mouvements d'eau sensuels"
            },
            {
                nom: "Intervention",
                description: "elle enfile son équipement de façon sensuelle, casque, gants, gestes lents et précis"
            }
        ]
    },

    // ==================== POLICE ====================
    police: {
        decors: [
            {
                nom: "🚓 Commissariat",
                description: "dans un commissariat, cellules, bureaux, écrans de surveillance, ambiance d'autorité"
            },
            {
                nom: "🌃 Ruelle sombre",
                description: "dans une ruelle sombre, lampadaires, gyrophares au loin, ambiance dangereuse"
            },
            {
                nom: "🚔 Contrôle routier",
                description: "lors d'un contrôle routier de nuit, voiture de police, cônes, lumières bleues"
            }
        ],
        actions: [
            {
                nom: "Arrestation sensuelle",
                description: "elle passe les menottes à un suspect imaginaire, gestes lents et dominants"
            },
            {
                nom: "Danse d'autorité",
                description: "chorégraphie d'intervention, gestes autoritaires et sensuels, regard perçant"
            },
            {
                nom: "Planque",
                description: "cachée, elle observe, puis se révèle dans un mouvement de séduction"
            }
        ]
    },

    // ==================== ZOMBIE / APOCALYPSE ====================
    zombie: {
        decors: [
            {
                nom: "💀 Ville en ruines",
                description: "dans une ville post-apocalyptique, immeubles effondrés, voitures brûlées, végétation qui reprend ses droits"
            },
            {
                nom: "🔥 Camp de survivants",
                description: "dans un camp de survivants, feux de camp, barbelés, tentes de fortune, ambiance de survie"
            },
            {
                nom: "🧟 Zone infectée",
                description: "dans une zone contaminée, symboles biohazard, brume toxique, silence angoissant"
            }
        ],
        actions: [
            {
                nom: "Danse de survie",
                description: "mouvements de combat contre les infectés, chorégraphie guerrière et sensuelle"
            },
            {
                nom: "Rituel apocalyptique",
                description: "danse rituelle autour du feu, ombres dansantes, ambiance de fin du monde"
            },
            {
                nom: "Chasseuse",
                description: "elle traque une proie imaginaire, mouvements félins, arme à la main, regard déterminé"
            }
        ]
    },

    // ==================== CIRQUE ====================
    circus: {
        decors: [
            {
                nom: "🎪 Chapiteau",
                description: "sous un chapiteau de cirque, projecteurs colorés, piste aux étoiles, gradins avec public"
            },
            {
                nom: "🎭 Coulisses",
                description: "dans les coulisses du cirque, miroirs de maquillage, costumes suspendus, ambiance féerique"
            },
            {
                nom: "🤹 Scène de cirque",
                description: "sur la scène du cirque, cerceaux, ballons, accessoires de jonglage, ambiance festive"
            }
        ],
        actions: [
            {
                nom: "Trapéziste",
                description: "elle danse comme une trapéziste, mouvements aériens, grâce et souplesse"
            },
            {
                nom: "Jongleuse sensuelle",
                description: "elle jongle avec des balles lumineuses, mouvements circulaires des hanches en rythme"
            },
            {
                nom: "Dompteuse",
                description: "elle dompte une bête imaginaire, gestes d'autorité et de séduction, fouet sensuel"
            }
        ]
    },

    // ==================== VITILIGO / TACHES DE NAISSANCE ====================
    vitiligo: {
        decors: [
            {
                nom: "🎨 Studio d'art",
                description: "dans un studio d'art, toiles colorées, lumières tamisées, ambiance créative qui sublime la beauté naturelle"
            },
            {
                nom: "✨ Fond épuré",
                description: "devant un fond blanc épuré, éclairage doux qui met en valeur les taches de naissance"
            },
            {
                nom: "🖼️ Galerie d'art",
                description: "dans une galerie d'art, murs blancs, œuvres contemporaines, ambiance chic et éditoriale"
            }
        ],
        actions: [
            {
                nom: "Célébration de la peau",
                description: "elle caresse sensuellement sa peau, mettant en valeur ses taches de naissance avec fierté"
            },
            {
                nom: "Jeu de lumière",
                description: "elle joue avec les lumières qui révèlent et subliment les motifs naturels de sa peau"
            },
            {
                nom: "Pose éditoriale",
                description: "poses de mannequin qui mettent en avant l'unicité et la beauté de ses taches"
            }
        ]
    },

    // ==================== SPLIT-FACE / DUOCHROME ====================
    splitface: {
        decors: [
            {
                nom: "🎭 Studio split",
                description: "studio avec éclairage bicolore, rose à gauche, cyan à droite, séparation parfaite au milieu"
            },
            {
                nom: "🪞 Miroir infini",
                description: "dans une pièce de miroirs, reflets infinis, jeu de symétrie et de couleurs"
            },
            {
                nom: "🌈 Fond duochrome",
                description: "devant un fond abstrait aux couleurs contrastées, ambiance graphique et moderne"
            }
        ],
        actions: [
            {
                nom: "Symétrie parfaite",
                description: "mouvements parfaitement symétriques qui jouent avec la séparation des couleurs"
            },
            {
                nom: "Jeu de miroir",
                description: "elle danse face à un miroir, jouant avec son reflet et la dualité des couleurs"
            },
            {
                nom: "Métamorphose",
                description: "mouvements qui semblent faire passer les couleurs d'un côté à l'autre du visage"
            }
        ]
    },

    // ==================== DÉFAUT POUR TOUS LES AUTRES ====================
    default: {
        decors: [
            {
                nom: "Studio professionnel",
                description: "dans un studio de danse professionnel, éclairages tamisés, fond noir élégant, ambiance intimiste"
            },
            {
                nom: "Scène de spectacle",
                description: "sur une scène de spectacle, projecteurs colorés, fumée légère, public en ombres chinoises"
            },
            {
                nom: "Extérieur nuit",
                description: "en extérieur la nuit, étoiles dans le ciel, éclairage urbain au loin, ambiance mystérieuse"
            }
        ],
        actions: [
            {
                nom: "Danse sensuelle",
                description: "elle danse sensuellement face caméra, mouvements fluides et envoûtants"
            },
            {
                nom: "Pose charmeuse",
                description: "elle prend une pose charmeuse, regard langoureux, sourire coquin"
            },
            {
                nom: "Interaction",
                description: "elle interagit avec la caméra, gestes de séduction, mains qui caressent l'objectif"
            }
        ]
    }
};

// Fonction pour obtenir un décor aléatoire pour un personnage
function getRandomDecor(personnageKey) {
    try {
        const perso = personnageActions[personnageKey];
        if (!perso || !perso.decors || perso.decors.length === 0) {
            return personnageActions.default.decors[0].description;
        }
        const randomIndex = Math.floor(Math.random() * perso.decors.length);
        return perso.decors[randomIndex].description;
    } catch (e) {
        console.warn("Erreur getRandomDecor:", e);
        return "dans un studio de danse professionnel, éclairage tamisé";
    }
}

// Fonction pour obtenir une action aléatoire pour un personnage
function getRandomAction(personnageKey) {
    try {
        const perso = personnageActions[personnageKey];
        if (!perso || !perso.actions || perso.actions.length === 0) {
            return personnageActions.default.actions[0].description;
        }
        const randomIndex = Math.floor(Math.random() * perso.actions.length);
        return perso.actions[randomIndex].description;
    } catch (e) {
        console.warn("Erreur getRandomAction:", e);
        return "elle danse sensuellement face caméra";
    }
}

// EXPOSITION GLOBALE - CRUCIAL POUR script.js
if (typeof window !== 'undefined') {
    window.personnageActions = personnageActions;
    window.getRandomDecor = getRandomDecor;
    window.getRandomAction = getRandomAction;
    console.log("✅ actions.js chargé et exposé globalement -", Object.keys(personnageActions).length, "types disponibles");
}
