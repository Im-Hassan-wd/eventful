import { createRouter, createWebHistory } from 'vue-router'
import Events from '../views/events/Events'
import Login from '../views/Login'
import Register from '../views/Register'
import CreateEvent from '../views/events/CreateEvent'
import Event from '../views/events/Event'
import EditEvent from '../views/events/EditEvent'

const routes = [
  {
    path: '/event',
    name: 'Events',
    component: Events,
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