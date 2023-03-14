import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/events/Home'
import Event from '../views/events/Event'
import CreateEvent from '../views/events/CreateEvent'
import EditEvent from '../views/events/EditEvent'
import Login from '../views/Login'
import Register from '../views/Register'

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
    path: '/create-event',
    name: 'CreateEvent',
    component: CreateEvent
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
  {
    path: '/edit-event/',
    name: 'EditEvent',
    component: EditEvent,
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