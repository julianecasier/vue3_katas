<template>
  <div class="home">
    <h1>🎓 Bienvenue dans les Exercices Vue 3</h1>
    
    <div class="welcome-content">
      <p>Choisissez un exercice ou consultez les solutions :</p>
      
      <div class="cards-grid">
        <div class="card">
          <h3>📝 Exercices</h3>
          <p>Pratiquez vos compétences Vue 3</p>
          <div class="buttons">
            <router-link to="/exercice1" class="btn btn-primary">Exercice 1</router-link>
            <router-link to="/exercice2" class="btn btn-primary">Exercice 2</router-link>
            <router-link to="/exercice3" class="btn btn-primary">Exercice 3</router-link>
          </div>
        </div>
        
        <div class="card">
          <h3>💡 Solutions</h3>
          <p>Consultez les solutions détaillées</p>
          <div class="buttons">
            <router-link to="/solution1" class="btn btn-secondary">Solution 1</router-link>
            <router-link to="/solution2" class="btn btn-secondary">Solution 2</router-link>
            <router-link to="/solution3" class="btn btn-secondary">Solution 3</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Logique pour la page d'accueil si nécessaire
</script>

<style scoped>
.home {
  text-align: center;
}

.welcome-content {
  margin-top: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}

.card h3 {
  margin-bottom: 1rem;
  color: #2d3748;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #667eea;
  color: white;
}

.btn-primary:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #48bb78;
  color: white;
}

.btn-secondary:hover {
  background: #38a169;
  transform: translateY(-1px);
}
</style>
