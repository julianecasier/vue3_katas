import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Exercice1 from '@/views/Exercice1.vue';
import Exercice2 from '@/views/Exercice2.vue';
import Exercice3 from '@/views/Exercice3.vue';
import Solution1 from '@/views/Solution1.vue';
import Solution2 from '@/views/Solution2.vue';
import Solution3 from '@/views/Solution3.vue';

// ❌ Sans alias - Moins lisible
// import Home from '../views/Home.vue'
// import Exercice1 from '../views/Exercice1.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/exercice1',
    name: 'Exercice1',
    component: Exercice1,
  },
  {
    path: '/exercice2',
    name: 'Exercice2',
    component: Exercice2,
  },
  {
    path: '/exercice3',
    name: 'Exercice3',
    component: Exercice3,
  },
  {
    path: '/solution1',
    name: 'Solution1',
    component: Solution1,
  },
  {
    path: '/solution2',
    name: 'Solution2',
    component: Solution2,
  },
  {
    path: '/solution3',
    name: 'Solution3',
    component: Solution3,
  },];

//   // 🔄 Import dynamique avec alias (pour le lazy loading)
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import('@/views/About.vue'),
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
