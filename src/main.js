import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
// import moment from "moment";

// Router Setup
import router from "./routes/routes";

// Store Setup
import store from "./store/store";

// Ant Design
import Antd from "ant-design-vue"
import "ant-design-vue/dist/antd.css"

axios.defaults.baseURL = "http://localhost:5000";

// Vue.prototype.moment = moment;

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
