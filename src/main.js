// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//引用全局css文件
import 'bootstrap-css-only/css/bootstrap.min.css';
import '../build/css/mdb.css';
import 'mavon-editor/dist/css/index.css';
import 'vue-datetime/dist/vue-datetime.css';

//全局引入vue
import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import Datetime from 'vue-datetime';
import InputTag from 'vue-input-tag';

//全局引入路由配置
import router from './router';
import Vue2TouchEvents from 'vue2-touch-events';
import LoadScript from 'vue-plugin-load-script';

//图片预览
import VueImageSwipe from 'vue-image-swipe';
import 'vue-image-swipe/dist/vue-image-swipe.css';
Vue.use(VueImageSwipe);

Vue.use(Vue2TouchEvents);
Vue.use(LoadScript);
Vue.use(mavonEditor);
Vue.use(Datetime);
Vue.component('input-tag', InputTag);

Vue.config.productionTip = false;

// //全局加载resource拦截器
// import './axios/';
// import Axios from 'axios';
// Vue.prototype.$http = Axios;

//引入需要渲染的视图组件
import App from './App';

//创建全局实例
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

Vue.use({
  vm
});
