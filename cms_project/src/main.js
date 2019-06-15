import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

// 引入全局样式
import './assets/css/global.css'
//引入Mint UI
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)

Vue.config.productionTip = false

// 给Vue的原型挂载 $axios属性
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://localhost:3000/api/';

// 全局组件 开始
import MyUl from './components/MyUl';
import MyLi from './components/MyLi';
import NavBar from './components/NavBar';

Vue.component(MyUl.name, MyUl);
Vue.component(MyLi.name, MyLi);
Vue.component(NavBar.name, NavBar);
// 全局组件 结束

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
