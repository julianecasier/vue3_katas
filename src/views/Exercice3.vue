<template>
  <div class="exercice">
    <div class="header">
      <h1>📝 Exercice 3 - Liste de tâches dynamique</h1>
      <router-link to="/solution3" class="btn-solution">Voir la solution</router-link>
    </div>
    
    <div class="instructions">
      <h2>🎯 Instructions :</h2>
      <ol>
        <li>Créer une interface pour ajouter de nouvelles tâches</li>
        <li>Afficher la liste des tâches avec <code>v-for</code></li>
        <li>Permettre de marquer/démarquer comme terminé (checkbox)</li>
        <li>Bouton pour supprimer chaque tâche</li>
        <li>Filtrer par statut : Toutes / Actives / Terminées</li>
        <li>Afficher le nombre de tâches actives</li>
        <li>Bouton pour supprimer toutes les tâches terminées</li>
      </ol>
      
      <div class="hint">
        💡 <strong>Aide :</strong> Utilise un tableau d'objets <code>ref([])</code>, 
        <code>v-for</code> pour afficher, <code>computed</code> pour filtrer.
        <br>
        Structure d'une tâche : <code>{ id: number, text: string, completed: boolean }</code>
      </div>
    </div>
    
    <div class="workspace">
      <h3>👨‍💻 Zone de travail - Créer la Todo List !</h3>
      
      <!-- 🚧 ZONE D'EXERCICE -->
      <div class="exercise-area">
        
        <!-- SECTION AJOUT DE TÂCHE -->
        <div class="add-todo-section">
          <h4>➕ Ajouter une tâche</h4>
          
          <div class="add-todo-form">
            <!-- TODO: Input avec v-model pour le texte de la nouvelle tâche -->
            <input type="text" placeholder="Que devez-vous faire ?" class="todo-input">
            
            <!-- TODO: Bouton qui appelle addTodo() -->
            <button class="btn-add">Ajouter</button>
          </div>
        </div>
        
        <!-- SECTION FILTRES -->
        <div class="filters-section">
          <h4>🔍 Filtres</h4>
          
          <div class="filter-buttons">
            <!-- TODO: Boutons pour changer le filtre actuel -->
            <button class="filter-btn">Toutes (???)</button>
            <button class="filter-btn">Actives (???)</button>
            <button class="filter-btn">Terminées (???)</button>
          </div>
          
          <!-- TODO: Compteur de tâches actives -->
          <p class="todo-counter">??? tâches actives</p>
        </div>
        
        <!-- SECTION LISTE DES TÂCHES -->
        <div class="todo-list-section">
          <h4>📋 Liste des tâches</h4>
          
          <div class="todo-list">
            <!-- TODO: Utilise v-for pour afficher chaque tâche filtrée -->
            <div class="todo-item-placeholder">
              <span>Tâche exemple</span>
              <button>❌</button>
            </div>
            <div class="todo-item-placeholder">
              <span>Autre tâche</span>
              <button>❌</button>
            </div>
            
            <!-- TODO: Message si aucune tâche -->
            <p class="empty-message">Aucune tâche pour le moment...</p>
          </div>
        </div>
        
        <!-- SECTION ACTIONS GLOBALES -->
        <div class="actions-section">
          <h4>🗑️ Actions</h4>
          
          <!-- TODO: Bouton pour supprimer toutes les tâches terminées -->
          <button class="btn-clear">Supprimer les terminées</button>
          
          <!-- TODO: Bouton pour tout marquer comme terminé -->
          <button class="btn-complete-all">Tout marquer terminé</button>
        </div>
        
      </div>
      
      <div class="help-section">
        <h4>📚 Ce que tu dois créer :</h4>
        <pre><code>// 1. Interface pour une tâche
interface Todo {
  id: number
  text: string  
  completed: boolean
}

// 2. Variables réactives
const todos = ref&lt;Todo[]&gt;([])
const newTodoText = ref('')
const filter = ref('all') // 'all' | 'active' | 'completed'

// 3. Fonctions
const addTodo = () => { /* ajouter tâche */ }
const removeTodo = (id: number) => { /* supprimer */ }
const toggleTodo = (id: number) => { /* marquer terminé */ }

// 4. Computed pour filtrage  
const filteredTodos = computed(() => { /* filtrer selon filter */ })
const activeTodosCount = computed(() => { /* compter actives */ })</code></pre>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
// 🚧 TON CODE ICI
// 1. Imports (ref, computed)
// 2. Interface Todo
// 3. Variables réactives
// 4. Fonctions pour CRUD des tâches
// 5. Computed pour filtrage et compteurs
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

.add-todo-section, .filters-section, .todo-list-section, .actions-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.add-todo-form {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.todo-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  font-size: 1rem;
}

.btn-add {
  background: #4299e1;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.filter-buttons {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #cbd5e0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.todo-counter {
  font-weight: bold;
  color: #4a5568;
}

.todo-item-placeholder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.empty-message {
  text-align: center;
  color: #a0aec0;
  font-style: italic;
  padding: 2rem;
}

.btn-clear, .btn-complete-all {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.btn-clear {
  background: #f56565;
  color: white;
}

.btn-complete-all {
  background: #48bb78;
  color: white;
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