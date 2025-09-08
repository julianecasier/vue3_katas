<template>
  <div class="exercice">
    <div class="header">
      <h1>📝 Exercice 1 - Kata de base Vue 3</h1>
      <router-link to="/solution1a" class="btn-solution">Voir la solution</router-link>
    </div>
    <h2>📝 Exercice 1A - Fondamentaux Vue 3 (ref, v-model, binding)</h2>
    <div class="instructions">
      <h2>🎯 Instructions :</h2>
      <ol>
        <li>Créer deux inputs séparés pour le nom et l'âge avec <code>v-model</code></li>
        <li>Afficher le nom et l'âge avec interpolation <code>{{ }}</code></li>
        <li>Calculer et afficher l'âge multiplié par 3</li>
        <li>Créer une fonction qui retourne <code>Math.random()</code></li>
        <li>Afficher une image en bindant l'attribut <code>src</code></li>
      </ol>
      
      <div class="hint">
        💡 <strong>Aide :</strong> Utilise <code>ref()</code> pour créer des variables réactives
        et <code>v-model</code> pour lier les inputs aux variables.
      </div>
    </div>
    
    <div class="workspace">
      <h3>👨‍💻 Zone de travail - À toi de coder !</h3>
      
      <!-- 🚧 ZONE D'EXERCICE : Remplace les ??? par ton code -->
      <div class="exercise-area">
        <div class="form-section">
          <h4>Inputs (à connecter avec v-model)</h4>
          
          <!-- TODO: Ajoute v-model="nom" -->
          <div class="input-group">
            <label>Nom:</label>
            <input type="text" placeholder="Tape ton nom ici">
          </div>
          
          <!-- TODO: Ajoute v-model.number="age" -->
          <div class="input-group">
            <label>Âge:</label>
            <input type="number" placeholder="Tape ton âge ici">
          </div>
        </div>
        
        <div class="display-section">
          <h4>Affichage (interpolation avec {{ }})</h4>
          
          <!-- TODO: Remplace ??? par les variables -->
          <p><strong>Nom et âge:</strong> ??? - ??? ans</p>
          
          <!-- TODO: Calcule âge × 3 -->
          <p><strong>Âge × 3:</strong> ???</p>
          
          <!-- TODO: Appelle une fonction randomNum() -->
          <p><strong>Nombre aléatoire:</strong> ???</p>
        </div>
        
        <div class="image-section">
          <h4>Image (binding avec :src)</h4>
          
          <!-- TODO: Bind l'attribut src avec :src="" -->
          <div class="image-placeholder">
            <!-- <img :src="???" alt="???" style="width:100px;height:100px"> -->
            Image à afficher ici
          </div>
        </div>
      </div>
      
      <div class="help-section">
        <h4>📚 Ce que tu dois créer dans &lt;script setup&gt; :</h4>
        <pre><code>// 1. Importer ref depuis 'vue'
// 2. Créer const nom = ref('') 
// 3. Créer const age = ref(0)
// 4. Créer une fonction randomNum() qui retourne Math.random()
// 5. Créer une variable pour l'URL de l'image</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 🚧 TON CODE ICI
// Import de Vue
// Variables réactives
// Fonctions
</script>

<style scoped>
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

.instructions ol {
  margin: 1rem 0;
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

.form-section, .display-section, .image-section {
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
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

.image-placeholder {
  width: 100px;
  height: 100px;
  background: #e2e8f0;
  border: 2px dashed #a0aec0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  font-size: 0.875rem;
  text-align: center;
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