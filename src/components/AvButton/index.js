import Aface from '@/core'
import AvButton from './AvButton'
import AvButtonContained from './AvButtonContained'
import AvButtonOutlined from './AvButtonOutlined'
import AvButtonText from './AvButtonText'
import AvButtonToggle from './AvButtonToggle'

export default Vue => {
  Aface(Vue)
  Vue.component('av-button', AvButton)
  Vue.component('av-button-contained', AvButtonContained)
  Vue.component('av-button-outlined', AvButtonOutlined)
  Vue.component('av-button-text', AvButtonText)
  Vue.component('av-button-toggle', AvButtonToggle)
}
