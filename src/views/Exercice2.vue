<template>
  <div class="exercice">
    <div class="header">
      <h1>📝 Exercice 2 - Compteur interactif</h1>
      <router-link to="/solution2" class="btn-solution">Voir la solution</router-link>
    </div>
    
    <div class="instructions">
      <h2>🎯 Instructions :</h2>
      <ol>
        <li>Créer une variable <code>compteur</code> initialisée à 0</li>
        <li>Créer 3 boutons : +1, -1, et Reset</li>
        <li>Afficher le compteur en temps réel</li>
        <li>Changer la couleur selon la valeur :
          <ul>
            <li>🔴 Rouge si négatif</li>
            <li>🟢 Vert si positif</li>
            <li>⚫ Noir si zéro</li>
          </ul>
        </li>
        <li>Désactiver le bouton -1 si le compteur est à 0</li>
        <li>Afficher un message spécial si le compteur atteint 10</li>
      </ol>
      
      <div class="hint">
        💡 <strong>Aide :</strong> Utilise <code>:class</code> pour les couleurs conditionnelles
        et <code>:disabled</code> pour désactiver les boutons.
      </div>
    </div>
    
    <div class="workspace">
      <h3>👨‍💻 Zone de travail - Créer le compteur !</h3>
      
      <!-- 🚧 ZONE D'EXERCICE -->
      <div class="exercise-area">
        
        <div class="counter-display">
          <h4>Affichage du compteur</h4>
          <!-- TODO: Affiche la valeur du compteur avec couleur conditionnelle -->
          <p class="counter-value">Compteur: ???</p>
          <!-- TODO: Message conditionnel si compteur >= 10 -->
          <p class="special-message">Message spécial si >= 10</p>
        </div>
        
        <div class="counter-controls">
          <h4>Contrôles</h4>
          <!-- TODO: Bouton +1 qui appelle une fonction increment() -->
          <button>+1</button>
          
          <!-- TODO: Bouton -1 qui appelle decrement() et désactivé si compteur = 0 -->
          <button>-1</button>
          
          <!-- TODO: Bouton Reset qui remet à 0 -->
          <button>Reset</button>
        </div>
        
        <div class="counter-info">
          <h4>Informations</h4>
          <!-- TODO: Affiche si le nombre est pair ou impair -->
          <p>Le nombre est: ???</p>
          <!-- TODO: Affiche le double du compteur -->
          <p>Double: ???</p>
        </div>
        
      </div>
      
      <div class="help-section">
        <h4>📚 Ce que tu dois créer :</h4>
        <pre><code>// 1. Variable: const compteur = ref(0)
// 2. Fonctions: increment(), decrement(), reset()
// 3. Computed: estPair, estNegatif, etc.
// 4. Classes CSS conditionnelles avec :class
// 5. Attributs conditionnels avec :disabled</code></pre>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
// 🚧 TON CODE ICI
// Import ref et computed de Vue
// Variable compteur
// Fonctions increment, decrement, reset
// Computed pour les conditions
</script>

<style scoped>
/* Styles de base identiques + styles spécifiques compteur */
.exercice {
  max-width: 900px;
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

.counter-display, .counter-controls, .counter-info {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.counter-value {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background: #f7fafc;
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

.special-message {
  text-align: center;
  font-weight: bold;
  color: #e53e3e;
  background: #fed7d7;
  padding: 0.5rem;
  border-radius: 4px;
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
}
</style>
