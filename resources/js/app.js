import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import swal from 'sweetalert2';


// import VueGoodTablePlugin from 'vue-good-table';

// import the styles
// import 'vue-good-table/dist/vue-good-table.css'

// Vue.use(VueGoodTablePlugin);
import '~/plugins'
import '~/components'

Vue.config.productionTip = false

window.Fire = new Vue();
window.swal = swal;
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
