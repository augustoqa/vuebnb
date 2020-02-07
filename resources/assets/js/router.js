import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/HomePage'
import ListingPage from '../components/ListingPage';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/listing/:listing', component: ListingPage, name: 'listing' },
    ]
});