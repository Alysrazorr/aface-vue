import Aface from '@/aface.js'
import AvResponsiveColumn from './AvResponsiveColumn'

export default Vue => {
  Aface(Vue)
  Vue.component(AvResponsiveColumn.name, AvResponsiveColumn)
}
