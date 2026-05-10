// script.js - VERSION OPTIMISÉE (Part1<1000, Part2<1000, Full<2000)
// TENUE FINALE : COMPLÈTE (éléments + accessoires sans troncature)

console.log("🚀 Script OPTIMISÉ chargé");

if (typeof personnageActions !== 'undefined' && !window.personnageActions) {
    window.personnageActions = personnageActions;
    window.getRandomDecor = getRandomDecor;
    window.getRandomAction = getRandomAction;
}

const selfieDances = {
    'sensuelle': 'ondulations lentes, hanches, regards intenses',
    'sexy': 'mouvements bassin, clins d\'œil',
    'charme': 'mouvements fluides, sourires complices',
    'energetique': 'mouvements vifs et dynamiques',
    'lente': 'mouvements très lents, hypnotiques',
    'naturelle': 'mouvements naturels et authentiques'
};

class PromptGenerator {
    constructor() {
        this.typeMapping = {
            'default': 'pirate', 'fairy': 'fairy', 'vampire': 'vampire', 'elf': 'elf',
            'superman': 'superman', 'cowgirl': 'cowgirl', 'pirate': 'pirate',
            'princess': 'princess', 'siren': 'siren', 'cavewoman': 'cavewoman',
            'athena': 'athena', 'avatar': 'avatar', 'avatarwarrior': 'avatarwarrior', 'avatarchief': 'avatarchief'
        };
    }

    getActionType(k) { let t = countries[k]?.type || k; return window.personnageActions?.[t] ? t : (this.typeMapping[t] || 'default'); }
    getRandomDecor(k) { return window.getRandomDecor?.(k) || "studio pro"; }
    getRandomAction(k) { return window.getRandomAction?.(k) || "danse sensuelle"; }

    getUnifiedDecor() {
        const c = document.querySelector('.character-card.selected');
        if (!c) return "studio pro";
        const custom = document.getElementById('enableCustomDecor')?.checked;
        const customText = document.getElementById('customDecorText')?.value;
        if (custom && customText.trim()) return customText.trim();
        const decor = this.getRandomDecor(this.getActionType(c.dataset.country));
        return (decor && decor !== "studio pro") ? decor : (countries[c.dataset.country]?.background || "studio pro");
    }

    getFinaleGesture() {
        if (document.getElementById('enableAnimalBabyMode')?.checked) {
            const t = document.getElementById('animalBabyType')?.value || 'chiot';
            return `FINALE: serre ${t === 'chiot' ? 'son chiot' : 'son chaton'} très fort, bisou front, regard caméra, FREEZE`;
        }
        const type = document.getElementById('finaleType')?.value || 'bisou';
        const map = {
            'bisou': 'envoie un dernier bisou langoureux', 'coeur': 'forme un coeur avec les mains',
            'clin': 'clin d\'œil appuyé', 'cascade': 'cascade de bisous',
            'revelation': 'écarte les bras en révélation', 'viens': 'geste "viens vers moi"',
            'freeze': 'fixe la caméra intensément', 'souffle': 'souffle sensuel', 'epaule': 'découvre son épaule'
        };
        return map[type] || 'envoie un dernier bisou';
    }

    getFinalOption() {
        const opt = document.getElementById('finalOption')?.value || 'freeze';
        const d = document.getElementById('finalMaintien')?.value || '2';
        const e = document.getElementById('finalEmotion')?.value || 'satisfaite';
        const m = { 'freeze': `freeze ${d}s, sourire ${e}`, 'fondu': `fondu noir ${d}s`, 'fonduBlanc': `fondu blanc ${d}s`, 'zoom': `zoom visage ${d}s`, 'flou': `flou progressif ${d}s` };
        return m[opt];
    }

    getPublicInteraction() {
        const i = document.getElementById('finalInteraction')?.value || 'regard';
        const m = { 'regard': 'regard dans les yeux', 'sourire': 'sourire éclatant', 'clin': 'clin d\'œil', 'main': 'main tendue', 'tous': 'alterne regard/sourire/clin' };
        return m[i];
    }

    generateScript() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const t = document.getElementById('scriptText')?.value;
        if (!t) return '';
        let r = '';
        if (document.getElementById('scriptPart1')?.checked) r += `Part1:"${t}" `;
        if (document.getElementById('scriptPart2')?.checked) r += `Part2:"${t}" `;
        if (document.getElementById('scriptFinal')?.checked) r += `Fin:"${t}"`;
        return r ? `\n🗣️ ${r}` : '';
    }

    generateDialogue() {
        if (!document.getElementById('enableScript')?.checked) return '';
        const t = document.getElementById('scriptText')?.value;
        if (!t) return '';
        let r = '';
        if (document.getElementById('scriptPart2')?.checked) r += `Partie2:"${t}" `;
        if (document.getElementById('scriptFinal')?.checked) r += `Fin:"${t}"`;
        return r ? `\n🗣️ ${r}` : '';
    }

    generateSelfieDialogue() {
        if (!document.getElementById('enableScript')?.checked) return '';
        if (!document.getElementById('scriptPart1')?.checked) return '';
        const t = document.getElementById('scriptText')?.value;
        return t ? ` "${t}"` : '';
    }

    generateFloatingWords() {
        if (!document.getElementById('enableMagicTexts')?.checked) return '';
        const w = [];
        if (document.getElementById('textFollow')?.checked) w.push('"Follow Me"');
        if (document.getElementById('textLike')?.checked) w.push('"Like Me"');
        if (document.getElementById('textLuna')?.checked) w.push('"@luna_wells"');
        if (document.getElementById('textSubscribe')?.checked) w.push('"Subscribe"');
        if (document.getElementById('textLove')?.checked) w.push('"Love Me"');
        if (document.getElementById('textWatch')?.checked) w.push('"Watch Me"');
        if (document.getElementById('textHeart')?.checked) w.push('❤️');
        if (document.getElementById('textStar')?.checked) w.push('✨');
        const ct = document.getElementById('customText')?.value;
        if (ct) w.push(`"${ct}"`);
        if (w.length === 0) return '';
        const eff = document.getElementById('textEffect')?.value || 'neon';
        const mov = document.getElementById('textMovement')?.value || 'float';
        const col = document.getElementById('textColor')?.value;
        const col2 = document.getElementById('textColor2')?.value;
        const sz = { small:'petits', medium:'moyens', large:'grands', xlarge:'très grands' }[document.getElementById('textSize')?.value] || 'moyens';
        const qty = { few:'2-3', medium:'4-6', many:'7-10' }[document.getElementById('textQuantity')?.value] || '4-6';
        return `\n✨ Textes: ${w.join(', ')} - ${eff} - ${mov} - ${sz} - ${qty}`;
    }

    generateAlien() {
        if (!document.getElementById('enableAlienMode')?.checked) return '';
        let r = '\n👽 ALIEN:';
        if (document.getElementById('alienSkin')?.checked) r += ` peau ${document.getElementById('alienSkinColor')?.value || 'argent'}`;
        if (document.getElementById('alienEyes')?.checked) r += ` yeux ${document.getElementById('alienEyesColor')?.value || 'rouges'}`;
        if (document.getElementById('alienAntenna')?.checked) r += ` antennes`;
        if (document.getElementById('alienGlow')?.checked) r += ` lueur ${document.getElementById('glowColor')?.value || 'bleue'}`;
        if (document.getElementById('alienTattoos')?.checked) r += ` tatouages`;
        if (document.getElementById('alienHolograms')?.checked) r += ` hologrammes`;
        if (document.getElementById('alienVoice')?.checked) r += ` voix modulée`;
        if (document.getElementById('alienGravity')?.checked) r += ` apesanteur`;
        if (document.getElementById('alienTeleportation')?.checked) r += ` téléportation`;
        return r !== '\n👽 ALIEN:' ? r : '';
    }

    generateAvatar() {
        if (!document.getElementById('enableAvatarMode')?.checked) return '';
        let r = '\n🔵 AVATAR:';
        if (document.getElementById('avatarKeepFace')?.checked) r += ` visage humain conservé`;
        if (document.getElementById('avatarFullBody')?.checked) r += ` corps Na\'vi ${document.getElementById('avatarSkinTone')?.value || 'bleu'}`;
        if (document.getElementById('avatarEars')?.checked) r += ` oreilles pointues`;
        if (document.getElementById('avatarTail')?.checked) r += ` queue`;
        if (document.getElementById('avatarStripes')?.checked) r += ` rayures`;
        if (document.getElementById('avatarBioluminescence')?.checked) r += ` bioluminescence`;
        if (document.getElementById('avatarTattoos')?.checked) r += ` peintures tribales`;
        return r !== '\n🔵 AVATAR:' ? r : '';
    }

    generateAnimal() {
        if (!document.getElementById('enableAnimalMode')?.checked || typeof window.animalData === 'undefined') return '';
        const t = document.getElementById('animalType')?.value || 'chatte';
        const a = window.animalData[t];
        if (!a) return '';
        let r = `\n🐾 ANIMAL: ${a.name}`;
        if (document.getElementById('animalKeepFace')?.checked) r += ` (visage humain)`;
        if (document.getElementById('animalEars')?.checked) r += `, oreilles`;
        if (document.getElementById('animalTail')?.checked) r += `, queue`;
        if (document.getElementById('animalFur')?.checked) r += `, fourrure`;
        if (document.getElementById('animalEyes')?.checked) r += `, yeux`;
        if (document.getElementById('animalClaws')?.checked) r += `, griffes`;
        const c = document.getElementById('animalColor')?.value;
        if (c) r += `, couleur ${c}`;
        return r;
    }

    generateAnimalBaby() {
        if (!document.getElementById('enableAnimalBabyMode')?.checked) return '';
        const t = document.getElementById('animalBabyType')?.value || 'chiot';
        const i = { tendre:'TENDRE', joueur:'JOUEUR', mixte:'MIXTE' }[document.getElementById('animalBabyIntensity')?.value] || 'TENDRE';
        const p = { variees:'VARIÉES', fixe:'FIXE', dynamiques:'DYNAMIQUES' }[document.getElementById('animalBabyPositions')?.value] || 'VARIÉES';
        return `\n🐶 BÉBÉ: ${t === 'chiot' ? 'chiot' : 'chaton'} - ${i} - pos ${p}`;
    }

    generateMirror() {
        if (!document.getElementById('enableMirrorMode')?.checked) return '';
        const t = { classique:'identique', tenue_inversee:'couleurs inversées', regard_different:'regard intense' }[document.getElementById('mirrorType')?.value] || 'identique';
        const d = { synchronise:'synchro', miroir:'miroir', complementaire:'complémentaire', sensuel:'sensuel' }[document.getElementById('mirrorDuoStyle')?.value] || 'synchro';
        const p = document.getElementById('mirrorPoseFinale')?.value || 'cote_a_cote';
        return `\n🪞 MIROIR: clone ${t} - danse ${d}`;
    }

    generateFantasy() {
        if (typeof window.generateFantasyTransformations === 'function') return window.generateFantasyTransformations();
        return '';
    }

    generateSpecialFeatures() {
        let r = '';
        if (document.getElementById('enable-eyes')?.checked) {
            const g = document.getElementById('eye-left-select')?.value || 'bleu';
            const d = document.getElementById('eye-right-select')?.value || 'marron';
            r += `\n👁️ Yeux: ${g}/${d}`;
        }
        if (document.getElementById('enable-skin')?.checked) {
            const c = document.getElementById('skin-color-select')?.value || 'blanc';
            r += `\n🎨 Taches: ${c}`;
        }
        return r;
    }

    generateEffects() {
        const e = [];
        if (document.getElementById('effectFeu')?.checked) e.push('flammes');
        if (document.getElementById('effectEau')?.checked) e.push('vagues');
        if (document.getElementById('effectGlace')?.checked) e.push('glace');
        if (document.getElementById('effectEclairs')?.checked) e.push('éclairs');
        if (document.getElementById('effectPapillons')?.checked) e.push('papillons');
        if (document.getElementById('effectPlumes')?.checked) e.push('plumes');
        if (document.getElementById('effectLaser')?.checked) e.push('lasers');
        if (document.getElementById('effectBulles')?.checked) e.push('bulles');
        if (e.length === 0) return '';
        return `\n💥 Effets: ${e.join(', ')}`;
    }

    generateSelfie() {
        if (!document.getElementById('enableSelfieMode')?.checked) return '';
        const d = this.generateSelfieDialogue();
        const s = document.getElementById('selfieDanceStyle')?.value || 'sensuelle';
        const desc = selfieDances[s] || 'ondulations sensuelles';
        return `selfie, bras tendu${d} en dansant (${desc}). FINALE: 5e seconde embrasse objectif → noir. Pause, main libres.`;
    }

    collectUserData() {
        const sel = document.querySelector('.character-card.selected');
        const ck = sel ? sel.dataset.country : 'spain';
        this.userData = {
            country: ck, naturalHair: document.getElementById('naturalHair')?.value || 'bruns',
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
            rapperStyle: document.getElementById('rapperStyle')?.value || 'tenue1',
            rapperluxeStyle: document.getElementById('rapperluxeStyle')?.value || 'tenue1',
            selfieMode: { enabled: document.getElementById('enableSelfieMode')?.checked || false },
            mirrorMode: { enabled: document.getElementById('enableMirrorMode')?.checked || false },
            animalBabyMode: { enabled: document.getElementById('enableAnimalBabyMode')?.checked || false }
        };
    }

    getSeductionPhrase(l) { return l <= 3 ? 'subtile' : l <= 6 ? 'charmeuse' : 'explosive'; }

    generatePart1() {
        if (this.userData.selfieMode.enabled) return this.generateSelfie();
        const c = countries[this.userData.country];
        const sed = this.getSeductionPhrase(this.userData.seductionLevel);
        let g = '';
        if (!this.userData.mirrorMode.enabled) {
            if (this.userData.gestures.regards) g += ' regards';
            if (this.userData.gestures.sourires) g += ' sourires';
            if (this.userData.gestures.clins) g += ' clins';
            if (this.userData.gestures.levres) g += ' mord lèvre';
            if (this.userData.gestures.mains) g += ' mains sur corps';
            if (this.userData.gestures.cheveux) g += ' jeux cheveux';
            if (this.userData.gestures.bisous) g += ` bisous x${this.userData.gestures.bisousCount}`;
            if (this.userData.gestures.viens) g += ` viens x${this.userData.gestures.viensCount}`;
        }
        const dm = (danceMoves && danceMoves[this.userData.country]?.part1) ? danceMoves[this.userData.country].part1[0] : 'mouvements sensuels';
        const float = this.generateFloatingWords();
        return `PART1 (0-6s): Danse ${c.dance} ${sed}. Cheveux naturels: ${this.userData.naturalHair}. Mouvements: ${dm}.${g}${float} A 5s: mains objectif → noir (se change).`;
    }

    generatePart2() {
        const c = countries[this.userData.country];
        const sed = this.getSeductionPhrase(this.userData.seductionLevel);
        const fluoInt = this.userData.fluoIntensity >= 8 ? 'éclatant' : this.userData.fluoIntensity >= 5 ? 'brillant' : 'léger';
        const isSelfie = this.userData.selfieMode.enabled;
        const isMirror = this.userData.mirrorMode.enabled;
        
        let g = '';
        if (isSelfie) {
            g = ' mains libres:';
            if (this.userData.gestures.regards) g += ' regards';
            if (this.userData.gestures.sourires) g += ' sourires';
            if (this.userData.gestures.clins) g += ' clins';
            if (this.userData.gestures.levres) g += ' mord lèvre';
            if (this.userData.gestures.mains) g += ' mains corps';
            if (this.userData.gestures.cheveux) g += ' cheveux';
            if (this.userData.gestures.bisous) g += ` bisous x${this.userData.gestures.bisousCount}`;
            if (this.userData.gestures.viens) g += ` viens x${this.userData.gestures.viensCount}`;
        } else if (isMirror) {
            g = ' PAS gestes mains (règle miroir)';
        } else {
            if (this.userData.gestures.regards) g += ' regards';
            if (this.userData.gestures.sourires) g += ' sourires';
            if (this.userData.gestures.clins) g += ' clins';
            if (this.userData.gestures.levres) g += ' mord lèvre';
            if (this.userData.gestures.mains) g += ' mains corps';
            if (this.userData.gestures.cheveux) g += ' cheveux';
            if (this.userData.gestures.bisous) g += ` bisous x${this.userData.gestures.bisousCount}`;
            if (this.userData.gestures.viens) g += ` viens x${this.userData.gestures.viensCount}`;
        }
        
        const dm = (danceMoves && danceMoves[this.userData.country]?.part2) ? danceMoves[this.userData.country].part2[0] : 'mouvements intenses';
        const action = this.getRandomAction(this.getActionType(this.userData.country));
        const decor = this.getUnifiedDecor();
        const finale = this.getFinaleGesture();
        const finalOpt = this.getFinalOption();
        const interaction = this.getPublicInteraction();
        const float = this.generateFloatingWords();
        const alien = this.generateAlien();
        const avatar = this.generateAvatar();
        const animal = this.generateAnimal();
        const animalBaby = this.generateAnimalBaby();
        const mirror = this.generateMirror();
        const fantasy = this.generateFantasy();
        const special = this.generateSpecialFeatures();
        const effects = this.generateEffects();
        const dialogue = this.generateDialogue();
        
        // TENUE FINALE COMPLÈTE (sans troncature)
        let outfit = '';
        if (c && c.finalOutfit && c.finalOutfit.colors) {
            outfit = `${c.finalOutfit.description} - Couleurs: ${c.finalOutfit.colors.join(', ')} - Éléments: ${c.finalOutfit.elements.join(', ')} - Accessoires: ${c.finalOutfit.accessories.join(', ')}`;
        } else if (this.userData.country === 'rapper' && countries.rapper?.tenues) {
            const t = countries.rapper.tenues[this.userData.rapperStyle];
            if (t) outfit = `${t.description} - Couleurs: ${t.colors.join(', ')} - Éléments: ${t.elements.join(', ')} - Accessoires: ${t.accessories.join(', ')}`;
        } else if (this.userData.country === 'rapperluxe' && countries.rapperluxe?.tenues) {
            const t = countries.rapperluxe.tenues[this.userData.rapperluxeStyle];
            if (t) outfit = `${t.description} - Couleurs: ${t.colors.join(', ')} - Éléments: ${t.elements.join(', ')} - Accessoires: ${t.accessories.join(', ')}`;
        } else {
            outfit = this.userData.finalOutfit || "tenue spectaculaire";
        }
        
        const hair = this.userData.enableFluo ? `Cheveux: ${this.userData.fluoColor} ${fluoInt}, ${this.userData.hairStyle}` : `Cheveux: ${this.userData.naturalHair}`;
        
        return `PART2 (6-12s): Suite, même visage. ${hair}. Tenue: ${outfit}. Danse ${c.dance}: ${dm}. Action: ${action}.${g}${float} Décor: ${decor}.${alien}${avatar}${animal}${animalBaby}${mirror}${fantasy}${special}${effects}${dialogue} FINALE: ${finale} puis ${finalOpt}. ${interaction}.`;
    }

    generateConsignes() {
        const c = countries[this.userData.country];
        return `CONSIGNES: Même visage | Transformation hors caméra | Ultra-réaliste | Silence | Danse ${c.name} (${c.dance}) | Rien ne change en PART2 | Finale soignée`;
    }

    generateFullPrompt() {
        this.collectUserData();
        const p1 = this.generatePart1();
        const p2 = this.generatePart2();
        const cons = this.generateConsignes();
        return { part1: p1, part2: p2, consignes: cons, full: `${p1}\n\n${p2}\n\n${cons}` };
    }
}

// ========== INITIALISATION (inchangée) ==========
function initCharacters() {
    const grid = document.getElementById('countryGrid');
    if (!grid) return;
    if (typeof countries === 'undefined') { grid.innerHTML = '<div>Erreur chargement</div>'; return; }
    let html = '';
    for (const [k, v] of Object.entries(countries)) html += `<div class="character-card" data-country="${k}">${v.name}</div>`;
    grid.innerHTML = html;
    const first = document.querySelector('.character-card');
    if (first) {
        first.classList.add('selected');
        const span = document.querySelector('#selectedCountry span');
        if (span) span.textContent = countries[first.dataset.country].name;
    }
    document.querySelectorAll('.character-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.character-card').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            const span = document.querySelector('#selectedCountry span');
            if (span) span.textContent = countries[this.dataset.country].name;
        });
    });
    const search = document.getElementById('characterSearch');
    if (search) search.addEventListener('input', e => {
        const s = e.target.value.toLowerCase();
        document.querySelectorAll('.character-card').forEach(c => c.style.display = c.textContent.toLowerCase().includes(s) ? 'block' : 'none');
    });
}

function displayPrompt(p, tab) {
    const d = document.getElementById('promptDisplay');
    if (!d) return;
    let t = '';
    if (tab === 'tabFull') t = p.full || '';
    else if (tab === 'tabPart1') t = p.part1 || '';
    else if (tab === 'tabPart2') t = p.part2 || '';
    else if (tab === 'tabConsignes') t = p.consignes || '';
    d.innerHTML = t.replace(/\n/g, '<br>');
}

function updateRecap() {
    const sel = document.querySelector('.character-card.selected');
    if (!sel) return;
    const c = countries[sel.dataset.country];
    const recap = `🌍 ${c.name} | 💃 ${c.dance} | 💇 Cheveux fluo: ${document.getElementById('enableFluo')?.checked ? 'OUI' : 'NON'}`;
    const div = document.getElementById('recapContent');
    if (div) div.innerHTML = recap;
}

function attachEvents() {
    const gen = new PromptGenerator();
    document.getElementById('generatePrompt')?.addEventListener('click', () => {
        const p = gen.generateFullPrompt();
        window.lastPrompts = p;
        const active = document.querySelector('.tab-btn.active');
        if (active) displayPrompt(p, active.id);
        updateRecap();
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayPrompt(window.lastPrompts || { full: '', part1: '', part2: '', consignes: '' }, this.id);
        });
    });
    document.getElementById('copyPrompt')?.addEventListener('click', () => {
        const t = document.getElementById('promptDisplay').innerText;
        navigator.clipboard.writeText(t).then(() => alert('✅ Copié!'));
    });
    document.getElementById('exportPrompt')?.addEventListener('click', () => {
        const t = document.getElementById('promptDisplay').innerText;
        const b = new Blob([t], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(b);
        a.download = 'prompt.txt';
        a.click();
        URL.revokeObjectURL(a.href);
    });
    document.getElementById('translatePrompt')?.addEventListener('click', () => {
        const t = document.getElementById('promptDisplay').innerText;
        if (t) window.open(`https://translate.google.com/?sl=fr&tl=en&text=${encodeURIComponent(t)}`, '_blank');
        else alert('Générez d\'abord un prompt');
    });
    document.getElementById('clearPrompt')?.addEventListener('click', () => {
        document.getElementById('promptDisplay').innerHTML = '';
        window.lastPrompts = null;
    });
    document.getElementById('generateOutfit')?.addEventListener('click', () => {
        const sel = document.querySelector('.character-card.selected');
        if (!sel) { alert('Sélectionnez un personnage'); return; }
        const c = countries[sel.dataset.country];
        if (c?.finalOutfit?.colors) {
            document.getElementById('finalOutfitDescription').value = `${c.finalOutfit.description} - Couleurs: ${c.finalOutfit.colors.join(', ')}. Éléments: ${c.finalOutfit.elements.join(', ')}. Accessoires: ${c.finalOutfit.accessories.join(', ')}`;
        } else alert('Aucune tenue prédéfinie');
    });
    document.getElementById('enableMagicTexts')?.addEventListener('change', function() { document.getElementById('magicTextsOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableCustomDecor')?.addEventListener('change', function() { document.getElementById('customDecorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAlienMode')?.addEventListener('change', function() { document.getElementById('alienOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAvatarMode')?.addEventListener('change', function() { document.getElementById('avatarOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalMode')?.addEventListener('change', function() { document.getElementById('animalOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableAnimalBabyMode')?.addEventListener('change', function() { document.getElementById('animalBabyOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableMirrorMode')?.addEventListener('change', function() { document.getElementById('mirrorOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
    document.getElementById('enableScript')?.addEventListener('change', function() { document.getElementById('scriptOptions').style.display = this.checked ? 'block' : 'none'; });
    if (typeof initFantasyConfig === 'function') initFantasyConfig();
    
    document.getElementById('fluoIntensity')?.addEventListener('input', function() {
        const v = parseInt(this.value);
        const l = ['Faible','Léger','Moyen','Brillant','Éclatant','Intense','Fulgurant','Phosphorescent','Néon','AVEUGLANT'];
        document.getElementById('intensityValue').textContent = l[v-1] || 'Éclatant';
    });
    document.getElementById('seductionLevel')?.addEventListener('input', function() {
        document.getElementById('seductionValue').textContent = this.value + '/10';
    });
    
    const setup = () => {
        const toggle = (id, opt) => document.getElementById(id)?.addEventListener('change', function() { document.getElementById(opt).style.display = this.checked ? 'block' : 'none'; });
        toggle('alienSkin', 'alienSkinOptions');
        toggle('alienEyes', 'alienEyesOptions');
        toggle('alienAntenna', 'alienAntennaOptions');
        toggle('alienGlow', 'alienGlowOptions');
        toggle('alienTattoos', 'alienTattoosOptions');
        toggle('alienHolograms', 'alienHologramsOptions');
        toggle('avatarTail', 'avatarTailOptions');
        toggle('avatarStripes', 'avatarStripesOptions');
        document.getElementById('avatarKeepFace')?.addEventListener('change', function() { if (this.checked) document.getElementById('avatarFullBody').checked = true; });
        document.getElementById('enableAnimalMode')?.addEventListener('change', () => {
            const t = document.getElementById('animalType')?.value;
            if (t && window.animalData?.[t]) {
                const sel = document.getElementById('animalColor');
                if (sel) {
                    sel.innerHTML = '';
                    window.animalData[t].couleursDisponibles.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c.charAt(0).toUpperCase() + c.slice(1); sel.appendChild(o); });
                }
            }
        });
        document.getElementById('animalType')?.addEventListener('change', () => {
            const t = document.getElementById('animalType')?.value;
            if (t && window.animalData?.[t]) {
                const sel = document.getElementById('animalColor');
                if (sel) {
                    sel.innerHTML = '';
                    window.animalData[t].couleursDisponibles.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c.charAt(0).toUpperCase() + c.slice(1); sel.appendChild(o); });
                }
            }
        });
        document.getElementById('enable-eyes')?.addEventListener('change', function() { document.getElementById('eye-controls').style.display = this.checked ? 'block' : 'none'; });
        document.getElementById('enable-skin')?.addEventListener('change', function() { document.getElementById('skin-controls').style.display = this.checked ? 'block' : 'none'; });
        document.getElementById('enableSelfieMode')?.addEventListener('change', function() { document.getElementById('selfieOptions').style.display = this.checked ? 'block' : 'none'; });
    };
    setup();
    
    const bisous = document.getElementById('gesteBisous');
    const bisousCount = document.getElementById('bisousCount');
    if (bisous && bisousCount) { bisousCount.disabled = !bisous.checked; bisous.addEventListener('change', () => bisousCount.disabled = !bisous.checked); }
    const viens = document.getElementById('gesteViens');
    const viensCount = document.getElementById('viensCount');
    if (viens && viensCount) { viensCount.disabled = !viens.checked; viens.addEventListener('change', () => viensCount.disabled = !viens.checked); }
}

function populateSpecialSelects() {
    const eyeL = document.getElementById('eye-left-select');
    const eyeR = document.getElementById('eye-right-select');
    if (eyeL && eyeR && typeof eyeColorsData !== 'undefined') {
        eyeL.innerHTML = ''; eyeR.innerHTML = '';
        eyeColorsData.forEach(c => {
            const o1 = document.createElement('option'); o1.value = c.label.toLowerCase(); o1.textContent = c.label; eyeL.appendChild(o1);
            const o2 = document.createElement('option'); o2.value = c.label.toLowerCase(); o2.textContent = c.label; eyeR.appendChild(o2);
        });
    }
    const skin = document.getElementById('skin-color-select');
    if (skin && typeof skinColorsData !== 'undefined') {
        skin.innerHTML = '';
        skinColorsData.forEach(c => { const o = document.createElement('option'); o.value = c.label.toLowerCase(); o.textContent = c.label; skin.appendChild(o); });
    }
}

function startApp() {
    populateSpecialSelects();
    initCharacters();
    attachEvents();
    console.log("✅ App prête - version OPTIMISÉE (Part1<1000, Part2<1000, Full<2000)");
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startApp);
else startApp();

window.PromptGenerator = PromptGenerator;
