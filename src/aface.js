const init = () => {
  let aface = {
    version: '0.0.1-beta',
    locale: {
      dateFormat: 'yyyy-MM-dd',
      datetimeFormat: 'yyyy-MM-dd hh:mm:ss',
      daysOfWeek: [ '周一', '周二', '周三', '周四', '周五', '周六', '周日' ],
      shorterDaysOfWeek: [ '一', '二', '三', '四', '五', '六', '日' ]
    }
  }
  return aface
}

export default Vue => {
  if (!Vue.aface) {
    Vue.aface = init()
    Vue.prototype.$aface = Vue.aface
  }
}
