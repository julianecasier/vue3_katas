<template>
  <div class="solution">
    <div class="header">
      <h1>💡 Solution 2 - Compteur interactif</h1>
      <router-link to="/exercice2" class="btn-back">Retour à l'exercice</router-link>
    </div>
    
    <div class="result">
      <h2>✅ Compteur en action :</h2>
      <div class="demo">
        
        <!-- ✅ AFFICHAGE DU COMPTEUR avec couleur conditionnelle -->
        <div class="counter-display">
          <h4>🔢 Valeur du compteur</h4>
          <!-- ✅ :class lie les classes CSS aux conditions -->
          <p 
            class="counter-value" 
            :class="{
              'negative': compteur < 0,
              'positive': compteur > 0,
              'zero': compteur === 0
            }"
          >
            Compteur: {{ compteur }}
          </p>
          
          <!-- ✅ Affichage conditionnel avec v-if -->
          <p v-if="compteur >= 10" class="special-message">
            🎉 Félicitations ! Tu as atteint {{ compteur }} !
          </p>
          
          <!-- ✅ Alternative avec v-show (garde l'élément dans le DOM) -->
          <p v-show="compteur < 0" class="warning-message">
            ⚠️ Attention ! Nombre négatif
          </p>
        </div>
        
        <!-- ✅ CONTRÔLES avec événements et attributs conditionnels -->
        <div class="counter-controls">
          <h4>🎮 Contrôles</h4>
          
          <!-- ✅ @click pour écouter les clics -->
          <button @click="increment" class="btn-increment">
            +1
          </button>
          
          <!-- ✅ :disabled désactive le bouton selon une condition -->
          <button 
            @click="decrement" 
            :disabled="compteur <= 0"
            class="btn-decrement"
          >
            -1
          </button>
          
          <button @click="reset" class="btn-reset">
            🔄 Reset
          </button>
          
          <!-- ✅ Boutons bonus -->
          <button @click="incrementBy(5)" class="btn-special">
            +5
          </button>
          
          <button @click="incrementBy(-5)" class="btn-special">
            -5
          </button>
        </div>
        
        <!-- ✅ INFORMATIONS CALCULÉES avec computed -->
        <div class="counter-info">
          <h4>📊 Informations calculées</h4>
          
          <!-- ✅ Computed: valeurs dérivées qui se mettent à jour auto -->
          <p><strong>Type:</strong> {{ typeNombre }}</p>
          <p><strong>Parité:</strong> {{ parite }}</p>
          <p><strong>Double:</strong> {{ double }}</p>
          <p><strong>Carré:</strong> {{ carre }}</p>
          <p><strong>Historique:</strong> {{ historiqueTexte }}</p>
        </div>
        
        <!-- ✅ PROGRESS BAR (bonus) -->
        <div class="progress-section" v-if="compteur > 0">
          <h4>📈 Progression vers 20</h4>
          <div class="progress-bar">
            <!-- ✅ Style binding avec calcul -->
            <div 
              class="progress-fill" 
              :style="{ width: progressionVers20 + '%' }"
            ></div>
          </div>
          <p>{{ progressionVers20.toFixed(1) }}% ({{ compteur }}/20)</p>
        </div>
        
      </div>
    </div>
    
    <div class="code-explanation">
      <h2>📚 Code expliqué :</h2>
      
      <div class="code-block">
        <h3>🏗️ Template - Affichage conditionnel</h3>
        <pre><code>&lt;!-- ✅ Classes CSS conditionnelles avec :class --&gt;
&lt;p :class="{
  'negative': compteur &lt; 0,    // Applique 'negative' si compteur &lt; 0
  'positive': compteur &gt; 0,    // Applique 'positive' si compteur &gt; 0
  'zero': compteur === 0       // Applique 'zero' si compteur = 0
}"&gt;
  Compteur: {{ compteur }}
&lt;/p&gt;

&lt;!-- ✅ Affichage conditionnel avec v-if --&gt;
&lt;p v-if="compteur &gt;= 10"&gt;Félicitations !&lt;/p&gt;

&lt;!-- ✅ Bouton désactivé selon condition --&gt;
&lt;button @click="decrement" :disabled="compteur &lt;= 0"&gt;
  -1
&lt;/button&gt;

&lt;!-- ✅ Style binding avec calcul --&gt;
&lt;div :style="{ width: progression + '%' }"&gt;&lt;/div&gt;</code></pre>
      </div>
      
      <div class="code-block">
        <h3>⚙️ Script - État et logique</h3>
        <pre><code>&lt;script setup lang="ts"&gt;
import { ref, computed } from 'vue'

// ✅ État réactif
const compteur = ref&lt;number&gt;(0)
const historique = ref&lt;number[]&gt;([])

// ✅ Actions simples
const increment = (): void =&gt; {
  compteur.value++
  historique.value.push(compteur.value)
}

const decrement = (): void =&gt; {
  compteur.value--
  historique.value.push(compteur.value)
}

const reset = (): void =&gt; {
  compteur.value = 0
  historique.value = []
}

// ✅ Computed: valeurs dérivées automatiques
const typeNombre = computed((): string =&gt; {
  if (compteur.value &gt; 0) return 'Positif'
  if (compteur.value &lt; 0) return 'Négatif'
  return 'Zéro'
})

const parite = computed((): string =&gt; {
  return compteur.value % 2 === 0 ? 'Pair' : 'Impair'
})

const double = computed((): number =&gt; compteur.value * 2)
&lt;/script&gt;</code></pre>
      </div>
      
      <div class="explanations">
        <h3>🔍 Nouvelles notions expliquées :</h3>
        
        <div class="concept">
          <h4>🎨 Classes conditionnelles :class</h4>
          <p><code>:class="{ 'rouge': estNegatif }"</code></p>
          <ul>
            <li>Applique la classe 'rouge' SI estNegatif est true</li>
            <li>Peut avoir plusieurs conditions dans le même objet</li>
            <li>Se met à jour automatiquement quand les conditions changent</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>🔧 Attributs conditionnels :disabled</h4>
          <p><code>:disabled="compteur <= 0"</code></p>
          <ul>
            <li>Désactive le bouton SI la condition est vraie</li>
            <li>Fonctionne avec tous les attributs: :hidden, :readonly, etc.</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>👁️ Affichage conditionnel v-if / v-show</h4>
          <p><code>v-if="condition"</code> vs <code>v-show="condition"</code></p>
          <ul>
            <li><strong>v-if:</strong> Retire/ajoute l'élément du DOM</li>
            <li><strong>v-show:</strong> Cache/montre avec CSS (display: none)</li>
            <li>v-if = changements rares, v-show = changements fréquents</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>🧮 Computed - Valeurs calculées</h4>
          <p><code>const double = computed(() => compteur.value * 2)</code></p>
          <ul>
            <li>Se recalcule automatiquement quand compteur change</li>
            <li>Mis en cache: ne recalcule que si nécessaire</li>
            <li>Parfait pour les valeurs dérivées</li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ✅ 1. IMPORTS
import { ref, computed } from 'vue'

// ✅ 2. ÉTAT RÉACTIF
const compteur = ref<number>(0)
const historique = ref<number[]>([]) // Tableau pour garder l'historique

// ✅ 3. ACTIONS (fonctions qui modifient l'état)
const increment = (): void => {
  compteur.value++
  historique.value.push(compteur.value)
}

const decrement = (): void => {
  compteur.value--
  historique.value.push(compteur.value)
}

const reset = (): void => {
  compteur.value = 0
  historique.value = []
}

const incrementBy = (amount: number): void => {
  compteur.value += amount
  historique.value.push(compteur.value)
}

// ✅ 4. COMPUTED - Valeurs dérivées qui se mettent à jour automatiquement
const typeNombre = computed((): string => {
  if (compteur.value > 0) return 'Positif 📈'
  if (compteur.value < 0) return 'Négatif 📉'
  return 'Zéro ⚪'
})

const parite = computed((): string => {
  return compteur.value % 2 === 0 ? 'Pair 👯' : 'Impair 🦆'
})

const double = computed((): number => compteur.value * 2)

const carre = computed((): number => compteur.value * compteur.value)

const progressionVers20 = computed((): number => {
  return Math.min((compteur.value / 20) * 100, 100)
})

const historiqueTexte = computed((): string => {
  if (historique.value.length === 0) return 'Aucun changement'
  return historique.value.slice(-3).join(' → ') // Montre les 3 derniers
})
</script>

<style scoped>
/* Styles de base */
.solution {
  max-width: 1000px;
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

.counter-display, .counter-controls, .counter-info, .progress-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fafafa;
  border-radius: 6px;
  border-left: 4px solid #4299e1;
}

/* ✅ Styles pour les couleurs conditionnelles */
.counter-value {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.counter-value.positive {
  color: #22c55e;
  background: #dcfce7;
  border: 2px solid #22c55e;
}

.counter-value.negative {
  color: #ef4444;
  background: #fef2f2;
  border: 2px solid #ef4444;
}

.counter-value.zero {
  color: #64748b;
  background: #f8fafc;
  border: 2px solid #cbd5e0;
}

.counter-controls {
  text-align: center;
}

.counter-controls button {
  margin: 0 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-increment {
  background: #22c55e;
  color: white;
}

.btn-increment:hover {
  background: #16a34a;
}

.btn-decrement {
  background: #ef4444;
  color: white;
}

.btn-decrement:hover:not(:disabled) {
  background: #dc2626;
}

.btn-decrement:disabled {
  background: #d1d5db;
  color: #9ca3af;
  cursor: not-allowed;
}

.btn-reset {
  background: #6b7280;
  color: white;
}

.btn-reset:hover {
  background: #4b5563;
}

.btn-special {
  background: #8b5cf6;
  color: white;
}

.btn-special:hover {
  background: #7c3aed;
}

.special-message {
  text-align: center;
  font-weight: bold;
  color: #059669;
  background: #d1fae5;
  padding: 1rem;
  border-radius: 6px;
  border: 2px solid #059669;
  animation: pulse 2s infinite;
}

.warning-message {
  text-align: center;
  font-weight: bold;
  color: #dc2626;
  background: #fef2f2;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #fca5a5;
}

/* ✅ Progress bar */
.progress-bar {
  width: 100%;
  height: 20px;
  background: #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  margin: 0.5rem 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #22c55e, #16a34a);
  transition: width 0.3s ease;
}

/* Styles code explanation */
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

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
}
</style>