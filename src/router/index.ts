import { createRouter, createWebHistory } from 'vue-router';

 const router = createRouter({
   history: createWebHistory(),
   routes: [
     // ✅ Sucre syntaxique : définition directe
     { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
     {
       path: '/exercice1a',
       name: 'Exercice1a',
       component: () => import('@/views/Exercice1A.vue'),
     },
     {
       path: '/exercice1b',
       name: 'Exercice1b',
       component: () => import('@/views/Exercice1B.vue'),
     },
     {
       path: '/exercice2',
       name: 'Exercice2',
       component: () => import('@/views/Exercice2.vue'),
     },
     {
       path: '/exercice3',
       name: 'Exercice3',
       component: () => import('@/views/Exercice3.vue'),
     },
     {
       path: '/solution1a',
       name: 'Solution1a',
       component: () => import('@/views/Solution1A.vue'),
     },
     {
       path: '/solution1b',
       name: 'Solution1b',
       component: () => import('@/views/Solution1B.vue'),
     },
     {
       path: '/solution2',
       name: 'Solution2',
       component: () => import('@/views/Solution2.vue'),
     },
     {
       path: '/solution3',
       name: 'Solution3',
       component: () => import('@/views/Solution3.vue'),
     },
   ],
 });


// ================================
// 🔧 SANS SUCRE SYNTAXIQUE (plus explicite)
// ================================
// export default router;

// import { createRouter, createWebHistory } from 'vue-router';
// import Home from '@/views/Home.vue';
// import Exercice1 from '@/views/Exercice1.vue';
// import Exercice2 from '@/views/Exercice2.vue';
// import Exercice3 from '@/views/Exercice3.vue';
// import Solution1 from '@/views/Solution1.vue';
// import Solution2 from '@/views/Solution2.vue';
// import Solution3 from '@/views/Solution3.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/exercice1',
//     name: 'Exercice1',
//     component: Exercice1,
//   },
//   {
//     path: '/exercice2',
//     name: 'Exercice2',
//     component: Exercice2,
//   },
//   {
//     path: '/exercice3',
//     name: 'Exercice3',
//     component: Exercice3,
//   },
//   {
//     path: '/solution1',
//     name: 'Solution1',
//     component: Solution1,
//   },
//   {
//     path: '/solution2',
//     name: 'Solution2',
//     component: Solution2,
//   },
//   {
//     path: '/solution3',
//     name: 'Solution3',
//     component: Solution3,
//   },
// ];

// //   // 🔄 Import dynamique avec alias (pour le lazy loading)
// //   {
// //     path: '/about',
// //     name: 'About',
// //     component: () => import('@/views/About.vue'),
// //   },
// // ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

export default router;
