<template>
  <div id="app">
    <header class="header">
      <h1>🎯 Exercices Vue 3</h1>
      <nav class="nav">
        <router-link to="/" class="nav-link">🏠 Accueil</router-link>
        
        <div class="nav-group">
          <span class="nav-label">Exercices:</span>
           <router-link to="/exercice1a" class="nav-link">Ex 1A - Fondamentaux</router-link>
  <router-link to="/exercice1b" class="nav-link">Ex 1B - Réactivité</router-link>
          <router-link to="/exercice2" class="nav-link">Ex 2</router-link>
          <router-link to="/exercice3" class="nav-link">Ex 3</router-link>
        </div>
        
        <div class="nav-group">
          <span class="nav-label">Solutions:</span>
          <router-link to="/solution1a" class="nav-link">Sol 1 A</router-link>
          <router-link to="/solution1b" class="nav-link">Sol 1 B</router-link>

          <router-link to="/solution2" class="nav-link">Sol 2</router-link>
          <router-link to="/solution3" class="nav-link">Sol 3</router-link>
        </div>
      </nav>
    </header>
    
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#app {
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.header h1 {
  margin: 0 0 1rem 0;
  text-align: center;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

.nav-group {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.nav-label {
  font-weight: bold;
  margin-right: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.2);
  color: white;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background: rgba(255,255,255,0.9);
  color: #667eea;
}

.main {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-group {
    justify-content: center;
  }
}
</style>