import Button from './Button/Button'
import Card from './Card/Card'
import Home from './Home/Home'

const routes = [
  { path: '/', name: '', component: Home },
  { path: '/button', name: 'button', component: Button },
  { path: '/card', name: 'card', component: Card }
]

export default {
  routes
}
