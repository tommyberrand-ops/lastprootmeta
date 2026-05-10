// data/selfieMode.js - MODE SELFIE
// La danseuse tient la caméra, le téléphone est invisible

if (typeof window.selfieModeData === 'undefined') {
    window.selfieModeData = {
        
        // Nom du mode
        name: "📱 Mode Selfie",
        description: "Elle tient son téléphone, la caméra est à bout de bras. Le téléphone reste invisible.",
        
        // Types de selfie
        types: {
            classique: {
                name: "🤳 Selfie Classique",
                description: "Visage cadré serré, elle parle à la caméra",
                camera: "Bras tendu, cadre visage"
            },
            corps: {
                name: "💃 Selfie Corps",
                description: "Elle montre son corps, le bras descend",
                camera: "Bras qui bouge, filme le corps"
            },
            macro: {
                name: "🔍 Selfie Macro",
                description: "Gros plan sur les yeux, la peau, les lèvres",
                camera: "Bras rapproché du visage"
            },
            environnement: {
                name: "🌍 Selfie Environnement",
                description: "Elle montre ce qui l'entoure",
                camera: "Bras pivote, montre le fond"
            }
        },
        
        // Mouvements de bras (caméra)
        mouvements: [
            "Bras tendu face à elle - cadre visage serré",
            "Bras pivote - montre derrière elle",
            "Bras recule - cadre élargi",
            "Bras se lève - montre le ciel",
            "Bras descend vers poitrine - montre son corps",
            "Bras ramène téléphone près du visage - macro",
            "Bras tourne - caméra pivote à 180°"
        ],
        
        // Ce qu'elle peut montrer
        contenu: [
            "son visage en gros plan",
            "son corps (ventre, seins, jambes)",
            "le fond derrière elle",
            "le ciel / décors",
            "son clone (mode miroir)",
            "un chiot / chaton dans ses bras",
            "ses transformations",
            "ses yeux en macro (pores, veines)"
        ],
        
        // Instructions pour la caméra
        camera: {
            regle: "LE TÉLÉPHONE N'EST JAMAIS VISIBLE. Seule sa main est visible.",
            mouvement: "Quand elle veut montrer quelque chose, SON BRAS BOUGE et la caméra suit.",
            format: "9:16 portrait (format selfie)",
            regard: "Elle fixe l'objectif (le spectateur) tout le temps."
        },
        
        // Instructions pour les lèvres (si elle parle)
        levres: {
            synchro: "Ses lèvres bougent en synchronisation parfaite avec ce qu'elle dit",
            visible: "On voit ses lèvres en gros plan quand la caméra se rapproche"
        }
    };
    
    console.log("✅ selfieMode.js chargé - Mode Selfie ajouté");
} else {
    console.log("⚠️ selfieModeData déjà existant, chargement ignoré");
}
