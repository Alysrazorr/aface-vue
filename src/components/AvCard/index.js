import Aface from '@/core'
import AvCard from './AvCard'

export default Vue => {
  Aface(Vue)
  Vue.component('av-card', AvCard)
}
