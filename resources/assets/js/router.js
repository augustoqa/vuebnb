import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ListingPage from '../components/ListingPage';

export default new VueRouter({
    mode: 'history',
    routes: [
        // { path: '/', component: HomePage }, // doesn't exist yet!
        { path: '/listing/:listing', component: ListingPage },
    ]
});