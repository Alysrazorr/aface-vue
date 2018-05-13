import Aface from '@/core'
import AvRipple from './AvRipple'
import AvRippleWave from './AvRippleWave'

export default Vue => {
  Aface(Vue)
  Vue.component('av-ripple', AvRipple)
  Vue.component('av-ripple-wave', AvRippleWave)
}
