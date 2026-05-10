// equilibriste-prompt.js - Fonctions de génération de prompt pour l'Équilibriste
// CORRIGÉ : Intègre tous les effets (textes, bisous, gestes, confettis, etc.) + taches de naissance

// Récupérer les fonctions du générateur principal
function getGesturesText(userData) {
    let gesturesText = '';
    if (userData.gestures.regards) gesturesText += '- Elle fixe la caméra avec des regards intenses et charmeurs\n';
    if (userData.gestures.sourires) gesturesText += '- Sourires en coin, coquins, charmeurs\n';
    if (userData.gestures.clins) gesturesText += '- Clins d\'œil complices et lents\n';
    if (userData.gestures.levres) gesturesText += '- Elle mord sa lèvre inférieure en vous fixant\n';
    if (userData.gestures.mains) gesturesText += '- Ses mains caressent son corps (cou, épaules, seins, hanches) tout en préservant l\'équilibre\n';
    if (userData.gestures.cheveux) gesturesText += '- Jeux avec ses cheveux, elle les caresse, les rejette\n';
    if (userData.gestures.bisous) {
        gesturesText += `- Elle envoie des baisers du bout des doigts vers la caméra (${userData.gestures.bisousCount} fois), d'une main pendant que l'autre stabilise l'objet\n`;
    }
    if (userData.gestures.viens) {
        gesturesText += `- Elle fait le geste "viens vers moi" avec son index (${userData.gestures.viensCount} fois), mouvements lents et contrôlés\n`;
    }
    return gesturesText;
}

function getBaseEffectsText() {
    const baseEffects = [];
    if (document.getElementById('effectConfettis')?.checked) baseEffects.push('confettis aux couleurs de la tenue');
    if (document.getElementById('effectPoudre')?.checked) baseEffects.push('poudre scintillante');
    if (document.getElementById('effectPétales')?.checked) baseEffects.push('pluie de pétales');
    if (document.getElementById('effectFumee')?.checked) baseEffects.push('fumée légère');
    if (document.getElementById('effectLumières')?.checked) baseEffects.push('lumières colorées');
    if (document.getElementById('effectPaillettes')?.checked) baseEffects.push('paillettes dans l\'air');
    
    return baseEffects.length > 0 ? baseEffects.join(', ') : 'poudre scintillante';
}

function getAdvancedEffectsText() {
    const effects = [];
    
    if (document.getElementById('effectExplosion')?.checked) effects.push('explosion de couleurs aveuglante');
    if (document.getElementById('effectTeleportation')?.checked) effects.push('effet de téléportation avec distorsion de l\'espace');
    if (document.getElementById('effectMirror')?.checked) effects.push('effet miroir avec double d\'elle-même');
    if (document.getElementById('effectTimeLapse')?.checked) effects.push('accéléré puis ralenti au moment de la révélation');
    if (document.getElementById('effectHologram')?.checked) effects.push('hologrammes flottants autour d\'elle');
    if (document.getElementById('effectClone')?.checked) effects.push('duplication en plusieurs clones qui dansent ensemble');
    
    if (document.getElementById('effectFeu')?.checked) effects.push('flammes tourbillonnantes');
    if (document.getElementById('effectEau')?.checked) effects.push('vagues d\'eau cristalline');
    if (document.getElementById('effectGlace')?.checked) effects.push('cristaux de glace étincelants');
    if (document.getElementById('effectEclairs')?.checked) effects.push('éclairs zébrant le ciel');
    if (document.getElementById('effectPapillons')?.checked) effects.push('papillons magiques multicolores');
    if (document.getElementById('effectPlumes')?.checked) effects.push('plumes légères dansantes');
    if (document.getElementById('effectLaser')?.checked) effects.push('lasers colorés synchronisés');
    if (document.getElementById('effectBulles')?.checked) effects.push('bulles scintillantes irisées');
    
    if (effects.length === 0) return '';
    
    const surpriseLevel = document.getElementById('surpriseLevel')?.value || 7;
    const surpriseText = surpriseLevel <= 3 ? 'surprise subtile' : 
                        surpriseLevel <= 6 ? 'effet wow' : 
                        surpriseLevel <= 8 ? 'explosion visuelle' : 'EXPÉRIENCE HALLUCINANTE';
    
    return `\nEFFETS SPECTACULAIRES AVANCÉS (${surpriseText}) : ${effects.join(', ')}.`;
}

function getFloatingWords(partie) {
    if (!document.getElementById('enableMagicTexts')?.checked) return '';
    
    const words = [];
    if (document.getElementById('textFollow')?.checked) words.push('"Follow Me"');
    if (document.getElementById('textLike')?.checked) words.push('"Like Me"');
    if (document.getElementById('textSubscribe')?.checked) words.push('"Subscribe"');
    if (document.getElementById('textLove')?.checked) words.push('"Love Me"');
    if (document.getElementById('textWatch')?.checked) words.push('"Watch Me"');
    if (document.getElementById('textShare')?.checked) words.push('"Share Me"');
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
- Des textes ${words.join(', ')} apparaissent et flottent dans l'air autour d'elle, se faufilant entre ses mouvements sans perturber l'objet
- Style d'affichage : ${effect}
- Mouvement : ${movement}
- Couleurs : ${color} (principal) et ${color2} (secondaire)
- Taille des textes : ${sizeText}
- Quantité : ${quantityText} textes
- Position : ${position}
- Les textes réagissent à ses mouvements et la suivent délicatement
- Effets supplémentaires : ${specialEffects.join(', ')}
- Ils créent une ambiance magique et immersive autour de sa performance d'équilibre`;
}

function generateEquilibristePart1(objet, userData, floatingTexts) {
    const objetDesc = getObjetDescription(objet);
    const gesturesText = getGesturesText(userData);
    
    return `🎪 SÉQUENCE ÉQUILIBRISTE - PARTIE 1 :

Elle entre en scène, ${objetDesc} parfaitement équilibré sur sa tête.

MOUVEMENTS D'ÉQUILIBRE :
- Elle avance lentement, chaque pas calculé avec précision
- Ses bras s'ouvrent gracieusement en balancier
- Son regard alterne entre l'objet et la caméra
- Elle exécute des rotations lentes, l'objet restant immobile
- Des poses sur une jambe défient la gravité
- Son sourire est confiant, presque provocateur

JEUX DE REGARDS :
- Elle lève les yeux vers l'objet sans bouger la tête
- Puis plonge son regard dans la caméra, complice
- Elle semble dire "Regarde ce que je peux faire"

GESTES DE SÉDUCTION :
${gesturesText}

${floatingTexts}

AMBIANCE :
- Spot unique éclaire la scène
- Ombre portée au sol
- Public silencieux, retenant son souffle
- Tension palpable dans l'air

TRANSITION :
Au moment le plus intense, elle rapproche ses mains de l'objectif dans un geste théâtral, les plaquant contre la caméra pour masquer entièrement l'image. Pendant ce court instant, elle se recentre, respire, prête pour la suite.`;
}

function generateEquilibristePart2(objet, options, userData, floatingTexts, baseEffects, advancedEffects, specialFeatures) {
    const objetDesc = getObjetDescription(objet);
    const regardObjet = options.regardObjet ? "Elle lève fréquemment les yeux vers l'objet, vérifiant sa stabilité du regard" : "";
    const suspense = options.suspense ? "Les mouvements ralentissent, la tension monte..." : "";
    const rattrape = options.rattrape ? "elle le rattrape au vol avec une grâce parfaite" : "il tombe au sol dans un bruit sourd";
    const chuteMoment = options.chuteMoment || "fin";
    const gesturesText = getGesturesText(userData);
    
    let chuteDesc = "";
    if (chuteMoment === "fin") {
        chuteDesc = "À la toute dernière seconde, alors qu'elle esquisse un dernier mouvement victorieux, l'objet bascule...";
    } else if (chuteMoment === "avant-derniere") {
        chuteDesc = "À l'avant-dernière seconde, l'objet commence à vaciller... Elle tente de le stabiliser...";
    } else {
        chuteDesc = "Au ralenti, l'objet se met à tanguer de plus en plus, semblant défier les lois de la physique avant de chuter...";
    }
    
    return `🎪 SÉQUENCE ÉQUILIBRISTE - PARTIE 2 - FINALE SUSPENSE :

${objetDesc} toujours en équilibre parfait sur sa tête.

${specialFeatures}

MOUVEMENTS PLUS AUDACIEUX :
- Ses mouvements deviennent plus fluides, plus sensuels
- Elle ose des déhanchés, des cambrures
- Ses mains caressent son corps tout en surveillant l'objet
- Elle tourne, virevolte, l'objet suivant ses mouvements
${regardObjet ? "- " + regardObjet : ""}

GESTES DE SÉDUCTION ACCRUS :
${gesturesText}

${floatingTexts}

${suspense}

EFFETS SPECTACULAIRES DE BASE :
Au moment où ses mains révèlent la transition, explosion de ${baseEffects}

${advancedEffects}

🎯 MOMENT CRITIQUE - CHUTE DE L'OBJET :
${chuteDesc}

L'objet tombe dans les airs...

👐 RÉACTION ÉCLAIR :
Avec une rapidité incroyable, elle tend les bras vers le ciel et ${rattrape}.

⏱️ DERNIÈRE FRACTION DE SECONDE :
Ses doigts se referment sur l'objet, un sourire de victoire éclaire son visage...

🌑 FIN BRUTALE :
L'image se coupe NET au moment précis où ses doigts touchent l'objet, laissant le spectateur sur cette image figée, sans savoir si la rattrape est vraiment réussie.

SUSPENSE ABSOLU - FIN OUVERTE.`;
}

// Ajouter au PromptGenerator existant
function enhancePromptGenerator() {
    if (window.PromptGenerator) {
        // Sauvegarder les méthodes originales
        const originalGeneratePart1 = PromptGenerator.prototype.generatePart1;
        const originalGeneratePart2 = PromptGenerator.prototype.generatePart2;
        const originalCollectUserData = PromptGenerator.prototype.collectUserData;
        
        // Surcharger pour l'équilibriste
        PromptGenerator.prototype.generatePart1 = function() {
            const equilibristeActive = document.getElementById('enableEquilibriste')?.checked || false;
            const selectedCard = document.querySelector('.character-card.selected');
            const isEquilibriste = selectedCard && selectedCard.textContent.includes('Équilibriste');
            
            if (equilibristeActive && isEquilibriste) {
                const objet = document.getElementById('equilibreObjet')?.value || 'un pot de Nutella';
                const floatingTexts = this.generateFloatingWords('part1');
                return generateEquilibristePart1(objet, this.userData, floatingTexts);
            }
            
            return originalGeneratePart1.call(this);
        };
        
        PromptGenerator.prototype.generatePart2 = function() {
            const equilibristeActive = document.getElementById('enableEquilibriste')?.checked || false;
            const selectedCard = document.querySelector('.character-card.selected');
            const isEquilibriste = selectedCard && selectedCard.textContent.includes('Équilibriste');
            
            if (equilibristeActive && isEquilibriste) {
                const objet = document.getElementById('equilibreObjet')?.value || 'un pot de Nutella';
                const options = {
                    regardObjet: document.getElementById('equilibreRegardObjet')?.checked || false,
                    suspense: document.getElementById('equilibreSuspense')?.checked || false,
                    rattrape: document.getElementById('equilibreRatrappe')?.checked || false,
                    chuteMoment: document.getElementById('equilibreChuteMoment')?.value || 'fin'
                };
                const floatingTexts = this.generateFloatingWords('part2');
                const baseEffects = getBaseEffectsText();
                const advancedEffects = getAdvancedEffectsText();
                const specialFeatures = this.generateSpecialFeatures();
                
                return generateEquilibristePart2(objet, options, this.userData, floatingTexts, baseEffects, advancedEffects, specialFeatures);
            }
            
            return originalGeneratePart2.call(this);
        };
        
        // S'assurer que userData est collecté
        PromptGenerator.prototype.collectUserData = function() {
            originalCollectUserData.call(this);
            // Les données sont déjà collectées par la méthode originale
        };
        
        console.log("🎪 PromptGenerator amélioré avec Équilibriste - TOUS LES EFFETS conservés + TACHES DE NAISSANCE");
    }
}

// Attendre que PromptGenerator soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhancePromptGenerator);
} else {
    enhancePromptGenerator();
}
