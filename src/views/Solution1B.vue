<template>
  <div class="solution">
    <div class="header">
      <h1>💡 Solution 1B - Affichage dynamique temps réel</h1>
      <router-link to="/exercice1b" class="btn-back">Retour à l'exercice</router-link>
    </div>
    
    <div class="result">
      <h2>✅ Affichage dynamique en action :</h2>
      <div class="demo">
        
        <!-- ✅ EXERCICE 1: Affichage simple avec REF -->
        <div class="sub-exercise">
          <h4>1️⃣ Affichage simple avec <code>ref</code></h4>
          
          <div class="input-section">
            <label>Tape quelque chose :</label>
            <!-- ✅ v-model avec ref simple -->
            <input 
              type="text" 
              v-model="texteSimple" 
              placeholder="Écris ici et regarde en dessous..."
            >
          </div>
          
          <div class="output-section">
            <!-- ✅ Affichage direct de la ref -->
            <p>Tu as écrit : <span class="highlight">{{ texteSimple }}</span></p>
            <!-- ✅ Propriété .length directement sur la ref -->
            <p>Nombre de caractères : <span class="highlight">{{ texteSimple.length }}</span></p>
            <!-- ✅ Condition simple -->
            <p v-if="texteSimple.length > 10" class="info">
              🎉 Wow, plus de 10 caractères !
            </p>
          </div>
        </div>
        
        <!-- ✅ EXERCICE 2: Transformations avec COMPUTED -->
        <div class="sub-exercise">
          <h4>2️⃣ Transformations automatiques avec <code>computed</code></h4>
          
          <div class="input-section">
            <label>Ton nom complet :</label>
            <input 
              type="text" 
              v-model="nom" 
              placeholder="Jean Pierre Dupont"
            >
          </div>
          
          <div class="output-section">
            <!-- ✅ Computed: calculs automatiques -->
            <p>En majuscules : <span class="highlight">{{ nomMajuscules }}</span></p>
            <p>En minuscules : <span class="highlight">{{ nomMinuscules }}</span></p>
            <p>Initiales : <span class="highlight">{{ initiales }}</span></p>
            <p>Inversé : <span class="highlight">{{ nomInverse }}</span></p>
            <p>Nombre de mots : <span class="highlight">{{ nombreMots }}</span></p>
            <!-- ✅ Computed avec condition -->
            <p>Type : <span :class="typeNomClasse">{{ typeNom }}</span></p>
          </div>
        </div>
        
        <!-- ✅ EXERCICE 3: Validation email avec COMPUTED -->
        <div class="sub-exercise">
          <h4>3️⃣ Validation temps réel avec <code>computed</code></h4>
          
          <div class="input-section">
            <label>Adresse email :</label>
            <input 
              type="email" 
              v-model="email" 
              placeholder="test@example.com"
              :class="{ 'input-valid': emailValide, 'input-invalid': email && !emailValide }"
            >
          </div>
          
          <div class="output-section">
            <!-- ✅ Computed pour validation -->
            <p>Statut : 
              <span 
                class="status"
                :class="{
                  'status-valid': emailValide,
                  'status-invalid': email && !emailValide,
                  'status-neutral': !email
                }"
              >
                {{ statutEmail }}
              </span>
            </p>
            <p>Domaine : <span class="highlight">{{ domaineEmail }}</span></p>
            <p>Longueur : <span class="highlight">{{ email.length }} caractères</span></p>
            <!-- ✅ Suggestions automatiques -->
            <div v-if="email && !emailValide" class="suggestions">
              <p><strong>💡 Suggestions :</strong></p>
              <ul>
                <li v-if="!email.includes('@')">Il manque le symbole @</li>
                <li v-if="!domaineEmail">Il manque le domaine après @</li>
                <li v-if="domaineEmail && !domaineEmail.includes('.')">Le domaine doit contenir un point</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- ✅ EXERCICE 4: Recherche en temps réel avec COMPUTED -->
        <div class="sub-exercise">
          <h4>4️⃣ Recherche dynamique avec <code>computed</code></h4>
          
          <div class="input-section">
            <label>Rechercher un pays :</label>
            <input 
              type="text" 
              v-model="recherche" 
              placeholder="France, Italie, Esp..."
            >
          </div>
          
          <div class="output-section">
            <!-- ✅ Computed pour comptage -->
            <p>Résultats : <span class="highlight">{{ paysFiltrés.length }} pays trouvés</span></p>
            
            <!-- ✅ Affichage conditionnel -->
            <div v-if="recherche && paysFiltrés.length === 0" class="no-results">
              😔 Aucun pays trouvé pour "{{ recherche }}"
            </div>
            
            <!-- ✅ Liste filtrée avec v-for + computed -->
            <ul v-else-if="paysFiltrés.length > 0" class="results-list">
              <li 
                v-for="pays in paysFiltrés" 
                :key="pays"
                class="result-item"
              >
                <!-- ✅ Mise en surbrillance du texte recherché -->
                <span v-html="highlightMatch(pays, recherche)"></span>
                <span class="country-info">{{ getCountryInfo(pays) }}</span>
              </li>
            </ul>
            
            <div v-else class="placeholder">
              🔍 Tape pour rechercher parmi {{ pays.length }} pays...
            </div>
          </div>
        </div>
        
        <!-- ✅ BONUS: Watch pour actions -->
        <div class="sub-exercise">
          <h4>🎁 Bonus : <code>watch</code> pour les actions</h4>
          
          <div class="input-section">
            <label>Recherche avec historique :</label>
            <input 
              type="text" 
              v-model="rechercheAvecHistorique" 
              placeholder="Tape et regarde l'historique..."
            >
          </div>
          
          <div class="output-section">
            <p>Dernières recherches :</p>
            <ul class="search-history">
              <li v-for="(item, index) in historiqueRecherche" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="code-explanation">
      <h2>📚 Code expliqué - ref vs computed vs watch :</h2>
      
      <div class="code-block">
        <h3>🎯 1. REF - Variable simple réactive</h3>
        <pre><code>&lt;!-- ✅ Usage : Stockage direct de données input --&gt;
&lt;input v-model="texteSimple"&gt;
&lt;p&gt;{{ texteSimple }}&lt;/p&gt;

&lt;script setup&gt;
const texteSimple = ref('')
// ✅ Utilisation : stockage direct, pas de calcul
&lt;/script&gt;</code></pre>
      </div>
      
      <div class="code-block">
        <h3>🧮 2. COMPUTED - Calculs automatiques</h3>
        <pre><code>&lt;!-- ✅ Usage : Transformations basées sur d'autres variables --&gt;
&lt;input v-model="nom"&gt;
&lt;p&gt;{{ nomMajuscules }}&lt;/p&gt;

&lt;script setup&gt;
const nom = ref('')

// ✅ Se recalcule automatiquement quand 'nom' change
const nomMajuscules = computed(() =&gt; nom.value.toUpperCase())

// ✅ Peut dépendre de plusieurs variables
const emailValide = computed(() =&gt; 
  email.value.includes('@') && email.value.includes('.')
)

// ✅ Filtrage de listes
const paysFiltrés = computed(() =&gt; 
  pays.filter(p =&gt; p.toLowerCase().includes(recherche.value.toLowerCase()))
)
&lt;/script&gt;</code></pre>
      </div>
      
      <div class="code-block">
        <h3>👁️ 3. WATCH - Réactions aux changements</h3>
        <pre><code>&lt;!-- ✅ Usage : Actions quand quelque chose change --&gt;
&lt;input v-model="rechercheAvecHistorique"&gt;

&lt;script setup&gt;
const rechercheAvecHistorique = ref('')
const historiqueRecherche = ref([])

// ✅ Watch : exécute du code quand la variable change
watch(rechercheAvecHistorique, (nouvelleValeur) =&gt; {
  if (nouvelleValeur.length &gt; 2) {
    historiqueRecherche.value.unshift(nouvelleValeur)
    // Garde seulement les 5 dernières
    historiqueRecherche.value = historiqueRecherche.value.slice(0, 5)
  }
})
&lt;/script&gt;</code></pre>
      </div>
      
      <div class="explanations">
        <h3>🔍 Quand utiliser quoi :</h3>
        
        <div class="concept">
          <h4>📦 ref() - Variables simples</h4>
          <ul>
            <li><strong>✅ Quand :</strong> Stocker des données input directement</li>
            <li><strong>✅ Exemple :</strong> Texte tapé, checkbox cochée, sélection</li>
            <li><strong>✅ Code :</strong> <code>const nom = ref('')</code></li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>🧮 computed() - Calculs automatiques</h4>
          <ul>
            <li><strong>✅ Quand :</strong> Transformer/calculer basé sur d'autres variables</li>
            <li><strong>✅ Exemple :</strong> Validation, filtrage, formatage</li>
            <li><strong>✅ Code :</strong> <code>const emailValide = computed(() => ...)</code></li>
            <li><strong>🎯 Bonus :</strong> Mise en cache automatique !</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>👁️ watch() - Actions et effets de bord</h4>
          <ul>
            <li><strong>✅ Quand :</strong> Faire des actions quand quelque chose change</li>
            <li><strong>✅ Exemple :</strong> API calls, localStorage, logs</li>
            <li><strong>✅ Code :</strong> <code>watch(variable, (newVal) => { /* action */ })</code></li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ✅ 1. IMPORTS
import { ref, computed, watch } from 'vue'

// ✅ 2. VARIABLES REF - Stockage direct des inputs
const texteSimple = ref<string>('')
const nom = ref<string>('')
const email = ref<string>('')
const recherche = ref<string>('')
const rechercheAvecHistorique = ref<string>('')

// ✅ 3. DONNÉES STATIQUES pour la recherche
const pays = [
  'France', 'Italie', 'Espagne', 'Allemagne', 'Portugal', 'Grèce',
  'Belgique', 'Pays-Bas', 'Suisse', 'Autriche', 'Pologne', 'Hongrie',
  'République Tchèque', 'Slovaquie', 'Roumanie', 'Bulgarie', 'Croatie',
  'Slovénie', 'Estonie', 'Lettonie', 'Lituanie', 'Finlande', 'Suède',
  'Norvège', 'Danemark', 'Irlande', 'Royaume-Uni', 'Islande', 'Malte'
]

// ✅ 4. COMPUTED - Transformations automatiques du nom
const nomMajuscules = computed((): string => nom.value.toUpperCase())

const nomMinuscules = computed((): string => nom.value.toLowerCase())

const initiales = computed((): string => {
  return nom.value
    .split(' ')
    .map(mot => mot.charAt(0))
    .join('.')
    .toUpperCase()
})

const nomInverse = computed((): string => 
  nom.value.split('').reverse().join('')
)

const nombreMots = computed((): number => 
  nom.value.trim() ? nom.value.trim().split(' ').length : 0
)

const typeNom = computed((): string => {
  if (nombreMots.value === 0) return 'Vide'
  if (nombreMots.value === 1) return 'Prénom seul'
  if (nombreMots.value === 2) return 'Prénom + nom'
  return 'Nom complet'
})

const typeNomClasse = computed((): string => {
  const type = typeNom.value
  if (type === 'Vide') return 'status-neutral'
  if (type === 'Prénom seul') return 'status-warning'
  return 'status-valid'
})

// ✅ 5. COMPUTED - Validation email
const emailValide = computed((): boolean => {
  if (!email.value) return false
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email.value)
})

const statutEmail = computed((): string => {
  if (!email.value) return 'En attente...'
  return emailValide.value ? '✅ Valide' : '❌ Invalide'
})

const domaineEmail = computed((): string => {
  const parts = email.value.split('@')
    return parts[1] ?? '' 
})

// ✅ 6. COMPUTED - Recherche de pays filtrée
const paysFiltrés = computed((): string[] => {
  if (!recherche.value) return []
  
  return pays.filter(pays => 
    pays.toLowerCase().includes(recherche.value.toLowerCase())
  )
})

// ✅ 7. FONCTIONS UTILITAIRES
const highlightMatch = (texte: string, recherche: string): string => {
  if (!recherche) return texte
  
  const regex = new RegExp(`(${recherche})`, 'gi')
  return texte.replace(regex, '<mark>$1</mark>')
}

const getCountryInfo = (pays: string): string => {
  const infos: Record<string, string> = {
    'France': '🇫🇷 Capital: Paris',
    'Italie': '🇮🇹 Capital: Rome', 
    'Espagne': '🇪🇸 Capital: Madrid',
    'Allemagne': '🇩🇪 Capital: Berlin'
  }
  return infos[pays] || '🌍'
}

// ✅ 8. WATCH - Historique des recherches
const historiqueRecherche = ref<string[]>([])

watch(rechercheAvecHistorique, (nouvelleValeur: string) => {
  // ✅ Watch : réaction aux changements pour faire des actions
  if (nouvelleValeur.length > 2) {
    // Ajoute au début de l'historique
    historiqueRecherche.value.unshift(nouvelleValeur)
    
    // Garde seulement les 5 dernières recherches
    historiqueRecherche.value = historiqueRecherche.value.slice(0, 5)
    
    // Enlève les doublons
    historiqueRecherche.value = [...new Set(historiqueRecherche.value)]
  }
})
</script>

<style scoped>
/* Styles de base identiques + styles spécifiques */
.solution {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.btn-back {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.result {
  background: #f0fff4;
  border: 2px solid #48bb78;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.demo {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
}

.sub-exercise {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #fafafa;
  border-radius: 8px;
  border-left: 4px solid #4299e1;
}

.sub-exercise h4 {
  margin-bottom: 1rem;
  color: #2d3748;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.input-section {
  margin-bottom: 1rem;
}

.input-section label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #4a5568;
}

.input-section input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.2s;
}

.input-section input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

/* ✅ Classes conditionnelles pour les inputs */
.input-valid {
  border-color: #48bb78 !important;
  box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.1) !important;
}

.input-invalid {
  border-color: #f56565 !important;
  box-shadow: 0 0 0 3px rgba(245, 101, 101, 0.1) !important;
}

.output-section {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.output-section p {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.highlight {
  background: #fed7e2;
  color: #b83280;
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
}

/* ✅ Statuts colorés */
.status {
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
}

.status-valid {
  background: #c6f6d5;
  color: #22543d;
}

.status-invalid {
  background: #fed7d7;
  color: #742a2a;
}

.status-neutral {
  background: #e2e8f0;
  color: #4a5568;
}

.status-warning {
  background: #fef5e7;
  color: #744210;
}

.info {
  background: #bee3f8;
  color: #2a69ac;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.suggestions {
  background: #fef5e7;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  border-left: 4px solid #ed8936;
}

.suggestions ul {
  margin-top: 0.5rem;
  color: #744210;
}

.results-list {
  max-height: 200px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 0.5rem;
}

.result-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 3px;
  margin-bottom: 0.25rem;
  transition: background 0.2s;
}

.result-item:hover {
  background: #f7fafc;
}

.country-info {
  font-size: 0.875rem;
  color: #718096;
}

.no-results, .placeholder {
  text-align: center;
  color: #a0aec0;
  font-style: italic;
  padding: 1rem;
}

.search-history {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.5rem;
  max-height: 120px;
  overflow-y: auto;
}

.search-history li {
  padding: 0.25rem 0.5rem;
  border-bottom: 1px solid #f7fafc;
  color: #4a5568;
}

/* Code explanation styles */
.code-explanation {
  background: #fafafa;
  border-radius: 8px;
  padding: 1.5rem;
}

.code-block {
  margin-bottom: 1.5rem;
}

.code-block pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.4;
}

.concept {
  background: white;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #667eea;
}

.concept h4 {
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.concept ul {
  margin-top: 0.5rem;
  color: #4a5568;
}

/* Highlight pour la recherche */
:deep(mark) {
  background: #fbbf24;
  color: #78350f;
  padding: 0.125rem 0.25rem;
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 768px) {
  .sub-exercise {
    padding: 1rem;
  }
  
  .result-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .country-info {
    margin-top: 0.25rem;
  }
}
</style>