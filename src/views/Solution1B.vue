<template>
  <div class="solution">
    <div class="header">
      <h1>💡 Solution 1 - Kata de base Vue 3</h1>
      <router-link to="/exercice1" class="btn-back">Retour à l'exercice</router-link>
    </div>
    
    <div class="result">
      <h2>✅ Résultat en action :</h2>
      <div class="demo">
        
        <!-- ✅ PARTIE 1: Inputs avec v-model (liaison bidirectionnelle) -->
        <div class="form-section">
          <h4>🔗 Inputs connectés aux variables</h4>
          
          <div class="input-group">
            <label>Nom:</label>
            <!-- ✅ v-model connecte l'input à la variable nom -->
            <input type="text" v-model="nom" placeholder="Tape ton nom">
          </div>
          
          <div class="input-group">
            <label>Âge:</label>
            <!-- ✅ v-model.number convertit automatiquement en nombre -->
            <input type="number" v-model.number="age" placeholder="Tape ton âge">
          </div>
        </div>
        
        <!-- ✅ PARTIE 2: Affichage avec interpolation {{ }} -->
        <div class="display-section">
          <h4>📄 Affichage automatique (se met à jour quand tu tapes)</h4>
          
          <!-- ✅ Interpolation: {{ }} affiche les variables -->
          <p><strong>Nom et âge:</strong> {{ nom }} - {{ age }} ans</p>
          
          <!-- ✅ Calcul dans l'interpolation -->
          <p><strong>Âge × 3:</strong> {{ age * 3 }}</p>
          
          <!-- ✅ Appel de fonction dans l'interpolation -->
          <p><strong>Nombre aléatoire:</strong> {{ randomNum() }}</p>
          
          <!-- ✅ Bouton pour générer nouveau nombre -->
          <button @click="genererNouveauNombre">🎲 Nouveau nombre</button>
        </div>
        
        <!-- ✅ PARTIE 3: Image avec binding d'attribut -->
        <div class="image-section">
          <h4>🖼️ Image avec binding :src</h4>
          
          <!-- ✅ :src (raccourci de v-bind:src) lie l'attribut à la variable -->
          <img 
            :src="imageUrl" 
            :alt="`Photo de ${nom}`" 
            style="width:100px;height:100px;border:2px solid #333;border-radius:8px"
          >
          
          <!-- ✅ Bouton pour changer l'image -->
          <div style="margin-top: 1rem;">
            <button @click="changerImage">🖼️ Changer image</button>
          </div>
        </div>
        
      </div>
    </div>
    
    <div class="code-explanation">
      <h2>📚 Code expliqué ligne par ligne :</h2>
      
      <div class="code-block">
        <h3>🏗️ Template (ce qui s'affiche)</h3>
        <pre><code>&lt;template&gt;
  &lt;!-- ✅ v-model: liaison bidirectionnelle input ↔ variable --&gt;
  &lt;input type="text" v-model="nom"&gt;
  &lt;input type="number" v-model.number="age"&gt;
  
  &lt;!-- ✅ {{ }}: interpolation pour afficher les variables --&gt;
  &lt;p&gt;{{ nom }} - {{ age }} ans&lt;/p&gt;
  &lt;p&gt;Âge × 3: {{ age * 3 }}&lt;/p&gt;
  &lt;p&gt;Aléatoire: {{ randomNum() }}&lt;/p&gt;
  
  &lt;!-- ✅ :src: binding d'attribut (raccourci de v-bind:src) --&gt;
  &lt;img :src="imageUrl" :alt="nom"&gt;
  
  &lt;!-- ✅ @click: écouter les événements (raccourci de v-on:click) --&gt;
  &lt;button @click="changerImage"&gt;Changer&lt;/button&gt;
&lt;/template&gt;</code></pre>
      </div>
      
      <div class="code-block">
        <h3>⚙️ Script (la logique)</h3>
        <pre><code>&lt;script setup lang="ts"&gt;
// ✅ 1. Import de Vue (obligatoire pour la réactivité)
import { ref } from 'vue'

// ✅ 2. Variables réactives avec ref()
const nom = ref&lt;string&gt;('Jean Dupont')    // String réactif
const age = ref&lt;number&gt;(25)              // Number réactif
const imageUrl = ref&lt;string&gt;('https://via.placeholder.com/100x100/4CAF50/white?text=Vue3')

// ✅ 3. Fonction simple (pas besoin de ref pour les fonctions)
const randomNum = (): number =&gt; {
  return Math.random()
}

// ✅ 4. Fonction qui modifie les variables réactives
const changerImage = (): void =&gt; {
  // Pour modifier une ref, on utilise .value
  imageUrl.value = `https://via.placeholder.com/100x100/${Math.random() &gt; 0.5 ? '4CAF50' : 'FF5722'}/white?text=${nom.value.charAt(0) || 'X'}`
}

const genererNouveauNombre = (): void =&gt; {
  // Force le re-rendu en "utilisant" une variable
  console.log('Nouveau nombre:', randomNum())
}
&lt;/script&gt;</code></pre>
      </div>
      
      <div class="explanations">
        <h3>🔍 Concepts clés expliqués :</h3>
        
        <div class="concept">
          <h4>🎯 v-model (liaison bidirectionnelle)</h4>
          <p><code>v-model="nom"</code> = l'input et la variable restent synchronisés</p>
          <ul>
            <li>Tu tapes dans l'input → la variable change</li>
            <li>La variable change → l'input se met à jour</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>📄 Interpolation {{ }}</h4>
          <p><code>{{ nom }}</code> = affiche la valeur de la variable</p>
          <ul>
            <li>Se met à jour automatiquement quand la variable change</li>
            <li>Peut contenir des calculs: <code>{{ age * 3 }}</code></li>
            <li>Peut appeler des fonctions: <code>{{ randomNum() }}</code></li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>🔗 Binding d'attributs :src</h4>
          <p><code>:src="imageUrl"</code> = lie l'attribut src à la variable</p>
          <ul>
            <li><code>:</code> est le raccourci de <code>v-bind:</code></li>
            <li>Fonctionne avec tous les attributs: :alt, :class, :style, etc.</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>⚡ ref() - Réactivité</h4>
          <p><code>ref()</code> = rend une variable réactive</p>
          <ul>
            <li>Dans le script: <code>nom.value</code> pour accéder/modifier</li>
            <li>Dans le template: <code>nom</code> directement (Vue gère .value)</li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ✅ 1. IMPORTS - Toujours commencer par les imports
import { ref } from 'vue'

// ✅ 2. VARIABLES RÉACTIVES - Définir l'état du composant
const nom = ref<string>('Jean Dupont')
const age = ref<number>(25)
const imageUrl = ref<string>('https://via.placeholder.com/100x100/4CAF50/white?text=Vue3')

// ✅ 3. FONCTIONS SIMPLES - Logique pure
const randomNum = (): number => {
  return Math.random()
}

// ✅ 4. FONCTIONS QUI MODIFIENT L'ÉTAT - Actions utilisateur
const changerImage = (): void => {
  // ⚠️ IMPORTANT: Pour modifier une ref, utilise .value
  const couleurs = ['4CAF50', 'FF5722', '2196F3', 'FF9800', '9C27B0']
  const couleurAleatoire = couleurs[Math.floor(Math.random() * couleurs.length)]
  const lettre = nom.value.charAt(0) || 'X'
  
  imageUrl.value = `https://via.placeholder.com/100x100/${couleurAleatoire}/white?text=${lettre}`
}

const genererNouveauNombre = (): void => {
  // Cette fonction force juste un nouveau rendu
  console.log('Nouveau nombre généré:', randomNum())
}
</script>

<style scoped>
/* Styles identiques à l'exercice + styles pour la solution */
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
  border: 1px solid #e2e8f0;
}

.form-section, .display-section, .image-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fafafa;
  border-radius: 6px;
  border-left: 4px solid #4299e1;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #2d3748;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  font-size: 1rem;
}

.code-explanation {
  background: #fafafa;
  border-radius: 8px;
  padding: 1.5rem;
}

.code-block {
  margin-bottom: 1.5rem;
}

.code-block h3 {
  margin-bottom: 0.5rem;
  color: #2d3748;
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

.explanations {
  margin-top: 2rem;
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

button {
  background: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  margin-right: 0.5rem;
}

button:hover {
  background: #3182ce;
}
</style>