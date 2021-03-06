// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import axios from 'axios'
// import qs from 'qs'
import 'babel-polyfill'
import { sync } from 'vuex-router-sync'
import router from './router/index'
import store from './store'
import * as filters from './filters'
import mixins from './mixins'

import * as enkel from '../../enkel-ui/dist/enkel'
import locale from '../../enkel-ui/src/locale/lang/zh-CN'

Vue.use(enkel, {
  locale
})

Vue.config.productionTip = false

sync(store, router)

require('./directives/index')

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// register global mixins.
Vue.mixin(mixins)

router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(to => { })

Vue.prototype.errorHandler = (err, vm) => {
  console.log(err.message)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
