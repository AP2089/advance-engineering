import { createRouter, createWebHistory } from 'vue-router';
import OrdersList from '@/pages/OrdersList.vue';
import OrdersAdd from '@/pages/OrdersAdd.vue';
import Login from '@/pages/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: OrdersList
    },
    {
      name: 'Order',
      path: '/order',
      component: OrdersAdd
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isLogin = to.path.slice(1) === 'login';
  const userStore = localStorage.getItem('userStore');

  if (!isLogin && !userStore) {
    next({ name: 'Login' });    
  } else {
    next();
  }
});

export default router;
export * from 'vue-router';