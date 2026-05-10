// animal-prompt.js - Génération des prompts pour le mode animal

function generateAnimalTransformations() {
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
    
    if (keepFace) {
        animalText += `- ⚠️ VISAGE HUMAIN CONSERVÉ : le visage reste STRICTEMENT IDENTIQUE à l'image de référence, seuls les attributs animaux sont ajoutés\n`;
    } else {
        animalText += `- Transformation COMPLÈTE en ${animal.name}\n`;
    }
    
    if (ears) animalText += `- ${animal.traits.oreilles}\n`;
    if (tail) animalText += `- ${animal.traits.queue}\n`;
    if (fur) animalText += `- ${animal.traits.fourrure || 'Fourrure texturée'}\n`;
    if (eyes) animalText += `- ${animal.traits.yeux}\n`;
    if (claws) animalText += `- ${animal.traits.griffes || 'Griffes'}\n`;
    
    if (color) animalText += `- Robe/couleur : ${color}\n`;
    
    return animalText;
}

// Intégration dans PromptGenerator
function enhanceWithAnimalMode() {
    if (window.PromptGenerator) {
        const originalGeneratePart2 = PromptGenerator.prototype.generatePart2;
        
        PromptGenerator.prototype.generatePart2 = function() {
            // Sauvegarder les transformations originales
            const originalAlien = this.generateAlienTransformations;
            const originalAvatar = this.generateAvatarTransformations;
            
            // Ajouter la génération animale
            this.generateAnimalTransformations = generateAnimalTransformations;
            
            // Appeler la méthode originale
            return originalGeneratePart2.call(this);
        };
        
        console.log("🐱 Mode animal intégré au PromptGenerator");
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceWithAnimalMode);
} else {
    enhanceWithAnimalMode();
}
