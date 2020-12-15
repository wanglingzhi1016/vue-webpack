// 引入vue
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';
import router from '@/router/index.js';

Vue.use(ElementUI);

// 创建vue实例
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})