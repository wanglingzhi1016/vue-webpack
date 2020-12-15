import Vue from 'vue';
import VueRouter from 'vue-router';
import PageOne from '@/pages/pageOne/index.vue'
import PageTwo from '@/pages/pageTwo/index.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '*',
            redirect: '/pageOne',
            component: PageOne
        },
        {
            path: '/pageOne',
            name: 'pageOne',
            component: PageOne
        },
        {
            path: '/pageTwo',
            name: 'pageTwo',
            component: PageTwo
        }
    ]
})
