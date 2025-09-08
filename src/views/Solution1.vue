<template>
  <div class="solution">
    <div class="header">
      <h1>💡 Solution 1 - Kata de base</h1>
      <router-link to="/exercice1" class="btn-back">Retour à l'exercice</router-link>
    </div>
    
    <div class="result">
      <h2>✅ Résultat final :</h2>
      <div class="demo">
        <input type="text" v-model="name">
        <p>{{ name }} - {{ age }}</p>
        <hr>
        <p>Âge × 3 = {{ age * 3 }}</p>
        <p>Nombre aléatoire: {{ randomNum() }}</p>
        <hr>
        <img :src="image" style="width:100px;height:100px" :alt="name">
      </div>
    </div>
    
    <div class="code-explanation">
      <h2>📚 Code expliqué :</h2>
      
      <div class="code-block">
        <h3>Template :</h3>
        <pre><code>&lt;template&gt;
  &lt;input type="text" v-model="name"&gt;
  &lt;p&gt;{{ name }} - {{ age }}&lt;/p&gt;
  &lt;p&gt;Âge × 3 = {{ age * 3 }}&lt;/p&gt;
  &lt;p&gt;Nombre aléatoire: {{ randomNum() }}&lt;/p&gt;
  &lt;img :src="image" :alt="name"&gt;
&lt;/template&gt;</code></pre>
      </div>
      
      <div class="code-block">
        <h3>Script :</h3>
        <pre><code>&lt;script setup lang="ts"&gt;
import { ref } from 'vue'

const name = ref('Jean Dupont')
const age = ref(25)
const image = ref('https://via.placeholder.com/100')

const randomNum = (): number =&gt; {
  return Math.random()
}
&lt;/script&gt;</code></pre>
      </div>
      
      <div class="explanations">
        <h3>🔍 Points clés :</h3>
        <ul>
          <li><strong>v-model :</strong> Liaison bidirectionnelle pour l'input</li>
          <li><strong>Interpolation :</strong> {{ }} pour afficher les données</li>
          <li><strong>ref() :</strong> Rend les variables réactives</li>
          <li><strong>:src :</strong> Raccourci pour v-bind:src</li>
          <li><strong>Fonction :</strong> randomNum() appelée dans le template</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Jean Dupont')
const age = ref(25)
const image = ref('https://via.placeholder.com/100x100/4CAF50/white?text=Vue3')

const randomNum = (): number => {
  return Math.random()
}
</script>

<style scoped>
.solution {
  max-width: 1000px;
  margin: 0 auto;
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
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
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

pre {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.875rem;
}

.explanations ul {
  list-style-type: none;
  padding: 0;
}

.explanations li {
  background: white;
  margin: 0.5rem 0;
  padding: 0.75rem;
  border-radius: 4px;
  border-left: 4px solid #667eea;
}
</style>