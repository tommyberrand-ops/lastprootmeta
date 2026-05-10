// equilibriste-config.js - Configuration pour l'interface du personnage Équilibriste

function initEquilibristeConfig() {
    console.log("🎪 Initialisation de la configuration Équilibriste...");
    
    // Créer la section dans l'interface si elle n'existe pas
    createEquilibristeSection();
    
    // Ajouter les écouteurs d'événements
    setupEquilibristeEvents();
}

function createEquilibristeSection() {
    // Vérifier si la section existe déjà
    if (document.getElementById('equilibriste-section')) return;
    
    // Trouver un endroit où insérer la section (après la section des personnages par exemple)
    const leftCol = document.querySelector('.left-col');
    if (!leftCol) return;
    
    // Créer la nouvelle carte
    const equilibristeCard = document.createElement('div');
    equilibristeCard.className = 'card';
    equilibristeCard.id = 'equilibriste-section';
    equilibristeCard.style.border = '3px solid #ff6b6b';
    equilibristeCard.style.background = 'linear-gradient(135deg, rgba(255,107,107,0.15), rgba(255,140,0,0.15))';
    
    // En-tête
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
        <i class="fas fa-balance-scale"></i>
        <h3>🎪 ÉQUILIBRISTE</h3>
        <span class="badge" style="background: #ff6b6b;">OBJET PERSONNALISABLE</span>
    `;
    
    // Corps
    const body = document.createElement('div');
    body.className = 'card-body';
    
    body.innerHTML = `
        <div class="toggle-container">
            <label class="switch">
                <input type="checkbox" id="enableEquilibriste">
                <span class="slider"></span>
            </label>
            <span class="switch-label">Activer le personnage Équilibriste</span>
        </div>
        
        <div id="equilibristeOptions" style="margin-top: 15px; display: none;">
            <div class="info-note" style="margin-bottom: 15px; background: rgba(255,107,107,0.2); border-left-color: #ff6b6b;">
                <i class="fas fa-info-circle"></i> 
                <strong>INSTRUCTIONS :</strong> Elle danse sensuellement avec un objet en équilibre sur la tête. À la dernière seconde, l'objet tombe, elle le rattrape, la vidéo s'éteint.
            </div>
            
            <div class="input-group">
                <label style="color: #ff6b6b; font-weight: bold;">📦 OBJET À ÉQUILIBRER</label>
                <input type="text" id="equilibreObjet" placeholder="Ex: un pot de Nutella, une bougie, un chapeau, une bouteille..." value="un pot de Nutella" class="full-width">
                <small style="color: #aaa; display: block; margin-top: 5px;">Écris ce que tu veux, elle l'équilibrera sur sa tête !</small>
            </div>
            
            <div class="checkbox-grid" style="grid-template-columns: 1fr;">
                <label class="checkbox-label" style="color: #ff6b6b;">
                    <input type="checkbox" id="equilibreRegardObjet" checked> 👁️ Elle regarde souvent l'objet (regards vers le haut)
                </label>
                <label class="checkbox-label" style="color: #ff6b6b;">
                    <input type="checkbox" id="equilibreSuspense" checked> ⏱️ Activer le suspense (ralentis avant la chute)
                </label>
                <label class="checkbox-label" style="color: #ff6b6b;">
                    <input type="checkbox" id="equilibreRatrappe" checked> 👐 Elle rattrape l'objet (sinon il tombe au sol)
                </label>
            </div>
            
            <div class="color-row" style="margin-top: 15px;">
                <div class="color-item">
                    <label style="color: #ff6b6b;">⏰ MOMENT DE LA CHUTE</label>
                    <select id="equilibreChuteMoment" class="full-width" style="border-color: #ff6b6b;">
                        <option value="fin">Dernière seconde (suspense max)</option>
                        <option value="avant-derniere">Avant-dernière seconde (puis freeze)</option>
                        <option value="ralenti">Au ralenti pendant 2 secondes</option>
                    </select>
                </div>
            </div>
            
            <div class="info-note" style="margin-top: 15px; background: rgba(255,107,107,0.2); text-align: center; padding: 15px;">
                <i class="fas fa-eye"></i> 
                <div style="margin-top: 10px; font-size: 1.2em; color: #ff6b6b;">
                    ⚠️ <strong>FIN SUSPENSE :</strong> L'objet tombe → elle le rattrape → NOIR
                </div>
                <small style="display: block; margin-top: 10px;">Le public retient son souffle !</small>
            </div>
        </div>
    `;
    
    equilibristeCard.appendChild(header);
    equilibristeCard.appendChild(body);
    
    // Insérer la carte dans la colonne de gauche (par exemple après la section personnages)
    const uploadCard = document.querySelector('.card:nth-child(2)'); // Carte upload
    if (uploadCard) {
        uploadCard.parentNode.insertBefore(equilibristeCard, uploadCard.nextSibling);
    } else {
        leftCol.appendChild(equilibristeCard);
    }
}

function setupEquilibristeEvents() {
    // Toggle principal
    document.getElementById('enableEquilibriste')?.addEventListener('change', function() {
        const options = document.getElementById('equilibristeOptions');
        if (options) options.style.display = this.checked ? 'block' : 'none';
        
        // Optionnel : sélectionner automatiquement le personnage équilibriste
        if (this.checked) {
            selectEquilibristeCharacter();
        }
    });
}

function selectEquilibristeCharacter() {
    // Chercher le personnage "Équilibriste" dans la grille
    const cards = document.querySelectorAll('.character-card');
    for (let card of cards) {
        if (card.textContent.includes('Équilibriste') || card.textContent.includes('equilibriste')) {
            card.click(); // Simuler un clic pour le sélectionner
            break;
        }
    }
}

// Initialiser au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEquilibristeConfig);
} else {
    initEquilibristeConfig();
}
