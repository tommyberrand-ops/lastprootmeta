// data/fantasyConfig.js - Interface pour les modes fantastiques

function initFantasyConfig() {
    console.log("✨ Initialisation des modes fantastiques...");
    createFantasySection();
    setupFantasyEvents();
}

function createFantasySection() {
    if (document.getElementById('fantasy-section')) return;
    
    const leftCol = document.querySelector('.left-col');
    if (!leftCol) return;
    
    const fantasyCard = document.createElement('div');
    fantasyCard.className = 'card';
    fantasyCard.id = 'fantasy-section';
    fantasyCard.style.border = '3px solid #ff69b4';
    fantasyCard.style.background = 'linear-gradient(135deg, rgba(255,105,180,0.15), rgba(128,0,128,0.15))';
    
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
        <i class="fas fa-magic"></i>
        <h3>✨ MODES FANTASTIQUES (9 Nouveaux)</h3>
        <span class="badge" style="background: #ff69b4;">DRAGON • VAMPIRE • DÉESSE</span>
    `;
    
    const body = document.createElement('div');
    body.className = 'card-body';
    
    body.innerHTML = `
        <div class="toggle-container">
            <label class="switch">
                <input type="checkbox" id="enableFantasyMode">
                <span class="slider"></span>
            </label>
            <span class="switch-label">Activer un mode fantastique</span>
        </div>
        
        <div id="fantasyOptions" style="margin-top: 15px; display: none;">
            
            <div class="input-group">
                <label style="color: #ff69b4;">🧚 CHOISIS TON MODE FANTASTIQUE</label>
                <select id="fantasyType" class="full-width" style="border-color: #ff69b4;">
                    <option value="vampire">🧛 VAMPIRE - Crocs, cape, chauves-souris</option>
                    <option value="werewolf">🐺 LOUP-GAROU - Griffes, hurlement, transformation</option>
                    <option value="demon">😈 DÉMON - Cornes, ailes, feu infernal</option>
                    <option value="angel">😇 ANGE - Ailes blanches, halo, plumes</option>
                    <option value="ghost">👻 FANTÔME - Semi-transparent, lévitation</option>
                    <option value="dragon">🐉 DRAGON - Écailles, souffle de feu, ailes géantes</option>
                    <option value="wizard">🧙 SORCIER - Baguette, sorts, potions</option>
                    <option value="darkfairy">🦋 FÉE DES TÉNÈBRES - Ailes sombres, poudre noire</option>
                    <option value="goddess">👑 DÉESSE - Aura dorée, couronne divine</option>
                </select>
            </div>
            
            <div class="info-note" style="margin-top: 15px; background: rgba(255,105,180,0.2); text-align: center;">
                <i class="fas fa-dragon"></i> 
                <div style="margin-top: 10px;">
                    <strong>⚡ TRANSFORMATIONS SPECTACULAIRES ⚡</strong><br>
                    • Vampire → Chauves-souris holographiques, cape qui se transforme<br>
                    • Loup-Garou → Transformation progressive, yeux jaunes, griffes<br>
                    • Démon → Cornes qui grandissent, ailes démoniaques, feu<br>
                    • Ange → Ailes blanches, halo lumineux, plumes qui tombent<br>
                    • Fantôme → Corps semi-transparent, lévitation, brume<br>
                    • Dragon → Souffle de feu, ailes géantes, écailles brillantes<br>
                    • Sorcier → Sorts lumineux, cercles magiques, potions<br>
                    • Fée des Ténèbres → Ailes sombres, poudre noire, lune rouge<br>
                    • Déesse → Aura dorée, couronne divine, lumière céleste
                </div>
            </div>
        </div>
    `;
    
    fantasyCard.appendChild(header);
    fantasyCard.appendChild(body);
    
    // Insérer avant le bouton générer
    const generateBtn = document.querySelector('.generate-btn');
    if (generateBtn) {
        generateBtn.parentNode.insertBefore(fantasyCard, generateBtn);
    } else {
        leftCol.appendChild(fantasyCard);
    }
}

function setupFantasyEvents() {
    document.getElementById('enableFantasyMode')?.addEventListener('change', function() {
        const options = document.getElementById('fantasyOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
    });
}

function generateFantasyTransformations() {
    if (!document.getElementById('enableFantasyMode')?.checked) return '';
    
    const type = document.getElementById('fantasyType')?.value || 'vampire';
    const fantasyData = window.fantasyModesData?.[type];
    if (!fantasyData) return '';
    
    let fantasyText = `\n\n✨ TRANSFORMATION FANTASTIQUE - MODE ${fantasyData.name.toUpperCase()} ✨\n`;
    fantasyText += `\n🎭 TYPE : ${fantasyData.name}\n`;
    fantasyText += `\n👗 TENUE : ${fantasyData.finalOutfit.description}\n`;
    fantasyText += `- Couleurs : ${fantasyData.finalOutfit.colors.join(', ')}\n`;
    fantasyText += `- Éléments : ${fantasyData.finalOutfit.elements.join(', ')}\n`;
    fantasyText += `- Accessoires : ${fantasyData.finalOutfit.accessories.join(', ')}\n`;
    
    fantasyText += `\n🔄 TRANSFORMATIONS SPÉCIALES :\n`;
    for (const [key, value] of Object.entries(fantasyData.transformations)) {
        fantasyText += `- ${value}\n`;
    }
    
    fantasyText += `\n💃 DANSE : ${fantasyData.dance}\n`;
    fantasyText += `\n🌌 DÉCOR : ${fantasyData.background}\n`;
    
    return fantasyText;
}

// Initialisation
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFantasyConfig);
} else {
    initFantasyConfig();
}
