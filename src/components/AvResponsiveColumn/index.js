import Aface from '@/core'
import AvResponsiveColumn from './AvResponsiveColumn'

export default Vue => {
  Aface(Vue)
  Vue.component(AvResponsiveColumn.name, AvResponsiveColumn)
}
