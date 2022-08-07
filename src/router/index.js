import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/admin/dashboard.vue'
import Login from '../views/admin/login.vue'
import Cable from '../views/services/cable.vue'
import Bill from '../views/services/bill.vue'
import Transfer from '../views/services/transfer.vue'
import Airtime from '../views/services/airtime.vue'
import Data from '../views/services/data.vue'
import Settings from '../views/settings/admin-settings.vue'
import Broadcast from '../views/settings/broadcast.vue'
import Refer from '../views/refer/refer.vue'
import Refer_details from '../views/refer/refer_details.vue'
import Network from '../views/settings/network.vue'


const routes = [{
        path: '/admin/dashboard',
        name: 'TAPIT | Dashboard',
        component: Dashboard
    },
    {
        path: '/',
        name: 'TAPIT | Admin Login',
        component: Login
    },
    {
        path: '/service/cable',
        name: 'TAPIT | Cable Transaction',
        component: Cable
    },
    {
        path: '/service/bill',
        name: 'TAPIT | Bill Transaction',
        component: Bill
    },
    {
        path: '/service/Transfer',
        name: 'TAPIT | Transfer Transaction',
        component: Transfer
    },
    {
        path: '/service/airtime',
        name: 'TAPIT | Airtime Transaction',
        component: Airtime
    },
    {
        path: '/service/data',
        name: 'TAPIT | Data Transaction',
        component: Data
    },
    {
        path: '/settings/admin-settings',
        name: 'TAPIT | Admin Settings',
        component: Settings
    },
    {
        path: '/settings/broadcast',
        name: 'TAPIT | Broadcast',
        component: Broadcast
    },
    {
        path: '/refer/refer',
        name: 'TAPIT | Refer',
        component: Refer
    },
    {
        path: '/refer/refer_details/:username',
        name: 'TAPIT | Refer_details',
        component: Refer_details
    },
    {
        path: '/settings/network',
        name: 'TAPIT | Network',
        component:Network
    },
    

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})



router.beforeEach((to, from, next) => {

    document.title = `${ to.name}`
    next()


    // to and from are both route objects. must call `next`.
})



  
 
export default router