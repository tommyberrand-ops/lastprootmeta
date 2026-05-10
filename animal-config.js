// animal-config.js - Configuration pour le mode animal

function initAnimalConfig() {
    console.log("🐱 Initialisation du mode animal...");
    createAnimalSection();
    setupAnimalEvents();
}

function createAnimalSection() {
    if (document.getElementById('animal-section')) return;
    
    const leftCol = document.querySelector('.left-col');
    if (!leftCol) return;
    
    const animalCard = document.createElement('div');
    animalCard.className = 'card';
    animalCard.id = 'animal-section';
    animalCard.style.border = '3px solid #ff9900';
    animalCard.style.background = 'linear-gradient(135deg, rgba(255,153,0,0.15), rgba(255,69,0,0.15))';
    
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
        <i class="fas fa-paw"></i>
        <h3>🐾 MODE ANIMAL / FÉLIN</h3>
        <span class="badge" style="background: #ff9900;">TRANSFORMATION</span>
    `;
    
    const body = document.createElement('div');
    body.className = 'card-body';
    
    body.innerHTML = `
        <div class="toggle-container">
            <label class="switch">
                <input type="checkbox" id="enableAnimalMode">
                <span class="slider"></span>
            </label>
            <span class="switch-label">Activer transformation animale</span>
        </div>
        
        <div id="animalOptions" style="margin-top: 15px; display: none;">
            
            <div class="input-group">
                <label style="color: #ff9900;">🦊 TYPE D'ANIMAL</label>
                <select id="animalType" class="full-width" style="border-color: #ff9900;">
                    <option value="chatte">🐱 CHATTE (féline gracieuse)</option>
                    <option value="lapine">🐰 LAPINE (doux et bondissant)</option>
                    <option value="tigresse">🐅 TIGRESSE (puissante et rayée)</option>
                    <option value="panthere">🐆 PANTHÈRE (noire et mystérieuse)</option>
                    <option value="lionne">🦁 LIONNE (majestueuse et royale)</option>
                </select>
            </div>
            
            <div class="input-group">
                <label style="color: #ff9900;">🎨 COULEUR / ROBE</label>
                <select id="animalColor" class="full-width" style="border-color: #ff9900;">
                    <!-- Rempli par JS selon l'animal -->
                </select>
            </div>
            
            <div class="checkbox-grid" style="grid-template-columns: 1fr;">
                <label class="checkbox-label" style="color: #ff9900;">
                    <input type="checkbox" id="animalKeepFace" checked> 👤 GARDER MON VISAGE HUMAIN (seuls les attributs animaux s'ajoutent)
                </label>
                <label class="checkbox-label" style="color: #ff9900;">
                    <input type="checkbox" id="animalEars" checked> 👂 Oreilles animales
                </label>
                <label class="checkbox-label" style="color: #ff9900;">
                    <input type="checkbox" id="animalTail" checked> 🐕 Queue
                </label>
                <label class="checkbox-label" style="color: #ff9900;">
                    <input type="checkbox" id="animalFur" checked> 🧶 Fourrure / Texture
                </label>
                <label class="checkbox-label" style="color: #ff9900;">
                    <input type="checkbox" id="animalEyes"> 👁️ Yeux animaux (pupilles différentes)
                </label>
                <label class="checkbox-label" style="color: #ff9900;">
                    <input type="checkbox" id="animalClaws"> 🐾 Griffes
                </label>
            </div>
            
            <div class="info-note" style="margin-top: 15px; background: rgba(255,153,0,0.2); text-align: center;">
                <i class="fas fa-paw"></i> 
                <div style="margin-top: 10px;">
                    Transformation animale ultra-réaliste - fourrure texturée, oreilles mobiles, queue expressive
                </div>
            </div>
        </div>
    `;
    
    animalCard.appendChild(header);
    animalCard.appendChild(body);
    
    // Insérer avant le bouton générer
    const generateBtn = document.querySelector('.generate-btn');
    if (generateBtn) {
        generateBtn.parentNode.insertBefore(animalCard, generateBtn);
    } else {
        leftCol.appendChild(animalCard);
    }
}

function setupAnimalEvents() {
    document.getElementById('enableAnimalMode')?.addEventListener('change', function() {
        const options = document.getElementById('animalOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
        updateAnimalColors();
    });
    
    document.getElementById('animalType')?.addEventListener('change', updateAnimalColors);
}

function updateAnimalColors() {
    const type = document.getElementById('animalType')?.value;
    const colorSelect = document.getElementById('animalColor');
    if (!colorSelect || !type || !window.animalData) return;
    
    const animal = animalData[type];
    if (!animal) return;
    
    colorSelect.innerHTML = '';
    animal.couleursDisponibles.forEach(couleur => {
        const option = document.createElement('option');
        option.value = couleur;
        option.textContent = couleur.charAt(0).toUpperCase() + couleur.slice(1);
        colorSelect.appendChild(option);
    });
}

// Initialisation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimalConfig);
} else {
    initAnimalConfig();
}
