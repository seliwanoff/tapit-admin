import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/admin/dashboard.vue'
import Login from '../views/admin/login.vue'
import Cable from '../views/services/cable.vue'
import Bill from '../views/services/bill.vue'
import Transfer from '../views/services/transfer.vue'
import Airtime from '../views/services/airtime.vue'
import Data from '../views/services/data.vue'
import UserbyID from '../views/services/userbyid.vue'

import Deposit from '../views/services/fund-deposit.vue'
import UserTransaction from '../views/services/userdetailtransaction.vue'

import Settings from '../views/settings/admin-settings.vue'
import UpdatePassword from '../views/settings/password.vue'
import Verify from '../views/settings/verify.vue'
import Broadcast from '../views/settings/broadcast.vue'
import Refer from '../views/refer/refer.vue'
import Refer_details from '../views/refer/refer_details.vue'
import Network from '../views/settings/network.vue'
import Reset from '../views/forget/reset.vue'

import ResetPassword from '../views/forget/resetpassword.vue'
import Merchant from '../views/services/merchantupgrade.vue'


const routes = [{
        path: '/admin/dashboard',
        name: 'Tapit | Dashboard',
        component: Dashboard
    },
    {
        path: '/',
        name: 'Tapit | Admin Login',
        component: Login
    },
    {
        path: '/service/cable',
        name: 'Tapit | Cable Transaction',
        component: Cable
    },
    {
        path: '/service/bill',
        name: 'Tapit | Bill Transaction',
        component: Bill
    },
    {
        path: '/service/Transfer',
        name: 'Tapit | Transfer Transaction',
        component: Transfer
    },
    {
        path: '/service/airtime',
        name: 'Tapit | Airtime Transaction',
        component: Airtime
    },
    {
        path: '/service/data',
        name: 'Tapit | Data Transaction',
        component: Data
    },
    {
        path: '/service/fund-deposit',
        name: 'Tapit | Fund Deposit',
        component: Deposit 
    },
    {
        path: '/settings/admin-settings',
        name: 'Tapit | Admin Settings',
        component: Settings
    },
    {
        path: '/settings/password',
        name: 'Tapit | Reset Password',
        component: UpdatePassword
    },
    {
        path: '/settings/verify',
        name: 'Tapit | Verify',
        component: Verify
    },
    {
        path: '/settings/broadcast',
        name: 'Tapit | Broadcast',
        component: Broadcast
    },
    {
        path: '/refer/refer',
        name: 'Tapit | Refer',
        component: Refer
    },
    {
        path: '/refer/refer_details/:username',
        name: 'Tapit | Refer_details',
        component: Refer_details
    },
    {
        path: '/settings/network',
        name: 'Tapit | Network',
        component:Network
    },
     {
        path: '/forget/reset',
        name: 'Tapit | Forget Password',
        component: Reset
    },
    {
        path: '/forget/resetpassword',
        name: 'Tapit | Reset Password',
        component: ResetPassword
    },
    {
        path: '/settings/password',
        name: 'Tapit | Update Password',
        component: UpdatePassword
    },
    {
        path: '/service/merchantupgrade',
        name: 'Tapit | Merchant',
        component: Merchant
    },
    {
        path: '/service/userbyid/:id',
        name: 'Tapit | User Transaction',
        component: UserbyID
    },
    {
        path: '/userdetailtransaction/:id/:ref',
        name: 'Tapit | User Transaction Details',
        component: UserTransaction
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