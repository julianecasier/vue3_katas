<template>
  <div class="exercice">
    <div class="header">
      <h1>📝 Exercice 1B - Affichage dynamique temps réel</h1>
      <router-link to="/solution1b" class="btn-solution">Voir la solution</router-link>
    </div>
    
    <div class="instructions">
      <h2>🎯 Instructions :</h2>
      <p>Crée des inputs qui affichent des résultats <strong>en temps réel</strong> pendant que tu tapes !</p>
      
      <div class="objectives">
        <div class="objective">
          <h4>1️⃣ Affichage simple avec <code>ref</code></h4>
          <p>Input texte → Affichage direct en dessous</p>
        </div>
        
        <div class="objective">
          <h4>2️⃣ Transformation avec <code>computed</code></h4>
          <p>Input nom → Affichage formaté (majuscules, longueur, etc.)</p>
        </div>
        
        <div class="objective">
          <h4>3️⃣ Validation avec <code>computed</code></h4>
          <p>Input email → Vérification format en temps réel</p>
        </div>
        
        <div class="objective">
          <h4>4️⃣ Recherche avec <code>computed</code></h4>
          <p>Input recherche → Filtrage d'une liste en temps réel</p>
        </div>
      </div>
      
      <div class="hint">
        💡 <strong>Différences :</strong><br>
        • <code>ref</code> = Variable simple qui change<br>
        • <code>computed</code> = Calcul automatique basé sur d'autres variables<br>
        • <code>watch</code> = Réaction aux changements (actions, API calls)
      </div>
    </div>
    
    <div class="workspace">
      <h3>👨‍💻 Zone de travail - Crée l'affichage dynamique !</h3>
      
      <div class="exercise-area">
        
        <!-- EXERCICE 1: Affichage simple -->
        <div class="sub-exercise">
          <h4>1️⃣ Affichage simple (ref)</h4>
          
          <div class="input-section">
            <!-- TODO: Input avec v-model lié à une variable ref -->
            <label>Tape quelque chose :</label>
            <input type="text" placeholder="Écris ici...">
          </div>
          
          <div class="output-section">
            <!-- TODO: Affiche la variable directement -->
            <p>Tu as écrit : <span class="highlight">???</span></p>
            <p>Nombre de caractères : <span class="highlight">???</span></p>
          </div>
        </div>
        
        <!-- EXERCICE 2: Transformation computed -->
        <div class="sub-exercise">
          <h4>2️⃣ Transformation automatique (computed)</h4>
          
          <div class="input-section">
            <!-- TODO: Input nom avec v-model -->
            <label>Ton nom :</label>
            <input type="text" placeholder="Jean Dupont">
          </div>
          
          <div class="output-section">
            <!-- TODO: Utilise des computed pour transformer -->
            <p>En majuscules : <span class="highlight">???</span></p>
            <p>En minuscules : <span class="highlight">???</span></p>
            <p>Initiales : <span class="highlight">???</span></p>
            <p>Inversé : <span class="highlight">???</span></p>
          </div>
        </div>
        
        <!-- EXERCICE 3: Validation email -->
        <div class="sub-exercise">
          <h4>3️⃣ Validation temps réel (computed)</h4>
          
          <div class="input-section">
            <!-- TODO: Input email -->
            <label>Email :</label>
            <input type="email" placeholder="test@example.com">
          </div>
          
          <div class="output-section">
            <!-- TODO: Validation avec computed -->
            <p>Statut : <span class="status">???</span></p>
            <p>Domaine : <span class="highlight">???</span></p>
            <p>Longueur : <span class="highlight">???</span></p>
          </div>
        </div>
        
        <!-- EXERCICE 4: Recherche en temps réel -->
        <div class="sub-exercise">
          <h4>4️⃣ Recherche dynamique (computed)</h4>
          
          <div class="input-section">
            <!-- TODO: Input de recherche -->
            <label>Rechercher un pays :</label>
            <input type="text" placeholder="France, Italie...">
          </div>
          
          <div class="output-section">
            <!-- TODO: Liste filtrée avec computed + v-for -->
            <p>Résultats : <span class="highlight">??? pays trouvés</span></p>
            <ul class="results-list">
              <li>Pays 1</li>
              <li>Pays 2</li>
              <li>...</li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <div class="help-section">
        <h4>📚 Ce que tu dois créer :</h4>
        <pre><code>// 1. Variables ref pour les inputs
const texteSimple = ref('')
const nom = ref('')  
const email = ref('')
const recherche = ref('')

// 2. Computed pour les transformations
const nomMajuscules = computed(() => nom.value.toUpperCase())
const emailValide = computed(() => email.value.includes('@'))
const paysFiltrés = computed(() => 
  pays.filter(p => p.includes(recherche.value))
)

// 3. Liste de données pour la recherche
const pays = ['France', 'Italie', 'Espagne', ...]</code></pre>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
// 🚧 TON CODE ICI
// 1. Imports (ref, computed)
// 2. Variables ref pour chaque input
// 3. Computed pour les transformations
// 4. Données statiques (liste pays)
</script>

<style scoped>
.exercice {
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

.btn-solution {
  background: #48bb78;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
}

.instructions {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
}

.objectives {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.objective {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #4299e1;
}

.objective h4 {
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.hint {
  background: #ffeaa7;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  border-left: 4px solid #fdcb6e;
}

.workspace {
  background: white;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 1.5rem;
}

.exercise-area {
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.sub-exercise {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
  transition: border-color 0.2s;
}

.input-section input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.output-section {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #4299e1;
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

.status {
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  font-weight: bold;
}

.results-list {
  max-height: 150px;
  overflow-y: auto;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 0.5rem;
}

.results-list li {
  padding: 0.25rem 0.5rem;
  border-radius: 3px;
  margin-bottom: 0.25rem;
}

.help-section {
  background: #edf2f7;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #4299e1;
}

.help-section pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.4;
}
</style>