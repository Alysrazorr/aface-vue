import Aface from '@/aface.js'
import AvResponsiveContainer from './AvResponsiveContainer'

export default Vue => {
  Aface(Vue)
  Vue.component(AvResponsiveContainer.name, AvResponsiveContainer)
}
