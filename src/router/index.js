import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Create from '../views/Create'
import Event from '../views/Event'

const routes = [
  {
    path: '/event',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/event/:id',
    name: 'Event',
    component: Event,
    props: true
  },
  // redirect
  {
    path: '/',
    redirect: '/event'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
})

export default router