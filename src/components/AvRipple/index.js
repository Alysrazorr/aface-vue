import Aface from '@/aface.js'
import AvRipple from './AvRipple'

export default Vue => {
  Aface(Vue)
  Vue.component(AvRipple.name, AvRipple)
}
