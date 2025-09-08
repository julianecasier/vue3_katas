<template>
  <div class="solution">
    <div class="header">
      <h1>💡 Solution 3 - Liste de tâches dynamique</h1>
      <router-link to="/exercice3" class="btn-back">Retour à l'exercice</router-link>
    </div>
    
    <div class="result">
      <h2>✅ Todo List en action :</h2>
      <div class="demo">
        
        <!-- ✅ SECTION AJOUT DE TÂCHE -->
        <div class="add-todo-section">
          <h4>➕ Ajouter une nouvelle tâche</h4>
          
          <div class="add-todo-form">
            <!-- ✅ v-model pour lier l'input à la variable -->
            <input 
              type="text" 
              v-model="newTodoText"
              @keyup.enter="addTodo"
              placeholder="Que devez-vous faire ?"
              class="todo-input"
            >
            
            <!-- ✅ @click pour ajouter, :disabled si texte vide -->
            <button 
              @click="addTodo" 
              :disabled="!newTodoText.trim()"
              class="btn-add"
            >
              ➕ Ajouter
            </button>
          </div>
        </div>
        
        <!-- ✅ SECTION STATISTIQUES -->
        <div class="stats-section">
          <h4>📊 Statistiques</h4>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">{{ todos.length }}</span>
              <span class="stat-label">Total</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ activeTodosCount }}</span>
              <span class="stat-label">Actives</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ completedTodosCount }}</span>
              <span class="stat-label">Terminées</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ progressPercentage }}%</span>
              <span class="stat-label">Progression</span>
            </div>
          </div>
        </div>
        
        <!-- ✅ SECTION FILTRES -->
        <div class="filters-section">
          <h4>🔍 Filtrer les tâches</h4>
          
          <div class="filter-buttons">
            <!-- ✅ :class pour marquer le filtre actif -->
            <button 
              @click="currentFilter = 'all'"
              :class="{ active: currentFilter === 'all' }"
              class="filter-btn"
            >
              Toutes ({{ todos.length }})
            </button>
            
            <button 
              @click="currentFilter = 'active'"
              :class="{ active: currentFilter === 'active' }"
              class="filter-btn"
            >
              Actives ({{ activeTodosCount }})
            </button>
            
            <button 
              @click="currentFilter = 'completed'"
              :class="{ active: currentFilter === 'completed' }"
              class="filter-btn"
            >
              Terminées ({{ completedTodosCount }})
            </button>
          </div>
        </div>
        
        <!-- ✅ SECTION LISTE DES TÂCHES -->
        <div class="todo-list-section">
          <h4>📋 Liste des tâches</h4>
          
          <!-- ✅ v-if pour afficher si il y a des tâches -->
          <div v-if="filteredTodos.length > 0" class="todo-list">
            <!-- ✅ v-for pour boucler sur les tâches filtrées -->
            <div 
              v-for="todo in filteredTodos" 
              :key="todo.id"
              class="todo-item"
              :class="{ completed: todo.completed }"
            >
              
              <!-- ✅ Checkbox avec v-model pour marquer terminé -->
              <input 
                type="checkbox" 
                v-model="todo.completed"
                class="todo-checkbox"
              >
              
              <!-- ✅ Texte avec classe conditionnelle -->
              <span 
                class="todo-text"
                :class="{ strikethrough: todo.completed }"
                @dblclick="startEdit(todo)"
              >
                {{ todo.text }}
              </span>
              
              <!-- ✅ Input d'édition (apparaît en double-clic) -->
              <input 
                v-if="editingTodo?.id === todo.id"
                v-model="editText"
                @keyup.enter="saveEdit(todo)"
                @keyup.escape="cancelEdit"
                @blur="saveEdit(todo)"
                class="edit-input"
                ref="editInput"
              >
              
              <!-- ✅ Actions pour chaque tâche -->
              <div class="todo-actions">
                <!-- Bouton priorité -->
                <button 
                  @click="togglePriority(todo.id)"
                  :class="{ active: todo.priority }"
                  class="btn-priority"
                  title="Marquer comme priorité"
                >
                  {{ todo.priority ? '⭐' : '☆' }}
                </button>
                
                <!-- Bouton supprimer -->
                <button 
                  @click="removeTodo(todo.id)"
                  class="btn-remove"
                  title="Supprimer cette tâche"
                >
                  🗑️
                </button>
              </div>
              
            </div>
          </div>
          
          <!-- ✅ Message si aucune tâche correspondante -->
          <div v-else class="empty-state">
            <p v-if="todos.length === 0" class="empty-message">
              🎯 Aucune tâche pour le moment. Ajoutez-en une !
            </p>
            <p v-else class="empty-message">
              🔍 Aucune tâche {{ currentFilter === 'active' ? 'active' : 'terminée' }}
            </p>
          </div>
        </div>
        
        <!-- ✅ SECTION ACTIONS GLOBALES -->
        <div class="actions-section" v-if="todos.length > 0">
          <h4>🎛️ Actions globales</h4>
          
          <div class="action-buttons">
            <!-- Bouton marquer tout terminé -->
            <button 
              @click="toggleAllTodos"
              :disabled="todos.length === 0"
              class="btn-toggle-all"
            >
              {{ allCompleted ? '↩️ Tout démarquer' : '✅ Tout marquer terminé' }}
            </button>
            
            <!-- Bouton supprimer les terminées -->
            <button 
              @click="clearCompleted"
              :disabled="completedTodosCount === 0"
              class="btn-clear-completed"
            >
              🗑️ Supprimer les terminées ({{ completedTodosCount }})
            </button>
            
            <!-- Bouton tout supprimer -->
            <button 
              @click="clearAllTodos"
              :disabled="todos.length === 0"
              class="btn-clear-all"
            >
              💥 Tout supprimer
            </button>
          </div>
        </div>
        
        <!-- ✅ BARRE DE PROGRESSION -->
        <div class="progress-section" v-if="todos.length > 0">
          <h4>📈 Progression</h4>
          <div class="progress-bar">
            <div 
              class="progress-fill" 
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <p class="progress-text">
            {{ completedTodosCount }} / {{ todos.length }} tâches terminées
          </p>
        </div>
        
      </div>
    </div>
    
    <div class="code-explanation">
      <h2>📚 Code expliqué :</h2>
      
      <div class="code-block">
        <h3>🏗️ Template - Concepts avancés</h3>
        <pre><code>&lt;!-- ✅ v-for: Boucler sur un tableau --&gt;
&lt;div v-for="todo in filteredTodos" :key="todo.id"&gt;
  &lt;!-- ✅ :key est OBLIGATOIRE pour les performances --&gt;
&lt;/div&gt;

&lt;!-- ✅ v-model sur checkbox --&gt;
&lt;input type="checkbox" v-model="todo.completed"&gt;

&lt;!-- ✅ Classes conditionnelles multiples --&gt;
&lt;span :class="{ 
  strikethrough: todo.completed,
  priority: todo.priority 
}"&gt;
  {{ todo.text }}
&lt;/span&gt;

&lt;!-- ✅ Événements avec paramètres --&gt;
&lt;button @click="removeTodo(todo.id)"&gt;Supprimer&lt;/button&gt;

&lt;!-- ✅ Affichage conditionnel complexe --&gt;
&lt;div v-if="filteredTodos.length &gt; 0"&gt;Liste&lt;/div&gt;
&lt;div v-else&gt;Aucune tâche&lt;/div&gt;</code></pre>
      </div>
      
      <div class="code-block">
        <h3>⚙️ Script - Gestion d'état complexe</h3>
        <pre><code>&lt;script setup lang="ts"&gt;
import { ref, computed, nextTick } from 'vue'

// ✅ Interface TypeScript pour typer les données
interface Todo {
  id: number
  text: string
  completed: boolean
  priority: boolean
  createdAt: Date
}

// ✅ État réactif
const todos = ref&lt;Todo[]&gt;([])
const newTodoText = ref('')
const currentFilter = ref&lt;'all' | 'active' | 'completed'&gt;('all')

// ✅ Computed complexes pour filtrage et stats
const filteredTodos = computed(() =&gt; {
  switch (currentFilter.value) {
    case 'active': return todos.value.filter(t =&gt; !t.completed)
    case 'completed': return todos.value.filter(t =&gt; t.completed)
    default: return todos.value
  }
})

const activeTodosCount = computed(() =&gt; 
  todos.value.filter(t =&gt; !t.completed).length
)

// ✅ Fonctions CRUD
const addTodo = () =&gt; {
  if (!newTodoText.value.trim()) return
  
  todos.value.push({
    id: Date.now(),
    text: newTodoText.value.trim(),
    completed: false,
    priority: false,
    createdAt: new Date()
  })
  
  newTodoText.value = ''
}

const removeTodo = (id: number) =&gt; {
  const index = todos.value.findIndex(t =&gt; t.id === id)
  if (index &gt; -1) {
    todos.value.splice(index, 1)
  }
}
&lt;/script&gt;</code></pre>
      </div>
      
      <div class="explanations">
        <h3>🔍 Nouveaux concepts expliqués :</h3>
        
        <div class="concept">
          <h4>🔄 v-for - Boucles dans le template</h4>
          <p><code>v-for="todo in todos" :key="todo.id"</code></p>
          <ul>
            <li><strong>:key</strong> est obligatoire pour les performances</li>
            <li>Permet de boucler sur tableaux, objets, strings, nombres</li>
            <li>Vue met à jour automatiquement si le tableau change</li>
            <li>Accès à l'index : <code>v-for="(todo, index) in todos"</code></li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>✅ v-model sur différents inputs</h4>
          <p><code>v-model="todo.completed"</code> sur checkbox</p>
          <ul>
            <li><strong>Checkbox :</strong> true/false automatique</li>
            <li><strong>Radio :</strong> valeur du bouton sélectionné</li>
            <li><strong>Select :</strong> valeur de l'option choisie</li>
            <li>Vue adapte le comportement selon le type d'input</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>🧮 Computed avancés - Filtrage et calculs</h4>
          <p><code>computed(() => todos.filter(...))</code></p>
          <ul>
            <li>Se recalcule seulement si les dépendances changent</li>
            <li>Peut dépendre de plusieurs variables réactives</li>
            <li>Parfait pour filtrer, trier, transformer des données</li>
            <li>Plus performant que les méthodes dans le template</li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>🎯 Événements avec paramètres</h4>
          <p><code>@click="removeTodo(todo.id)"</code></p>
          <ul>
            <li>Permet de passer des données à la fonction</li>
            <li>Accès à l'événement : <code>@click="fn($event, todo.id)"</code></li>
            <li>Modificateurs : <code>@keyup.enter</code>, <code>@click.stop</code></li>
          </ul>
        </div>
        
        <div class="concept">
          <h4>🎨 Classes et styles conditionnels avancés</h4>
          <p><code>:class="{ completed: todo.completed, priority: todo.priority }"</code></p>
          <ul>
            <li>Plusieurs classes conditionnelles dans un objet</li>
            <li>Alternative tableau : <code>:class="[baseClass, conditionalClass]"</code></li>
            <li>Styles inline : <code>:style="{ color: todo.completed ? 'gray' : 'black' }"</code></li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// ✅ 1. IMPORTS
import { ref, computed, nextTick } from 'vue'

// ✅ 2. INTERFACE TYPESCRIPT pour typer les données
interface Todo {
  id: number
  text: string
  completed: boolean
  priority: boolean
  createdAt: Date
}

// ✅ 3. ÉTAT RÉACTIF
const todos = ref<Todo[]>([
  // Quelques tâches par défaut pour la démo
  { id: 1, text: 'Apprendre Vue 3', completed: false, priority: true, createdAt: new Date() },
  { id: 2, text: 'Faire les exercices', completed: false, priority: false, createdAt: new Date() },
  { id: 3, text: 'Regarder les solutions', completed: true, priority: false, createdAt: new Date() }
])

const newTodoText = ref<string>('')
const currentFilter = ref<'all' | 'active' | 'completed'>('all')
const editingTodo = ref<Todo | null>(null)
const editText = ref<string>('')

// ✅ 4. COMPUTED - Valeurs dérivées automatiques
const filteredTodos = computed((): Todo[] => {
  switch (currentFilter.value) {
    case 'active':
      return todos.value.filter(todo => !todo.completed)
    case 'completed':
      return todos.value.filter(todo => todo.completed)
    default:
      return todos.value.sort((a, b) => {
        // Priorité d'abord, puis par date de création
        if (a.priority && !b.priority) return -1
        if (!a.priority && b.priority) return 1
        return b.createdAt.getTime() - a.createdAt.getTime()
      })
  }
})

const activeTodosCount = computed((): number => 
  todos.value.filter(todo => !todo.completed).length
)

const completedTodosCount = computed((): number => 
  todos.value.filter(todo => todo.completed).length
)

const progressPercentage = computed((): number => {
  if (todos.value.length === 0) return 0
  return Math.round((completedTodosCount.value / todos.value.length) * 100)
})

const allCompleted = computed((): boolean => 
  todos.value.length > 0 && todos.value.every(todo => todo.completed)
)

// ✅ 5. FONCTIONS CRUD (Create, Read, Update, Delete)

// CREATE - Ajouter une nouvelle tâche
const addTodo = (): void => {
  const text = newTodoText.value.trim()
  if (!text) return

  const newTodo: Todo = {
    id: Date.now(), // Simple ID basé sur timestamp
    text,
    completed: false,
    priority: false,
    createdAt: new Date()
  }

  todos.value.push(newTodo)
  newTodoText.value = '' // Reset l'input
}

// DELETE - Supprimer une tâche
const removeTodo = (id: number): void => {
  const index = todos.value.findIndex(todo => todo.id === id)
  if (index > -1) {
    todos.value.splice(index, 1)
  }
}

// UPDATE - Marquer priorité
const togglePriority = (id: number): void => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.priority = !todo.priority
  }
}

// ✅ 6. FONCTIONS D'ÉDITION
const startEdit = (todo: Todo): void => {
  editingTodo.value = todo
  editText.value = todo.text
  
  // Focus sur l'input d'édition au prochain tick
  nextTick(() => {
    const editInput = document.querySelector('.edit-input') as HTMLInputElement
    editInput?.focus()
  })
}

const saveEdit = (todo: Todo): void => {
  if (editText.value.trim()) {
    todo.text = editText.value.trim()
  }
  cancelEdit()
}

const cancelEdit = (): void => {
  editingTodo.value = null
  editText.value = ''
}

// ✅ 7. ACTIONS GLOBALES
const toggleAllTodos = (): void => {
  const shouldComplete = !allCompleted.value
  todos.value.forEach(todo => {
    todo.completed = shouldComplete
  })
}

const clearCompleted = (): void => {
  todos.value = todos.value.filter(todo => !todo.completed)
}

const clearAllTodos = (): void => {
  todos.value = []
}
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

/* Sections */
.add-todo-section, .stats-section, .filters-section, .todo-list-section, 
.actions-section, .progress-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fafafa;
  border-radius: 6px;
  border-left: 4px solid #4299e1;
}

/* Formulaire d'ajout */
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

.todo-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}

.btn-add {
  background: #4299e1;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}

.btn-add:hover:not(:disabled) {
  background: #3182ce;
}

.btn-add:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}

/* Statistiques */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.stat-item {
  text-align: center;
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: #4299e1;
}

.stat-label {
  font-size: 0.875rem;
  color: #718096;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Filtres */
.filter-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #cbd5e0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.filter-btn:hover {
  background: #f7fafc;
}

.filter-btn.active {
  background: #4299e1;
  color: white;
  border-color: #4299e1;
}

/* Liste des tâches */
.todo-list {
  space-y: 0.5rem;
}

.todo-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  margin-bottom: 0.5rem;
  transition: all 0.2s;
}

.todo-item:hover {
  border-color: #cbd5e0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.todo-item.completed {
  background: #f7fafc;
  opacity: 0.8;
}

.todo-checkbox {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.todo-text {
  flex: 1;
  font-size: 1rem;
  cursor: pointer;
}

.todo-text.strikethrough {
  text-decoration: line-through;
  color: #a0aec0;
}

.edit-input {
  flex: 1;
  padding: 0.25rem 0.5rem;
  border: 1px solid #4299e1;
  border-radius: 3px;
  background: white;
}

.todo-actions {
  display: flex;
  gap: 0.25rem;
}

.btn-priority, .btn-remove {
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.btn-priority {
  background: transparent;
  color: #fbbf24;
}

.btn-priority.active {
  background: #fef3c7;
}

.btn-remove {
  background: transparent;
  color: #ef4444;
}

.btn-remove:hover {
  background: #fef2f2;
}

/* État vide */
.empty-state {
  text-align: center;
  padding: 3rem 1rem;
}

.empty-message {
  color: #a0aec0;
  font-size: 1.125rem;
  font-style: italic;
}

/* Actions globales */
.action-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.btn-toggle-all, .btn-clear-completed, .btn-clear-all {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.btn-toggle-all {
  background: #48bb78;
  color: white;
}

.btn-toggle-all:hover:not(:disabled) {
  background: #38a169;
}

.btn-clear-completed {
  background: #ed8936;
  color: white;
}

.btn-clear-completed:hover:not(:disabled) {
  background: #dd6b20;
}

.btn-clear-all {
  background: #e53e3e;
  color: white;
}

.btn-clear-all:hover:not(:disabled) {
  background: #c53030;
}

button:disabled {
  background: #e2e8f0 !important;
  color: #a0aec0 !important;
  cursor: not-allowed;
}

/* Barre de progression */
.progress-bar {
  width: 100%;
  height: 24px;
  background: #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin: 0.5rem 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #48bb78, #38a169);
  transition: width 0.5s ease;
  border-radius: 12px;
}

.progress-text {
  text-align: center;
  font-weight: 500;
  color: #4a5568;
  margin-top: 0.5rem;
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

/* Responsive */
@media (max-width: 768px) {
  .add-todo-form {
    flex-direction: column;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .filter-buttons {
    justify-content: center;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>