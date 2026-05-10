// script.js - Version ALLÉGÉE CORRIGÉE
// TENUE FINALE : Affichage complet des détails (couleurs, éléments, accessoires) pour TOUS les 73 personnages
// CORRECTION : La tenue finale s'affiche en texte riche et détaillé dans le prompt généré

console.log("🚀 Chargement de script.js (Version allégée - Correction tenue finale)...");

// Exposer les fonctions de actions.js
if (typeof personnageActions !== 'undefined' && !window.personnageActions) {
    window.personnageActions = personnageActions;
    window.getRandomDecor = getRandomDecor;
    window.getRandomAction = getRandomAction;
    console.log("✅ actions.js exposé globalement");
}

// ==================== DONNÉES DES DANSES SELFIE ====================
const selfieDances = {
    'sensuelle': {
        name: 'Danse Sensuelle',
        description: 'ondulations lentes, hanches, cambrures, regards intenses'
    },
    'sexy': {
        name: 'Danse Sexy',
        description: 'mouvements de bassin, jeu avec les épaules, clins d\'œil'
    },
    'charme': {
        name: 'Danse Charme',
        description: 'mouvements fluides, sourires en coin, regards complices'
    },
    'energetique': {
        name: 'Danse Énergétique',
        description: 'mouvements vifs, jeux avec le corps, dynamique'
    },
    'lente': {
        name: 'Danse Lente',
        description: 'mouvements très lents, sensuels, presque hypnotiques'
    },
    'naturelle': {
        name: 'Danse Naturelle',
        description: 'mouvements naturels, décontractés, authentiques'
    }
};

// ==================== CLASSE PRINCIPALE ====================
class PromptGenerator {
    constructor() {
        this.userData = {};
        this.typeMapping = {
            'default': 'pirate',
            'fairy': 'fairy',
            'vampire': 'vampire',
            'elf': 'elf',
            'superman': 'superman',
            'cowgirl': 'cowgirl',
            'pirate': 'pirate',
            'princess': 'princess',
            'siren': 'siren',
            'cavewoman': 'cavewoman',
            'athena': 'athena',
            'avatar': 'avatar',
            'avatarwarrior': 'avatarwarrior',
            'avatarchief': 'avatarchief'
        };
    }

    getActionType(personnageKey) {
        if (!countries || !countries[personnageKey]) return 'default';
        let type = countries[personnageKey].type || personnageKey;
        const actions = window.personnageActions || {};
        if (actions[type]) return type;
        if (this.typeMapping[type]) return this.typeMapping[type];
        return 'default';
    }

    getRandomDecor(personnageKey) {
        if (typeof window.getRandomDecor === 'function') return window.getRandomDecor(personnageKey);
        return "dans un studio de danse professionnel";
    }

    getRandomAction(personnageKey) {
        if (typeof window.getRandomAction === 'function') return window.getRandomAction(personnageKey);
        return "elle danse sensuellement face caméra";
    }

    // ===== DÉCOR UNIFIÉ =====
    getUnifiedDecor() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) return "studio professionnel";
        const countryKey = selected.dataset.country;
        const country = countries[countryKey];
        const customEnabled = document.getElementById('enableCustomDecor')?.checked || false;
        const customText = document.getElementById('customDecorText')?.value || '';
        if (customEnabled && customText.trim() !== '') return customText.trim();
        const actionType = this.getActionType(countryKey);
        const randomDecor = this.getRandomDecor(actionType);
        if (randomDecor && randomDecor !== "studio professionnel") return randomDecor;
        if (country && country.background) return country.background;
        return "dans un studio de danse professionnel avec éclairages tamisés";
    }

    // ===== FINALE SPECTACULAIRE =====
    getFinaleGesture() {
        const animalBabyModeEnabled = document.getElementById('enableAnimalBabyMode')?.checked || false;
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const animalNom = animalType === 'chiot' ? 'son chiot' : 'son chaton';
        
        if (animalBabyModeEnabled) {
            return `FINALE SPÉCIALE MODE CÂLIN (dernière seconde) :
À LA SECONDE 5 EXACTEMENT (dernière seconde de la vidéo) :
- Elle serre ${animalNom} TRÈS FORT contre elle dans un dernier CÂLIN intense
- Elle pose sa joue sur sa tête, FERME LES YEUX avec un sourire de pur bonheur
- Puis elle OUVRE LENTEMENT LES YEUX vers la CAMÉRA, regard SÉDUCTEUR et COMPLICE
- Elle lui fait un dernier BISOU TENDRE sur le front tout en fixant le spectateur
- Elle le PRÉSENTE fièrement à la caméra au niveau des seins
- Son expression alterne entre AMOUR pour l'animal et SENSUALITÉ pour le spectateur
- FREEZE sur cette image de BONHEUR PARTAGÉ entre elle, l'animal et le spectateur`;
        }
        
        const finaleType = document.getElementById('finaleType')?.value || 'bisou';
        switch(finaleType) {
            case 'bisou': return 'elle envoie un DERNIER BISOU LANGOUREUX à la caméra, ses doigts effleurant ses lèvres avant de s\'ouvrir lentement';
            case 'coeur': return 'elle forme un CŒUR AVEC SES MAINS au-dessus de sa tête';
            case 'clin': return 'elle fait un LONG CLIN D\'ŒIL APPUYÉ, presque un slow blink';
            case 'cascade': return 'elle envoie une CASCADE DE BISOUS du bout des doigts';
            case 'revelation': return 'elle ÉCARTE LES BRAS dans un geste théâtral de révélation';
            case 'viens': return 'elle fait un DERNIER GESTE "VIENS VERS MOI" avec l\'index';
            case 'freeze': return 'elle FIXE LA CAMÉRA INTENSÉMENT, son corps figé mais son regard vivant';
            case 'souffle': return 'elle ENVOIE UN SOUFFLE SENSUEL vers la caméra';
            case 'epaule': return 'elle DÉCOUVRE LENTEMENT SON ÉPAULE en faisant glisser le tissu';
            default: return 'elle envoie un dernier bisou du bout des doigts, suivit d\'un clin d\'œil complice';
        }
    }

    getFinalOption() {
        const option = document.getElementById('finalOption')?.value || 'freeze';
        const duree = document.getElementById('finalMaintien')?.value || '2';
        const emotion = document.getElementById('finalEmotion')?.value || 'satisfaite';
        const options = {
            'freeze': `l'image se fige sur CE MOMENT PRÉCIS, ses yeux continuant de vivre, un léger sourire ${emotion} aux lèvres, pendant ${duree} secondes`,
            'fondu': `un FONDU AU NOIR PROGRESSIF enveloppe l'image pendant ${duree} secondes`,
            'fonduBlanc': `un FONDU AU BLANC LUMINEUX l'illumine pendant ${duree} secondes`,
            'zoom': `un ZOOM LENT ET DOUX sur son visage pendant ${duree} secondes`,
            'flou': `un FLOU ARTISTIQUE PROGRESSIF pendant ${duree} secondes`
        };
        return options[option] || options['freeze'];
    }

    getPublicInteraction() {
        const interaction = document.getElementById('finalInteraction')?.value || 'regard';
        const interactions = {
            'regard': 'elle plonge son regard DROIT DANS LES YEUX DU SPECTATEUR',
            'sourire': 'elle offre un SOURIRE ÉCLATANT ET PERSONNEL',
            'clin': 'elle fait un CLIN D\'ŒIL COMPLICE',
            'main': 'elle TEND LA MAIN vers l\'écran',
            'tous': 'elle ALTERNATE REGARD, SOURIRE ET CLIN D\'ŒIL'
        };
        return interactions[interaction] || interactions['regard'];
    }

    // ===== SCRIPT DU PERSONNAGE =====
    generateScript() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        if (!scriptText) return '';
        const part1 = document.getElementById('scriptPart1')?.checked ? `En partie 1, elle dit: "${scriptText}"` : '';
        const part2 = document.getElementById('scriptPart2')?.checked ? `En partie 2, elle dit: "${scriptText}"` : '';
        const final = document.getElementById('scriptFinal')?.checked ? `À la fin, elle dit: "${scriptText}"` : '';
        const scripts = [part1, part2, final].filter(s => s).join(' ');
        return `\n\n🎤 SCRIPT DU PERSONNAGE :\n${scripts}`;
    }

    // ===== GÉNÉRATION DU DIALOGUE POUR PARTIE 2 =====
    generateDialogue() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        if (!scriptText) return '';
        const part2 = document.getElementById('scriptPart2')?.checked;
        const final = document.getElementById('scriptFinal')?.checked;
        let dialogueText = '';
        if (part2) dialogueText += `
🗣️ DIALOGUE - PARTIE 2 (SYNCHRONISATION LABIALE PARFAITE) :
Elle dit : "${scriptText}"
AVEC SYNCHRONISATION LABIALE PARFAITE - ses lèvres bougent en même temps que sa voix.
`;
        if (final) dialogueText += `
🗣️ DIALOGUE - FINALE (SYNCHRONISATION LABIALE PARFAITE) :
Elle dit : "${scriptText}"
`;
        return dialogueText;
    }

    // ===== GÉNÉRATION DU DIALOGUE POUR PARTIE 1 (selfie uniquement) =====
    generateSelfieDialogue() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const scriptText = document.getElementById('scriptText')?.value;
        const scriptPart1 = document.getElementById('scriptPart1')?.checked;
        if (!scriptText || !scriptPart1) return '';
        return ` "${scriptText}"`;
    }

    // ===== TEXTES MAGIQUES FLOTTANTS =====
    generateFloatingWords(partie) {
        if (!document.getElementById('enableMagicTexts')?.checked) return '';
        const words = [];
        if (document.getElementById('textFollow')?.checked) words.push('"Follow Me"');
        if (document.getElementById('textLike')?.checked) words.push('"Like Me"');
        if (document.getElementById('textLuna')?.checked) words.push('"@luna_wells"');
        if (document.getElementById('textSubscribe')?.checked) words.push('"Subscribe"');
        if (document.getElementById('textLove')?.checked) words.push('"Love Me"');
        if (document.getElementById('textWatch')?.checked) words.push('"Watch Me"');
        if (document.getElementById('textHeart')?.checked) words.push('❤️ (cœurs)');
        if (document.getElementById('textStar')?.checked) words.push('✨ (étoiles)');
        const customText = document.getElementById('customText')?.value;
        if (customText) words.push(`"${customText}"`);
        if (words.length === 0) return '';
        
        const effect = document.getElementById('textEffect')?.value || 'neon';
        const movement = document.getElementById('textMovement')?.value || 'float';
        const color = document.getElementById('textColor')?.value || '#ff6b6b';
        const color2 = document.getElementById('textColor2')?.value || '#4ecdc4';
        const size = document.getElementById('textSize')?.value || 'medium';
        const quantity = document.getElementById('textQuantity')?.value || 'medium';
        const position = document.getElementById('textPosition')?.value || 'around';
        const sizeText = { small: 'petits', medium: 'moyens', large: 'grands', xlarge: 'très grands' }[size] || 'moyens';
        const quantityText = { few: '3-4', medium: '5-7', many: '8-10' }[quantity] || '5-7';
        const specialEffects = [];
        if (document.getElementById('effectSparkle')?.checked) specialEffects.push('scintillement');
        if (document.getElementById('effectPulse')?.checked) specialEffects.push('pulsation');
        if (document.getElementById('effectFade')?.checked) specialEffects.push('apparition/disparition progressive');
        if (document.getElementById('effectTrail')?.checked) specialEffects.push('traînée lumineuse');
        if (document.getElementById('effectShadow')?.checked) specialEffects.push('ombre portée');
        if (document.getElementById('effect3d')?.checked) specialEffects.push('effet 3D');
        const timing = document.getElementById('textTiming')?.value || 'whole';
        if (timing === 'part2' && partie === 'part1') return '';
        if (timing === 'transition' && partie !== 'part2') return '';
        
        return `
✨ EFFETS TEXTES MAGIQUES ${partie === 'part1' ? 'PENDANT LA PREMIÈRE PARTIE' : 'PENDANT LA DEUXIÈME PARTIE'} ✨
- Des textes ${words.join(', ')} apparaissent et flottent dans l'air autour d'elle
- Style d'affichage : ${effect}
- Mouvement : ${movement}
- Couleurs : ${color} (principal) et ${color2} (secondaire)
- Taille : ${sizeText}
- Quantité : ${quantityText} textes
- Position : ${position}
- Effets supplémentaires : ${specialEffects.join(', ')}`;
    }

    // ===== MODE ALIEN =====
    generateAlienTransformations() {
        if (!document.getElementById('enableAlienMode')?.checked) return '';
        let alienText = '\n\n👽 TRANSFORMATIONS EXTRA-TERRESTRES (DÉJÀ ACCOMPLIES) :\n';
        let hasFeatures = false;
        if (document.getElementById('alienSkin')?.checked) {
            const color = document.getElementById('alienSkinColor')?.value || 'argent';
            alienText += `- Peau transformée : texture ${color} irisée, effet métal liquide (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienEyes')?.checked) {
            const color = document.getElementById('alienEyesColor')?.value || 'rouge';
            alienText += `- Yeux : devenus lumineux, couleur ${color} (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienAntenna')?.checked) {
            const style = document.getElementById('antennaStyle')?.value || 'antennes';
            const styleText = { 'antennes': 'Antennes fines', 'cornes': 'Cornes stylisées', 'couronne': 'Couronne lumineuse', 'halo': 'Halo de lumière', 'tentacules': 'Tentacules' }[style] || 'Antennes';
            alienText += `- ${styleText} sur la tête (DÉJÀ PRÉSENTES)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienGlow')?.checked) {
            const color = document.getElementById('glowColor')?.value || 'bleu';
            alienText += `- Corps phosphorescent : lueur ${color} (DÉJÀ VISIBLE)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienTattoos')?.checked) {
            const style = document.getElementById('tattooStyle')?.value || 'symboles';
            alienText += `- Tatouages lumineux : motifs ${style} (DÉJÀ PRÉSENTS)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienHolograms')?.checked) {
            const type = document.getElementById('hologramType')?.value || 'etoiles';
            const typeText = { 'etoiles': 'étoiles filantes', 'planetes': 'planètes miniatures', 'symboles': 'symboles mystiques', 'energie': 'sphères d\'énergie', 'animaux': 'créatures holographiques' }[type] || 'hologrammes';
            alienText += `- Hologrammes flottants : des ${typeText} (DÉJÀ PRÉSENTS)\n`;
            hasFeatures = true;
        }
        if (document.getElementById('alienVoice')?.checked) alienText += `- Voix modulée\n`;
        if (document.getElementById('alienGravity')?.checked) alienText += `- Effet apesanteur\n`;
        if (document.getElementById('alienTeleportation')?.checked) alienText += `- Effet téléportation\n`;
        return hasFeatures ? alienText : '';
    }

    // ===== MODE AVATAR =====
    generateAvatarTransformations() {
        if (!document.getElementById('enableAvatarMode')?.checked) return '';
        let avatarText = '\n\n🔵 TRANSFORMATIONS AVATAR (NA\'VI) - DÉJÀ ACCOMPLIES :\n';
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;
        if (keepFace) avatarText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence. Seul le corps est transformé en Na'vi.\n`;
        if (document.getElementById('avatarFullBody')?.checked) {
            const skinTone = document.getElementById('avatarSkinTone')?.value || 'bleu nuit';
            avatarText += `- Corps Na'vi complet : peau ${skinTone}\n`;
        }
        if (document.getElementById('avatarEars')?.checked) avatarText += `- Oreilles pointues\n`;
        if (document.getElementById('avatarTail')?.checked) {
            const tailStyle = document.getElementById('avatarTailStyle')?.value || 'fine';
            avatarText += `- Queue ${tailStyle} et expressive\n`;
        }
        if (document.getElementById('avatarStripes')?.checked) {
            const stripeStyle = document.getElementById('avatarStripesStyle')?.value || 'fines';
            const stripeColor = document.getElementById('avatarStripesColor')?.value || 'blanc';
            avatarText += `- Rayures lumineuses ${stripeStyle} de couleur ${stripeColor}\n`;
        }
        if (document.getElementById('avatarBioluminescence')?.checked) avatarText += `- Points bioluminescents\n`;
        if (document.getElementById('avatarTattoos')?.checked) avatarText += `- Peintures tribales Na'vi\n`;
        return avatarText;
    }

    // ===== MODE ANIMAL =====
    generateAnimalTransformations() {
        if (typeof window.animalData === 'undefined') return '';
        if (!document.getElementById('enableAnimalMode')?.checked) return '';
        const type = document.getElementById('animalType')?.value || 'chatte';
        const color = document.getElementById('animalColor')?.value || '';
        const keepFace = document.getElementById('animalKeepFace')?.checked || false;
        const ears = document.getElementById('animalEars')?.checked || false;
        const tail = document.getElementById('animalTail')?.checked || false;
        const fur = document.getElementById('animalFur')?.checked || false;
        const eyes = document.getElementById('animalEyes')?.checked || false;
        const claws = document.getElementById('animalClaws')?.checked || false;
        const animal = window.animalData?.[type];
        if (!animal) return '';
        let animalText = '\n\n🐾 TRANSFORMATION ANIMALE - DÉJÀ ACCOMPLIE :\n';
        if (keepFace) animalText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence\n`;
        else animalText += `- Transformation COMPLÈTE en ${animal.name}\n`;
        if (ears) animalText += `- ${animal.traits.oreilles}\n`;
        if (tail) animalText += `- ${animal.traits.queue}\n`;
        if (fur) animalText += `- ${animal.traits.fourrure || 'Fourrure texturée'}\n`;
        if (eyes) animalText += `- ${animal.traits.yeux}\n`;
        if (claws) animalText += `- ${animal.traits.griffes || 'Griffes'}\n`;
        if (color) animalText += `- Robe/couleur : ${color}\n`;
        return animalText;
    }

    // ===== MODE BÉBÉ ANIMAL CÂLIN =====
    generateAnimalBabyMode() {
        if (!document.getElementById('enableAnimalBabyMode')?.checked) return '';
        const animalType = document.getElementById('animalBabyType')?.value || 'chiot';
        const intensity = document.getElementById('animalBabyIntensity')?.value || 'tendre';
        const positions = document.getElementById('animalBabyPositions')?.value || 'variees';
        const animal = window.animalBabyData?.types[animalType] || window.animalBabyData?.types.chiot;
        
        let babyText = '\n\n🐶 MODE BÉBÉ ANIMAL CÂLIN - INTERACTION ULTRA-RÉALISTE 🐱\n';
        babyText += `\n👶 ANIMAL PRÉSENT : ${animal ? animal.name : (animalType === 'chiot' ? '🐶 Chiot' : '🐱 Chaton')}\n`;
        babyText += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 INSTRUCTION PRIORITAIRE - INTÉGRATION DE L'IMAGE ANIMALE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- L'image du bébé animal est INTÉGRÉE PHYSIQUEMENT dans la scène
- Elle le tient DANS SES MAINS, contre son corps
- L'animal est RÉEL : volume, poids, textures

🖼️ PLAN CADRAGE : PLAN MOYEN RAPPROCHÉ
- L'animal est tenu DROIT DEVANT ELLE, au niveau des seins
- VISIBLE FACE CAMÉRA : elle et l'animal regardent le spectateur

💞 INTERACTIONS :
- Câlins, bisous sur le front, gratouilles
- Alternance regards TENDRES (animal) / SÉDUCTEURS (caméra)

🐾 COMPORTEMENT DE L'ANIMAL :
${animalType === 'chiot' ? 
  `- remue la queue frénétiquement
- lèche son visage avec sa petite langue
- se blottit contre sa poitrine` : 
  `- ronronne fort contre elle
- frotte sa tête contre son cou
- se love dans le creux de ses bras`}

⏱️ CHRONOLOGIE (6 secondes) :
- 0-1s : Révélation - elle tient DÉJÀ l'animal
- 1-2s : Présentation face caméra
- 2-3s : Câlins, joue contre sa tête
- 3-4s : Danse DOUCE avec lui
- 4-5s : Bisous et jeux
- 5-6s : FINALE - dernier câlin, regard caméra, FREEZE

${intensity === 'tendre' ? '🎯 INTENSITÉ : TENDRE' : intensity === 'joueur' ? '🎯 INTENSITÉ : JOUEUR' : '🎯 INTENSITÉ : MIXTE'}
${positions === 'variees' ? '📍 POSITIONS : VARIÉES' : positions === 'fixe' ? '📍 POSITIONS : FIXE' : '📍 POSITIONS : DYNAMIQUES'}
`;
        return babyText;
    }

    // ===== MODE MIROIR =====
    generateMirrorMode() {
        if (!document.getElementById('enableMirrorMode')?.checked) return '';
        const mirrorType = document.getElementById('mirrorType')?.value || 'classique';
        const duoStyle = document.getElementById('mirrorDuoStyle')?.value || 'synchronise';
        const poseFinale = document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote';
        const mirrorData = window.mirrorModeData || {};
        const type = mirrorData.types?.[mirrorType] || { name: "Clone identique", description: "" };
        const duo = mirrorData.duo_styles?.[duoStyle] || { name: "Synchronisé", description: "" };
        
        let mirrorText = '\n\n🪞 MODE MIROIR - DOUBLE SENSUEL 🪞\n';
        mirrorText += `\n🎭 TYPE DE CLONE : ${type.name}\n`;
        
        if (mirrorData.regle_absolue) {
            mirrorText += `
🚫 RÈGLE ABSOLUE - AUCUN BAISER ENTRE LES CLONES 🚫
${mirrorData.regle_absolue.consigne}
✅ CONTACTS AUTORISÉS : ${mirrorData.regle_absolue.contacts_autorises.join(', ')}
`;
        }
        
        mirrorText += `
✨ PARTIE 2 - LE DUO FACE CAMÉRA (6 secondes) :

SECONDE 0-1 : Les DEUX femmes côte à côte, FACE CAMÉRA
SECONDE 1-2 : PRÉSENTATION - se regardent, sourient, se prennent la main
SECONDE 2-4 : DANSE À DEUX - style ${duo.name}
SECONDE 4-5 : MONTÉE DE TENSION - se rapprochent
SECONDE 5-6 : FINALE - ${poseFinale === 'cote_a_cote' ? 'côte à côte, main dans la main' : 'pose choisie'}

💡 RAPPELS : Les DEUX femmes sont IDENTIQUES, transition pendant le flash blanc
`;
        return mirrorText;
    }

    // ===== MODES FANTASTIQUES =====
    generateFantasyTransformations() {
        if (typeof window.generateFantasyTransformations === 'function') {
            return window.generateFantasyTransformations();
        }
        return '';
    }

    // ===== OPTIONS SPÉCIALES =====
    generateSpecialFeatures() {
        let specialText = '';
        let hasFeatures = false;
        if (document.getElementById('enable-eyes')?.checked) {
            const eyeLeft = document.getElementById('eye-left-select')?.value || 'bleu';
            const eyeRight = document.getElementById('eye-right-select')?.value || 'marron';
            specialText += `\n👁️ YEUX ULTRA-RÉALISTES 8K (HÉTÉROCHROMIE) :\n- Œil GAUCHE : ${eyeLeft}\n- Œil DROIT : ${eyeRight}\n- Vaisseaux sanguins visibles, reflets multiples, film lacrymal\n`;
            hasFeatures = true;
        }
        if (document.getElementById('enable-skin')?.checked) {
            const skinColor = document.getElementById('skin-color-select')?.value || 'blanc';
            specialText += `\n🎨 TACHES DE NAISSANCE / VITILIGO :\n- ${skinColor} skin patches\n- Contours naturels, texture de peau préservée\n`;
            hasFeatures = true;
        }
        return hasFeatures ? specialText : '';
    }

    // ===== EFFETS SPÉCIAUX (UNIQUEMENT CEUX-CI) =====
    generateAdvancedEffects() {
        const effects = [];
        if (document.getElementById('effectFeu')?.checked) effects.push('flammes');
        if (document.getElementById('effectEau')?.checked) effects.push('vagues');
        if (document.getElementById('effectGlace')?.checked) effects.push('cristaux de glace');
        if (document.getElementById('effectEclairs')?.checked) effects.push('éclairs');
        if (document.getElementById('effectPapillons')?.checked) effects.push('papillons');
        if (document.getElementById('effectPlumes')?.checked) effects.push('plumes');
        if (document.getElementById('effectLaser')?.checked) effects.push('lasers');
        if (document.getElementById('effectBulles')?.checked) effects.push('bulles');
        if (effects.length === 0) return '';
        const surpriseLevel = document.getElementById('surpriseLevel')?.value || 7;
        const surpriseText = surpriseLevel <= 3 ? 'surprise subtile' : surpriseLevel <= 6 ? 'effet wow' : surpriseLevel <= 8 ? 'explosion visuelle' : 'EXPÉRIENCE HALLUCINANTE';
        return `\nEFFETS SPECTACULAIRES (${surpriseText}) : ${effects.join(', ')}.`;
    }

    // ===== MODE SELFIE - VERSION AMÉLIORÉE AVEC BOUCHAGE OBJECTIF =====
    generateSelfieMode() {
        if (!document.getElementById('enableSelfieMode')?.checked) return '';
        
        const dialoguePart = this.generateSelfieDialogue();
        const danceStyle = document.getElementById('selfieDanceStyle')?.value || 'sensuelle';
        const danceDesc = selfieDances[danceStyle]?.description || 'ondulations sensuelles';

        return `c'est un selfie son bras reste tendue${dialoguePart ? ` elle dit${dialoguePart}` : ''} en dansant (${danceDesc}).

🎬 INSTRUCTION SPÉCIALE - FINALE SELFIE (dernière seconde) :
À LA SECONDE 5 EXACTEMENT :
- Elle rapproche son visage TRÈS LENTEMENT de l'objectif
- Ses lèvres s'approchent jusqu'à TOUCHER l'objectif
- Les lèvres viennent COLLER à l'objectif
- ON VOIT LES DÉTAILS ULTRA-MACRO DES LÈVRES : ridules, brillant, humidité, texture de la peau
- Les lèvres BOUCHENT COMPLÈTEMENT L'OBJECTIF (plus aucune image visible)
- L'écran devient NOIR (pas de flash)
- FIN DE LA PARTIE 1

IMPORTANT - TRANSITION VERS LA PARTIE 2 :
- Pendant cet écran noir, elle pose son téléphone
- La PARTIE 2 commencera avec un angle de caméra FIXE (téléphone posé)
- Ses deux mains sont LIBRES pour danser`;
    }

    // ===== COLLECTE DES DONNÉES =====
    collectUserData() {
        const selectedCard = document.querySelector('.character-card.selected');
        const countryKey = selectedCard ? selectedCard.dataset.country : 'spain';
        
        this.userData = {
            country: countryKey,
            naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
            enableFluo: document.getElementById('enableFluo')?.checked || false,
            fluoColor: document.getElementById('fluoColor')?.value || 'rose fluo',
            fluoIntensity: document.getElementById('fluoIntensity')?.value || 9,
            hairStyle: document.getElementById('hairStyle')?.value || 'détachés',
            seductionLevel: document.getElementById('seductionLevel')?.value || 9,
            gestures: {
                regards: document.getElementById('gesteRegards')?.checked || false,
                sourires: document.getElementById('gesteSourires')?.checked || false,
                clins: document.getElementById('gesteClins')?.checked || false,
                levres: document.getElementById('gesteLevres')?.checked || false,
                bisous: document.getElementById('gesteBisous')?.checked || false,
                bisousCount: document.getElementById('bisousCount')?.value || 3,
                viens: document.getElementById('gesteViens')?.checked || false,
                viensCount: document.getElementById('viensCount')?.value || 4,
                mains: document.getElementById('gesteMains')?.checked || false,
                cheveux: document.getElementById('gesteCheveux')?.checked || false
            },
            customDecor: {
                enabled: document.getElementById('enableCustomDecor')?.checked || false,
                text: document.getElementById('customDecorText')?.value || ''
            },
            finale: {
                type: document.getElementById('finaleType')?.value || 'bisou',
                option: document.getElementById('finalOption')?.value || 'freeze',
                maintien: document.getElementById('finalMaintien')?.value || '2',
                emotion: document.getElementById('finalEmotion')?.value || 'satisfaite',
                interaction: document.getElementById('finalInteraction')?.value || 'regard'
            },
            animalBabyMode: {
                enabled: document.getElementById('enableAnimalBabyMode')?.checked || false,
                type: document.getElementById('animalBabyType')?.value || 'chiot',
                intensity: document.getElementById('animalBabyIntensity')?.value || 'tendre',
                positions: document.getElementById('animalBabyPositions')?.value || 'variees'
            },
            mirrorMode: {
                enabled: document.getElementById('enableMirrorMode')?.checked || false,
                type: document.getElementById('mirrorType')?.value || 'classique',
                transition: document.getElementById('mirrorTransition')?.value || 'main_tendue',
                duoStyle: document.getElementById('mirrorDuoStyle')?.value || 'synchronise',
                poseFinale: document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote'
            },
            selfieMode: {
                enabled: document.getElementById('enableSelfieMode')?.checked || false
            },
            selfieDance: document.getElementById('selfieDanceStyle')?.value || 'sensuelle',
            rapperStyle: document.getElementById('rapperStyle')?.value || 'tenue1',
            rapperluxeStyle: document.getElementById('rapperluxeStyle')?.value || 'tenue1'
        };
    }

    getSeductionPhrase(level) {
        if (level <= 3) return 'subtile, charmeuse légère';
        if (level <= 6) return 'charmeuse, coquine';
        return 'ultra-séductrice, magnétique, explosive';
    }

    // ===== PARTIE 1 =====
    generatePart1() {
        const isSelfie = this.userData.selfieMode.enabled;
        const isMirror = this.userData.mirrorMode.enabled;
        
        // SI MODE SELFIE ACTIVÉ - FORMAT SIMPLE
        if (isSelfie) {
            return this.generateSelfieMode();
        }
        
        // MODE NORMAL (sans selfie)
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        
        // ===== ANNULATION DES GESTES MAINS EN MODE MIROIR =====
        let gesturesText = '';
        if (isMirror) {
            gesturesText = `
⚠️ MODE MIROIR - RÈGLE ABSOLUE :
- PAS DE GESTES DE SÉDUCTION AVEC LES MAINS
- Pas de caresses, pas de bisous envoyés, pas de geste "viens"
- La sensualité vient des regards, des sourires, des mouvements de corps
- Les mains servent uniquement à danser et à interagir avec le clone (main dans la main, taille, épaules)
`;
        } else {
            if (this.userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
            if (this.userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
            if (this.userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches)\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
            if (this.userData.gestures.bisous) {
                gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${this.userData.gestures.bisousCount} fois)\n`;
            }
            if (this.userData.gestures.viens) {
                gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${this.userData.gestures.viensCount} fois)\n`;
            }
        }

        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part1) ? 
            danceMoves[this.userData.country].part1.join('\n    - ') : 'mouvements sensuels';

        const floatingTexts = this.generateFloatingWords('part1');

        let part1Text = `Une transition de danse synchronisée à haute énergie en 4k, basée sur l'image fournie - PREMIÈRE PARTIE de 6 secondes.

LE SUJET :
- Femme magnifique, totalement silencieuse - elle ne parle pas, elle danse uniquement
- Visage parfaitement identique à l'image de référence - traits reconnaissables, conservés avec précision

Expression ${seductionPhrase} : elle joue avec le spectateur, le captive, le séduit
Regards complices et coquins

CHEVEUX dans leur couleur naturelle : ${this.userData.naturalHair}

DANSE AVANT TRANSFORMATION - MOUVEMENTS PRÉCIS :
La personne exécute une danse ${country.dance} sensuelle et ${seductionPhrase} :
    - ${danceMovesText}

GESTES DE SÉDUCTION :
${gesturesText}

JEUX DE REGARDS :
- Elle fixe la caméra droit dans les yeux
- Elle bat des cils lentement
- Elle suit les mouvements du spectateur
- Elle regarde de bas en haut sensuellement

${floatingTexts}

TRANSITION STANDARD :
Au moment le plus intense de sa danse, elle rapproche ses mains de l'objectif dans un geste théâtral et sensuel, les plaquant contre la caméra pour masquer entièrement l'image, cachant complètement la vue pendant la fin de cette première partie.

IMPORTANT - PRÉPARATION POUR LA PARTIE 2 :
- Pendant que les mains cachent l'objectif, elle se change COMPLÈTEMENT
- La PARTIE 2 commencera avec le résultat FINAL déjà visible`;

        return part1Text;
    }

    // ===== PARTIE 2 (CORRIGÉE : TENUE FINALE DÉTAILLÉE POUR TOUS) =====
    generatePart2() {
        const country = countries[this.userData.country];
        const seductionPhrase = this.getSeductionPhrase(this.userData.seductionLevel);
        const fluoIntensityText = this.userData.fluoIntensity >= 8 ? 'éclatant, quasi phosphorescent' :
                                 this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';
        
        const isSelfie = this.userData.selfieMode.enabled;
        const isMirror = this.userData.mirrorMode.enabled;
        
        // ===== ANNULATION DES GESTES MAINS EN MODE SELFIE ET MIROIR =====
        let gesturesText = '';
        if (isSelfie) {
            gesturesText = `
⚠️ MODE SELFIE (PARTIE 2) :
- Le téléphone a été POSÉ pendant le flash noir
- L'OBJECTIF EST MAINTENANT FIXE (angle de vue constant)
- Ses DEUX MAINS sont maintenant LIBRES
- Elle peut utiliser ses DEUX MAINS pour danser et faire les gestes

✅ GESTES AVEC LES DEUX MAINS LIBRES :
`;
            if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés\n';
            if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
            if (this.userData.gestures.mains) gesturesText += '- Ses deux mains caressent son corps (cou, épaules, seins, hanches)\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
            if (this.userData.gestures.bisous) gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers\n`;
            if (this.userData.gestures.viens) gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois\n`;
        } else if (isMirror) {
            gesturesText = `
⚠️ MODE MIROIR - RÈGLE ABSOLUE :
- PAS DE GESTES DE SÉDUCTION AVEC LES MAINS
- Pas de caresses, pas de bisous envoyés, pas de geste "viens"
- La sensualité vient des regards, des sourires, des mouvements de corps
- Les mains servent uniquement à danser et à interagir avec le clone (main dans la main, taille, épaules)
`;
        } else {
            if (this.userData.gestures.regards) gesturesText += '- Regards encore plus intenses, magnétiques\n';
            if (this.userData.gestures.sourires) gesturesText += '- Sourires encore plus charmeurs\n';
            if (this.userData.gestures.clins) gesturesText += '- Clins d\'œil appuyés\n';
            if (this.userData.gestures.levres) gesturesText += '- Mordillement de la lèvre plus prononcé\n';
            if (this.userData.gestures.mains) gesturesText += '- Caresses plus appuyées sur tout le corps\n';
            if (this.userData.gestures.cheveux) gesturesText += '- Jeux accentués avec ses cheveux fluo\n';
            if (this.userData.gestures.bisous) gesturesText += `- Elle envoie ${this.userData.gestures.bisousCount} baisers\n`;
            if (this.userData.gestures.viens) gesturesText += `- Elle fait le geste "viens" ${this.userData.gestures.viensCount} fois\n`;
        }

        const animalBabyDanceInstructions = this.userData.animalBabyMode.enabled ? 
            `- Danse ADAPTÉE : mouvements PLUS DOUX, PLUS LENTS pour ne pas brusquer l'animal\n` : '';
        const danceMovesText = (danceMoves && danceMoves[this.userData.country]?.part2) ? 
            danceMoves[this.userData.country].part2.join('\n    - ') : 'mouvements encore plus intenses';
        const actionType = this.getActionType(this.userData.country);
        const decorText = this.getUnifiedDecor();
        const actionAleatoire = this.getRandomAction(actionType);
        const finale = this.getFinaleGesture();
        const finalOption = this.getFinalOption();
        const publicInteraction = this.getPublicInteraction();
        const floatingTexts = this.generateFloatingWords('part2');
        
        const alienTransformations = this.generateAlienTransformations();
        const avatarTransformations = this.generateAvatarTransformations();
        const animalTransformations = this.generateAnimalTransformations();
        const animalBabyMode = this.generateAnimalBabyMode();
        const mirrorMode = this.generateMirrorMode();
        const fantasyModes = this.generateFantasyTransformations();
        const specialFeatures = this.generateSpecialFeatures();
        const advancedEffects = this.generateAdvancedEffects();
        let script = this.generateScript();
        
        let dialogueText = '';
        if (!isSelfie) {
            dialogueText = this.generateDialogue();
        }
        
        let finalScript = script;
        if (isSelfie) {
            dialogueText = '';
            finalScript = '';
        }

        const avatarMode = document.getElementById('enableAvatarMode')?.checked || false;
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;

        let hasPriorityEyes = false;
        let hasPrioritySkin = false;
        if (specialFeatures.includes('YEUX')) hasPriorityEyes = true;
        if (specialFeatures.includes('TACHES')) hasPrioritySkin = true;

        let faceInstructions = '';
        let eyesInstructions = '';

        if (avatarMode && !keepFace) {
            faceInstructions = `👇 INSTRUCTIONS POUR UN VISAGE AVATAR COMPLET 👇
- Transformation COMPLète en Na'vi
- Peau bleue caractéristique (${document.getElementById('avatarSkinTone')?.value || 'bleu nuit'})
- Traits faciaux Na'vi : nez large, arcades sourcilières prononcées
- Oreilles pointues`;
            eyesInstructions = `👁️ YEUX AVATAR : Iris jaune/or, pupilles verticales, reflets lumineux`;
        } else {
            faceInstructions = `👇 INSTRUCTIONS POUR UN VISAGE HUMAIN AUTHENTIQUE 👇
- Rendu hyper réaliste style photo professionnelle
- Peau avec texture naturelle : pores visibles, relief cutané
- Micro-expressions involontaires, respiration visible
- Le visage doit être STRICTEMENT IDENTIQUE à l'image de référence`;
            eyesInstructions = `👁️ YEUX : Iris hyper détaillés, film lacrymal humide, vaisseaux sanguins visibles, saccades oculaires, cils individuels`;
        }

        const detailsMicroscopiques = `DÉTAILS MICROSCOPIQUES :
- Peau autour des yeux fine et translucide
- Paupières avec plis naturels
- Nez avec pores larges
- Oreilles avec cartilage et duvet
- Cou avec plis naturels`;

        // ==============================================================
        // CORRECTION : TENUE FINALE DÉTAILLÉE POUR TOUS LES PERSONNAGES
        // ==============================================================
        let outfitText = '';
        
        if (country && country.finalOutfit) {
            if (country.finalOutfit.colors && country.finalOutfit.colors.length > 0) {
                // Format détaillé pour tous les personnages normaux
                outfitText = `${country.finalOutfit.description}
- Couleurs : ${country.finalOutfit.colors.join(', ')}
- Éléments : ${country.finalOutfit.elements.join(', ')}
- Accessoires : ${country.finalOutfit.accessories.join(', ')}`;
            } else {
                // Fallback si le format n'est pas complet
                outfitText = country.finalOutfit.description;
            }
        }
        
        // Gestion spéciale pour les rappeurs (qui ont une structure "tenues")
        if (this.userData.country === 'rapper' && countries.rapper && countries.rapper.tenues) {
            const style = this.userData.rapperStyle;
            const tenue = countries.rapper.tenues[style];
            if (tenue) outfitText = `${tenue.description} aux couleurs ${tenue.colors.join(' et ')}. Éléments : ${tenue.elements.join(', ')}. Accessoires : ${tenue.accessories.join(', ')}.`;
        }
        else if (this.userData.country === 'rapperluxe' && countries.rapperluxe && countries.rapperluxe.tenues) {
            const style = this.userData.rapperluxeStyle;
            const tenue = countries.rapperluxe.tenues[style];
            if (tenue) outfitText = `${tenue.description} aux couleurs ${tenue.colors.join(' et ')}. Éléments : ${tenue.elements.join(', ')}. Accessoires : ${tenue.accessories.join(', ')}.`;
        }
        
        // Si rien n'a été trouvé, utiliser la valeur par défaut du textarea
        if (!outfitText) {
            outfitText = this.userData.finalOutfit || "tenue spectaculaire";
        }
        // ==============================================================

        return `Suite de la transition - DEUXIÈME PARTIE de 6 secondes.

CONTINUITÉ PARFAITE DU VISAGE - ABSOLUMENT CRUCIAL :
- Le sujet est STRICTEMENT IDENTIQUE à celui de la PARTIE 1
- MÊMES TRAITS, MÊME VISAGE, expression encore plus intense
- La transformation ne concerne QUE les vêtements, le corps et les accessoires
${avatarTransformations.includes('VISAGE HUMAIN CONSERVÉ') ? '- ⚠️ Le visage reste HUMAIN et IDENTIQUE à la partie 1 - seuls les éléments Na\'vi sont ajoutés' : ''}

${faceInstructions}

${eyesInstructions}

${detailsMicroscopiques}

⚠️ ANGLE DE CAMÉRA - MODE SELFIE (si activé) :
- Pendant le flash noir, le téléphone a été POSÉ sur un support fixe
- L'OBJECTIF EST MAINTENANT FIXE - angle de vue constant
- La caméra ne bouge pas, ne zoome pas (sauf si option finale zoom activée)
- Elle danse FACE À CET OBJECTIF FIXE

ÉCLAIRAGE CINÉMATOGRAPHIQUE NATUREL :
- Éclairage Rembrandt doux
- Source principale à 45°, ombres naturelles
- Reflets naturels dans les yeux

RENDU PHOTOGRAPHIQUE AUTHENTIQUE :
- Grain de film léger
- Pas de filtre beauté, pas de lissage excessif
${!avatarMode || keepFace ? `- Visage indiscernable d'une vraie photo professionnelle` : `- Rendu cohérent Na'vi`}

⚠️ TRANSITION NATURELLE - INSTRUCTION CAPITALE ⚠️ :
- Pendant le flash noir/blanc, elle s'est CHANGÉE COMPLÈTEMENT
- La transformation a eu lieu HORS CAMÉRA - RIEN de magique ou d'instantané
- Dès que l'écran s'éclaire, le résultat FINAL est déjà visible
- AUCUN changement ne doit être visible pendant cette PARTIE 2
- Le réalisme est PRIMORDIAL

${finalScript}

GESTES DE SÉDUCTION IMMÉDIATS DÈS LE DÉBUT DE LA PARTIE 2 :
${this.userData.gestures.bisous ? '- Elle envoie UN BISOUD À LA CAMÉRA' : ''}
${this.userData.gestures.viens ? '- Elle fait le geste "VIENS VERS MOI"' : ''}
- Sourire victorieux et charmeur

NOUVELLE TENUE (DÉJÀ PORTÉE) :
${outfitText}

CHEVEUX TRANSFORMÉS (DÉJÀ COLORÉS) :
${this.userData.enableFluo ? 
`- CHANGEMENT COMPLET - Cheveux DÉJÀ colorés en ${this.userData.fluoColor} ${fluoIntensityText}
- Intensité fluo maximale - ils brillent littéralement sous la lumière
- Style : ${this.userData.hairStyle}
- Cascade de couleur fluo qui scintille` : 
`- Les cheveux conservent leur couleur naturelle (${this.userData.naturalHair})`}

${alienTransformations}
${avatarTransformations}
${animalTransformations}
${animalBabyMode}
${mirrorMode}
${fantasyModes}
${!hasPriorityEyes && !hasPrioritySkin ? specialFeatures : ''}

MAQUILLAGE APPLIQUÉ (DÉJÀ FAIT) :
- Teint parfait et lumineux
- Yeux intensifiés
- Lèvres brillantes
- Paillettes subtiles
- Peau légèrement huilée

DANSE APRÈS TRANSFORMATION :
Elle reprend sa danse ${country.dance} avec une énergie décuplée :
    ${animalBabyDanceInstructions}
    - ${danceMovesText}

⚡ ACTION SPÉCIALE ⚡
- ${actionAleatoire}

JEUX DE SÉDUCTION ACCRUS :
${gesturesText}

JEUX AVEC LA TENUE ET CHEVEUX :
- Jeux avec les éléments de la tenue
- Elle passe ses mains dans ses cheveux fluo
- Les fait virevolter en tournant

${floatingTexts}

ARRIÈRE-PLAN - DÉCOR UNIFIÉ :
${decorText}

${advancedEffects}

🎬 FINALE SPECTACULAIRE (dernière seconde de la PARTIE 2) :

⏱️ CHRONOLOGIE :
- SECONDES 1 à 5 : Danse intense
- SECONDE 5 à 6 : ${finale}

🎯 INTERACTION DIRECTE :
- ${publicInteraction}
- Elle danse POUR le spectateur

📸 MAINTIEN DE POSE (${document.getElementById('finalMaintien')?.value || '2'}s) :
- Corps figé mais VISAGE VIVANT
- Yeux parcourent l'écran
- Respiration AMPLE
- Sourire ${document.getElementById('finalEmotion')?.value || 'satisfaite'}

CAMÉRA ET ÉCLAIRAGE :
- Caméra statique (angle fixe si mode selfie)
- Éclairage cinématographique chaleureux
- Spot sur elle pendant le finale

RAPPEL ULTIME :
- Transformation DÉJÀ TERMINÉE
- AUCUNE métamorphose visible
- Le réalisme est ABSOLUMENT CRUCIAL
- La FINALE doit être PARFAITE`;
    }

    generateConsignes() {
        const country = countries[this.userData.country];
        const avatarMode = document.getElementById('enableAvatarMode')?.checked || false;
        const keepFace = document.getElementById('avatarKeepFace')?.checked || false;
        const eyesDiff = document.getElementById('enable-eyes')?.checked || false;
        const skinDiff = document.getElementById('enable-skin')?.checked || false;
        const animalMode = document.getElementById('enableAnimalMode')?.checked || false;
        const animalBabyMode = document.getElementById('enableAnimalBabyMode')?.checked || false;
        const mirrorMode = document.getElementById('enableMirrorMode')?.checked || false;
        const selfieMode = document.getElementById('enableSelfieMode')?.checked || false;
        
        let avatarLine = '';
        if (avatarMode) avatarLine = keepFace ? '\n15. MODE AVATAR : visage humain conservé' : '\n15. MODE AVATAR : transformation complète';
        let animalLine = animalMode ? '\n16. MODE ANIMAL ACTIVÉ' : '';
        let animalBabyLine = animalBabyMode ? '\n17. MODE BÉBÉ ANIMAL CÂLIN' : '';
        let mirrorLine = mirrorMode ? '\n18. MODE MIROIR - transition flash blanc' : '';
        let selfieLine = selfieMode ? '\n19. 📱 MODE SELFIE' : '';
        let specialLine = '';
        if (eyesDiff && skinDiff) specialLine = '\n20. OPTIONS SPÉCIALES 8K : Yeux hétérochromie + Taches de naissance';
        else if (eyesDiff) specialLine = '\n20. OPTIONS SPÉCIALES 8K : Yeux hétérochromie';
        else if (skinDiff) specialLine = '\n20. OPTIONS SPÉCIALES 8K : Taches de naissance';
        
        return `CONSIGNES DE COHÉRENCE ABSOLUE :

1. VISAGE IDENTIQUE : PARTIE 2 = PARTIE 1 (même visage, seule la tenue change)
2. TRANSITION NATURELLE : Transformation HORS CAMÉRA (pendant flash noir/blanc)
3. RENDU ULTRA-RÉALISTE : Pores, grains de beauté, micro-expressions, respiration visible
4. YEUX 8K : Iris détaillés, film lacrymal, vaisseaux sanguins visibles
5. SILENCE TOTAL : Pas un mot (sauf script activé)
6. SÉDUCTION MAGNÉTIQUE : Regards intenses, gestes sensuels
7. GESTES DIRECTES : ${this.userData.gestures.bisous ? 'BISOUS' : ''} ${this.userData.gestures.viens ? 'et VIENS' : ''}
8. TENUE DÉPART REMPLACÉE : Pendant le flash
9. CHEVEUX ${this.userData.enableFluo ? 'FLUO' : 'NATURELS'}
10. MOUVEMENTS PRÉCIS : Danse synchronisée
11. INSPIRATION : ${country.name} - ${country.dance}
12. TRANSFORMATION DÉJÀ ACCOMPLIE : Rien ne change pendant la PARTIE 2
13. FINALE SPECTACULAIRE : Moment fort de la vidéo (dernière seconde)${avatarLine}${animalLine}${animalBabyLine}${mirrorLine}${selfieLine}${specialLine}`;
    }

    generateFullPrompt() {
        this.collectUserData();
        return {
            part1: this.generatePart1(),
            part2: this.generatePart2(),
            consignes: this.generateConsignes(),
            full: this.generatePart1() + '\n\n' + this.generatePart2() + '\n\n' + this.generateConsignes()
        };
    }
}

// ==================== FONCTIONS D'INITIALISATION ====================

function initCharacters() {
    console.log("🎭 Initialisation des personnages...");
    const grid = document.getElementById('countryGrid');
    if (!grid) { console.error("❌ Grille non trouvée!"); return; }
    if (typeof countries === 'undefined') { grid.innerHTML = '<div style="color: red;">Erreur: Personnages non chargés</div>'; return; }
    let html = '';
    for (const [key, country] of Object.entries(countries)) {
        html += `<div class="character-card" data-country="${key}">${country.name}</div>`;
    }
    grid.innerHTML = html;
    console.log(`✅ ${Object.keys(countries).length} personnages chargés`);
    const firstCard = document.querySelector('.character-card');
    if (firstCard) {
        firstCard.classList.add('selected');
        const selectedSpan = document.querySelector('#selectedCountry span');
        if (selectedSpan) selectedSpan.textContent = countries[firstCard.dataset.country].name;
    }
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const selectedSpan = document.querySelector('#selectedCountry span');
            if (selectedSpan) selectedSpan.textContent = countries[this.dataset.country].name;
        });
    });
    const searchInput = document.getElementById('characterSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const search = e.target.value.toLowerCase();
            document.querySelectorAll('.character-card').forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(search) ? 'block' : 'none';
            });
        });
    }
}

function displayPrompt(prompts, tabId) {
    const display = document.getElementById('promptDisplay');
    if (!display) return;
    let text = '';
    switch(tabId) {
        case 'tabFull': text = prompts.full || ''; break;
        case 'tabPart1': text = prompts.part1 || ''; break;
        case 'tabPart2': text = prompts.part2 || ''; break;
        case 'tabConsignes': text = prompts.consignes || ''; break;
    }
    display.innerHTML = text.replace(/\n/g, '<br>');
}

function updateRecap() {
    const selected = document.querySelector('.character-card.selected');
    if (!selected) return;
    const country = countries[selected.dataset.country];
    const fluoActive = document.getElementById('enableFluo')?.checked ? 'OUI' : 'NON';
    const alienActive = document.getElementById('enableAlienMode')?.checked ? '👽' : '';
    const avatarActive = document.getElementById('enableAvatarMode')?.checked ? '🔵' : '';
    const keepFace = document.getElementById('avatarKeepFace')?.checked ? '👤' : '';
    const animalActive = document.getElementById('enableAnimalMode')?.checked ? '🐾' : '';
    const animalBabyActive = document.getElementById('enableAnimalBabyMode')?.checked ? '🐶' : '';
    const mirrorActive = document.getElementById('enableMirrorMode')?.checked ? '🪞' : '';
    const selfieActive = document.getElementById('enableSelfieMode')?.checked ? '📱' : '';
    const eyesActive = document.getElementById('enable-eyes')?.checked ? '👁️' : '';
    const skinActive = document.getElementById('enable-skin')?.checked ? '🎨' : '';
    const recap = `🌍 Personnage : ${country.name}\n💃 Danse : ${country.dance}\n💇 Cheveux fluo : ${fluoActive} ${alienActive} ${avatarActive} ${keepFace} ${animalActive} ${animalBabyActive} ${mirrorActive} ${selfieActive} ${eyesActive} ${skinActive}`;
    const recapDiv = document.getElementById('recapContent');
    if (recapDiv) recapDiv.innerHTML = recap.replace(/\n/g, '<br>');
}

function setupConditionalOptions() {
    const alienSkin = document.getElementById('alienSkin');
    const alienEyes = document.getElementById('alienEyes');
    const alienAntenna = document.getElementById('alienAntenna');
    const alienGlow = document.getElementById('alienGlow');
    const alienTattoos = document.getElementById('alienTattoos');
    const alienHolograms = document.getElementById('alienHolograms');
    if (alienSkin) alienSkin.addEventListener('change', function() { document.getElementById('alienSkinOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienEyes) alienEyes.addEventListener('change', function() { document.getElementById('alienEyesOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienAntenna) alienAntenna.addEventListener('change', function() { document.getElementById('alienAntennaOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienGlow) alienGlow.addEventListener('change', function() { document.getElementById('alienGlowOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienTattoos) alienTattoos.addEventListener('change', function() { document.getElementById('alienTattoosOptions').style.display = this.checked ? 'block' : 'none'; });
    if (alienHolograms) alienHolograms.addEventListener('change', function() { document.getElementById('alienHologramsOptions').style.display = this.checked ? 'block' : 'none'; });
    
    const avatarTail = document.getElementById('avatarTail');
    const avatarStripes = document.getElementById('avatarStripes');
    if (avatarTail) avatarTail.addEventListener('change', function() { document.getElementById('avatarTailOptions').style.display = this.checked ? 'block' : 'none'; });
    if (avatarStripes) avatarStripes.addEventListener('change', function() { document.getElementById('avatarStripesOptions').style.display = this.checked ? 'block' : 'none'; });
    
    const avatarKeepFace = document.getElementById('avatarKeepFace');
    const avatarFullBody = document.getElementById('avatarFullBody');
    if (avatarKeepFace && avatarFullBody) avatarKeepFace.addEventListener('change', function() { if (this.checked && !avatarFullBody.checked) avatarFullBody.checked = true; });
    
    document.getElementById('enableAnimalMode')?.addEventListener('change', updateAnimalColors);
    document.getElementById('animalType')?.addEventListener('change', updateAnimalColors);
    document.getElementById('enable-eyes')?.addEventListener('change', function() { document.getElementById('eye-controls').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enable-skin')?.addEventListener('change', function() { document.getElementById('skin-controls').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
}

function updateAnimalColors() {
    const type = document.getElementById('animalType')?.value;
    const colorSelect = document.getElementById('animalColor');
    if (!colorSelect || !type || !window.animalData) return;
    const animal = window.animalData[type];
    if (!animal) return;
    colorSelect.innerHTML = '';
    animal.couleursDisponibles.forEach(couleur => {
        const option = document.createElement('option');
        option.value = couleur;
        option.textContent = couleur.charAt(0).toUpperCase() + couleur.slice(1);
        colorSelect.appendChild(option);
    });
}

function attachEvents() {
    console.log("🔗 Attachement des événements...");
    const generator = new PromptGenerator();
    
    document.getElementById('generatePrompt')?.addEventListener('click', function() {
        console.log("🎬 Génération du prompt...");
        const prompts = generator.generateFullPrompt();
        window.lastPrompts = prompts;
        const activeTab = document.querySelector('.tab-btn.active');
        if (activeTab) displayPrompt(prompts, activeTab.id);
        updateRecap();
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const prompts = window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' };
            displayPrompt(prompts, this.id);
        });
    });
    
    document.getElementById('copyPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(text).then(() => alert('✅ Prompt copié!'));
    });
    document.getElementById('exportPrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'prompt_transition.txt';
        a.click();
        URL.revokeObjectURL(url);
    });
    
    document.getElementById('translatePrompt')?.addEventListener('click', function() {
        const text = document.getElementById('promptDisplay').innerText;
        if (text && text.trim() !== '') {
            window.open(`https://translate.google.com/?sl=fr&tl=en&text=${encodeURIComponent(text)}&op=translate`, '_blank');
        } else {
            alert('Aucun prompt à traduire. Générez d\'abord un prompt.');
        }
    });
    
    document.getElementById('clearPrompt')?.addEventListener('click', function() {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    
    document.getElementById('generateOutfit')?.addEventListener('click', function() {
        const selected = document.querySelector('.character-card.selected');
        if (!selected) { alert('Sélectionnez d\'abord un personnage'); return; }
        const country = countries[selected.dataset.country];
        if (country && country.finalOutfit && country.finalOutfit.colors) {
            let outfitDesc = `${country.finalOutfit.description} - Couleurs : ${country.finalOutfit.colors.join(', ')}. Éléments : ${country.finalOutfit.elements.join(', ')}. Accessoires : ${country.finalOutfit.accessories.join(', ')}.`;
            document.getElementById('finalOutfitDescription').value = outfitDesc;
        } else if (country && country.finalOutfit) {
            document.getElementById('finalOutfitDescription').value = country.finalOutfit.description;
        } else {
            alert('Aucune tenue prédéfinie pour ce personnage');
        }
    });
    
    document.getElementById('enableMagicTexts')?.addEventListener('change', function() { document.getElementById('magicTextsOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() { document.getElementById('customDecorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAlienMode')?.addEventListener('change', function() { document.getElementById('alienOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAvatarMode')?.addEventListener('change', function() { document.getElementById('avatarOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalMode')?.addEventListener('change', function() { document.getElementById('animalOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalBabyMode')?.addEventListener('change', function() { document.getElementById('animalBabyOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableMirrorMode')?.addEventListener('change', function() { document.getElementById('mirrorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
    if (typeof initFantasyConfig === 'function') initFantasyConfig();
    document.getElementById('enableScript')?.addEventListener('change', function() { document.getElementById('scriptOptions').style.display = this.checked ? 'block' : 'none'; });
    
    setupConditionalOptions();
    
    const fluoIntensity = document.getElementById('fluoIntensity');
    if (fluoIntensity) fluoIntensity.addEventListener('input', function() {
        const val = parseInt(this.value);
        const labels = ['Faible', 'Léger', 'Moyen', 'Brillant', 'Éclatant', 'Intense', 'Fulgurant', 'Phosphorescent', 'Néon', 'AVEUGLANT'];
        document.getElementById('intensityValue').textContent = labels[val-1] || 'Éclatant';
    });
    
    const seductionLevel = document.getElementById('seductionLevel');
    const seductionValue = document.getElementById('seductionValue');
    if (seductionLevel && seductionValue) seductionLevel.addEventListener('input', function() { seductionValue.textContent = this.value + '/10'; });
    
    const bisousCheckbox = document.getElementById('gesteBisous');
    const bisousCount = document.getElementById('bisousCount');
    if (bisousCheckbox && bisousCount) {
        bisousCount.disabled = !bisousCheckbox.checked;
        bisousCheckbox.addEventListener('change', function() { bisousCount.disabled = !this.checked; });
    }
    const viensCheckbox = document.getElementById('gesteViens');
    const viensCount = document.getElementById('viensCount');
    if (viensCheckbox && viensCount) {
        viensCount.disabled = !viensCheckbox.checked;
        viensCheckbox.addEventListener('change', function() { viensCount.disabled = !this.checked; });
    }
}

function populateSpecialSelects() {
    const eyeLeft = document.getElementById('eye-left-select');
    const eyeRight = document.getElementById('eye-right-select');
    if (eyeLeft && eyeRight && typeof eyeColorsData !== 'undefined') {
        eyeLeft.innerHTML = '';
        eyeRight.innerHTML = '';
        eyeColorsData.forEach(color => {
            const option1 = document.createElement('option');
            option1.value = color.label.toLowerCase();
            option1.textContent = color.label;
            eyeLeft.appendChild(option1);
            const option2 = document.createElement('option');
            option2.value = color.label.toLowerCase();
            option2.textContent = color.label;
            eyeRight.appendChild(option2);
        });
    }
    const skinSelect = document.getElementById('skin-color-select');
    if (skinSelect && typeof skinColorsData !== 'undefined') {
        skinSelect.innerHTML = '';
        skinColorsData.forEach(color => {
            const option = document.createElement('option');
            option.value = color.label.toLowerCase();
            option.textContent = color.label;
            skinSelect.appendChild(option);
        });
    }
}

function startApp() {
    console.log("🚀 Démarrage de l'application...");
    populateSpecialSelects();
    setTimeout(updateAnimalColors, 500);
    initCharacters();
    attachEvents();
    console.log("✅ Application prête!");
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}

window.PromptGenerator = PromptGenerator;
window.initCharacters = initCharacters;
window.displayPrompt = displayPrompt;
window.updateRecap = updateRecap;

console.log("📦 script.js chargé - VERSION ALLÉGÉE CORRIGÉE : Tenue finale détaillée pour tous les 73 personnages");
