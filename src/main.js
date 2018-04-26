// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import carSelector from "../node_modules/c3-carselector/dist/carSelector.js";
import App from './App'
Vue.use(carSelector)

Vue.config.productionTip = false

// import C3Base from "../node_modules/c3-base/dist/c3base.js";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
