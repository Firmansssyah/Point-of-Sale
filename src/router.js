import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Pelanggan from './components/Pelanggan'
import Kasir from './components/Kasir'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/Home' },
        { path: '/home', component: Home },
        { path: '/pelanggan', component: Pelanggan },
        { path: '/kasir', component: Kasir },
    ]
});
