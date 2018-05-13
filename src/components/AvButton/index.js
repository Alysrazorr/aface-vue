import Aface from '@/aface.js'
import AvButton from './AvButton'
import AvContainedButton from './AvContainedButton'
import AvOutlinedButton from './AvOutlinedButton'
import AvTextButton from './AvTextButton'
import AvToggleButton from './AvToggleButton'

export default Vue => {
  Aface(Vue)
  Vue.component(AvButton.name, AvButton)
  Vue.component(AvContainedButton.name, AvContainedButton)
  Vue.component(AvOutlinedButton.name, AvOutlinedButton)
  Vue.component(AvTextButton.name, AvTextButton)
  Vue.component(AvToggleButton.name, AvToggleButton)
}
