<template>
  <div class="exercice">
    <div class="header">
      <h1>📝 Exercice 1 - Kata de base</h1>
      <router-link to="/solution1" class="btn-solution">Voir la solution</router-link>
    </div>
    
    <div class="instructions">
      <h2>Instructions :</h2>
      <ol>
        <li>Remplir le paragraphe avec votre nom et âge (interpolation)</li>
        <li>Afficher votre âge multiplié par 3</li>
        <li>Appeler une fonction pour afficher un nombre aléatoire (Math.random())</li>
        <li>Afficher une image en bindant l'attribut "src"</li>
        <li>Pré-remplir l'input avec votre nom</li>
      </ol>
    </div>
    
    <div class="workspace">
      <h3>👨‍💻 Votre code ici :</h3>
      
      <!-- Zone de travail pour l'étudiant -->
      <div class="exercise-area">
        <input type="text" placeholder="Votre nom ici">
        <p>Nom: ??? - Âge: ???</p>
        <hr>
        <p>Âge × 3 = ???</p>
        <p>Nombre aléatoire: ???</p>
        <hr>
        <div class="image-placeholder">Image à afficher ici</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// L'étudiant doit remplir cette section
</script>

<style scoped>
.exercice {
  max-width: 800px;
  margin: 0 auto;
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

.workspace {
  background: white;
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  padding: 1.5rem;
}

.exercise-area {
  background: #fafafa;
  padding: 1rem;
  border-radius: 6px;
  min-height: 200px;
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
}

input {
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
