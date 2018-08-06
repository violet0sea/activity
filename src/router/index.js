import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
const Ranking = () => import(/* webpackChunkName: "ranking" */ '@/pages/Ranking')
const Rules = () => import(/* webpackChunkName: "rules" */ '@/pages/Rules')
const CoinsDetails = () => import(/* webpackChunkName: "coinsDetails" */ '@/pages/CoinsDetails')
const Prize = () => import(/* webpackChunkName: "prize" */ '@/pages/Prize')
Vue.use(Router)

export default new Router({
  routes: [{
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/ranking',
        name: 'Ranking',
        component: Ranking
    },
    {
        path: '/rules',
        name: 'Rules',
        component: Rules
    },
    {
        path: '/conisDetails',
        name: 'CoinsDetails',
        component: CoinsDetails
    },    
    {
        path: '/prize',
        name: 'Prize',
        component: Prize
    }]
})
