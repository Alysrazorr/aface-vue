import Aface from '@/aface.js'
import AvButton from './AvButton'

export default Vue => {
  Aface(Vue)
  Vue.component(AvButton.name, AvButton)
}
