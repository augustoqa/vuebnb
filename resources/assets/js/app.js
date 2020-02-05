import "core-js/fn/object/assign";
import Vue from 'vue';

import ListingPage from '../components/ListingPage.vue';
import router from './router';

var app = new Vue({
    el: '#app',
    render: h => h(ListingPage),
    router
});
