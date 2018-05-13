import Aface from '@/core'
import AvResponsiveContainer from './AvResponsiveContainer'

export default Vue => {
  Aface(Vue)
  Vue.component(AvResponsiveContainer.name, AvResponsiveContainer)
}
