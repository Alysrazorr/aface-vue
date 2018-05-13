import Aface from '@/core'
import AvRipple from './AvRipple'

export default Vue => {
  Aface(Vue)
  Vue.component(AvRipple.name, AvRipple)
}
